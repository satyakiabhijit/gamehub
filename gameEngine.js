// Game Engine - Core functionality for managing games, time tracking, and UI
class GameEngine {
    constructor() {
        this.games = [];
        this.currentGame = null;
        this.gameTimer = null;
        this.startTime = null;
        this.totalPlayTime = this.loadTotalPlayTime();
        this.gamesPlayed = this.loadGamesPlayed();
        this.gameStats = this.loadGameStats();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateStats();
        this.loadGames();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.filterGames(e.target.value);
        });

        // Category filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                const category = e.target.getAttribute('data-category');
                this.filterByCategory(category);
            });
        });

        // Modal close functionality
        const closeModal = document.getElementById('closeModal');
        const gameModal = document.getElementById('gameModal');
        
        closeModal.addEventListener('click', () => {
            this.closeGame();
        });

        gameModal.addEventListener('click', (e) => {
            if (e.target === gameModal) {
                this.closeGame();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentGame) {
                this.closeGame();
            }
        });
    }

    loadGames() {
        // This will be populated by games.js
        this.renderGames();
    }

    renderGames() {
        const gamesGrid = document.getElementById('gamesGrid');
        gamesGrid.innerHTML = '';

        this.games.forEach(game => {
            const gameCard = this.createGameCard(game);
            gamesGrid.appendChild(gameCard);
        });
    }

    createGameCard(game) {
        const card = document.createElement('div');
        card.className = 'game-card fade-in';
        card.onclick = () => this.openGame(game);

        const difficultyClass = `difficulty-${game.difficulty}`;
        const playTime = this.gameStats[game.id] ? this.formatTime(this.gameStats[game.id].totalTime) : '0m';
        const playCount = this.gameStats[game.id] ? this.gameStats[game.id].plays : 0;

        card.innerHTML = `
            <div class="game-icon">
                <i class="${game.icon}"></i>
            </div>
            <div class="game-title">${game.title}</div>
            <div class="game-description">${game.description}</div>
            <div class="game-meta">
                <span class="game-category">${game.category}</span>
                <span class="game-difficulty ${difficultyClass}">${game.difficulty}</span>
            </div>
            <div class="game-meta" style="margin-top: 10px; font-size: 0.75rem;">
                <span>Played: ${playCount} times</span>
                <span>Time: ${playTime}</span>
            </div>
        `;

        return card;
    }

    openGame(game) {
        try {
            console.log(`Opening game: ${game.title}`);
            this.currentGame = game;
            this.startTime = Date.now();
            
            // Update modal
            document.getElementById('modalTitle').textContent = game.title;
            document.getElementById('gameModal').style.display = 'block';
            
            // Start game timer
            this.startGameTimer();
            
            // Load game content
            this.loadGameContent(game);
            
            // Track game play
            this.trackGamePlay(game.id);
        } catch (error) {
            console.error('Error opening game:', error);
            alert(`Error opening ${game.title}: ${error.message}`);
        }
    }

    loadGameContent(game) {
        const gameContainer = document.getElementById('gameContainer');
        gameContainer.innerHTML = '';
        
        try {
            // Call the game's initialization function
            if (typeof window[game.initFunction] === 'function') {
                console.log(`Loading game: ${game.title} with function: ${game.initFunction}`);
                window[game.initFunction](gameContainer);
            } else {
                console.warn(`Game function ${game.initFunction} not found for ${game.title}`);
                this.showGamePlaceholder(game, gameContainer);
            }
        } catch (error) {
            console.error(`Error loading game ${game.title}:`, error);
            this.showGameError(game, gameContainer, error);
        }
    }

    showGamePlaceholder(game, container) {
        container.innerHTML = `
            <div class="game-info" style="text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">
                    <i class="${game.icon}" style="color: #4CAF50;"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 15px;">${game.title}</h3>
                <p style="color: #666; margin-bottom: 20px;">${game.description}</p>
                <div style="background: #f5f5f5; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <p style="color: #888; font-style: italic;">This game is coming soon!</p>
                    <p style="color: #888; font-size: 0.9rem;">We're working hard to bring you this exciting game.</p>
                </div>
                <button onclick="gameEngine.closeGame()" style="
                    background: #4CAF50; 
                    color: white; 
                    border: none; 
                    padding: 12px 24px; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 16px;
                ">Back to Games</button>
            </div>
        `;
    }

    showGameError(game, container, error) {
        container.innerHTML = `
            <div class="game-info" style="text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 20px; color: #f44336;">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 15px;">${game.title}</h3>
                <p style="color: #666; margin-bottom: 20px;">Sorry, there was an error loading this game.</p>
                <div style="background: #fff3e0; border: 1px solid #ffcc02; border-radius: 8px; padding: 15px; margin: 20px 0;">
                    <p style="color: #e65100; font-size: 0.9rem;">Error: ${error.message}</p>
                </div>
                <button onclick="gameEngine.closeGame()" style="
                    background: #4CAF50; 
                    color: white; 
                    border: none; 
                    padding: 12px 24px; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 16px;
                ">Back to Games</button>
            </div>
        `;
    }

    closeGame() {
        if (this.currentGame && this.startTime) {
            const sessionTime = Date.now() - this.startTime;
            this.updateGameStats(this.currentGame.id, sessionTime);
            this.updateTotalPlayTime(sessionTime);
        }

        this.currentGame = null;
        this.startTime = null;
        this.stopGameTimer();
        
        document.getElementById('gameModal').style.display = 'none';
        document.getElementById('gameContainer').innerHTML = '';
        
        this.updateStats();
        this.renderGames(); // Re-render to update play statistics
    }

    startGameTimer() {
        let seconds = 0;
        this.gameTimer = setInterval(() => {
            seconds++;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            document.getElementById('gameTimer').textContent = 
                `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopGameTimer() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
        document.getElementById('gameTimer').textContent = '00:00';
    }

    filterGames(searchTerm) {
        const filteredGames = this.games.filter(game => 
            game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            game.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.renderFilteredGames(filteredGames);
    }

    filterByCategory(category) {
        if (category === 'all') {
            this.renderGames();
        } else {
            const filteredGames = this.games.filter(game => 
                game.category.toLowerCase() === category.toLowerCase()
            );
            this.renderFilteredGames(filteredGames);
        }
    }

    renderFilteredGames(games) {
        const gamesGrid = document.getElementById('gamesGrid');
        gamesGrid.innerHTML = '';

        games.forEach(game => {
            const gameCard = this.createGameCard(game);
            gamesGrid.appendChild(gameCard);
        });

        // Add a message if no games found
        if (games.length === 0) {
            gamesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>No games found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
        }
    }

    trackGamePlay(gameId) {
        if (!this.gameStats[gameId]) {
            this.gameStats[gameId] = {
                plays: 0,
                totalTime: 0,
                bestScore: 0
            };
        }
        
        this.gameStats[gameId].plays++;
        this.gamesPlayed = Object.keys(this.gameStats).length;
        
        this.saveGameStats();
        this.saveGamesPlayed();
    }

    updateGameStats(gameId, sessionTime) {
        if (this.gameStats[gameId]) {
            this.gameStats[gameId].totalTime += sessionTime;
            this.saveGameStats();
        }
    }

    updateTotalPlayTime(sessionTime) {
        this.totalPlayTime += sessionTime;
        this.saveTotalPlayTime();
    }

    updateStats() {
        document.getElementById('totalTime').textContent = this.formatTime(this.totalPlayTime);
        document.getElementById('gamesPlayed').textContent = this.gamesPlayed;
        document.getElementById('totalPlayTime').textContent = this.formatTimeShort(this.totalPlayTime);
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return `${totalSeconds}s`;
        }
    }

    formatTimeShort(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        
        if (hours > 0) {
            return `${hours}h`;
        } else {
            const minutes = Math.floor(totalSeconds / 60);
            return `${minutes}m`;
        }
    }

    // Local Storage Functions
    saveGameStats() {
        localStorage.setItem('gameHub_gameStats', JSON.stringify(this.gameStats));
    }

    loadGameStats() {
        const stats = localStorage.getItem('gameHub_gameStats');
        return stats ? JSON.parse(stats) : {};
    }

    saveTotalPlayTime() {
        localStorage.setItem('gameHub_totalPlayTime', this.totalPlayTime.toString());
    }

    loadTotalPlayTime() {
        const time = localStorage.getItem('gameHub_totalPlayTime');
        return time ? parseInt(time) : 0;
    }

    saveGamesPlayed() {
        localStorage.setItem('gameHub_gamesPlayed', this.gamesPlayed.toString());
    }

    loadGamesPlayed() {
        const played = localStorage.getItem('gameHub_gamesPlayed');
        return played ? parseInt(played) : 0;
    }

    // Utility function for games
    createCanvas(width, height, className = 'game-canvas') {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.className = className;
        return canvas;
    }

    // Game utility functions
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    static createElement(tag, className, content = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.innerHTML = content;
        return element;
    }

    // Score management
    updateScore(gameId, score) {
        if (!this.gameStats[gameId]) {
            this.gameStats[gameId] = {
                plays: 0,
                totalTime: 0,
                bestScore: 0
            };
        }
        
        if (score > this.gameStats[gameId].bestScore) {
            this.gameStats[gameId].bestScore = score;
            this.saveGameStats();
            return true; // New high score
        }
        return false;
    }

    getHighScore(gameId) {
        return this.gameStats[gameId] ? this.gameStats[gameId].bestScore : 0;
    }
}

// Initialize the game engine when the page loads
let gameEngine;
document.addEventListener('DOMContentLoaded', () => {
    gameEngine = new GameEngine();
    window.gameEngine = gameEngine; // Make sure it's available globally
    console.log('🎮 GameEngine initialized successfully!');
    
    // Trigger games loading event
    window.dispatchEvent(new CustomEvent('gameEngineReady'));
});

// Export for use in other files
window.GameEngine = GameEngine;