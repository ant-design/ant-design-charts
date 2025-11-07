"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureTextHeight = exports.measureTextWidth = exports.measureText = void 0;
var lodash_1 = require("lodash");
var context_1 = require("./context");
/**
 * 计算文本在画布中的相关信息（例如它的宽度）
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/measureText
 */
exports.measureText = (0, lodash_1.memoize)(function (text, font) {
    if (font === void 0) { font = {}; }
    var fontSize = font.fontSize, _a = font.fontFamily, fontFamily = _a === void 0 ? 'sans-serif' : _a, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
    var ctx = (0, context_1.getCanvasContext)();
    // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
    ctx.font = [fontStyle, fontWeight, fontVariant, "".concat(fontSize, "px"), fontFamily].join(' ');
    return ctx.measureText((0, lodash_1.isString)(text) ? text : '');
}, function (text, font) {
    if (font === void 0) { font = {}; }
    return __spreadArray([text], (0, lodash_1.values)(font), true).join('');
});
/**
 * 计算文本在画布中的宽度
 * @param text 文本
 * @param font 字体
 */
var measureTextWidth = function (text, font) {
    if (font === void 0) { font = {}; }
    return (0, exports.measureText)(text, font).width;
};
exports.measureTextWidth = measureTextWidth;
/**
 * 计算文本在画布中的实际高度
 * @param text 文本
 * @param font 字体
 */
var measureTextHeight = function (text, font) {
    if (font === void 0) { font = {}; }
    var metrics = (0, exports.measureText)(text, font);
    return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
};
exports.measureTextHeight = measureTextHeight;
