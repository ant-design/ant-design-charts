export default function cancelAnimationFrame(handler) {
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