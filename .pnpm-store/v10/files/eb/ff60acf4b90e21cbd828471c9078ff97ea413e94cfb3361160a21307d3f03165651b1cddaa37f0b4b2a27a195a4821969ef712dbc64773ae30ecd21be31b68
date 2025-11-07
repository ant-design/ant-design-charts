"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyStyleSheet = applyStyleSheet;
exports.subStyleProps = subStyleProps;
exports.superStyleProps = superStyleProps;
exports.splitStyle = splitStyle;
var tslib_1 = require("tslib");
var string_1 = require("./string");
/**
 * 对给定HTML对象应用给定样式
 * @param style {[key: string]: Object}
 * 样式表参考结构
 * {
 *  '.selector': {
 *   'attrName': 'attr',
 *   'padding': '0 0 0 0',
 *   'background-color': 'red'
 *  }
 * }
 */
function applyStyleSheet(element, style) {
    Object.entries(style).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), selector = _b[0], styleString = _b[1];
        // apply styles to element and children
        tslib_1.__spreadArray([element], tslib_1.__read(element.querySelectorAll(selector)), false).filter(function (el) { return el.matches(selector); })
            .forEach(function (target) {
            if (!target)
                return;
            var temp = target;
            temp.style.cssText += Object.entries(styleString).reduce(function (total, currVal) {
                return "".concat(total).concat(currVal.join(':'), ";");
            }, '');
        });
    });
}
var startsWith = function (text, prefix) {
    if (!(text === null || text === void 0 ? void 0 : text.startsWith(prefix)))
        return false;
    var nextChart = text[prefix.length];
    return nextChart >= 'A' && nextChart <= 'Z';
};
function subStyleProps(style, prefix, invert) {
    if (invert === void 0) { invert = false; }
    var result = {};
    Object.entries(style).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        // never transfer class property
        if (key === 'className' || key === 'class') {
            // do nothing
        }
        // @example showHandle -> showHandle, showHandleLabel -> showLabel
        else if (startsWith(key, 'show') && startsWith((0, string_1.removePrefix)(key, 'show'), prefix) !== invert) {
            if (key === (0, string_1.addPrefix)(prefix, 'show'))
                result[key] = value;
            else
                result[key.replace(new RegExp((0, string_1.toUppercaseFirstLetter)(prefix)), '')] = value;
        }
        // @example navFormatter -> formatter
        else if (!startsWith(key, 'show') && startsWith(key, prefix) !== invert) {
            var name_1 = (0, string_1.removePrefix)(key, prefix);
            // don't transfer filter if it represents “过滤器”
            if (name_1 === 'filter' && typeof value === 'function') {
                // do nothing
            }
            else
                result[name_1] = value;
        }
    });
    return result;
}
function superStyleProps(style, prefix) {
    return Object.entries(style).reduce(function (acc, _a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        if (key.startsWith('show'))
            acc["show".concat(prefix).concat(key.slice(4))] = value;
        else
            acc["".concat(prefix).concat((0, string_1.toUppercaseFirstLetter)(key))] = value;
        return acc;
    }, {});
}
/**
 * extract group style from mixin style
 * @param style
 * @param ignoreStyleDict style will be ignore from style
 * @returns shape style and rest style
 */
function splitStyle(style, ignoreStyleDict) {
    if (ignoreStyleDict === void 0) { ignoreStyleDict = ['x', 'y', 'class', 'className']; }
    var groupStyleDict = [
        'transform',
        'transformOrigin',
        'anchor',
        'visibility',
        'pointerEvents',
        'zIndex',
        'cursor',
        'clipPath',
        'clipPathTargets',
        'offsetPath',
        'offsetPathTargets',
        'offsetDistance',
        'draggable',
        'droppable',
    ];
    var output = {};
    var groupStyle = {};
    Object.entries(style).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
        if (ignoreStyleDict.includes(key)) {
            // do nothing
        }
        else if (groupStyleDict.indexOf(key) !== -1)
            groupStyle[key] = val;
        else
            output[key] = val;
    });
    return [output, groupStyle];
}
//# sourceMappingURL=style.js.map