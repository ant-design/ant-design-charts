"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contrast = contrast;
exports.mostContrast = mostContrast;
const d3_array_1 = require("@antv/vendor/d3-array");
const color_1 = require("../utils/color");
function getsRGB(s) {
    let c = s / 255;
    c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    return c;
}
function getL(r, g, b) {
    return 0.2126 * getsRGB(r) + 0.7152 * getsRGB(g) + 0.0722 * getsRGB(b);
}
/**
 * Calculate the contrast. see https://webaim.org/resources/contrastchecker/
 * @param foreground
 * @param background
 */
function contrast(foreground, background) {
    if (!foreground || !background || foreground === background)
        return 1;
    const { r, g, b } = foreground;
    const { r: rb, g: gb, b: bb } = background;
    const L1 = getL(r, g, b);
    const L2 = getL(rb, gb, bb);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
/**
 * Reverse color for max contrast.
 */
function mostContrast(color, palette) {
    const i = (0, d3_array_1.maxIndex)(palette, (c) => contrast(color, (0, color_1.parseToRGB)(c)));
    return palette[i];
}
//# sourceMappingURL=utils.js.map