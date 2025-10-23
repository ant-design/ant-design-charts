"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = requestAnimationFrame;
function requestAnimationFrame(fn) {
    var method = window.requestAnimationFrame ||
        // @ts-ignore
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
//# sourceMappingURL=request-animation-frame.js.map