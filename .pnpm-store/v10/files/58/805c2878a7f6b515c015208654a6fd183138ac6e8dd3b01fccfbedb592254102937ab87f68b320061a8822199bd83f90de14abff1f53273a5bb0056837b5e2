import { __spreadArrays } from "tslib";
import values from './values';
import memoize from './memoize';
import isString from './is-string';
var ctx;
/**
 * 计算文本的宽度
 */
export default memoize(function (text, font) {
    if (font === void 0) { font = {}; }
    var fontSize = font.fontSize, fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
    if (!ctx) {
        ctx = document.createElement('canvas').getContext('2d');
    }
    ctx.font = [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(' ');
    return ctx.measureText(isString(text) ? text : '').width;
}, function (text, font) {
    if (font === void 0) { font = {}; }
    return __spreadArrays([text], values(font)).join('');
});
//# sourceMappingURL=measure-text-width.js.map