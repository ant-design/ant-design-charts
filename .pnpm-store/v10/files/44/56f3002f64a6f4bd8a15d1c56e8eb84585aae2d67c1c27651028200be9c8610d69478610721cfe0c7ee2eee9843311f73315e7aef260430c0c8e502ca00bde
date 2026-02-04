"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cancelAnimationFrame;
function cancelAnimationFrame(handler) {
    var method = window.cancelAnimationFrame ||
        // @ts-ignore
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        clearTimeout;
    method(handler);
}
//# sourceMappingURL=clear-animation-frame.js.map