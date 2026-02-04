var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isString, memoize, values } from 'lodash';
import { getCanvasContext } from './context';
/**
 * 计算文本在画布中的相关信息（例如它的宽度）
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/measureText
 */
export var measureText = memoize(function (text, font) {
    if (font === void 0) { font = {}; }
    var fontSize = font.fontSize, _a = font.fontFamily, fontFamily = _a === void 0 ? 'sans-serif' : _a, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
    var ctx = getCanvasContext();
    // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
    ctx.font = [fontStyle, fontWeight, fontVariant, "".concat(fontSize, "px"), fontFamily].join(' ');
    return ctx.measureText(isString(text) ? text : '');
}, function (text, font) {
    if (font === void 0) { font = {}; }
    return __spreadArray([text], values(font), true).join('');
});
/**
 * 计算文本在画布中的宽度
 * @param text 文本
 * @param font 字体
 */
export var measureTextWidth = function (text, font) {
    if (font === void 0) { font = {}; }
    return measureText(text, font).width;
};
/**
 * 计算文本在画布中的实际高度
 * @param text 文本
 * @param font 字体
 */
export var measureTextHeight = function (text, font) {
    if (font === void 0) { font = {}; }
    var metrics = measureText(text, font);
    return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
};
