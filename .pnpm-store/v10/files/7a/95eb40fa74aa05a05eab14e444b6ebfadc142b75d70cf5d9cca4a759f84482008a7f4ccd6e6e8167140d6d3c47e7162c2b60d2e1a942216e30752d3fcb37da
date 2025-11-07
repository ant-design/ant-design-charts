"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradient = gradient;
var rgb2arr_1 = require("./rgb2arr");
var arr2rgb_1 = require("./arr2rgb");
var torgb_1 = require("./torgb");
/**
 * 获取颜色之间的插值
 * @param start
 * @param end
 * @param percent
 * @param index
 * @returns
 */
function getValue(start, end, percent, index) {
    return start[index] + (end[index] - start[index]) * percent;
}
/**
 * 计算颜色
 * @param points
 * @param percent
 * @returns
 */
function calColor(points, percent) {
    var fixedPercent = isNaN(Number(percent)) || percent < 0 ? 0 : percent > 1 ? 1 : Number(percent);
    var steps = points.length - 1;
    var step = Math.floor(steps * fixedPercent);
    var left = steps * fixedPercent - step;
    var start = points[step];
    var end = step === steps ? start : points[step + 1];
    return (0, arr2rgb_1.arr2rgb)([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
}
/**
 * 获取渐变函数
 * @param colors 多个颜色
 * @return 颜色值
 */
function gradient(colors) {
    var colorArray = typeof colors === 'string' ? colors.split('-') : colors;
    var points = colorArray.map(function (color) {
        return (0, rgb2arr_1.rgb2arr)(color.indexOf('#') === -1 ? (0, torgb_1.toRGB)(color) : color);
    });
    // 返回一个函数
    return function (percent) {
        return calColor(points, percent);
    };
}
//# sourceMappingURL=gradient.js.map