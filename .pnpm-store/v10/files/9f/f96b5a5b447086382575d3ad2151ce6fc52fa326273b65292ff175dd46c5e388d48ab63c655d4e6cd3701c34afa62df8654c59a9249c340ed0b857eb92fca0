"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var values_1 = require("./values");
var memoize_1 = require("./memoize");
var is_string_1 = require("./is-string");
var ctx;
/**
 * 计算文本的宽度
 */
exports.default = memoize_1.default(function (text, font) {
    if (font === void 0) { font = {}; }
    var fontSize = font.fontSize, fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
    if (!ctx) {
        ctx = document.createElement('canvas').getContext('2d');
    }
    ctx.font = [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(' ');
    return ctx.measureText(is_string_1.default(text) ? text : '').width;
}, function (text, font) {
    if (font === void 0) { font = {}; }
    return tslib_1.__spreadArrays([text], values_1.default(font)).join('');
});
//# sourceMappingURL=measure-text-width.js.map