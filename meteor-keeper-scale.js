(function () {
    'use strict';

    // The game draws in 360x520 logical coordinates on a 720x1040 backing canvas.
    // Apply the scale immediately after initialization, before the first animation frame.
    const originalInit = window.initMeteorKeeper;
    if (typeof originalInit !== 'function') return;

    window.initMeteorKeeper = function initMeteorKeeperScaled(container) {
        originalInit(container);
        const canvas = container.querySelector('#mk-canvas');
        const context = canvas && canvas.getContext('2d');
        if (context) context.setTransform(2, 0, 0, 2, 0, 0);
    };
})();