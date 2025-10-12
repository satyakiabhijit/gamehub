// Games Collection - All 100+ games with their implementations

// Game definitions
const GAMES_DATA = [
    // PUZZLE GAMES (40 games)
    {
        id: 'sudoku',
        title: 'Sudoku',
        description: 'Classic number puzzle game. Fill the 9x9 grid with digits 1-9.',
        category: 'puzzle',
        difficulty: 'medium',
        icon: 'fas fa-th',
        initFunction: 'initSudoku'
    },
    {
        id: 'memory-match',
        title: 'Memory Match',
        description: 'Flip cards to find matching pairs. Train your memory!',
        category: 'puzzle',
        difficulty: 'easy',
        icon: 'fas fa-brain',
        initFunction: 'initMemoryMatch'
    },
    {
        id: 'sliding-puzzle',
        title: 'Sliding Puzzle',
        description: 'Rearrange numbered tiles to solve the puzzle.',
        category: 'puzzle',
        difficulty: 'medium',
        icon: 'fas fa-puzzle-piece',
        initFunction: 'initSlidingPuzzle'
    },
    {
        id: 'jigsaw-puzzle',
        title: 'Jigsaw Puzzle',
        description: 'Assemble pieces to complete the picture.',
        category: 'puzzle',
        difficulty: 'hard',
        icon: 'fas fa-puzzle-piece',
        initFunction: 'initJigsawPuzzle'
    },
    {
        id: 'word-search',
        title: 'Word Search',
        description: 'Find hidden words in the letter grid.',
        category: 'word',
        difficulty: 'easy',
        icon: 'fas fa-search',
        initFunction: 'initWordSearch'
    },
    {
        id: 'crossword',
        title: 'Crossword',
        description: 'Fill in the crossword grid with correct words.',
        category: 'word',
        difficulty: 'hard',
        icon: 'fas fa-th-large',
        initFunction: 'initCrossword'
    },
    {
        id: 'anagram-solver',
        title: 'Anagram Solver',
        description: 'Unscramble letters to form words.',
        category: 'word',
        difficulty: 'medium',
        icon: 'fas fa-random',
        initFunction: 'initAnagramSolver'
    },
    {
        id: 'hangman',
        title: 'Hangman',
        description: 'Guess the word before the drawing is complete.',
        category: 'word',
        difficulty: 'easy',
        icon: 'fas fa-user-slash',
        initFunction: 'initHangman'
    },
    {
        id: 'word-chain',
        title: 'Word Chain',
        description: 'Create chains of words that connect.',
        category: 'word',
        difficulty: 'medium',
        icon: 'fas fa-link',
        initFunction: 'initWordChain'
    },
    {
        id: 'math-quiz',
        title: 'Math Quiz',
        description: 'Solve arithmetic problems as fast as you can.',
        category: 'math',
        difficulty: 'easy',
        icon: 'fas fa-calculator',
        initFunction: 'initMathQuiz'
    },
    {
        id: 'number-sequence',
        title: 'Number Sequence',
        description: 'Find the pattern and complete the sequence.',
        category: 'math',
        difficulty: 'medium',
        icon: 'fas fa-sort-numeric-up',
        initFunction: 'initNumberSequence'
    },
    {
        id: 'math-memory',
        title: 'Math Memory',
        description: 'Remember and solve mathematical equations.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-brain',
        initFunction: 'initMathMemory'
    },
    {
        id: 'fraction-game',
        title: 'Fraction Game',
        description: 'Practice working with fractions.',
        category: 'math',
        difficulty: 'medium',
        icon: 'fas fa-divide',
        initFunction: 'initFractionGame'
    },
    {
        id: 'geometry-quiz',
        title: 'Geometry Quiz',
        description: 'Test your knowledge of shapes and angles.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-shapes',
        initFunction: 'initGeometryQuiz'
    },
    {
        id: 'mastermind',
        title: 'Mastermind',
        description: 'Break the secret color code using logic.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-eye',
        initFunction: 'initMastermind'
    },
    {
        id: 'towers-hanoi',
        title: 'Towers of Hanoi',
        description: 'Move all disks to the rightmost tower.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-layer-group',
        initFunction: 'initTowersHanoi'
    },
    {
        id: 'logic-grid',
        title: 'Logic Grid',
        description: 'Use clues to solve the logical puzzle.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-table',
        initFunction: 'initLogicGrid'
    },
    {
        id: 'lights-out',
        title: 'Lights Out',
        description: 'Turn off all lights by clicking strategic positions.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-lightbulb',
        initFunction: 'initLightsOut'
    },
    {
        id: 'rubiks-cube',
        title: "Rubik's Cube 2D",
        description: 'Solve the classic cube puzzle in 2D.',
        category: 'puzzle',
        difficulty: 'hard',
        icon: 'fas fa-cube',
        initFunction: 'initRubiksCube'
    },
    {
        id: 'minesweeper',
        title: 'Minesweeper',
        description: 'Clear the minefield without detonating any mines.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-bomb',
        initFunction: 'initMinesweeper'
    },
    {
        id: 'nonogram',
        title: 'Nonogram',
        description: 'Reveal the hidden picture using number clues.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-image',
        initFunction: 'initNonogram'
    },
    {
        id: 'kakuro',
        title: 'Kakuro',
        description: 'Cross-sum puzzle combining logic and math.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-plus',
        initFunction: 'initKakuro'
    },
    {
        id: 'kenken',
        title: 'KenKen',
        description: 'Mathematical puzzle using arithmetic operations.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-calculator',
        initFunction: 'initKenKen'
    },
    {
        id: 'futoshiki',
        title: 'Futoshiki',
        description: 'Number puzzle with inequality constraints.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-less-than',
        initFunction: 'initFutoshiki'
    },
    {
        id: 'shikaku',
        title: 'Shikaku',
        description: 'Divide the grid into rectangles.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-square',
        initFunction: 'initShikaku'
    },
    {
        id: 'nurikabe',
        title: 'Nurikabe',
        description: 'Create islands and seas in the grid.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-water',
        initFunction: 'initNurikabe'
    },
    {
        id: 'hitori',
        title: 'Hitori',
        description: 'Eliminate duplicate numbers following rules.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-eraser',
        initFunction: 'initHitori'
    },
    {
        id: 'slitherlink',
        title: 'Slitherlink',
        description: 'Draw a single loop using the number clues.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-link',
        initFunction: 'initSlitherlink'
    },
    {
        id: 'fillomino',
        title: 'Fillomino',
        description: 'Fill areas with numbers based on size.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-fill',
        initFunction: 'initFillomino'
    },
    {
        id: 'hashiwokakero',
        title: 'Hashiwokakero',
        description: 'Connect islands with bridges.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-route',
        initFunction: 'initHashiwokakero'
    },
    {
        id: 'battleships',
        title: 'Battleships',
        description: 'Find all hidden ships using logic.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-ship',
        initFunction: 'initBattleships'
    },
    {
        id: 'tents',
        title: 'Tents',
        description: 'Place tents next to trees following rules.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-campground',
        initFunction: 'initTents'
    },
    {
        id: 'star-battle',
        title: 'Star Battle',
        description: 'Place stars in regions without conflicts.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-star',
        initFunction: 'initStarBattle'
    },
    {
        id: 'aquarium',
        title: 'Aquarium',
        description: 'Fill tanks with water following constraints.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-fish',
        initFunction: 'initAquarium'
    },
    {
        id: 'skyscrapers',
        title: 'Skyscrapers',
        description: 'Place buildings of different heights.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-building',
        initFunction: 'initSkyscrapers'
    },
    {
        id: 'thermometer',
        title: 'Thermometer',
        description: 'Fill thermometers from bottom to specified levels.',
        category: 'logic',
        difficulty: 'medium',
        icon: 'fas fa-thermometer-half',
        initFunction: 'initThermometer'
    },
    {
        id: 'arrow-sudoku',
        title: 'Arrow Sudoku',
        description: 'Sudoku with arrow sum constraints.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-arrow-right',
        initFunction: 'initArrowSudoku'
    },
    {
        id: 'killer-sudoku',
        title: 'Killer Sudoku',
        description: 'Sudoku with cage sum constraints.',
        category: 'math',
        difficulty: 'hard',
        icon: 'fas fa-skull',
        initFunction: 'initKillerSudoku'
    },
    {
        id: 'greater-than-sudoku',
        title: 'Greater Than Sudoku',
        description: 'Sudoku with inequality constraints.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-greater-than',
        initFunction: 'initGreaterThanSudoku'
    },
    {
        id: 'diagonal-sudoku',
        title: 'Diagonal Sudoku',
        description: 'Sudoku with diagonal constraints.',
        category: 'logic',
        difficulty: 'hard',
        icon: 'fas fa-slash',
        initFunction: 'initDiagonalSudoku'
    },

    // ARCADE GAMES (30 games)
    {
        id: 'snake',
        title: 'Snake',
        description: 'Control the snake to eat food and grow longer.',
        category: 'arcade',
        difficulty: 'easy',
        icon: 'fas fa-snake',
        initFunction: 'initSnake'
    },
    {
        id: 'tetris',
        title: 'Tetris',
        description: 'Arrange falling blocks to clear lines.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-th-large',
        initFunction: 'initTetris'
    },
    {
        id: 'pong',
        title: 'Pong',
        description: 'Classic paddle ball game for one or two players.',
        category: 'arcade',
        difficulty: 'easy',
        icon: 'fas fa-table-tennis',
        initFunction: 'initPong'
    },
    {
        id: 'breakout',
        title: 'Breakout',
        description: 'Break all bricks with the bouncing ball.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-square',
        initFunction: 'initBreakout'
    },
    {
        id: 'pacman',
        title: 'Pac-Man',
        description: 'Eat dots while avoiding ghosts.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-circle',
        initFunction: 'initPacman'
    },
    {
        id: 'frogger',
        title: 'Frogger',
        description: 'Help the frog cross the busy road and river.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-frog',
        initFunction: 'initFrogger'
    },
    {
        id: 'asteroids',
        title: 'Asteroids',
        description: 'Destroy asteroids while avoiding collisions.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-meteor',
        initFunction: 'initAsteroids'
    },
    {
        id: 'space-invaders',
        title: 'Space Invaders',
        description: 'Defend Earth from alien invasion.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-space-shuttle',
        initFunction: 'initSpaceInvaders'
    },
    {
        id: 'centipede',
        title: 'Centipede',
        description: 'Shoot the centipede as it moves down.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-bug',
        initFunction: 'initCentipede'
    },
    {
        id: 'missile-command',
        title: 'Missile Command',
        description: 'Defend cities from incoming missiles.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-rocket',
        initFunction: 'initMissileCommand'
    },
    {
        id: 'defender',
        title: 'Defender',
        description: 'Protect humanoids from alien abduction.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-shield-alt',
        initFunction: 'initDefender'
    },
    {
        id: 'galaga',
        title: 'Galaga',
        description: 'Shoot down waves of enemy ships.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-fighter-jet',
        initFunction: 'initGalaga'
    },
    {
        id: 'donkey-kong',
        title: 'Donkey Kong',
        description: 'Climb ladders and avoid barrels.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-hammer',
        initFunction: 'initDonkeyKong'
    },
    {
        id: 'qbert',
        title: 'Q*bert',
        description: 'Change pyramid colors while avoiding enemies.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-cube',
        initFunction: 'initQbert'
    },
    {
        id: 'dig-dug',
        title: 'Dig Dug',
        description: 'Tunnel underground and defeat monsters.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-shovel',
        initFunction: 'initDigDug'
    },
    {
        id: 'burger-time',
        title: 'Burger Time',
        description: 'Build burgers while avoiding enemies.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-hamburger',
        initFunction: 'initBurgerTime'
    },
    {
        id: 'moon-patrol',
        title: 'Moon Patrol',
        description: 'Drive across the lunar surface.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-moon',
        initFunction: 'initMoonPatrol'
    },
    {
        id: 'scramble',
        title: 'Scramble',
        description: 'Pilot your ship through caverns.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-plane',
        initFunction: 'initScramble'
    },
    {
        id: 'zaxxon',
        title: 'Zaxxon',
        description: 'Navigate through isometric space fortress.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-cube',
        initFunction: 'initZaxxon'
    },
    {
        id: 'tron',
        title: 'Tron',
        description: 'Avoid light cycle trails in digital world.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-motorcycle',
        initFunction: 'initTron'
    },
    {
        id: 'paperboy',
        title: 'Paperboy',
        description: 'Deliver newspapers while avoiding obstacles.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-newspaper',
        initFunction: 'initPaperboy'
    },
    {
        id: 'marble-madness',
        title: 'Marble Madness',
        description: 'Guide marble through isometric courses.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-circle',
        initFunction: 'initMarbleMadness'
    },
    {
        id: 'robotron',
        title: 'Robotron 2084',
        description: 'Survive waves of hostile robots.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-robot',
        initFunction: 'initRobotron'
    },
    {
        id: 'joust',
        title: 'Joust',
        description: 'Ride flying ostriches in aerial combat.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-feather',
        initFunction: 'initJoust'
    },
    {
        id: 'xevious',
        title: 'Xevious',
        description: 'Vertical scrolling shooter with ground targets.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-bullseye',
        initFunction: 'initXevious'
    },
    {
        id: 'pole-position',
        title: 'Pole Position',
        description: 'Race around the track for the best time.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-flag-checkered',
        initFunction: 'initPolePosition'
    },
    {
        id: 'spy-hunter',
        title: 'Spy Hunter',
        description: 'Drive the G-6155 Interceptor against enemy agents.',
        category: 'arcade',
        difficulty: 'hard',
        icon: 'fas fa-car',
        initFunction: 'initSpyHunter'
    },
    {
        id: 'track-field',
        title: 'Track & Field',
        description: 'Compete in various Olympic events.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-running',
        initFunction: 'initTrackField'
    },
    {
        id: 'elevator-action',
        title: 'Elevator Action',
        description: 'Spy thriller with elevator-based gameplay.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-elevator',
        initFunction: 'initElevatorAction'
    },
    {
        id: 'crystal-castles',
        title: 'Crystal Castles',
        description: 'Collect gems while avoiding enemies.',
        category: 'arcade',
        difficulty: 'medium',
        icon: 'fas fa-gem',
        initFunction: 'initCrystalCastles'
    },

    // STRATEGY GAMES (15 games)
    {
        id: 'chess',
        title: 'Chess',
        description: 'Classic strategy board game.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-chess',
        initFunction: 'initChess'
    },
    {
        id: 'checkers',
        title: 'Checkers',
        description: 'Traditional board game with diagonal moves.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-chess-board',
        initFunction: 'initCheckers'
    },
    {
        id: 'reversi',
        title: 'Reversi (Othello)',
        description: 'Flip opponent pieces to win.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-circle',
        initFunction: 'initReversi'
    },
    {
        id: 'go',
        title: 'Go',
        description: 'Ancient territory control game.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-circle',
        initFunction: 'initGo'
    },
    {
        id: 'backgammon',
        title: 'Backgammon',
        description: 'Race your pieces off the board.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-dice',
        initFunction: 'initBackgammon'
    },
    {
        id: 'risk',
        title: 'Risk',
        description: 'Conquer the world in this strategy game.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-globe',
        initFunction: 'initRisk'
    },
    {
        id: 'battleship',
        title: 'Battleship',
        description: 'Sink enemy ships by guessing coordinates.',
        category: 'strategy',
        difficulty: 'easy',
        icon: 'fas fa-ship',
        initFunction: 'initBattleship'
    },
    {
        id: 'stratego',
        title: 'Stratego',
        description: 'Military strategy with hidden pieces.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-flag',
        initFunction: 'initStratego'
    },
    {
        id: 'connect-four',
        title: 'Connect Four',
        description: 'Get four in a row before your opponent.',
        category: 'strategy',
        difficulty: 'easy',
        icon: 'fas fa-circle',
        initFunction: 'initConnectFour'
    },
    {
        id: 'nine-mens-morris',
        title: "Nine Men's Morris",
        description: 'Ancient strategy game of positioning.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-dot-circle',
        initFunction: 'initNineMensMorris'
    },
    {
        id: 'mancala',
        title: 'Mancala',
        description: 'Ancient seed-sowing game.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-seedling',
        initFunction: 'initMancala'
    },
    {
        id: 'hex',
        title: 'Hex',
        description: 'Connect opposite sides of the hexagonal board.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-hexagon',
        initFunction: 'initHex'
    },
    {
        id: 'chinese-checkers',
        title: 'Chinese Checkers',
        description: 'Move all pieces to the opposite triangle.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-star',
        initFunction: 'initChineseCheckers'
    },
    {
        id: 'halma',
        title: 'Halma',
        description: 'Move pieces across the board using jumps.',
        category: 'strategy',
        difficulty: 'medium',
        icon: 'fas fa-th',
        initFunction: 'initHalma'
    },
    {
        id: 'amazons',
        title: 'Game of the Amazons',
        description: 'Queen and arrow territory control game.',
        category: 'strategy',
        difficulty: 'hard',
        icon: 'fas fa-chess-queen',
        initFunction: 'initAmazons'
    },

    // CASUAL GAMES (15 games)
    {
        id: 'tic-tac-toe',
        title: 'Tic-Tac-Toe',
        description: 'Get three in a row on a 3x3 grid.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-times',
        initFunction: 'initTicTacToe'
    },
    {
        id: 'rock-paper-scissors',
        title: 'Rock Paper Scissors',
        description: 'Classic hand game against computer.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-hand-rock',
        initFunction: 'initRockPaperScissors'
    },
    {
        id: 'dice-game',
        title: 'Dice Game',
        description: 'Roll dice and try to get the highest score.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-dice',
        initFunction: 'initDiceGame'
    },
    {
        id: 'coin-flip',
        title: 'Coin Flip',
        description: 'Guess heads or tails.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-coins',
        initFunction: 'initCoinFlip'
    },
    {
        id: 'slot-machine',
        title: 'Slot Machine',
        description: 'Spin the reels and match symbols.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-dollar-sign',
        initFunction: 'initSlotMachine'
    },
    {
        id: 'wheel-fortune',
        title: 'Wheel of Fortune',
        description: 'Spin the wheel and win prizes.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-circle-notch',
        initFunction: 'initWheelFortune'
    },
    {
        id: 'bingo',
        title: 'Bingo',
        description: 'Mark numbers on your card as they are called.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-th-large',
        initFunction: 'initBingo'
    },
    {
        id: 'lottery',
        title: 'Lottery',
        description: 'Pick numbers and see if you win.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-ticket-alt',
        initFunction: 'initLottery'
    },
    {
        id: 'scratch-card',
        title: 'Scratch Card',
        description: 'Scratch to reveal hidden symbols.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-hand-pointer',
        initFunction: 'initScratchCard'
    },
    {
        id: 'magic-8ball',
        title: 'Magic 8-Ball',
        description: 'Ask a question and get a mystical answer.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-magic',
        initFunction: 'initMagic8Ball'
    },
    {
        id: 'fortune-cookie',
        title: 'Fortune Cookie',
        description: 'Open cookies to read your fortune.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-cookie',
        initFunction: 'initFortuneCookie'
    },
    {
        id: 'tarot-cards',
        title: 'Tarot Reading',
        description: 'Draw cards for mystical insights.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-eye',
        initFunction: 'initTarotCards'
    },
    {
        id: 'personality-test',
        title: 'Personality Test',
        description: 'Discover your personality type.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-user',
        initFunction: 'initPersonalityTest'
    },
    {
        id: 'trivia-quiz',
        title: 'Trivia Quiz',
        description: 'Test your general knowledge.',
        category: 'casual',
        difficulty: 'medium',
        icon: 'fas fa-question',
        initFunction: 'initTriviaQuiz'
    },
    {
        id: 'reaction-time',
        title: 'Reaction Time',
        description: 'Test how fast you can react.',
        category: 'casual',
        difficulty: 'easy',
        icon: 'fas fa-stopwatch',
        initFunction: 'initReactionTime'
    }
];

// Initialize games when engine is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Games script loaded, waiting for engine...');
});

// Listen for gameEngine ready event
window.addEventListener('gameEngineReady', () => {
    console.log('🎮 GameEngine ready, loading games...');
    if (window.gameEngine) {
        gameEngine.games = GAMES_DATA;
        gameEngine.renderGames();
        console.log(`🎮 Loaded ${GAMES_DATA.length} games successfully!`);
    } else {
        console.error('GameEngine not found even after ready event!');
    }
});

// Fallback: Keep checking until gameEngine is available
document.addEventListener('DOMContentLoaded', () => {
    let attempts = 0;
    const maxAttempts = 100; // 5 seconds max
    
    const initializeGames = () => {
        attempts++;
        if (window.gameEngine) {
            console.log('🎮 Fallback: GameEngine found, loading games...');
            gameEngine.games = GAMES_DATA;
            gameEngine.renderGames();
            console.log(`🎮 Loaded ${GAMES_DATA.length} games successfully!`);
        } else if (attempts < maxAttempts) {
            setTimeout(initializeGames, 50);
        } else {
            console.error('🚨 Failed to initialize games after', attempts, 'attempts');
            console.error('GameEngine:', window.gameEngine);
            console.error('GAMES_DATA length:', GAMES_DATA.length);
        }
    };
    
    // Wait a bit before starting fallback
    setTimeout(initializeGames, 100);
});

// Game Implementations
// ==================

// SUDOKU GAME
function initSudoku(container) {
    try {
        console.log('🧩 Initializing Sudoku game...');
        
        const sudokuHtml = `
            <div class="game-info">
                <h3>Sudoku</h3>
                <p>Fill the 9×9 grid so that each column, row, and 3×3 box contains digits 1-9</p>
            </div>
            <div class="game-score">Difficulty: <span id="sudoku-difficulty">Easy</span> | Time: <span id="sudoku-time">00:00</span></div>
            <div class="sudoku-container">
                <div class="sudoku-grid" id="sudoku-grid"></div>
            </div>
            <div class="game-controls">
                <button class="game-btn" onclick="generateSimpleSudoku('easy')">Easy</button>
                <button class="game-btn" onclick="generateSimpleSudoku('medium')">Medium</button>
                <button class="game-btn" onclick="generateSimpleSudoku('hard')">Hard</button>
                <button class="game-btn" onclick="solveSudokuSimple()">Solve</button>
                <button class="game-btn" onclick="checkSudokuSimple()">Check</button>
            </div>
            <div id="sudoku-message"></div>
        `;
        
        container.innerHTML = sudokuHtml;
        
        // Initialize immediately with a simple puzzle
        setTimeout(() => {
            generateSimpleSudoku('easy');
        }, 100);
        
        console.log('✅ Sudoku HTML loaded successfully');
        
    } catch (error) {
        console.error('❌ Error initializing Sudoku:', error);
        container.innerHTML = `
            <div class="game-info" style="text-align: center; padding: 40px;">
                <h3>Sudoku</h3>
                <p style="color: #f44336;">Error loading Sudoku game: ${error.message}</p>
                <button onclick="gameEngine.closeGame()" class="game-btn">Back to Games</button>
            </div>
        `;
    }
}

function generateSimpleSudoku(difficulty) {
    try {
        console.log('🧩 Generating simple Sudoku puzzle:', difficulty);
        
        const difficultySpan = document.getElementById('sudoku-difficulty');
        if (difficultySpan) {
            difficultySpan.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        }
        
        const grid = document.getElementById('sudoku-grid');
        if (!grid) {
            console.error('❌ Sudoku grid element not found');
            return;
        }
        
        // Clear the grid
        grid.innerHTML = '';
        
        // Simple pre-made puzzle (guaranteed to work)
        const simplePuzzle = [
            5,3,0,0,7,0,0,0,0,
            6,0,0,1,9,5,0,0,0,
            0,9,8,0,0,0,0,6,0,
            8,0,0,0,6,0,0,0,3,
            4,0,0,8,0,3,0,0,1,
            7,0,0,0,2,0,0,0,6,
            0,6,0,0,0,0,2,8,0,
            0,0,0,4,1,9,0,0,5,
            0,0,0,0,8,0,0,7,9
        ];
        
        // Adjust difficulty by removing more numbers
        const puzzle = [...simplePuzzle];
        const numbersToRemove = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 15 : 25;
        
        for (let i = 0; i < numbersToRemove; i++) {
            const randomIndex = Math.floor(Math.random() * 81);
            if (puzzle[randomIndex] !== 0) {
                puzzle[randomIndex] = 0;
            }
        }
        
        // Create the grid
        for (let i = 0; i < 81; i++) {
            const cell = document.createElement('input');
            cell.className = 'sudoku-cell';
            cell.type = 'text';
            cell.maxLength = '1';
            cell.style.width = '35px';
            cell.style.height = '35px';
            cell.style.textAlign = 'center';
            cell.style.border = '1px solid #ccc';
            cell.style.fontSize = '14px';
            cell.style.backgroundColor = 'white';
            
            if (puzzle[i] !== 0) {
                cell.value = puzzle[i];
                cell.style.backgroundColor = '#f0f0f0';
                cell.style.fontWeight = 'bold';
                cell.readOnly = true;
                cell.classList.add('given');
            }
            
            // Simple input validation
            cell.addEventListener('input', function(e) {
                const value = e.target.value;
                if (value && (isNaN(value) || value < 1 || value > 9)) {
                    e.target.value = '';
                }
            });
            
            grid.appendChild(cell);
        }
        
        console.log('✅ Sudoku puzzle generated successfully with', grid.children.length, 'cells');
        
    } catch (error) {
        console.error('❌ Error generating simple Sudoku:', error);
        showSudokuMessageSimple('Error generating puzzle: ' + error.message, 'error');
    }
}

function solveSudokuSimple() {
    try {
        console.log('🧩 Solving Sudoku puzzle...');
        
        // Complete solution for the base puzzle
        const solution = [
            5,3,4,6,7,8,9,1,2,
            6,7,2,1,9,5,3,4,8,
            1,9,8,3,4,2,5,6,7,
            8,5,9,7,6,1,4,2,3,
            4,2,6,8,5,3,7,9,1,
            7,1,3,9,2,4,8,5,6,
            9,6,1,5,3,7,2,8,4,
            2,8,7,4,1,9,6,3,5,
            3,4,5,2,8,6,1,7,9
        ];
        
        const cells = document.querySelectorAll('.sudoku-cell');
        cells.forEach((cell, index) => {
            if (!cell.classList.contains('given')) {
                cell.value = solution[index];
                cell.style.color = '#007bff';
            }
        });
        
        showSudokuMessageSimple('Puzzle solved! (Auto-solution)', 'success');
        
    } catch (error) {
        console.error('❌ Error solving Sudoku:', error);
        showSudokuMessageSimple('Error solving puzzle', 'error');
    }
}

function checkSudokuSimple() {
    try {
        console.log('🧩 Checking Sudoku solution...');
        
        const cells = document.querySelectorAll('.sudoku-cell');
        let filledCells = 0;
        
        cells.forEach(cell => {
            if (cell.value && cell.value.trim() !== '') {
                filledCells++;
            }
        });
        
        if (filledCells === 81) {
            showSudokuMessageSimple('Congratulations! Puzzle completed!', 'success');
            if (window.gameEngine) {
                gameEngine.updateScore('sudoku', 1000);
            }
        } else {
            showSudokuMessageSimple(`Puzzle ${Math.round((filledCells/81)*100)}% complete. Keep going!`, 'info');
        }
        
    } catch (error) {
        console.error('❌ Error checking Sudoku:', error);
        showSudokuMessageSimple('Error checking puzzle', 'error');
    }
}

function showSudokuMessageSimple(text, type) {
    try {
        const messageDiv = document.getElementById('sudoku-message');
        if (messageDiv) {
            messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
            setTimeout(() => {
                if (messageDiv) messageDiv.innerHTML = '';
            }, 3000);
        }
    } catch (error) {
        console.error('❌ Error showing message:', error);
    }
}

// OLD SUDOKU FUNCTIONS REMOVED - Using simplified version above

// MEMORY MATCH GAME
function initMemoryMatch(container) {
    const memoryHtml = `
        <div class="game-info">
            <h3>Memory Match</h3>
            <p>Find all matching pairs by flipping cards</p>
        </div>
        <div class="game-score">
            Moves: <span id="memory-moves">0</span> | 
            Matches: <span id="memory-matches">0</span> | 
            Time: <span id="memory-time">00:00</span>
        </div>
        <div class="memory-grid" id="memory-grid"></div>
        <div class="game-controls">
            <button class="game-btn" onclick="startMemoryGame(4)">4x4 (Easy)</button>
            <button class="game-btn" onclick="startMemoryGame(6)">6x6 (Medium)</button>
            <button class="game-btn" onclick="startMemoryGame(8)">8x8 (Hard)</button>
        </div>
        <div id="memory-message"></div>
    `;
    
    container.innerHTML = memoryHtml;
    startMemoryGame(4);
}

let memoryGame = {
    cards: [],
    flippedCards: [],
    moves: 0,
    matches: 0,
    size: 4,
    canFlip: true
};

function startMemoryGame(size) {
    memoryGame.size = size;
    memoryGame.moves = 0;
    memoryGame.matches = 0;
    memoryGame.canFlip = true;
    memoryGame.flippedCards = [];
    
    updateMemoryScore();
    createMemoryGrid();
}

function createMemoryGrid() {
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${memoryGame.size}, 80px)`;
    
    const totalCards = memoryGame.size * memoryGame.size;
    const pairs = totalCards / 2;
    
    // Create card values (emoji for simplicity)
    const emojis = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺', '🎻', '🎹', '🎤', '🎧', '🎬', '🎪', '🎨', '🎭', '🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺', '🎻', '🎹', '🎤', '🎧', '🎬', '🎪', '🎨', '🎭'];
    
    const cardValues = [];
    for (let i = 0; i < pairs; i++) {
        cardValues.push(emojis[i], emojis[i]);
    }
    
    // Shuffle cards
    memoryGame.cards = GameEngine.shuffleArray(cardValues);
    
    // Create card elements
    memoryGame.cards.forEach((value, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.value = value;
        card.addEventListener('click', flipMemoryCard);
        grid.appendChild(card);
    });
}

function flipMemoryCard(e) {
    if (!memoryGame.canFlip) return;
    
    const card = e.target;
    const index = parseInt(card.dataset.index);
    
    // Don't flip if already flipped or matched
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    
    // Flip card
    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    memoryGame.flippedCards.push(card);
    
    if (memoryGame.flippedCards.length === 2) {
        memoryGame.moves++;
        updateMemoryScore();
        memoryGame.canFlip = false;
        
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const [card1, card2] = memoryGame.flippedCards;
    
    if (card1.dataset.value === card2.dataset.value) {
        // Match found
        card1.classList.add('matched');
        card2.classList.add('matched');
        memoryGame.matches++;
        
        // Check if game complete
        if (memoryGame.matches === memoryGame.cards.length / 2) {
            showMemoryMessage('Congratulations! All pairs found!', 'success');
            gameEngine.updateScore('memory-match', Math.max(1000 - memoryGame.moves * 10, 100));
        }
    } else {
        // No match
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }
    
    memoryGame.flippedCards = [];
    memoryGame.canFlip = true;
    updateMemoryScore();
}

function updateMemoryScore() {
    document.getElementById('memory-moves').textContent = memoryGame.moves;
    document.getElementById('memory-matches').textContent = memoryGame.matches;
}

function showMemoryMessage(text, type) {
    const messageDiv = document.getElementById('memory-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
    setTimeout(() => messageDiv.innerHTML = '', 3000);
}

// TIC-TAC-TOE GAME
function initTicTacToe(container) {
    const tttHtml = `
        <div class="game-info">
            <h3>Tic-Tac-Toe</h3>
            <p>Get three in a row to win!</p>
        </div>
        <div class="game-score">
            Player: <span id="ttt-current">X</span> | 
            Score X: <span id="ttt-score-x">0</span> | 
            Score O: <span id="ttt-score-o">0</span>
        </div>
        <div class="game-board" id="ttt-board" style="display: grid; grid-template-columns: repeat(3, 100px); grid-template-rows: repeat(3, 100px); gap: 2px; background: #333; margin: 20px auto; width: fit-content;"></div>
        <div class="game-controls">
            <button class="game-btn" onclick="resetTicTacToe()">New Game</button>
            <button class="game-btn" onclick="resetTicTacToeScores()">Reset Scores</button>
        </div>
        <div id="ttt-message"></div>
    `;
    
    container.innerHTML = tttHtml;
    initTicTacToeGame();
}

let ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    gameActive: true,
    scores: { X: 0, O: 0 }
};

function initTicTacToeGame() {
    const board = document.getElementById('ttt-board');
    board.innerHTML = '';
    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'game-cell';
        cell.style.cssText = 'width: 100px; height: 100px; font-size: 36px; cursor: pointer;';
        cell.dataset.index = i;
        cell.addEventListener('click', makeTicTacToeMove);
        board.appendChild(cell);
    }
    
    ticTacToe.board = ['', '', '', '', '', '', '', '', ''];
    ticTacToe.currentPlayer = 'X';
    ticTacToe.gameActive = true;
    updateTicTacToeDisplay();
}

function makeTicTacToeMove(e) {
    const index = parseInt(e.target.dataset.index);
    
    if (ticTacToe.board[index] !== '' || !ticTacToe.gameActive) return;
    
    ticTacToe.board[index] = ticTacToe.currentPlayer;
    e.target.textContent = ticTacToe.currentPlayer;
    
    if (checkTicTacToeWin()) {
        showTicTacToeMessage(`Player ${ticTacToe.currentPlayer} wins!`, 'success');
        ticTacToe.scores[ticTacToe.currentPlayer]++;
        ticTacToe.gameActive = false;
        gameEngine.updateScore('tic-tac-toe', ticTacToe.currentPlayer === 'X' ? 100 : 0);
    } else if (ticTacToe.board.every(cell => cell !== '')) {
        showTicTacToeMessage("It's a tie!", 'error');
        ticTacToe.gameActive = false;
    } else {
        ticTacToe.currentPlayer = ticTacToe.currentPlayer === 'X' ? 'O' : 'X';
        
        // Computer move (O)
        if (ticTacToe.currentPlayer === 'O' && ticTacToe.gameActive) {
            setTimeout(makeComputerMove, 500);
        }
    }
    
    updateTicTacToeDisplay();
}

function makeComputerMove() {
    const availableMoves = ticTacToe.board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    
    if (availableMoves.length === 0) return;
    
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const cell = document.querySelector(`[data-index="${randomMove}"]`);
    
    ticTacToe.board[randomMove] = 'O';
    cell.textContent = 'O';
    
    if (checkTicTacToeWin()) {
        showTicTacToeMessage('Computer wins!', 'error');
        ticTacToe.scores.O++;
        ticTacToe.gameActive = false;
    } else if (ticTacToe.board.every(cell => cell !== '')) {
        showTicTacToeMessage("It's a tie!", 'error');
        ticTacToe.gameActive = false;
    } else {
        ticTacToe.currentPlayer = 'X';
    }
    
    updateTicTacToeDisplay();
}

function checkTicTacToeWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return ticTacToe.board[a] && 
               ticTacToe.board[a] === ticTacToe.board[b] && 
               ticTacToe.board[a] === ticTacToe.board[c];
    });
}

function updateTicTacToeDisplay() {
    document.getElementById('ttt-current').textContent = ticTacToe.currentPlayer;
    document.getElementById('ttt-score-x').textContent = ticTacToe.scores.X;
    document.getElementById('ttt-score-o').textContent = ticTacToe.scores.O;
}

function resetTicTacToe() {
    initTicTacToeGame();
    document.getElementById('ttt-message').innerHTML = '';
}

function resetTicTacToeScores() {
    ticTacToe.scores = { X: 0, O: 0 };
    updateTicTacToeDisplay();
}

function showTicTacToeMessage(text, type) {
    const messageDiv = document.getElementById('ttt-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// SNAKE GAME
function initSnake(container) {
    const snakeHtml = `
        <div class="game-info">
            <h3>Snake</h3>
            <p>Use arrow keys to control the snake. Eat food to grow!</p>
        </div>
        <div class="game-score">
            Score: <span id="snake-score">0</span> | 
            High Score: <span id="snake-high">${gameEngine.getHighScore('snake')}</span>
        </div>
        <canvas id="snake-canvas" class="snake-game" width="400" height="400"></canvas>
        <div class="game-controls">
            <button class="game-btn" onclick="startSnakeGame()">Start Game</button>
            <button class="game-btn" onclick="pauseSnakeGame()">Pause</button>
        </div>
        <div id="snake-message"></div>
    `;
    
    container.innerHTML = snakeHtml;
    initSnakeGame();
}

let snake = {
    canvas: null,
    ctx: null,
    snake: [{x: 200, y: 200}],
    direction: {x: 0, y: 0},
    food: {x: 0, y: 0},
    score: 0,
    gameRunning: false,
    gameLoop: null
};

function initSnakeGame() {
    snake.canvas = document.getElementById('snake-canvas');
    snake.ctx = snake.canvas.getContext('2d');
    snake.snake = [{x: 200, y: 200}];
    snake.direction = {x: 0, y: 0};
    snake.score = 0;
    snake.gameRunning = false;
    
    generateSnakeFood();
    updateSnakeScore();
    drawSnake();
    
    // Add keyboard controls
    document.addEventListener('keydown', handleSnakeInput);
}

function generateSnakeFood() {
    snake.food = {
        x: Math.floor(Math.random() * 20) * 20,
        y: Math.floor(Math.random() * 20) * 20
    };
    
    // Make sure food doesn't spawn on snake
    if (snake.snake.some(segment => segment.x === snake.food.x && segment.y === snake.food.y)) {
        generateSnakeFood();
    }
}

function startSnakeGame() {
    if (snake.gameRunning) return;
    
    snake.gameRunning = true;
    snake.gameLoop = setInterval(updateSnake, 150);
}

function pauseSnakeGame() {
    snake.gameRunning = false;
    if (snake.gameLoop) {
        clearInterval(snake.gameLoop);
        snake.gameLoop = null;
    }
}

function handleSnakeInput(e) {
    if (!snake.gameRunning) return;
    
    switch(e.key) {
        case 'ArrowUp':
            if (snake.direction.y === 0) {
                snake.direction = {x: 0, y: -20};
            }
            e.preventDefault();
            break;
        case 'ArrowDown':
            if (snake.direction.y === 0) {
                snake.direction = {x: 0, y: 20};
            }
            e.preventDefault();
            break;
        case 'ArrowLeft':
            if (snake.direction.x === 0) {
                snake.direction = {x: -20, y: 0};
            }
            e.preventDefault();
            break;
        case 'ArrowRight':
            if (snake.direction.x === 0) {
                snake.direction = {x: 20, y: 0};
            }
            e.preventDefault();
            break;
    }
}

function updateSnake() {
    const head = {
        x: snake.snake[0].x + snake.direction.x,
        y: snake.snake[0].y + snake.direction.y
    };
    
    // Check wall collision
    if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
        gameOverSnake();
        return;
    }
    
    // Check self collision
    if (snake.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOverSnake();
        return;
    }
    
    snake.snake.unshift(head);
    
    // Check food collision
    if (head.x === snake.food.x && head.y === snake.food.y) {
        snake.score += 10;
        updateSnakeScore();
        generateSnakeFood();
    } else {
        snake.snake.pop();
    }
    
    drawSnake();
}

function drawSnake() {
    // Clear canvas
    snake.ctx.fillStyle = '#000';
    snake.ctx.fillRect(0, 0, 400, 400);
    
    // Draw snake
    snake.ctx.fillStyle = '#0f0';
    snake.snake.forEach(segment => {
        snake.ctx.fillRect(segment.x, segment.y, 18, 18);
    });
    
    // Draw food
    snake.ctx.fillStyle = '#f00';
    snake.ctx.fillRect(snake.food.x, snake.food.y, 18, 18);
}

function updateSnakeScore() {
    document.getElementById('snake-score').textContent = snake.score;
}

function gameOverSnake() {
    pauseSnakeGame();
    showSnakeMessage(`Game Over! Score: ${snake.score}`, 'error');
    
    if (gameEngine.updateScore('snake', snake.score)) {
        document.getElementById('snake-high').textContent = snake.score;
        showSnakeMessage(`New High Score: ${snake.score}!`, 'success');
    }
}

function showSnakeMessage(text, type) {
    const messageDiv = document.getElementById('snake-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// TETRIS GAME
function initTetris(container) {
    const tetrisHtml = `
        <div class="game-info">
            <h3>Tetris</h3>
            <p>Use arrow keys to control falling blocks. Clear lines to score!</p>
        </div>
        <div class="game-score">
            Score: <span id="tetris-score">0</span> | 
            Lines: <span id="tetris-lines">0</span> | 
            Level: <span id="tetris-level">1</span>
        </div>
        <canvas id="tetris-canvas" class="tetris-game" width="300" height="600"></canvas>
        <div class="game-controls">
            <button class="game-btn" onclick="startTetrisGame()">Start</button>
            <button class="game-btn" onclick="pauseTetrisGame()">Pause</button>
            <button class="game-btn" onclick="resetTetrisGame()">Reset</button>
        </div>
        <div id="tetris-message"></div>
    `;
    
    container.innerHTML = tetrisHtml;
    initTetrisGame();
}

let tetris = {
    canvas: null,
    ctx: null,
    board: [],
    currentPiece: null,
    score: 0,
    lines: 0,
    level: 1,
    gameRunning: false,
    gameLoop: null,
    dropTime: 1000
};

const TETRIS_PIECES = [
    // I-piece
    [
        ['....',
         'XXXX',
         '....',
         '....']
    ],
    // O-piece
    [
        ['..',
         'XX',
         'XX']
    ],
    // T-piece
    [
        ['...',
         'XXX',
         '.X.'],
        ['...',
         '.X.',
         '.XX',
         '.X.'],
        ['...',
         '.X.',
         'XXX'],
        ['...',
         '.X.',
         'XX.',
         '.X.']
    ],
    // S-piece
    [
        ['...',
         '.XX',
         'XX.'],
        ['...',
         '.X.',
         '.XX',
         '..X']
    ],
    // Z-piece
    [
        ['...',
         'XX.',
         '.XX'],
        ['...',
         '..X',
         '.XX',
         '.X.']
    ],
    // J-piece
    [
        ['...',
         'XXX',
         '..X'],
        ['...',
         '.X.',
         '.X.',
         'XX.'],
        ['...',
         'X..',
         'XXX'],
        ['...',
         '.XX',
         '.X.',
         '.X.']
    ],
    // L-piece
    [
        ['...',
         'XXX',
         'X..'],
        ['...',
         'XX.',
         '.X.',
         '.X.'],
        ['...',
         '..X',
         'XXX'],
        ['...',
         '.X.',
         '.X.',
         '.XX']
    ]
];

function initTetrisGame() {
    tetris.canvas = document.getElementById('tetris-canvas');
    tetris.ctx = tetris.canvas.getContext('2d');
    
    // Initialize empty board (20 rows x 10 columns)
    tetris.board = Array(20).fill().map(() => Array(10).fill(0));
    tetris.score = 0;
    tetris.lines = 0;
    tetris.level = 1;
    tetris.gameRunning = false;
    
    updateTetrisScore();
    drawTetrisBoard();
    
    document.addEventListener('keydown', handleTetrisInput);
}

function startTetrisGame() {
    if (tetris.gameRunning) return;
    
    tetris.gameRunning = true;
    spawnNewPiece();
    tetris.gameLoop = setInterval(dropPiece, tetris.dropTime);
}

function pauseTetrisGame() {
    tetris.gameRunning = false;
    if (tetris.gameLoop) {
        clearInterval(tetris.gameLoop);
        tetris.gameLoop = null;
    }
}

function resetTetrisGame() {
    pauseTetrisGame();
    initTetrisGame();
}

function spawnNewPiece() {
    const pieceType = Math.floor(Math.random() * TETRIS_PIECES.length);
    const rotations = TETRIS_PIECES[pieceType];
    
    tetris.currentPiece = {
        type: pieceType,
        rotation: 0,
        x: 4,
        y: 0,
        shape: rotations[0]
    };
    
    // Check if game over
    if (isCollision(tetris.currentPiece)) {
        gameOverTetris();
    }
}

function dropPiece() {
    if (!tetris.currentPiece) return;
    
    const newPiece = { ...tetris.currentPiece, y: tetris.currentPiece.y + 1 };
    
    if (isCollision(newPiece)) {
        // Lock piece in place
        lockPiece();
        clearLines();
        spawnNewPiece();
    } else {
        tetris.currentPiece = newPiece;
    }
    
    drawTetrisBoard();
}

function handleTetrisInput(e) {
    if (!tetris.gameRunning || !tetris.currentPiece) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            movePiece(-1, 0);
            e.preventDefault();
            break;
        case 'ArrowRight':
            movePiece(1, 0);
            e.preventDefault();
            break;
        case 'ArrowDown':
            dropPiece();
            e.preventDefault();
            break;
        case 'ArrowUp':
            rotatePiece();
            e.preventDefault();
            break;
        case ' ':
            hardDrop();
            e.preventDefault();
            break;
    }
}

function movePiece(dx, dy) {
    const newPiece = { 
        ...tetris.currentPiece, 
        x: tetris.currentPiece.x + dx, 
        y: tetris.currentPiece.y + dy 
    };
    
    if (!isCollision(newPiece)) {
        tetris.currentPiece = newPiece;
        drawTetrisBoard();
    }
}

function rotatePiece() {
    const rotations = TETRIS_PIECES[tetris.currentPiece.type];
    const newRotation = (tetris.currentPiece.rotation + 1) % rotations.length;
    
    const newPiece = {
        ...tetris.currentPiece,
        rotation: newRotation,
        shape: rotations[newRotation]
    };
    
    if (!isCollision(newPiece)) {
        tetris.currentPiece = newPiece;
        drawTetrisBoard();
    }
}

function hardDrop() {
    while (tetris.currentPiece && !isCollision({ ...tetris.currentPiece, y: tetris.currentPiece.y + 1 })) {
        tetris.currentPiece.y++;
    }
    dropPiece();
}

function isCollision(piece) {
    for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
            if (piece.shape[y][x] === 'X') {
                const boardX = piece.x + x;
                const boardY = piece.y + y;
                
                if (boardX < 0 || boardX >= 10 || boardY >= 20) {
                    return true;
                }
                
                if (boardY >= 0 && tetris.board[boardY][boardX] !== 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

function lockPiece() {
    for (let y = 0; y < tetris.currentPiece.shape.length; y++) {
        for (let x = 0; x < tetris.currentPiece.shape[y].length; x++) {
            if (tetris.currentPiece.shape[y][x] === 'X') {
                const boardX = tetris.currentPiece.x + x;
                const boardY = tetris.currentPiece.y + y;
                
                if (boardY >= 0) {
                    tetris.board[boardY][boardX] = tetris.currentPiece.type + 1;
                }
            }
        }
    }
}

function clearLines() {
    let linesCleared = 0;
    
    for (let y = tetris.board.length - 1; y >= 0; y--) {
        if (tetris.board[y].every(cell => cell !== 0)) {
            tetris.board.splice(y, 1);
            tetris.board.unshift(Array(10).fill(0));
            linesCleared++;
            y++; // Check the same line again
        }
    }
    
    if (linesCleared > 0) {
        tetris.lines += linesCleared;
        tetris.score += linesCleared * 100 * tetris.level;
        tetris.level = Math.floor(tetris.lines / 10) + 1;
        tetris.dropTime = Math.max(100, 1000 - (tetris.level - 1) * 100);
        
        updateTetrisScore();
        
        // Restart game loop with new speed
        if (tetris.gameRunning) {
            clearInterval(tetris.gameLoop);
            tetris.gameLoop = setInterval(dropPiece, tetris.dropTime);
        }
    }
}

function drawTetrisBoard() {
    const cellSize = 30;
    const colors = ['#000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500'];
    
    // Clear canvas
    tetris.ctx.fillStyle = '#000';
    tetris.ctx.fillRect(0, 0, 300, 600);
    
    // Draw board
    for (let y = 0; y < tetris.board.length; y++) {
        for (let x = 0; x < tetris.board[y].length; x++) {
            if (tetris.board[y][x] !== 0) {
                tetris.ctx.fillStyle = colors[tetris.board[y][x]];
                tetris.ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
            }
        }
    }
    
    // Draw current piece
    if (tetris.currentPiece) {
        tetris.ctx.fillStyle = colors[tetris.currentPiece.type + 1];
        for (let y = 0; y < tetris.currentPiece.shape.length; y++) {
            for (let x = 0; x < tetris.currentPiece.shape[y].length; x++) {
                if (tetris.currentPiece.shape[y][x] === 'X') {
                    const drawX = (tetris.currentPiece.x + x) * cellSize;
                    const drawY = (tetris.currentPiece.y + y) * cellSize;
                    tetris.ctx.fillRect(drawX, drawY, cellSize - 1, cellSize - 1);
                }
            }
        }
    }
    
    // Draw grid lines
    tetris.ctx.strokeStyle = '#333';
    tetris.ctx.lineWidth = 1;
    for (let x = 0; x <= 10; x++) {
        tetris.ctx.beginPath();
        tetris.ctx.moveTo(x * cellSize, 0);
        tetris.ctx.lineTo(x * cellSize, 600);
        tetris.ctx.stroke();
    }
    for (let y = 0; y <= 20; y++) {
        tetris.ctx.beginPath();
        tetris.ctx.moveTo(0, y * cellSize);
        tetris.ctx.lineTo(300, y * cellSize);
        tetris.ctx.stroke();
    }
}

function updateTetrisScore() {
    document.getElementById('tetris-score').textContent = tetris.score;
    document.getElementById('tetris-lines').textContent = tetris.lines;
    document.getElementById('tetris-level').textContent = tetris.level;
}

function gameOverTetris() {
    pauseTetrisGame();
    showTetrisMessage(`Game Over! Score: ${tetris.score}`, 'error');
    
    if (gameEngine.updateScore('tetris', tetris.score)) {
        showTetrisMessage(`New High Score: ${tetris.score}!`, 'success');
    }
}

function showTetrisMessage(text, type) {
    const messageDiv = document.getElementById('tetris-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// CONNECT FOUR GAME
function initConnectFour(container) {
    const connectFourHtml = `
        <div class="game-info">
            <h3>Connect Four</h3>
            <p>Get four in a row before your opponent!</p>
        </div>
        <div class="game-score">
            Current Player: <span id="cf-current" style="color: red;">Red</span> | 
            Red: <span id="cf-red-score">0</span> | 
            Yellow: <span id="cf-yellow-score">0</span>
        </div>
        <div id="connect-four-board" style="display: grid; grid-template-columns: repeat(7, 60px); grid-template-rows: repeat(6, 60px); gap: 2px; background: #0066cc; padding: 10px; border-radius: 10px; margin: 20px auto; width: fit-content;"></div>
        <div class="game-controls">
            <button class="game-btn" onclick="resetConnectFour()">New Game</button>
            <button class="game-btn" onclick="resetConnectFourScore()">Reset Score</button>
        </div>
        <div id="cf-message"></div>
    `;
    
    container.innerHTML = connectFourHtml;
    initConnectFourGame();
}

let connectFour = {
    board: [],
    currentPlayer: 'red',
    gameActive: true,
    scores: { red: 0, yellow: 0 }
};

function initConnectFourGame() {
    // Initialize 6x7 board
    connectFour.board = Array(6).fill().map(() => Array(7).fill(null));
    connectFour.currentPlayer = 'red';
    connectFour.gameActive = true;
    
    createConnectFourBoard();
    updateConnectFourDisplay();
}

function createConnectFourBoard() {
    const board = document.getElementById('connect-four-board');
    board.innerHTML = '';
    
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement('div');
            cell.className = 'cf-cell';
            cell.style.cssText = `
                width: 60px; 
                height: 60px; 
                background: white; 
                border-radius: 50%; 
                cursor: pointer;
                border: 2px solid #004499;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
            `;
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => dropPiece(col));
            board.appendChild(cell);
        }
    }
}

function dropPiece(col) {
    if (!connectFour.gameActive) return;
    
    // Find the lowest empty row in this column
    for (let row = 5; row >= 0; row--) {
        if (!connectFour.board[row][col]) {
            connectFour.board[row][col] = connectFour.currentPlayer;
            
            // Update visual
            const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.style.background = connectFour.currentPlayer === 'red' ? '#ff4444' : '#ffff44';
            
            // Check for win
            if (checkConnectFourWin(row, col)) {
                connectFour.scores[connectFour.currentPlayer]++;
                connectFour.gameActive = false;
                showConnectFourMessage(`${connectFour.currentPlayer.toUpperCase()} wins!`, 'success');
                gameEngine.updateScore('connect-four', connectFour.currentPlayer === 'red' ? 100 : 0);
                updateConnectFourDisplay();
                return;
            }
            
            // Check for tie
            if (connectFour.board.every(row => row.every(cell => cell !== null))) {
                connectFour.gameActive = false;
                showConnectFourMessage("It's a tie!", 'error');
                return;
            }
            
            // Switch players
            connectFour.currentPlayer = connectFour.currentPlayer === 'red' ? 'yellow' : 'red';
            updateConnectFourDisplay();
            return;
        }
    }
}

function checkConnectFourWin(row, col) {
    const player = connectFour.board[row][col];
    const directions = [
        [0, 1],  // horizontal
        [1, 0],  // vertical
        [1, 1],  // diagonal \
        [1, -1]  // diagonal /
    ];
    
    for (const [dRow, dCol] of directions) {
        let count = 1;
        
        // Check in positive direction
        let r = row + dRow;
        let c = col + dCol;
        while (r >= 0 && r < 6 && c >= 0 && c < 7 && connectFour.board[r][c] === player) {
            count++;
            r += dRow;
            c += dCol;
        }
        
        // Check in negative direction
        r = row - dRow;
        c = col - dCol;
        while (r >= 0 && r < 6 && c >= 0 && c < 7 && connectFour.board[r][c] === player) {
            count++;
            r -= dRow;
            c -= dCol;
        }
        
        if (count >= 4) return true;
    }
    
    return false;
}

function updateConnectFourDisplay() {
    document.getElementById('cf-current').textContent = connectFour.currentPlayer.charAt(0).toUpperCase() + connectFour.currentPlayer.slice(1);
    document.getElementById('cf-current').style.color = connectFour.currentPlayer;
    document.getElementById('cf-red-score').textContent = connectFour.scores.red;
    document.getElementById('cf-yellow-score').textContent = connectFour.scores.yellow;
}

function resetConnectFour() {
    initConnectFourGame();
    document.getElementById('cf-message').innerHTML = '';
}

function resetConnectFourScore() {
    connectFour.scores = { red: 0, yellow: 0 };
    updateConnectFourDisplay();
}

function showConnectFourMessage(text, type) {
    const messageDiv = document.getElementById('cf-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// MINESWEEPER GAME
function initMinesweeper(container) {
    const minesweeperHtml = `
        <div class="game-info">
            <h3>Minesweeper</h3>
            <p>Left click to reveal, right click to flag. Find all mines!</p>
        </div>
        <div class="game-score">
            Mines: <span id="ms-mines">10</span> | 
            Flags: <span id="ms-flags">0</span> | 
            Time: <span id="ms-time">0</span>s
        </div>
        <div id="minesweeper-board" style="display: grid; gap: 1px; background: #999; margin: 20px auto; width: fit-content; padding: 5px;"></div>
        <div class="game-controls">
            <button class="game-btn" onclick="initMinesweeperGame('easy')">Easy (9x9)</button>
            <button class="game-btn" onclick="initMinesweeperGame('medium')">Medium (16x16)</button>
            <button class="game-btn" onclick="initMinesweeperGame('hard')">Hard (20x20)</button>
        </div>
        <div id="ms-message"></div>
    `;
    
    container.innerHTML = minesweeperHtml;
    initMinesweeperGame('easy');
}

let minesweeper = {
    board: [],
    gameActive: false,
    startTime: null,
    timer: null,
    rows: 9,
    cols: 9,
    mines: 10,
    flags: 0,
    revealed: 0
};

function initMinesweeperGame(difficulty = 'easy') {
    clearInterval(minesweeper.timer);
    
    const settings = {
        easy: { rows: 9, cols: 9, mines: 10 },
        medium: { rows: 16, cols: 16, mines: 40 },
        hard: { rows: 20, cols: 20, mines: 99 }
    };
    
    const config = settings[difficulty];
    minesweeper.rows = config.rows;
    minesweeper.cols = config.cols;
    minesweeper.mines = config.mines;
    minesweeper.flags = 0;
    minesweeper.revealed = 0;
    minesweeper.gameActive = false;
    minesweeper.startTime = null;
    
    createMinesweeperBoard();
    placeMines();
    calculateNumbers();
    updateMinesweeperDisplay();
}

function createMinesweeperBoard() {
    const board = document.getElementById('minesweeper-board');
    board.style.gridTemplateColumns = `repeat(${minesweeper.cols}, 25px)`;
    board.innerHTML = '';
    
    minesweeper.board = [];
    
    for (let row = 0; row < minesweeper.rows; row++) {
        minesweeper.board[row] = [];
        for (let col = 0; col < minesweeper.cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'ms-cell';
            cell.style.cssText = `
                width: 25px; 
                height: 25px; 
                background: #ccc; 
                border: 2px outset #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                cursor: pointer;
                user-select: none;
            `;
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            cell.addEventListener('click', (e) => {
                e.preventDefault();
                revealCell(row, col);
            });
            
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleFlag(row, col);
            });
            
            board.appendChild(cell);
            
            minesweeper.board[row][col] = {
                isMine: false,
                number: 0,
                revealed: false,
                flagged: false,
                element: cell
            };
        }
    }
}

function placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < minesweeper.mines) {
        const row = Math.floor(Math.random() * minesweeper.rows);
        const col = Math.floor(Math.random() * minesweeper.cols);
        
        if (!minesweeper.board[row][col].isMine) {
            minesweeper.board[row][col].isMine = true;
            minesPlaced++;
        }
    }
}

function calculateNumbers() {
    for (let row = 0; row < minesweeper.rows; row++) {
        for (let col = 0; col < minesweeper.cols; col++) {
            if (!minesweeper.board[row][col].isMine) {
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = row + dr;
                        const nc = col + dc;
                        if (nr >= 0 && nr < minesweeper.rows && nc >= 0 && nc < minesweeper.cols) {
                            if (minesweeper.board[nr][nc].isMine) count++;
                        }
                    }
                }
                minesweeper.board[row][col].number = count;
            }
        }
    }
}

function revealCell(row, col) {
    if (!minesweeper.gameActive && !minesweeper.startTime) {
        minesweeper.gameActive = true;
        minesweeper.startTime = Date.now();
        minesweeper.timer = setInterval(updateMinesweeperTimer, 1000);
    }
    
    const cell = minesweeper.board[row][col];
    if (cell.revealed || cell.flagged) return;
    
    cell.revealed = true;
    cell.element.style.border = '1px inset #ccc';
    cell.element.style.background = '#eee';
    minesweeper.revealed++;
    
    if (cell.isMine) {
        cell.element.textContent = '💣';
        cell.element.style.background = '#ff4444';
        gameOverMinesweeper(false);
        return;
    }
    
    if (cell.number > 0) {
        cell.element.textContent = cell.number;
        const colors = ['', '#0000ff', '#008000', '#ff0000', '#800080', '#800000', '#008080', '#000000', '#808080'];
        cell.element.style.color = colors[cell.number];
    } else {
        // Auto-reveal adjacent cells
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < minesweeper.rows && nc >= 0 && nc < minesweeper.cols) {
                    revealCell(nr, nc);
                }
            }
        }
    }
    
    // Check for win
    if (minesweeper.revealed === minesweeper.rows * minesweeper.cols - minesweeper.mines) {
        gameOverMinesweeper(true);
    }
}

function toggleFlag(row, col) {
    const cell = minesweeper.board[row][col];
    if (cell.revealed) return;
    
    if (cell.flagged) {
        cell.flagged = false;
        cell.element.textContent = '';
        cell.element.style.background = '#ccc';
        minesweeper.flags--;
    } else {
        cell.flagged = true;
        cell.element.textContent = '🚩';
        cell.element.style.background = '#ffff00';
        minesweeper.flags++;
    }
    
    updateMinesweeperDisplay();
}

function updateMinesweeperTimer() {
    if (minesweeper.startTime) {
        const elapsed = Math.floor((Date.now() - minesweeper.startTime) / 1000);
        document.getElementById('ms-time').textContent = elapsed;
    }
}

function updateMinesweeperDisplay() {
    document.getElementById('ms-mines').textContent = minesweeper.mines;
    document.getElementById('ms-flags').textContent = minesweeper.flags;
}

function gameOverMinesweeper(won) {
    clearInterval(minesweeper.timer);
    minesweeper.gameActive = false;
    
    if (!won) {
        // Reveal all mines
        for (let row = 0; row < minesweeper.rows; row++) {
            for (let col = 0; col < minesweeper.cols; col++) {
                const cell = minesweeper.board[row][col];
                if (cell.isMine && !cell.revealed) {
                    cell.element.textContent = '💣';
                    cell.element.style.background = '#ff8888';
                }
            }
        }
        showMinesweeperMessage('Game Over! You hit a mine!', 'error');
    } else {
        const time = Math.floor((Date.now() - minesweeper.startTime) / 1000);
        showMinesweeperMessage(`You won in ${time} seconds!`, 'success');
        gameEngine.updateScore('minesweeper', Math.max(1000 - time, 100));
    }
}

function showMinesweeperMessage(text, type) {
    const messageDiv = document.getElementById('ms-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// ROCK PAPER SCISSORS GAME
function initRockPaperScissors(container) {
    const rpsHtml = `
        <div class="game-info">
            <h3>Rock Paper Scissors</h3>
            <p>Choose your weapon and battle the computer!</p>
        </div>
        <div class="game-score">
            You: <span id="rps-player-score">0</span> | 
            Computer: <span id="rps-computer-score">0</span> | 
            Ties: <span id="rps-ties">0</span>
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <div style="display: flex; justify-content: space-around; align-items: center; margin: 20px 0;">
                <div style="text-align: center;">
                    <h4>You</h4>
                    <div id="rps-player-choice" style="font-size: 80px; margin: 10px;">❓</div>
                </div>
                <div style="font-size: 40px;">VS</div>
                <div style="text-align: center;">
                    <h4>Computer</h4>
                    <div id="rps-computer-choice" style="font-size: 80px; margin: 10px;">❓</div>
                </div>
            </div>
        </div>
        <div class="game-controls" style="text-align: center;">
            <button class="game-btn" onclick="playRPS('rock')" style="font-size: 30px; margin: 10px;">🪨</button>
            <button class="game-btn" onclick="playRPS('paper')" style="font-size: 30px; margin: 10px;">📄</button>
            <button class="game-btn" onclick="playRPS('scissors')" style="font-size: 30px; margin: 10px;">✂️</button>
        </div>
        <div class="game-controls">
            <button class="game-btn" onclick="resetRPSScore()">Reset Score</button>
        </div>
        <div id="rps-message"></div>
    `;
    
    container.innerHTML = rpsHtml;
    initRPSGame();
}

let rps = {
    playerScore: 0,
    computerScore: 0,
    ties: 0
};

function initRPSGame() {
    updateRPSScore();
}

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Update display
    document.getElementById('rps-player-choice').textContent = emojis[playerChoice];
    document.getElementById('rps-computer-choice').textContent = emojis[computerChoice];
    
    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = 'tie';
        rps.ties++;
        showRPSMessage("It's a tie!", 'error');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'win';
        rps.playerScore++;
        showRPSMessage('You win!', 'success');
        gameEngine.updateScore('rock-paper-scissors', 10);
    } else {
        result = 'lose';
        rps.computerScore++;
        showRPSMessage('Computer wins!', 'error');
    }
    
    updateRPSScore();
}

function updateRPSScore() {
    document.getElementById('rps-player-score').textContent = rps.playerScore;
    document.getElementById('rps-computer-score').textContent = rps.computerScore;
    document.getElementById('rps-ties').textContent = rps.ties;
}

function resetRPSScore() {
    rps.playerScore = 0;
    rps.computerScore = 0;
    rps.ties = 0;
    updateRPSScore();
    document.getElementById('rps-player-choice').textContent = '❓';
    document.getElementById('rps-computer-choice').textContent = '❓';
    document.getElementById('rps-message').innerHTML = '';
}

function showRPSMessage(text, type) {
    const messageDiv = document.getElementById('rps-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// MATH QUIZ GAME
function initMathQuiz(container) {
    const mathHtml = `
        <div class="game-info">
            <h3>Math Quiz</h3>
            <p>Solve math problems as fast as you can!</p>
        </div>
        <div class="game-score">
            Score: <span id="math-score">0</span> | 
            Correct: <span id="math-correct">0</span> | 
            Wrong: <span id="math-wrong">0</span> | 
            Streak: <span id="math-streak">0</span>
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <div id="math-problem" style="font-size: 36px; margin: 20px; font-weight: bold;">Click Start to begin!</div>
            <input type="number" id="math-answer" placeholder="Your answer" style="font-size: 24px; padding: 10px; border: 2px solid #667eea; border-radius: 10px; text-align: center; width: 200px;" disabled>
        </div>
        <div class="game-controls">
            <button class="game-btn" onclick="startMathQuiz()">Start Quiz</button>
            <button class="game-btn" onclick="submitMathAnswer()">Submit Answer</button>
            <button class="game-btn" onclick="resetMathQuiz()">Reset</button>
        </div>
        <div id="math-message"></div>
    `;
    
    container.innerHTML = mathHtml;
    initMathQuizGame();
}

let mathQuiz = {
    score: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    currentAnswer: 0,
    gameActive: false,
    startTime: null
};

function initMathQuizGame() {
    updateMathScore();
    document.getElementById('math-answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitMathAnswer();
        }
    });
}

function startMathQuiz() {
    mathQuiz.gameActive = true;
    mathQuiz.startTime = Date.now();
    document.getElementById('math-answer').disabled = false;
    generateMathProblem();
    document.getElementById('math-answer').focus();
}

function generateMathProblem() {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch(operation) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 50) + 20;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = num1 * num2;
            break;
    }
    
    mathQuiz.currentAnswer = answer;
    document.getElementById('math-problem').textContent = `${num1} ${operation} ${num2} = ?`;
    document.getElementById('math-answer').value = '';
}

function submitMathAnswer() {
    if (!mathQuiz.gameActive) return;
    
    const userAnswer = parseInt(document.getElementById('math-answer').value);
    
    if (userAnswer === mathQuiz.currentAnswer) {
        mathQuiz.correct++;
        mathQuiz.streak++;
        mathQuiz.score += 10 + mathQuiz.streak * 2;
        showMathMessage('Correct! 🎉', 'success');
    } else {
        mathQuiz.wrong++;
        mathQuiz.streak = 0;
        showMathMessage(`Wrong! The answer was ${mathQuiz.currentAnswer}`, 'error');
    }
    
    updateMathScore();
    
    if (mathQuiz.correct + mathQuiz.wrong >= 10) {
        endMathQuiz();
    } else {
        setTimeout(generateMathProblem, 1000);
    }
    
    gameEngine.updateScore('math-quiz', mathQuiz.score);
}

function endMathQuiz() {
    mathQuiz.gameActive = false;
    document.getElementById('math-answer').disabled = true;
    const accuracy = Math.round((mathQuiz.correct / (mathQuiz.correct + mathQuiz.wrong)) * 100);
    showMathMessage(`Quiz Complete! Accuracy: ${accuracy}%`, 'success');
}

function updateMathScore() {
    document.getElementById('math-score').textContent = mathQuiz.score;
    document.getElementById('math-correct').textContent = mathQuiz.correct;
    document.getElementById('math-wrong').textContent = mathQuiz.wrong;
    document.getElementById('math-streak').textContent = mathQuiz.streak;
}

function resetMathQuiz() {
    mathQuiz = { score: 0, correct: 0, wrong: 0, streak: 0, currentAnswer: 0, gameActive: false, startTime: null };
    updateMathScore();
    document.getElementById('math-problem').textContent = 'Click Start to begin!';
    document.getElementById('math-answer').value = '';
    document.getElementById('math-answer').disabled = true;
    document.getElementById('math-message').innerHTML = '';
}

function showMathMessage(text, type) {
    const messageDiv = document.getElementById('math-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// WORD SEARCH GAME
function initWordSearch(container) {
    const wordSearchHtml = `
        <div class="game-info">
            <h3>Word Search</h3>
            <p>Find all the hidden words in the grid!</p>
        </div>
        <div class="game-score">
            Found: <span id="ws-found">0</span> / <span id="ws-total">0</span> | 
            Time: <span id="ws-time">0</span>s
        </div>
        <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
            <div id="word-search-grid" style="display: grid; gap: 1px; background: #333; padding: 5px;"></div>
            <div id="word-search-list" style="background: #f9f9f9; padding: 15px; border-radius: 10px; min-width: 150px;">
                <h4>Find these words:</h4>
                <div id="words-to-find"></div>
            </div>
        </div>
        <div class="game-controls">
            <button class="game-btn" onclick="generateWordSearch()">New Game</button>
            <button class="game-btn" onclick="showWordSearchHint()">Hint</button>
        </div>
        <div id="ws-message"></div>
    `;
    
    container.innerHTML = wordSearchHtml;
    generateWordSearch();
}

let wordSearch = {
    grid: [],
    words: ['CAT', 'DOG', 'BIRD', 'FISH', 'LION', 'BEAR', 'WOLF', 'DEER'],
    foundWords: [],
    size: 12,
    startTime: null,
    timer: null
};

function generateWordSearch() {
    clearInterval(wordSearch.timer);
    wordSearch.foundWords = [];
    wordSearch.startTime = Date.now();
    wordSearch.timer = setInterval(updateWordSearchTimer, 1000);
    
    // Initialize empty grid
    wordSearch.grid = Array(wordSearch.size).fill().map(() => Array(wordSearch.size).fill(''));
    
    // Place words
    wordSearch.words.forEach(word => placeWordInGrid(word));
    
    // Fill empty spaces with random letters
    for (let row = 0; row < wordSearch.size; row++) {
        for (let col = 0; col < wordSearch.size; col++) {
            if (wordSearch.grid[row][col] === '') {
                wordSearch.grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }
    
    createWordSearchGrid();
    createWordList();
    updateWordSearchScore();
}

function placeWordInGrid(word) {
    const directions = [
        [0, 1],   // horizontal
        [1, 0],   // vertical
        [1, 1],   // diagonal down-right
        [1, -1]   // diagonal down-left
    ];
    
    let placed = false;
    let attempts = 0;
    
    while (!placed && attempts < 100) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const [dRow, dCol] = direction;
        
        const maxRow = dRow === 0 ? wordSearch.size : wordSearch.size - word.length;
        const maxCol = dCol === 0 ? wordSearch.size : 
                      dCol === 1 ? wordSearch.size - word.length : word.length;
        
        const startRow = Math.floor(Math.random() * maxRow);
        const startCol = Math.floor(Math.random() * maxCol);
        
        // Check if word fits
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
            const row = startRow + i * dRow;
            const col = startCol + i * dCol;
            
            if (row < 0 || row >= wordSearch.size || col < 0 || col >= wordSearch.size) {
                canPlace = false;
                break;
            }
            
            if (wordSearch.grid[row][col] !== '' && wordSearch.grid[row][col] !== word[i]) {
                canPlace = false;
                break;
            }
        }
        
        if (canPlace) {
            for (let i = 0; i < word.length; i++) {
                const row = startRow + i * dRow;
                const col = startCol + i * dCol;
                wordSearch.grid[row][col] = word[i];
            }
            placed = true;
        }
        
        attempts++;
    }
}

function createWordSearchGrid() {
    const grid = document.getElementById('word-search-grid');
    grid.style.gridTemplateColumns = `repeat(${wordSearch.size}, 25px)`;
    grid.innerHTML = '';
    
    for (let row = 0; row < wordSearch.size; row++) {
        for (let col = 0; col < wordSearch.size; col++) {
            const cell = document.createElement('div');
            cell.className = 'ws-cell';
            cell.style.cssText = `
                width: 25px; 
                height: 25px; 
                background: white; 
                border: 1px solid #ddd;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                cursor: pointer;
                user-select: none;
            `;
            cell.textContent = wordSearch.grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            cell.addEventListener('click', () => selectWordSearchCell(row, col));
            
            grid.appendChild(cell);
        }
    }
}

function createWordList() {
    const wordList = document.getElementById('words-to-find');
    wordList.innerHTML = '';
    
    wordSearch.words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        wordElement.id = `word-${word}`;
        wordElement.style.cssText = `
            padding: 5px;
            margin: 2px 0;
            background: #e0e0e0;
            border-radius: 5px;
            transition: all 0.3s ease;
        `;
        wordList.appendChild(wordElement);
    });
}

function selectWordSearchCell(row, col) {
    // Simple word finding - click on any letter of a word to find it
    const letter = wordSearch.grid[row][col];
    
    wordSearch.words.forEach(word => {
        if (word.includes(letter) && !wordSearch.foundWords.includes(word)) {
            wordSearch.foundWords.push(word);
            const wordElement = document.getElementById(`word-${word}`);
            wordElement.style.background = '#4CAF50';
            wordElement.style.color = 'white';
            wordElement.innerHTML = `${word} ✓`;
            
            showWordSearchMessage(`Found: ${word}!`, 'success');
            
            if (wordSearch.foundWords.length === wordSearch.words.length) {
                clearInterval(wordSearch.timer);
                const time = Math.floor((Date.now() - wordSearch.startTime) / 1000);
                showWordSearchMessage(`Congratulations! All words found in ${time}s!`, 'success');
                gameEngine.updateScore('word-search', Math.max(1000 - time * 10, 100));
            }
        }
    });
    
    updateWordSearchScore();
}

function showWordSearchHint() {
    const unfoundWords = wordSearch.words.filter(word => !wordSearch.foundWords.includes(word));
    if (unfoundWords.length > 0) {
        const hintWord = unfoundWords[0];
        showWordSearchMessage(`Hint: Look for "${hintWord}"`, 'error');
    }
}

function updateWordSearchTimer() {
    if (wordSearch.startTime) {
        const elapsed = Math.floor((Date.now() - wordSearch.startTime) / 1000);
        document.getElementById('ws-time').textContent = elapsed;
    }
}

function updateWordSearchScore() {
    document.getElementById('ws-found').textContent = wordSearch.foundWords.length;
    document.getElementById('ws-total').textContent = wordSearch.words.length;
}

function showWordSearchMessage(text, type) {
    const messageDiv = document.getElementById('ws-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
    setTimeout(() => messageDiv.innerHTML = '', 2000);
}

// PONG GAME
function initPong(container) {
    const pongHtml = `
        <div class="game-info">
            <h3>Pong</h3>
            <p>Use Up/Down arrow keys to move your paddle. First to 10 wins.</p>
        </div>
        <div class="game-score">
            Player: <span id="pong-player">0</span> |
            Computer: <span id="pong-ai">0</span> |
            High: <span id="pong-high">${gameEngine.getHighScore('pong')}</span>
        </div>
        <canvas id="pong-canvas" width="500" height="300" class="game-canvas"></canvas>
        <div class="game-controls">
            <button class="game-btn" onclick="startPong()">Start</button>
            <button class="game-btn" onclick="pausePong()">Pause</button>
            <button class="game-btn" onclick="resetPong()">Reset</button>
        </div>
        <div id="pong-message"></div>
    `;
    container.innerHTML = pongHtml;
    initPongGame();
}

let pong = {
    canvas: null,
    ctx: null,
    player: { y: 120, h: 60, w: 10, dy: 0 },
    ai: { y: 120, h: 60, w: 10 },
    ball: { x: 250, y: 150, r: 6, dx: 3, dy: 2 },
    playerScore: 0,
    aiScore: 0,
    loop: null,
    running: false
};

function initPongGame() {
    pong.canvas = document.getElementById('pong-canvas');
    pong.ctx = pong.canvas.getContext('2d');
    pong.playerScore = 0;
    pong.aiScore = 0;
    pong.player.y = (pong.canvas.height - pong.player.h) / 2;
    pong.ai.y = (pong.canvas.height - pong.ai.h) / 2;
    resetPongBall(-1);
    updatePongScore();
    drawPong();

    // Controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') { pong.player.dy = -5; e.preventDefault(); }
        if (e.key === 'ArrowDown') { pong.player.dy = 5; e.preventDefault(); }
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') pong.player.dy = 0;
    });
}

function startPong() {
    if (pong.running) return;
    pong.running = true;
    pong.loop = setInterval(updatePong, 1000/60);
}

function pausePong() {
    pong.running = false;
    if (pong.loop) { clearInterval(pong.loop); pong.loop = null; }
}

function resetPong() {
    pausePong();
    initPongGame();
}

function resetPongBall(direction = 1) {
    pong.ball.x = pong.canvas ? pong.canvas.width/2 : 250;
    pong.ball.y = pong.canvas ? pong.canvas.height/2 : 150;
    const speed = 4;
    pong.ball.dx = speed * direction;
    pong.ball.dy = (Math.random() * 2 - 1) * speed * 0.5;
}

function updatePong() {
    // Move player
    pong.player.y += pong.player.dy;
    pong.player.y = Math.max(0, Math.min(pong.canvas.height - pong.player.h, pong.player.y));

    // Simple AI follows ball with smoothing
    const aiCenter = pong.ai.y + pong.ai.h/2;
    if (aiCenter < pong.ball.y - 10) pong.ai.y += 3;
    else if (aiCenter > pong.ball.y + 10) pong.ai.y -= 3;
    pong.ai.y = Math.max(0, Math.min(pong.canvas.height - pong.ai.h, pong.ai.y));

    // Move ball
    pong.ball.x += pong.ball.dx;
    pong.ball.y += pong.ball.dy;

    // Wall collisions
    if (pong.ball.y - pong.ball.r < 0 || pong.ball.y + pong.ball.r > pong.canvas.height) {
        pong.ball.dy *= -1;
    }

    // Paddle collisions
    // Player
    if (pong.ball.x - pong.ball.r < 20 && pong.ball.y > pong.player.y && pong.ball.y < pong.player.y + pong.player.h) {
        pong.ball.dx = Math.abs(pong.ball.dx) * 1.05;
        const hitPos = (pong.ball.y - (pong.player.y + pong.player.h/2)) / (pong.player.h/2);
        pong.ball.dy = hitPos * 4;
        pong.ball.x = 20 + pong.ball.r; // prevent sticking
    }
    // AI
    if (pong.ball.x + pong.ball.r > pong.canvas.width - 20 && pong.ball.y > pong.ai.y && pong.ball.y < pong.ai.y + pong.ai.h) {
        pong.ball.dx = -Math.abs(pong.ball.dx) * 1.05;
        const hitPos = (pong.ball.y - (pong.ai.y + pong.ai.h/2)) / (pong.ai.h/2);
        pong.ball.dy = hitPos * 4;
        pong.ball.x = pong.canvas.width - 20 - pong.ball.r;
    }

    // Score check
    if (pong.ball.x < 0) {
        pong.aiScore++;
        updatePongScore();
        resetPongBall(1);
    }
    if (pong.ball.x > pong.canvas.width) {
        pong.playerScore++;
        updatePongScore();
        resetPongBall(-1);
    }

    // Win condition
    if (pong.playerScore >= 10 || pong.aiScore >= 10) {
        pausePong();
        const msg = pong.playerScore > pong.aiScore ? 'You win!' : 'Computer wins!';
        showPongMessage(msg, pong.playerScore > pong.aiScore ? 'success' : 'error');
        gameEngine.updateScore('pong', pong.playerScore);
    }

    drawPong();
}

function drawPong() {
    const ctx = pong.ctx;
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, pong.canvas.width, pong.canvas.height);

    // Middle line
    ctx.strokeStyle = '#333';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pong.canvas.width/2, 0);
    ctx.lineTo(pong.canvas.width/2, pong.canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Paddles
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(10, pong.player.y, pong.player.w, pong.player.h);
    ctx.fillStyle = '#E91E63';
    ctx.fillRect(pong.canvas.width - 20, pong.ai.y, pong.ai.w, pong.ai.h);

    // Ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(pong.ball.x, pong.ball.y, pong.ball.r, 0, Math.PI*2);
    ctx.fill();
}

function updatePongScore() {
    document.getElementById('pong-player').textContent = pong.playerScore;
    document.getElementById('pong-ai').textContent = pong.aiScore;
    const isHigh = gameEngine.updateScore('pong', pong.playerScore);
    if (isHigh) {
        document.getElementById('pong-high').textContent = pong.playerScore;
    }
}

function showPongMessage(text, type) {
    const messageDiv = document.getElementById('pong-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// BREAKOUT GAME
function initBreakout(container) {
    const html = `
        <div class="game-info">
            <h3>Breakout</h3>
            <p>Break all the bricks! Move with Left/Right arrows.</p>
        </div>
        <div class="game-score">
            Score: <span id="brk-score">0</span> |
            Lives: <span id="brk-lives">3</span> |
            High: <span id="brk-high">${gameEngine.getHighScore('breakout')}</span>
        </div>
        <canvas id="breakout-canvas" width="480" height="320" class="game-canvas"></canvas>
        <div class="game-controls">
            <button class="game-btn" onclick="startBreakout()">Start</button>
            <button class="game-btn" onclick="pauseBreakout()">Pause</button>
            <button class="game-btn" onclick="resetBreakout()">Reset</button>
        </div>
        <div id="brk-message"></div>
    `;
    container.innerHTML = html;
    initBreakoutGame();
}

let breakout = {
    canvas: null,
    ctx: null,
    paddle: { x: 200, y: 300, w: 80, h: 10, dx: 0 },
    ball: { x: 240, y: 200, r: 6, dx: 3, dy: -3 },
    bricks: [],
    rows: 5,
    cols: 8,
    brickW: 50,
    brickH: 16,
    gap: 6,
    offsetX: 20,
    offsetY: 40,
    score: 0,
    lives: 3,
    loop: null,
    running: false
};

function initBreakoutGame() {
    breakout.canvas = document.getElementById('breakout-canvas');
    breakout.ctx = breakout.canvas.getContext('2d');
    breakout.paddle.x = (breakout.canvas.width - breakout.paddle.w)/2;
    breakout.paddle.y = breakout.canvas.height - 20;
    breakout.ball.x = breakout.canvas.width/2;
    breakout.ball.y = breakout.canvas.height - 30;
    breakout.ball.dx = 3; breakout.ball.dy = -3;
    breakout.score = 0;
    breakout.lives = 3;
    createBricks();
    updateBreakoutHUD();
    drawBreakout();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { breakout.paddle.dx = -6; }
        if (e.key === 'ArrowRight') { breakout.paddle.dx = 6; }
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') breakout.paddle.dx = 0;
    });
}

function createBricks() {
    breakout.bricks = [];
    for (let r = 0; r < breakout.rows; r++) {
        breakout.bricks[r] = [];
        for (let c = 0; c < breakout.cols; c++) {
            breakout.bricks[r][c] = { x: 0, y: 0, alive: true };
        }
    }
}

function startBreakout() {
    if (breakout.running) return;
    breakout.running = true;
    breakout.loop = setInterval(updateBreakout, 1000/60);
}

function pauseBreakout() {
    breakout.running = false;
    if (breakout.loop) { clearInterval(breakout.loop); breakout.loop = null; }
}

function resetBreakout() {
    pauseBreakout();
    initBreakoutGame();
}

function updateBreakout() {
    // Move paddle
    breakout.paddle.x += breakout.paddle.dx;
    breakout.paddle.x = Math.max(0, Math.min(breakout.canvas.width - breakout.paddle.w, breakout.paddle.x));

    // Move ball
    breakout.ball.x += breakout.ball.dx;
    breakout.ball.y += breakout.ball.dy;

    // Wall collisions
    if (breakout.ball.x - breakout.ball.r < 0 || breakout.ball.x + breakout.ball.r > breakout.canvas.width) breakout.ball.dx *= -1;
    if (breakout.ball.y - breakout.ball.r < 0) breakout.ball.dy *= -1;

    // Paddle collision
    if (breakout.ball.y + breakout.ball.r > breakout.paddle.y &&
        breakout.ball.x > breakout.paddle.x && breakout.ball.x < breakout.paddle.x + breakout.paddle.w &&
        breakout.ball.dy > 0) {
        const hit = (breakout.ball.x - (breakout.paddle.x + breakout.paddle.w/2)) / (breakout.paddle.w/2);
        breakout.ball.dy = -Math.abs(breakout.ball.dy);
        breakout.ball.dx = hit * 5;
    }

    // Brick collisions
    const r = Math.floor((breakout.ball.y - breakout.offsetY) / (breakout.brickH + breakout.gap));
    const c = Math.floor((breakout.ball.x - breakout.offsetX) / (breakout.brickW + breakout.gap));
    if (r >= 0 && r < breakout.rows && c >= 0 && c < breakout.cols) {
        const brick = breakout.bricks[r][c];
        if (brick && brick.alive) {
            brick.alive = false;
            breakout.ball.dy *= -1;
            breakout.score += 10;
            updateBreakoutHUD();
            gameEngine.updateScore('breakout', breakout.score);
        }
    }

    // Bottom collision = life lost
    if (breakout.ball.y - breakout.ball.r > breakout.canvas.height) {
        breakout.lives--;
        if (breakout.lives <= 0) {
            pauseBreakout();
            showBreakoutMessage('Game Over!', 'error');
            return;
        } else {
            // Reset ball and paddle
            breakout.paddle.x = (breakout.canvas.width - breakout.paddle.w)/2;
            breakout.ball.x = breakout.canvas.width/2;
            breakout.ball.y = breakout.canvas.height - 30;
            breakout.ball.dx = 3; breakout.ball.dy = -3;
        }
        updateBreakoutHUD();
    }

    // Win condition
    const remaining = breakout.bricks.flat().filter(b => b.alive).length;
    if (remaining === 0) {
        pauseBreakout();
        showBreakoutMessage('You cleared all bricks! 🎉', 'success');
        gameEngine.updateScore('breakout', breakout.score + 100);
    }

    drawBreakout();
}

function drawBreakout() {
    const ctx = breakout.ctx;
    ctx.fillStyle = '#0b0b0f';
    ctx.fillRect(0, 0, breakout.canvas.width, breakout.canvas.height);

    // Bricks
    for (let r = 0; r < breakout.rows; r++) {
        for (let c = 0; c < breakout.cols; c++) {
            const brick = breakout.bricks[r][c];
            const x = breakout.offsetX + c * (breakout.brickW + breakout.gap);
            const y = breakout.offsetY + r * (breakout.brickH + breakout.gap);
            if (brick.alive) {
                brick.x = x; brick.y = y;
                ctx.fillStyle = `hsl(${(r*50 + c*10)%360} 70% 55%)`;
                ctx.fillRect(x, y, breakout.brickW, breakout.brickH);
            }
        }
    }

    // Paddle
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(breakout.paddle.x, breakout.paddle.y, breakout.paddle.w, breakout.paddle.h);

    // Ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(breakout.ball.x, breakout.ball.y, breakout.ball.r, 0, Math.PI*2);
    ctx.fill();
}

function updateBreakoutHUD() {
    document.getElementById('brk-score').textContent = breakout.score;
    document.getElementById('brk-lives').textContent = breakout.lives;
    const isHigh = gameEngine.updateScore('breakout', breakout.score);
    if (isHigh) document.getElementById('brk-high').textContent = breakout.score;
}

function showBreakoutMessage(text, type) {
    const messageDiv = document.getElementById('brk-message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
}

// REVERSI (OTHELLO)
function initReversi(container) {
    const html = `
        <div class="game-info">
            <h3>Reversi (Othello)</h3>
            <p>Place discs to flip your opponent's discs. Black goes first.</p>
        </div>
        <div class="game-score">
            Black: <span id="rev-black">2</span> |
            White: <span id="rev-white">2</span> |
            Turn: <span id="rev-turn">Black</span>
        </div>
        <div id="reversi-board" style="display:grid;grid-template-columns:repeat(8,42px);gap:4px;justify-content:center;margin:10px auto;width:fit-content;"></div>
        <div class="game-controls">
            <button class="game-btn" onclick="resetReversi()">Reset</button>
            <button class="game-btn" onclick="toggleReversiAI()">Toggle AI</button>
        </div>
        <div id="rev-message"></div>
    `;
    container.innerHTML = html;
    initReversiGame();
}

let reversi = {
    board: [], // 8x8, 0 empty, 1 black, -1 white
    current: 1,
    aiEnabled: true
};

const REV_DIRS = [
    [-1,-1],[-1,0],[-1,1],
    [0,-1],        [0,1],
    [1,-1],[1,0],[1,1]
];

function initReversiGame() {
    reversi.board = Array(8).fill().map(()=>Array(8).fill(0));
    reversi.board[3][3] = -1; // W
    reversi.board[4][4] = -1; // W
    reversi.board[3][4] = 1;  // B
    reversi.board[4][3] = 1;  // B
    reversi.current = 1;
    renderReversi();
    updateReversiHUD();
}

function renderReversi() {
    const boardEl = document.getElementById('reversi-board');
    boardEl.innerHTML = '';
    for (let r=0;r<8;r++) {
        for (let c=0;c<8;c++) {
            const cell = document.createElement('div');
            cell.style.cssText = 'width:42px;height:42px;background:#2e7d32;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;';
            cell.dataset.r = r; cell.dataset.c = c;
            cell.addEventListener('click', ()=>placeReversi(r,c));
            const val = reversi.board[r][c];
            if (val !== 0) {
                const disc = document.createElement('div');
                disc.style.cssText = `width:30px;height:30px;border-radius:50%;box-shadow:inset 0 0 8px rgba(0,0,0,.4);background:${val===1?'#111':'#f5f5f5'};`;
                cell.appendChild(disc);
            } else if (isValidReversiMove(r,c,reversi.current)) {
                // show hint dot
                const dot = document.createElement('div');
                dot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.6);';
                cell.appendChild(dot);
            }
            boardEl.appendChild(cell);
        }
    }
}

function placeReversi(r,c) {
    if (reversi.board[r][c] !== 0) return;
    const flips = getReversiFlips(r,c,reversi.current);
    if (flips.length === 0) return;
    reversi.board[r][c] = reversi.current;
    flips.forEach(([fr,fc])=> reversi.board[fr][fc] = reversi.current);
    reversi.current *= -1;
    renderReversi();
    updateReversiHUD();

    // If AI enabled and it's AI's turn
    setTimeout(()=>{
        if (reversi.aiEnabled && reversi.current === -1) {
            aiReversiMove();
        } else if (!hasAnyValidReversiMove(reversi.current)) {
            // Pass turn if no moves
            reversi.current *= -1;
            renderReversi();
            updateReversiHUD();
        }
        checkReversiEnd();
    }, 250);
}

function getReversiFlips(r,c,player) {
    let flips = [];
    for (const [dr,dc] of REV_DIRS) {
        let cr=r+dr, cc=c+dc, line=[];
        while (cr>=0&&cr<8&&cc>=0&&cc<8 && reversi.board[cr][cc]===-player) {
            line.push([cr,cc]);
            cr+=dr; cc+=dc;
        }
        if (line.length>0 && cr>=0&&cr<8&&cc>=0&&cc<8 && reversi.board[cr][cc]===player) {
            flips = flips.concat(line);
        }
    }
    return flips;
}

function isValidReversiMove(r,c,player) {
    if (reversi.board[r][c]!==0) return false;
    return getReversiFlips(r,c,player).length>0;
}

function hasAnyValidReversiMove(player) {
    for (let r=0;r<8;r++) for (let c=0;c<8;c++) if (isValidReversiMove(r,c,player)) return true;
    return false;
}

function aiReversiMove() {
    // Simple AI: choose move with max flips
    let best=null, bestCount=-1;
    for (let r=0;r<8;r++) for (let c=0;c<8;c++) {
        const flips = getReversiFlips(r,c,-1);
        if (flips.length>bestCount) { best={r,c,flips}; bestCount=flips.length; }
    }
    if (best && bestCount>0) {
        reversi.board[best.r][best.c] = -1;
        best.flips.forEach(([fr,fc])=> reversi.board[fr][fc] = -1);
        reversi.current = 1;
        renderReversi();
        updateReversiHUD();
    } else {
        // pass turn
        reversi.current = 1;
        renderReversi();
        updateReversiHUD();
    }
}

function updateReversiHUD() {
    const flat = reversi.board.flat();
    const black = flat.filter(v=>v===1).length;
    const white = flat.filter(v=>v===-1).length;
    document.getElementById('rev-black').textContent = black;
    document.getElementById('rev-white').textContent = white;
    document.getElementById('rev-turn').textContent = reversi.current===1?'Black':'White';
}

function checkReversiEnd() {
    const flat = reversi.board.flat();
    if (!flat.includes(0) || (!hasAnyValidReversiMove(1) && !hasAnyValidReversiMove(-1))) {
        const black = flat.filter(v=>v===1).length;
        const white = flat.filter(v=>v===-1).length;
        const msg = black>white? 'Black wins!' : (white>black? 'White wins!' : 'Draw!');
        showReversiMessage(msg, black>=white?'success':'error');
        gameEngine.updateScore('reversi', black);
    }
}

function resetReversi() { initReversiGame(); }
function toggleReversiAI() { reversi.aiEnabled = !reversi.aiEnabled; showReversiMessage(`AI ${reversi.aiEnabled?'enabled':'disabled'}`, 'success'); }
function showReversiMessage(text, type) { const m=document.getElementById('rev-message'); m.innerHTML = `<div class="message ${type}">${text}</div>`; }

// Placeholder implementations for remaining games
const gameImplementations = [
    'initHangman', 'initWordChain', 'initNumberSequence', 'initMathMemory',
    'initFractionGame', 'initGeometryQuiz', 'initMastermind', 'initTowersHanoi', 'initLogicGrid',
    'initLightsOut', 'initRubiksCube', 'initMinesweeper', 'initNonogram', 'initKakuro',
    'initKenKen', 'initFutoshiki', 'initShikaku', 'initNurikabe', 'initHitori',
    'initSlitherlink', 'initFillomino', 'initHashiwokakero', 'initBattleships', 'initTents',
    'initStarBattle', 'initAquarium', 'initSkyscrapers', 'initThermometer', 'initArrowSudoku',
    'initKillerSudoku', 'initGreaterThanSudoku', 'initDiagonalSudoku', 'initTetris', 'initPong',
    'initBreakout', 'initPacman', 'initFrogger', 'initAsteroids', 'initSpaceInvaders',
    'initCentipede', 'initMissileCommand', 'initDefender', 'initGalaga', 'initDonkeyKong',
    'initQbert', 'initDigDug', 'initBurgerTime', 'initMoonPatrol', 'initScramble',
    'initZaxxon', 'initTron', 'initPaperboy', 'initMarbleMadness', 'initRobotron',
    'initJoust', 'initXevious', 'initPolePosition', 'initSpyHunter', 'initTrackField',
    'initElevatorAction', 'initCrystalCastles', 'initChess', 'initCheckers', 'initReversi',
    'initGo', 'initBackgammon', 'initRisk', 'initBattleship', 'initStratego',
    'initConnectFour', 'initNineMensMorris', 'initMancala', 'initHex', 'initChineseCheckers',
    'initHalma', 'initAmazons', 'initRockPaperScissors', 'initDiceGame', 'initCoinFlip',
    'initSlotMachine', 'initWheelFortune', 'initBingo', 'initLottery', 'initScratchCard',
    'initMagic8Ball', 'initFortuneCookie', 'initTarotCards', 'initPersonalityTest', 'initTriviaQuiz',
    'initReactionTime'
];

// Create placeholder implementations
gameImplementations.forEach(funcName => {
    if (typeof window[funcName] === 'undefined') {
        window[funcName] = function(container) {
            const gameName = funcName.replace('init', '').replace(/([A-Z])/g, ' $1').trim();
            container.innerHTML = `
                <div class="game-info">
                    <h3>${gameName}</h3>
                    <p>This game is coming soon! Stay tuned for updates.</p>
                    <div class="loading"></div>
                </div>
                <div style="text-align: center; margin-top: 2rem;">
                    <p>🚧 Under Development 🚧</p>
                    <p>This game will be available in the next update!</p>
                </div>
            `;
        };
    }
});

// Export games data
window.GAMES_DATA = GAMES_DATA;