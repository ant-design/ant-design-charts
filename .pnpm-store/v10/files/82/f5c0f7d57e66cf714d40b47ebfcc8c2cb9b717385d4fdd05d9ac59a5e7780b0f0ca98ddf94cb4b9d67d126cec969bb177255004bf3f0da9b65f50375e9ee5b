"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simple = exports.triangleRect = exports.rect = exports.vee = exports.diamond = exports.triangle = exports.circle = void 0;
/**
 * ○
 */
const circle = (width, height) => {
    const r = Math.max(width, height) / 2;
    return [['M', -width / 2, 0], ['A', r, r, 0, 1, 0, 2 * r - width / 2, 0], ['A', r, r, 0, 1, 0, -width / 2, 0], ['Z']];
};
exports.circle = circle;
/**
 * ▷
 */
const triangle = (width, height) => {
    return [['M', -width / 2, 0], ['L', width / 2, -height / 2], ['L', width / 2, height / 2], ['Z']];
};
exports.triangle = triangle;
/**
 * ◇
 */
const diamond = (width, height) => {
    return [['M', -width / 2, 0], ['L', 0, -height / 2], ['L', width / 2, 0], ['L', 0, height / 2], ['Z']];
};
exports.diamond = diamond;
/**
 * >>
 */
const vee = (width, height) => {
    return [
        ['M', -width / 2, 0],
        ['L', width / 2, -height / 2],
        ['L', (4 * width) / 5 - width / 2, 0],
        ['L', width / 2, height / 2],
        ['Z'],
    ];
};
exports.vee = vee;
/**
 * □
 */
const rect = (width, height) => {
    return [
        ['M', -width / 2, -height / 2],
        ['L', width / 2, -height / 2],
        ['L', width / 2, height / 2],
        ['L', -width / 2, height / 2],
        ['Z'],
    ];
};
exports.rect = rect;
/**
 * □▷
 */
const triangleRect = (width, height) => {
    const tWidth = width / 2;
    const rWidth = width / 7;
    const rBeginX = width - rWidth;
    return [
        ['M', -tWidth, 0],
        ['L', 0, -height / 2],
        ['L', 0, height / 2],
        ['Z'],
        ['M', rBeginX - tWidth, -height / 2],
        ['L', rBeginX + rWidth - tWidth, -height / 2],
        ['L', rBeginX + rWidth - tWidth, height / 2],
        ['L', rBeginX - tWidth, height / 2],
        ['Z'],
    ];
};
exports.triangleRect = triangleRect;
/**
 * >
 */
const simple = (width, height) => {
    return [
        ['M', width / 2, -height / 2],
        ['L', -width / 2, 0],
        ['L', width / 2, 0],
        ['L', -width / 2, 0],
        ['L', width / 2, height / 2],
    ];
};
exports.simple = simple;
//# sourceMappingURL=symbol.js.map