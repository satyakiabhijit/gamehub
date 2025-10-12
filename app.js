// Main Application Script - Connects everything together
// This file initializes the complete gaming experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Add loading animations
    addLoadingEffects();
    
    // Setup performance monitoring
    setupPerformanceMonitoring();
    
    // Add theme support
    setupThemeSupport();
    
    // Add mobile optimizations
    setupMobileOptimizations();
});

function initializeApp() {
    console.log('🎮 GameHub initializing...');
    
    // Add welcome message
    showWelcomeMessage();
    
    // Initialize stats update interval
    startStatsUpdateLoop();
    
    // Add scroll effects
    setupScrollEffects();
    
    // Initialize tooltips
    setupTooltips();
    
    // Add keyboard shortcuts
    setupKeyboardShortcuts();
    
    console.log('✅ GameHub ready!');
}

function showWelcomeMessage() {
    // Check if first visit
    const hasVisited = localStorage.getItem('gameHub_hasVisited');
    
    if (!hasVisited) {
        setTimeout(() => {
            const welcomeModal = createWelcomeModal();
            document.body.appendChild(welcomeModal);
            welcomeModal.style.display = 'block';
            
            localStorage.setItem('gameHub_hasVisited', 'true');
        }, 1000);
    }
}

function createWelcomeModal() {
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.style.display = 'none';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3>🎮 Welcome to GameHub!</h3>
                <button class="close-btn" onclick="this.closest('.game-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; padding: 1rem;">
                    <h4>🌟 Your Ultimate Gaming Destination</h4>
                    <p><strong>100+ Free Web Games</strong> at your fingertips!</p>
                    
                    <div style="margin: 1.5rem 0;">
                        <h5>✨ Features:</h5>
                        <ul style="text-align: left; display: inline-block;">
                            <li>🎯 No login required</li>
                            <li>⏱️ Automatic time tracking</li>
                            <li>🏆 High score saving</li>
                            <li>📱 Mobile friendly</li>
                            <li>🔍 Smart search & filters</li>
                            <li>🎨 Beautiful design</li>
                        </ul>
                    </div>
                    
                    <div style="margin: 1.5rem 0;">
                        <h5>🎮 Game Categories:</h5>
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-top: 1rem;">
                            <span class="game-category">Puzzle</span>
                            <span class="game-category">Arcade</span>
                            <span class="game-category">Strategy</span>
                            <span class="game-category">Casual</span>
                            <span class="game-category">Logic</span>
                            <span class="game-category">Math</span>
                            <span class="game-category">Word</span>
                            <span class="game-category">Card</span>
                        </div>
                    </div>
                    
                    <p style="margin-top: 1.5rem;">
                        <strong>Ready to start your gaming adventure?</strong><br>
                        Click any game below to begin!
                    </p>
                    
                    <button class="game-btn" onclick="this.closest('.game-modal').remove()" style="margin-top: 1rem;">
                        Let's Play! 🚀
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

function startStatsUpdateLoop() {
    // Update stats every 10 seconds
    setInterval(() => {
        if (window.gameEngine) {
            updateGameStatistics();
            updateLiveStats();
        }
    }, 10000);
}

function updateGameStatistics() {
    // Calculate total games available
    const totalGames = gameEngine.games.length;
    document.querySelector('.hero .stat-number').textContent = `${totalGames}+`;
    
    // Update other statistics
    updatePlayTimeDisplay();
    updatePopularGames();
}

function updateLiveStats() {
    // Animate numbers when they change
    const elements = document.querySelectorAll('.stat-number');
    elements.forEach(el => {
        el.classList.add('bounce');
        setTimeout(() => el.classList.remove('bounce'), 1000);
    });
}

function updatePlayTimeDisplay() {
    const totalTime = gameEngine.totalPlayTime;
    const hours = Math.floor(totalTime / (1000 * 60 * 60));
    const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('totalPlayTime').textContent = hours > 0 ? `${hours}h` : `${minutes}m`;
}

function updatePopularGames() {
    // Sort games by play count and highlight popular ones
    if (!gameEngine.games || !gameEngine.gameStats) return;
    
    const popularGames = Object.entries(gameEngine.gameStats)
        .sort(([,a], [,b]) => b.plays - a.plays)
        .slice(0, 3);
    
    // Add popular badges to top games
    popularGames.forEach(([gameId, stats], index) => {
        const gameCard = document.querySelector(`[onclick*="${gameId}"]`);
        if (gameCard && !gameCard.querySelector('.popular-badge')) {
            const badge = document.createElement('div');
            badge.className = 'popular-badge';
            badge.innerHTML = ['🥇', '🥈', '🥉'][index];
            badge.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: linear-gradient(45deg, #ff6b6b, #ffa500);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                font-weight: bold;
                z-index: 10;
            `;
            gameCard.style.position = 'relative';
            gameCard.appendChild(badge);
        }
    });
}

function addLoadingEffects() {
    // Add fade-in effect to game cards as they load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Observe game cards when they're added
    const gameGrid = document.getElementById('gamesGrid');
    const observeCards = () => {
        const cards = gameGrid.querySelectorAll('.game-card:not(.fade-in)');
        cards.forEach(card => observer.observe(card));
    };
    
    // Check every second for new cards
    setInterval(observeCards, 1000);
}

function setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Update header opacity
        const header = document.querySelector('.header');
        if (header) {
            const opacity = Math.min(1, scrolled / 100);
            header.style.background = `rgba(255, 255, 255, ${0.95 + opacity * 0.05})`;
        }
    });
}

function setupTooltips() {
    // Add tooltips to game cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.game-card')) {
            const card = e.target.closest('.game-card');
            if (!card.hasTooltip) {
                addTooltip(card);
                card.hasTooltip = true;
            }
        }
    });
}

function addTooltip(card) {
    const gameTitle = card.querySelector('.game-title').textContent;
    const gameDescription = card.querySelector('.game-description').textContent;
    const gameId = card.onclick.toString().match(/'([^']+)'/)?.[1];
    
    if (!gameId) return;
    
    const stats = gameEngine.gameStats[gameId];
    const plays = stats ? stats.plays : 0;
    const totalTime = stats ? gameEngine.formatTime(stats.totalTime) : '0m';
    const bestScore = stats ? stats.bestScore : 0;
    
    card.title = `${gameTitle}\n${gameDescription}\n\nStats:\n• Played: ${plays} times\n• Total time: ${totalTime}\n• Best score: ${bestScore}`;
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't interfere with game controls
        if (document.getElementById('gameModal').style.display === 'block') return;
        
        switch(e.key) {
            case '/':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
            case 'Escape':
                document.getElementById('searchInput').blur();
                document.getElementById('searchInput').value = '';
                if (gameEngine) gameEngine.renderGames();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (e.ctrlKey) {
                    e.preventDefault();
                    const categories = ['all', 'puzzle', 'arcade', 'strategy', 'casual', 'logic', 'card', 'math', 'word'];
                    const categoryIndex = parseInt(e.key) - 1;
                    if (categories[categoryIndex]) {
                        filterByKeyboard(categories[categoryIndex]);
                    }
                }
                break;
        }
    });
}

function filterByKeyboard(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    // Apply filter
    if (gameEngine) {
        gameEngine.filterByCategory(category);
    }
}

function setupPerformanceMonitoring() {
    // Monitor performance and optimize
    let frameCount = 0;
    let lastTime = performance.now();
    
    function monitorFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            // Optimize if FPS is low
            if (fps < 30) {
                optimizePerformance();
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(monitorFPS);
    }
    
    requestAnimationFrame(monitorFPS);
}

function optimizePerformance() {
    // Reduce animations if performance is poor
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
        }
        .game-card {
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('🔧 Performance optimization applied');
}

function setupThemeSupport() {
    // Add theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);
    
    // Load saved theme
    const savedTheme = localStorage.getItem('gameHub_theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (isDark) {
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('gameHub_theme', 'light');
    } else {
        applyDarkTheme();
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('gameHub_theme', 'dark');
    }
}

function applyDarkTheme() {
    document.body.classList.add('dark-theme');
    
    // Add dark theme styles
    if (!document.getElementById('dark-theme-styles')) {
        const darkStyles = document.createElement('style');
        darkStyles.id = 'dark-theme-styles';
        darkStyles.textContent = `
            .dark-theme {
                background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
            }
            .dark-theme .header {
                background: rgba(44, 62, 80, 0.95) !important;
                color: white;
            }
            .dark-theme .logo h1 {
                background: linear-gradient(45deg, #3498db, #9b59b6);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .dark-theme .categories {
                background: rgba(44, 62, 80, 0.95) !important;
                color: white;
            }
            .dark-theme .games-section {
                background: rgba(44, 62, 80, 0.1) !important;
            }
            .dark-theme .game-card {
                background: rgba(52, 73, 94, 0.9) !important;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .dark-theme .footer {
                background: rgba(44, 62, 80, 0.95) !important;
                color: white;
            }
        `;
        document.head.appendChild(darkStyles);
    }
}

function setupMobileOptimizations() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile-specific optimizations
        document.body.classList.add('mobile-device');
        
        // Optimize touch interactions
        setupTouchOptimizations();
        
        // Add mobile styles
        addMobileStyles();
        
        // Optimize game controls for touch
        optimizeGameControlsForTouch();
    }
}

function setupTouchOptimizations() {
    // Improve touch responsiveness
    document.addEventListener('touchstart', (e) => {
        e.target.classList.add('touch-active');
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        setTimeout(() => {
            e.target.classList.remove('touch-active');
        }, 150);
    }, { passive: true });
}

function addMobileStyles() {
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        .mobile-device .game-card {
            min-height: 120px;
        }
        .mobile-device .game-card.touch-active {
            transform: scale(0.95);
            background: #f0f0f0;
        }
        .mobile-device .game-controls {
            flex-wrap: wrap;
            gap: 10px;
        }
        .mobile-device .game-btn {
            min-width: 80px;
            padding: 12px 16px;
        }
    `;
    document.head.appendChild(mobileStyles);
}

function optimizeGameControlsForTouch() {
    // Add virtual D-pad for mobile games
    document.addEventListener('gameStarted', (e) => {
        if (e.detail.gameId === 'snake' || e.detail.gameId === 'pacman') {
            addVirtualDPad();
        }
    });
}

function addVirtualDPad() {
    const dpad = document.createElement('div');
    dpad.className = 'virtual-dpad';
    dpad.innerHTML = `
        <button class="dpad-btn dpad-up" data-key="ArrowUp">↑</button>
        <button class="dpad-btn dpad-left" data-key="ArrowLeft">←</button>
        <button class="dpad-btn dpad-right" data-key="ArrowRight">→</button>
        <button class="dpad-btn dpad-down" data-key="ArrowDown">↓</button>
    `;
    
    dpad.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 120px;
        height: 120px;
        z-index: 1000;
        display: grid;
        grid-template-areas: 
            ". up ."
            "left . right"
            ". down .";
        gap: 5px;
    `;
    
    // Add button styles and event listeners
    dpad.querySelectorAll('.dpad-btn').forEach(btn => {
        btn.style.cssText = `
            background: rgba(102, 126, 234, 0.8);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const key = btn.getAttribute('data-key');
            document.dispatchEvent(new KeyboardEvent('keydown', { key }));
        });
    });
    
    // Position buttons
    dpad.querySelector('.dpad-up').style.gridArea = 'up';
    dpad.querySelector('.dpad-left').style.gridArea = 'left';
    dpad.querySelector('.dpad-right').style.gridArea = 'right';
    dpad.querySelector('.dpad-down').style.gridArea = 'down';
    
    document.body.appendChild(dpad);
    
    // Remove when game ends
    const gameModal = document.getElementById('gameModal');
    const observer = new MutationObserver(() => {
        if (gameModal.style.display === 'none') {
            dpad.remove();
            observer.disconnect();
        }
    });
    observer.observe(gameModal, { attributes: true, attributeFilter: ['style'] });
}

// Enhanced search functionality
function enhanceSearchExperience() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase();
            performAdvancedSearch(query);
        }, 300);
    });
    
    // Add search suggestions
    addSearchSuggestions();
}

function performAdvancedSearch(query) {
    if (!gameEngine || !query) {
        gameEngine.renderGames();
        return;
    }
    
    const results = gameEngine.games.filter(game => {
        // Search in multiple fields with different weights
        const titleMatch = game.title.toLowerCase().includes(query) ? 3 : 0;
        const categoryMatch = game.category.toLowerCase().includes(query) ? 2 : 0;
        const descriptionMatch = game.description.toLowerCase().includes(query) ? 1 : 0;
        const difficultyMatch = game.difficulty.toLowerCase().includes(query) ? 1 : 0;
        
        return titleMatch + categoryMatch + descriptionMatch + difficultyMatch > 0;
    });
    
    gameEngine.renderFilteredGames(results);
    
    // Show search results count
    showSearchResults(results.length, query);
}

function addSearchSuggestions() {
    const searchContainer = document.querySelector('.search-container');
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-top: none;
        border-radius: 0 0 10px 10px;
        max-height: 200px;
        overflow-y: auto;
        z-index: 100;
        display: none;
    `;
    
    searchContainer.appendChild(suggestions);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('focus', () => {
        if (searchInput.value) {
            showSuggestions(searchInput.value);
        }
    });
    
    searchInput.addEventListener('blur', () => {
        setTimeout(() => suggestions.style.display = 'none', 200);
    });
}

function showSuggestions(query) {
    const suggestions = document.querySelector('.search-suggestions');
    if (!gameEngine || !query) {
        suggestions.style.display = 'none';
        return;
    }
    
    const matches = gameEngine.games
        .filter(game => game.title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
    
    if (matches.length === 0) {
        suggestions.style.display = 'none';
        return;
    }
    
    suggestions.innerHTML = matches
        .map(game => `
            <div class="suggestion-item" onclick="selectSuggestion('${game.title}')" 
                 style="padding: 10px; cursor: pointer; border-bottom: 1px solid #f0f0f0;">
                <i class="${game.icon}" style="margin-right: 10px;"></i>
                ${game.title}
                <span style="color: #666; font-size: 0.9em; margin-left: 10px;">${game.category}</span>
            </div>
        `)
        .join('');
    
    suggestions.style.display = 'block';
}

function selectSuggestion(title) {
    document.getElementById('searchInput').value = title;
    document.querySelector('.search-suggestions').style.display = 'none';
    performAdvancedSearch(title);
}

function showSearchResults(count, query) {
    const gamesGrid = document.getElementById('gamesGrid');
    const existingMessage = gamesGrid.querySelector('.search-results-message');
    
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (query) {
        const message = document.createElement('div');
        message.className = 'search-results-message';
        message.style.cssText = `
            grid-column: 1 / -1;
            text-align: center;
            padding: 1rem;
            background: rgba(102, 126, 234, 0.1);
            border-radius: 10px;
            margin-bottom: 1rem;
        `;
        message.innerHTML = `
            <h4>Search Results</h4>
            <p>Found ${count} games matching "${query}"</p>
        `;
        
        gamesGrid.insertBefore(message, gamesGrid.firstChild);
    }
}

// Initialize enhanced features when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        enhanceSearchExperience();
        
        // Dispatch custom event when GameHub is fully loaded
        document.dispatchEvent(new CustomEvent('gameHubReady', {
            detail: {
                version: '1.0.0',
                totalGames: GAMES_DATA.length,
                features: ['timeTracking', 'search', 'filters', 'highScores']
            }
        }));
    }, 500);
});

// Service Worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('🔧 Service Worker registered successfully');
                // If there's an update found, skip waiting so new SW activates
                if (reg.waiting) {
                    reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
                reg.addEventListener('updatefound', () => {
                    const nw = reg.installing;
                    if (!nw) return;
                    nw.addEventListener('statechange', () => {
                        if (nw.state === 'installed' && reg.waiting) {
                            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                });

                // Reload once when the new SW takes control
                let refreshing = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (refreshing) return;
                    refreshing = true;
                    window.location.reload();
                });
            })
            .catch(() => {
                console.log('🔧 Service Worker registration failed');
            });
    });
}

// Analytics and usage tracking (privacy-friendly)
function trackGameUsage(gameId, action) {
    const usage = JSON.parse(localStorage.getItem('gameHub_usage') || '{}');
    const today = new Date().toDateString();
    
    if (!usage[today]) {
        usage[today] = {};
    }
    
    if (!usage[today][gameId]) {
        usage[today][gameId] = { plays: 0, timeSpent: 0 };
    }
    
    if (action === 'play') {
        usage[today][gameId].plays++;
    } else if (action === 'time' && arguments[2]) {
        usage[today][gameId].timeSpent += arguments[2];
    }
    
    localStorage.setItem('gameHub_usage', JSON.stringify(usage));
}

// Export utility functions
window.gameHubUtils = {
    trackGameUsage,
    enhanceSearchExperience,
    setupMobileOptimizations,
    toggleTheme,
    updateGameStatistics
};

console.log('🎮 GameHub App initialized successfully!');