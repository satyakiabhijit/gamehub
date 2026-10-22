// Orbit Dash — an original, responsive reflex game for GameHub.
(function () {
    'use strict';

    const gameDefinition = {
        id: 'orbit-dash',
        title: 'Orbit Dash',
        description: 'Dodge falling energy orbs, survive as long as you can, and chase your best score.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-meteor',
        initFunction: 'initOrbitDash'
    };

    // games.js has already declared GAMES_DATA when this file is loaded.
    if (Array.isArray(window.GAMES_DATA) && !window.GAMES_DATA.some(game => game.id === gameDefinition.id)) {
        window.GAMES_DATA.push(gameDefinition);
    } else if (typeof GAMES_DATA !== 'undefined' && !GAMES_DATA.some(game => game.id === gameDefinition.id)) {
        GAMES_DATA.push(gameDefinition);
    }

    let game = null;

    window.initOrbitDash = function initOrbitDash(container) {
        container.innerHTML = `
            <section class="orbit-dash" aria-label="Orbit Dash game">
                <div class="orbit-dash__intro">
                    <h3>☄️ Orbit Dash</h3>
                    <p>Move left and right to dodge the energy orbs. Every orb that passes adds a point.</p>
                </div>
                <div class="orbit-dash__stats" aria-live="polite">
                    <span>Score <strong id="od-score">0</strong></span>
                    <span>Best <strong id="od-best">${gameEngine.getHighScore('orbit-dash')}</strong></span>
                    <span>Time <strong id="od-time">0s</strong></span>
                </div>
                <canvas id="od-canvas" width="420" height="460" aria-label="Game field. Use arrow keys, A and D, or the buttons below to move."></canvas>
                <p id="od-status" class="orbit-dash__status" aria-live="polite">Ready when you are.</p>
                <div class="orbit-dash__controls">
                    <button type="button" class="game-btn" id="od-left" aria-label="Move left">← Left</button>
                    <button type="button" class="game-btn" id="od-start">Start game</button>
                    <button type="button" class="game-btn" id="od-right" aria-label="Move right">Right →</button>
                    <button type="button" class="game-btn" id="od-restart">Restart</button>
                </div>
                <p class="orbit-dash__hint">Keyboard: ← → or A / D · Mobile: tap the left/right buttons</p>
            </section>
        `;

        const canvas = container.querySelector('#od-canvas');
        const ctx = canvas.getContext('2d');
        const scoreEl = container.querySelector('#od-score');
        const bestEl = container.querySelector('#od-best');
        const timeEl = container.querySelector('#od-time');
        const statusEl = container.querySelector('#od-status');
        const startBtn = container.querySelector('#od-start');
        const restartBtn = container.querySelector('#od-restart');
        const leftBtn = container.querySelector('#od-left');
        const rightBtn = container.querySelector('#od-right');

        game = {
            canvas, ctx, score: 0, elapsed: 0, playerX: canvas.width / 2,
            playerY: canvas.height - 48, obstacles: [], lastFrame: 0,
            spawnElapsed: 0, running: false, over: false, raf: 0,
            keys: { left: false, right: false }, touchDirection: 0
        };

        function draw() {
            if (!game || !game.ctx) return;
            const g = game;
            const c = g.ctx;
            c.clearRect(0, 0, g.canvas.width, g.canvas.height);
            const bg = c.createLinearGradient(0, 0, 0, g.canvas.height);
            bg.addColorStop(0, '#101a3b');
            bg.addColorStop(1, '#211044');
            c.fillStyle = bg;
            c.fillRect(0, 0, g.canvas.width, g.canvas.height);

            c.strokeStyle = 'rgba(160,190,255,.12)';
            c.lineWidth = 1;
            for (let x = 20; x < g.canvas.width; x += 40) {
                c.beginPath(); c.moveTo(x, 0); c.lineTo(x, g.canvas.height); c.stroke();
            }
            for (let y = 20; y < g.canvas.height; y += 40) {
                c.beginPath(); c.moveTo(0, y); c.lineTo(g.canvas.width, y); c.stroke();
            }

            g.obstacles.forEach(o => {
                c.save();
                c.shadowColor = '#ff4d9d';
                c.shadowBlur = 15;
                c.fillStyle = '#ff4d9d';
                c.beginPath(); c.arc(o.x, o.y, o.r, 0, Math.PI * 2); c.fill();
                c.shadowBlur = 0;
                c.fillStyle = '#ffd7e8';
                c.beginPath(); c.arc(o.x - o.r * .28, o.y - o.r * .28, Math.max(2, o.r * .22), 0, Math.PI * 2); c.fill();
                c.restore();
            });

            c.save();
            c.shadowColor = '#55f3ff';
            c.shadowBlur = 18;
            c.fillStyle = '#55f3ff';
            c.beginPath();
            c.moveTo(g.playerX, g.playerY - 18);
            c.lineTo(g.playerX - 15, g.playerY + 13);
            c.lineTo(g.playerX, g.playerY + 7);
            c.lineTo(g.playerX + 15, g.playerY + 13);
            c.closePath(); c.fill();
            c.restore();

            if (!g.running) {
                c.fillStyle = 'rgba(7,10,28,.58)';
                c.fillRect(0, 0, g.canvas.width, g.canvas.height);
                c.textAlign = 'center';
                c.fillStyle = '#fff';
                c.font = '700 25px Poppins, sans-serif';
                c.fillText(g.over ? 'RUN OVER' : 'READY?', g.canvas.width / 2, g.canvas.height / 2 - 8);
                c.font = '14px Poppins, sans-serif';
                c.fillStyle = '#dbe4ff';
                c.fillText(g.over ? 'Press Restart to try again' : 'Press Start to begin', g.canvas.width / 2, g.canvas.height / 2 + 22);
            }
        }

        function updateStats() {
            scoreEl.textContent = String(game.score);
            timeEl.textContent = Math.floor(game.elapsed) + 's';
            bestEl.textContent = String(gameEngine.getHighScore('orbit-dash'));
        }

        function finish() {
            game.running = false;
            game.over = true;
            cancelAnimationFrame(game.raf);
            const newBest = gameEngine.updateScore('orbit-dash', game.score);
            statusEl.textContent = 'Game over! Score: ' + game.score + (newBest ? ' — new personal best!' : '. Try again!');
            startBtn.textContent = 'Play again';
            draw();
            updateStats();
        }

        function frame(now) {
            if (!game || !game.running) return;
            const dt = Math.min((now - (game.lastFrame || now)) / 1000, 0.04);
            game.lastFrame = now;
            game.elapsed += dt;
            game.spawnElapsed += dt;
            const speed = 150 + Math.min(game.elapsed * 5, 160);
            const direction = (game.keys.right || game.touchDirection === 1 ? 1 : 0) - (game.keys.left || game.touchDirection === -1 ? 1 : 0);
            game.playerX = Math.max(18, Math.min(game.canvas.width - 18, game.playerX + direction * 270 * dt));

            const spawnEvery = Math.max(.32, .82 - game.elapsed * .008);
            if (game.spawnElapsed >= spawnEvery) {
                game.spawnElapsed = 0;
                const radius = 9 + Math.random() * 7;
                game.obstacles.push({ x: radius + Math.random() * (game.canvas.width - radius * 2), y: -radius, r: radius, speed: speed * (.72 + Math.random() * .5), scored: false });
            }

            for (const orb of game.obstacles) {
                orb.y += orb.speed * dt;
                if (!orb.scored && orb.y - orb.r > game.playerY) {
                    orb.scored = true;
                    game.score += 1;
                }
                const dx = orb.x - game.playerX;
                const dy = orb.y - game.playerY;
                if (Math.hypot(dx, dy) < orb.r + 12) {
                    finish();
                    return;
                }
            }
            game.obstacles = game.obstacles.filter(o => o.y - o.r < game.canvas.height + 5);
            updateStats();
            draw();
            game.raf = requestAnimationFrame(frame);
        }

        function start() {
            if (game.running) return;
            if (game.over) reset();
            game.running = true;
            game.over = false;
            game.lastFrame = 0;
            startBtn.textContent = 'Playing…';
            statusEl.textContent = 'Dodge the orbs!';
            game.raf = requestAnimationFrame(frame);
            draw();
        }

        function reset() {
            cancelAnimationFrame(game.raf);
            game.score = 0;
            game.elapsed = 0;
            game.playerX = game.canvas.width / 2;
            game.obstacles = [];
            game.spawnElapsed = 0;
            game.lastFrame = 0;
            game.running = false;
            game.over = false;
            game.keys.left = false;
            game.keys.right = false;
            game.touchDirection = 0;
            startBtn.textContent = 'Start game';
            statusEl.textContent = 'Ready when you are.';
            updateStats();
            draw();
        }

        function onKeyDown(event) {
            if (!game || !container.isConnected) return;
            if (['ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D'].includes(event.key)) event.preventDefault();
            if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') game.keys.left = true;
            if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') game.keys.right = true;
        }
        function onKeyUp(event) {
            if (!game) return;
            if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') game.keys.left = false;
            if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') game.keys.right = false;
        }

        function hold(button, direction) {
            const down = event => { event.preventDefault(); game.touchDirection = direction; };
            const up = () => { if (game.touchDirection === direction) game.touchDirection = 0; };
            button.addEventListener('pointerdown', down);
            button.addEventListener('pointerup', up);
            button.addEventListener('pointercancel', up);
            button.addEventListener('pointerleave', up);
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        startBtn.addEventListener('click', start);
        restartBtn.addEventListener('click', reset);
        hold(leftBtn, -1);
        hold(rightBtn, 1);

        // Release input and animation work when the modal/game is closed.
        const observer = new MutationObserver(() => {
            if (!container.isConnected || !document.getElementById('gameModal')?.contains(container)) {
                cancelAnimationFrame(game.raf);
                document.removeEventListener('keydown', onKeyDown);
                document.removeEventListener('keyup', onKeyUp);
                observer.disconnect();
                game = null;
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        reset();
    };

    const style = document.createElement('style');
    style.textContent = `
        .orbit-dash { width: 100%; max-width: 520px; margin: 0 auto; color: #202544; }
        .orbit-dash__intro { text-align: center; margin-bottom: 12px; }
        .orbit-dash__intro h3 { margin: 0 0 6px; font-size: 1.45rem; }
        .orbit-dash__intro p, .orbit-dash__hint { font-size: .9rem; line-height: 1.5; color: #626a82; margin: 6px 0; }
        .orbit-dash__stats { display: flex; justify-content: space-around; gap: 8px; margin: 12px 0; flex-wrap: wrap; }
        .orbit-dash__stats span { background: #f0f2ff; border-radius: 10px; padding: 8px 12px; font-size: .9rem; }
        .orbit-dash__stats strong { color: #5143c8; margin-left: 4px; }
        #od-canvas { display: block; width: 100%; max-width: 420px; height: auto; aspect-ratio: 21 / 23; margin: 0 auto; border-radius: 12px; border: 2px solid #25224f; touch-action: none; }
        .orbit-dash__status { text-align: center; min-height: 24px; font-weight: 600; margin: 10px 0; }
        .orbit-dash__controls { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .orbit-dash__controls .game-btn { margin: 0; min-height: 42px; }
        .orbit-dash__hint { text-align: center; font-size: .8rem; }
        @media (max-width: 480px) { .orbit-dash__controls .game-btn { flex: 1 1 38%; padding: 10px 12px; } .orbit-dash__intro p { font-size: .82rem; } }
    `;
    document.head.appendChild(style);
})();