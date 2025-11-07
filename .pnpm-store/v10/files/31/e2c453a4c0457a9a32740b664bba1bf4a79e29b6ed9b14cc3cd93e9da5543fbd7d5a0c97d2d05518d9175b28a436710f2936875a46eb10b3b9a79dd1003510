"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleToPixel = scaleToPixel;
/**
 * scale a shape to a given size
 */
function scaleToPixel(el, size, applyScale) {
    if (applyScale === void 0) { applyScale = false; }
    var _a = el.getBBox(), width = _a.width, height = _a.height;
    var scale = size / Math.max(width, height);
    if (applyScale) {
        el.style.transform = "scale(".concat(scale, ")");
    }
    return scale;
}
//# sourceMappingURL=scale-to-pixel.js.map