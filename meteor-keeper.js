(function () {
    'use strict';

    window.initMeteorKeeper = function initMeteorKeeper(container) {
        container.innerHTML =
            '<section class="meteor-keeper" style="width:100%;max-width:420px;margin:0 auto;color:#202b43;">' +
                '<div style="text-align:center;margin:0 auto 12px;max-width:360px;">' +
                    '<p style="margin:0 0 8px;color:#53627c;font-size:.95rem;">Pilot your ship, dodge falling meteors, and collect stars.</p>' +
                    '<div style="display:flex;justify-content:center;gap:24px;flex-wrap:wrap;font-weight:700;font-size:1.05rem;">' +
                        '<span>Score: <strong id="mk-score">0</strong></span>' +
                        '<span id="mk-lives" aria-live="polite">Lives: 3</span>' +
                    '</div>' +
                '</div>' +
                '<canvas id="mk-canvas" width="720" height="1040" aria-label="Meteor Keeper game area. Drag the ship to dodge meteors and collect stars." style="display:block;width:100%;max-width:360px;height:auto;aspect-ratio:9/13;margin:0 auto;border-radius:16px;background:#081226;box-shadow:0 8px 24px rgba(8,18,38,.2);touch-action:none;outline:none;"></canvas>' +
                '<p id="mk-status" role="status" aria-live="polite" style="min-height:24px;text-align:center;margin:10px 0;color:#53627c;font-weight:600;">Drag the ship to move. Avoid meteors and catch stars!</p>' +
                '<div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:10px 0;">' +
                    '<button type="button" class="game-btn" id="mk-left" aria-label="Move ship left">◀ Left</button>' +
                    '<button type="button" class="game-btn" id="mk-restart">Restart</button>' +
                    '<button type="button" class="game-btn" id="mk-right" aria-label="Move ship right">Right ▶</button>' +
                '</div>' +
                '<p style="text-align:center;margin:4px 0;color:#718096;font-size:.85rem;">Desktop: use ← → or A / D. Phone: drag across the playfield or use the buttons.</p>' +
            '</section>';

        const canvas = container.querySelector('#mk-canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            container.querySelector('#mk-status').textContent = 'This browser could not start the game canvas.';
            return;
        }

        const W = 360;
        const H = 520;
        const controller = new AbortController();
        const signal = controller.signal;
        const scoreEl = container.querySelector('#mk-score');
        const livesEl = container.querySelector('#mk-lives');
        const statusEl = container.querySelector('#mk-status');
        const restartButton = container.querySelector('#mk-restart');
        const leftButton = container.querySelector('#mk-left');
        const rightButton = container.querySelector('#mk-right');

        const backgroundStars = Array.from({ length: 58 }, function () {
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                r: 0.5 + Math.random() * 1.5,
                alpha: 0.25 + Math.random() * 0.65
            };
        });

        let player;
        let meteors;
        let stars;
        let score;
        let lives;
        let elapsed;
        let nextMeteor;
        let nextStar;
        let invulnerable;
        let state;
        let scoreSaved;
        let lastFrame = performance.now();
        let dragging = false;

        function resetGame() {
            player = { x: W / 2, y: H - 48, radius: 15 };
            meteors = [];
            stars = [];
            score = 0;
            lives = 3;
            elapsed = 0;
            nextMeteor = 500;
            nextStar = 900;
            invulnerable = 0;
            state = 'playing';
            scoreSaved = false;
            lastFrame = performance.now();
            scoreEl.textContent = '0';
            livesEl.textContent = 'Lives: 3';
            statusEl.textContent = 'Drag the ship to move. Avoid meteors and catch stars!';
        }

        function movePlayer(clientX) {
            const rect = canvas.getBoundingClientRect();
            if (!rect.width) return;
            player.x = Math.max(20, Math.min(W - 20, ((clientX - rect.left) / rect.width) * W));
        }

        function moveBy(amount) {
            if (state !== 'playing') return;
            player.x = Math.max(20, Math.min(W - 20, player.x + amount));
        }

        canvas.addEventListener('pointerdown', function (event) {
            dragging = true;
            movePlayer(event.clientX);
            if (canvas.setPointerCapture) {
                try { canvas.setPointerCapture(event.pointerId); } catch (error) { /* capture is optional */ }
            }
            event.preventDefault();
        }, { signal: signal });

        canvas.addEventListener('pointermove', function (event) {
            if (dragging || event.pointerType === 'mouse') movePlayer(event.clientX);
        }, { signal: signal });

        canvas.addEventListener('pointerup', function () {
            dragging = false;
        }, { signal: signal });

        canvas.addEventListener('pointercancel', function () {
            dragging = false;
        }, { signal: signal });

        window.addEventListener('keydown', function (event) {
            if (!canvas.isConnected || state !== 'playing') return;
            const key = event.key.toLowerCase();
            if (key === 'arrowleft' || key === 'a') {
                event.preventDefault();
                moveBy(-24);
            } else if (key === 'arrowright' || key === 'd') {
                event.preventDefault();
                moveBy(24);
            }
        }, { signal: signal });

        leftButton.addEventListener('click', function () { moveBy(-30); }, { signal: signal });
        rightButton.addEventListener('click', function () { moveBy(30); }, { signal: signal });
        restartButton.addEventListener('click', resetGame, { signal: signal });

        function spawnMeteor() {
            const radius = 12 + Math.random() * 9;
            meteors.push({
                x: radius + Math.random() * (W - radius * 2),
                y: -radius - 4,
                radius: radius,
                speed: 115 + Math.random() * 65 + score * 0.65,
                drift: (Math.random() - 0.5) * 34,
                spin: Math.random() * Math.PI
            });
        }

        function spawnStar() {
            stars.push({
                x: 18 + Math.random() * (W - 36),
                y: -15,
                radius: 9,
                speed: 105 + Math.random() * 28 + score * 0.25,
                phase: Math.random() * Math.PI * 2
            });
        }

        function distance(ax, ay, bx, by) {
            const dx = ax - bx;
            const dy = ay - by;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function finishGame() {
            state = 'over';
            statusEl.textContent = 'Game over! Final score: ' + score + '. Tap Restart to try again.';
            if (!scoreSaved && window.gameEngine && typeof window.gameEngine.updateScore === 'function') {
                window.gameEngine.updateScore('meteor-keeper', score);
                scoreSaved = true;
            }
        }

        function update(dt) {
            elapsed += dt * 1000;
            invulnerable = Math.max(0, invulnerable - dt);

            if (elapsed >= nextMeteor) {
                spawnMeteor();
                nextMeteor = elapsed + Math.max(310, 820 - score * 1.7);
            }
            if (elapsed >= nextStar) {
                spawnStar();
                nextStar = elapsed + 1250 + Math.random() * 700;
            }

            for (let i = meteors.length - 1; i >= 0; i--) {
                const meteor = meteors[i];
                meteor.y += meteor.speed * dt;
                meteor.x += meteor.drift * dt;
                meteor.spin += dt;
                if (meteor.y - meteor.radius > H) {
                    meteors.splice(i, 1);
                    continue;
                }
                if (invulnerable <= 0 && distance(player.x, player.y, meteor.x, meteor.y) < player.radius + meteor.radius - 3) {
                    meteors.splice(i, 1);
                    lives -= 1;
                    livesEl.textContent = 'Lives: ' + lives;
                    invulnerable = 1.15;
                    statusEl.textContent = lives > 0 ? 'Meteor hit! Keep moving — ' + lives + ' lives left.' : 'Last collision!';
                    if (lives <= 0) {
                        finishGame();
                        return;
                    }
                }
            }

            for (let i = stars.length - 1; i >= 0; i--) {
                const star = stars[i];
                star.y += star.speed * dt;
                star.phase += dt * 4;
                if (star.y - star.radius > H) {
                    stars.splice(i, 1);
                    continue;
                }
                if (distance(player.x, player.y, star.x, star.y) < player.radius + star.radius + 2) {
                    stars.splice(i, 1);
                    score += 10;
                    scoreEl.textContent = String(score);
                    statusEl.textContent = 'Star collected! +10 points.';
                }
            }
        }

        function drawStar(x, y, outerRadius, innerRadius, rotation) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation || 0);
            ctx.beginPath();
            for (let point = 0; point < 10; point++) {
                const radius = point % 2 === 0 ? outerRadius : innerRadius;
                const angle = -Math.PI / 2 + point * Math.PI / 5;
                const px = Math.cos(angle) * radius;
                const py = Math.sin(angle) * radius;
                if (point === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function draw() {
            const gradient = ctx.createLinearGradient(0, 0, 0, H);
            gradient.addColorStop(0, '#0d1b3c');
            gradient.addColorStop(1, '#050a18');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, W, H);

            backgroundStars.forEach(function (star) {
                ctx.globalAlpha = star.alpha;
                ctx.fillStyle = '#d8e9ff';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;

            stars.forEach(function (star) {
                ctx.save();
                ctx.shadowColor = '#ffd166';
                ctx.shadowBlur = 14;
                ctx.fillStyle = '#ffd166';
                drawStar(star.x, star.y, star.radius + Math.sin(star.phase) * 1.2, star.radius * 0.45, star.phase * 0.25);
                ctx.restore();
            });

            meteors.forEach(function (meteor) {
                const rock = ctx.createRadialGradient(
                    meteor.x - meteor.radius * 0.35, meteor.y - meteor.radius * 0.4, 2,
                    meteor.x, meteor.y, meteor.radius * 1.25
                );
                rock.addColorStop(0, '#ffcf9b');
                rock.addColorStop(0.45, '#e87945');
                rock.addColorStop(1, '#783b46');
                ctx.save();
                ctx.translate(meteor.x, meteor.y);
                ctx.rotate(meteor.spin);
                ctx.fillStyle = rock;
                ctx.beginPath();
                ctx.moveTo(-meteor.radius * 0.85, -meteor.radius * 0.3);
                ctx.lineTo(-meteor.radius * 0.35, -meteor.radius);
                ctx.lineTo(meteor.radius * 0.55, -meteor.radius * 0.75);
                ctx.lineTo(meteor.radius, meteor.radius * 0.05);
                ctx.lineTo(meteor.radius * 0.35, meteor.radius * 0.85);
                ctx.lineTo(-meteor.radius * 0.65, meteor.radius * 0.65);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });

            if (invulnerable <= 0 || Math.floor(invulnerable * 12) % 2 === 0) {
                ctx.save();
                ctx.translate(player.x, player.y);
                ctx.shadowColor = '#57e6ff';
                ctx.shadowBlur = 18;
                ctx.fillStyle = '#57e6ff';
                ctx.beginPath();
                ctx.moveTo(0, -20);
                ctx.lineTo(16, 13);
                ctx.lineTo(0, 7);
                ctx.lineTo(-16, 13);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.fillStyle = '#f6fbff';
                ctx.beginPath();
                ctx.ellipse(0, -2, 5, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffb86b';
                ctx.beginPath();
                ctx.moveTo(-7, 12);
                ctx.lineTo(0, 25 + Math.random() * 5);
                ctx.lineTo(7, 12);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            if (state === 'over') {
                ctx.fillStyle = 'rgba(3, 8, 22, 0.78)';
                ctx.fillRect(0, 0, W, H);
                ctx.textAlign = 'center';
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 32px system-ui, sans-serif';
                ctx.fillText('GAME OVER', W / 2, H / 2 - 14);
                ctx.font = '600 20px system-ui, sans-serif';
                ctx.fillStyle = '#ffd166';
                ctx.fillText('Score: ' + score, W / 2, H / 2 + 24);
                ctx.font = '15px system-ui, sans-serif';
                ctx.fillStyle = '#d8e9ff';
                ctx.fillText('Press Restart to play again', W / 2, H / 2 + 55);
            }
        }

        function frame(timestamp) {
            if (!canvas.isConnected) {
                controller.abort();
                return;
            }
            const dt = Math.min(0.04, Math.max(0, (timestamp - lastFrame) / 1000));
            lastFrame = timestamp;
            if (state === 'playing') update(dt);
            draw();
            requestAnimationFrame(frame);
        }

        resetGame();
        requestAnimationFrame(frame);
    };
})();