"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFont = exports.measureTextWidth = void 0;
exports.setMockMeasureTextWidth = setMockMeasureTextWidth;
exports.textOf = textOf;
exports.applyToText = applyToText;
var g_1 = require("@antv/g");
var util_1 = require("@antv/util");
var ctx;
var mockMeasureTextWidth;
function setMockMeasureTextWidth(mock) {
    mockMeasureTextWidth = mock;
}
/**
 * 计算文本在画布中的宽度
 */
exports.measureTextWidth = (0, util_1.memoize)(function (text, font) {
    var fontSize = font.fontSize, fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
    if (mockMeasureTextWidth) {
        return mockMeasureTextWidth(text, fontSize);
    }
    if (!ctx) {
        // @ts-ignore
        ctx = g_1.runtime.offscreenCanvasCreator.getOrCreateContext(undefined);
    }
    ctx.font = [fontStyle, fontVariant, fontWeight, "".concat(fontSize, "px"), fontFamily].join(' ');
    return ctx.measureText(text).width;
}, function (text, font) { return [text, Object.values(font || (0, exports.getFont)(text)).join()].join(''); }, 4096);
var getFont = function (textShape) {
    var fontFamily = textShape.style.fontFamily || 'sans-serif';
    var fontWeight = textShape.style.fontWeight || 'normal';
    var fontStyle = textShape.style.fontStyle || 'normal';
    var fontVariant = textShape.style.fontVariant;
    var fontSize = textShape.style.fontSize;
    fontSize = typeof fontSize === 'object' ? fontSize.value : fontSize;
    return { fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight, fontStyle: fontStyle, fontVariant: fontVariant };
};
exports.getFont = getFont;
function textOf(node) {
    if (node.nodeName === 'text') {
        return node;
    }
    if (node.nodeName === 'g' && node.children.length === 1 && node.children[0].nodeName === 'text') {
        return node.children[0];
    }
    return null;
}
function applyToText(node, style) {
    var text = textOf(node);
    if (text)
        text.attr(style);
}
//# sourceMappingURL=text.js.map