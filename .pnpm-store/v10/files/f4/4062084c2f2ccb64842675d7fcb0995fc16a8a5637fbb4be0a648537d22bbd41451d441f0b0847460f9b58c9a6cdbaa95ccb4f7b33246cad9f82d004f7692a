"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.string2rbg = void 0;
const color_string_1 = __importDefault(require("color-string"));
function hue2rgb(p, q, m) {
    let t = m;
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hsl2rbg(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const a = hsl[3];
    if (s === 0)
        return [l * 255, l * 255, l * 255, a];
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return [r * 255, g * 255, b * 255, a];
}
function string2rbg(s) {
    const color = color_string_1.default.get(s);
    if (!color)
        return null;
    const { model, value } = color;
    if (model === 'rgb')
        return value;
    if (model === 'hsl')
        return hsl2rbg(value);
    return null;
}
exports.string2rbg = string2rbg;
//# sourceMappingURL=color.js.map