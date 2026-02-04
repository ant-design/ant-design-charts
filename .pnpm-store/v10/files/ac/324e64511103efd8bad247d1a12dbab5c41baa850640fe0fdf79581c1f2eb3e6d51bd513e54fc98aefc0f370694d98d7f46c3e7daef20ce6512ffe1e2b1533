"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInterpolateRound = exports.createInterpolateValue = exports.createInterpolateColor = exports.createInterpolateNumber = void 0;
const color_1 = require("./color");
/**
 * 返回一个线性插值器，接受数字
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
const createInterpolateNumber = (a, b) => {
    return (t) => a * (1 - t) + b * t;
};
exports.createInterpolateNumber = createInterpolateNumber;
const createInterpolateColor = (a, b) => {
    const c1 = (0, color_1.string2rbg)(a);
    const c2 = (0, color_1.string2rbg)(b);
    if (c1 === null || c2 === null)
        return c1 ? () => a : () => b;
    return (t) => {
        const values = new Array(4);
        for (let i = 0; i < 4; i += 1) {
            const from = c1[i];
            const to = c2[i];
            values[i] = from * (1 - t) + to * t;
        }
        const [r, g, b, a] = values;
        return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
    };
};
exports.createInterpolateColor = createInterpolateColor;
/**
 * 返回一个线性插值器，接受数字和颜色
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
const createInterpolateValue = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number')
        return (0, exports.createInterpolateNumber)(a, b);
    if (typeof a === 'string' && typeof b === 'string')
        return (0, exports.createInterpolateColor)(a, b);
    return () => a;
};
exports.createInterpolateValue = createInterpolateValue;
/**
 * 返回一个 round 线性差值器，对输出值进行四舍五入
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
const createInterpolateRound = (a, b) => {
    const interpolateNumber = (0, exports.createInterpolateNumber)(a, b);
    return (t) => Math.round(interpolateNumber(t));
};
exports.createInterpolateRound = createInterpolateRound;
//# sourceMappingURL=interpolate.js.map