"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startsWith = startsWith;
exports.addPrefix = addPrefix;
exports.removePrefix = removePrefix;
exports.subStyleProps = subStyleProps;
exports.subObject = subObject;
exports.omitStyleProps = omitStyleProps;
exports.replacePrefix = replacePrefix;
const util_1 = require("@antv/util");
/**
 * <zh/> 是否以某个前缀开头
 *
 * <en/> Whether starts with prefix
 * @param str - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 是否以某个前缀开头 | <en/> whether starts with prefix
 */
function startsWith(str, prefix) {
    if (!str.startsWith(prefix))
        return false;
    const nextChart = str[prefix.length];
    return nextChart >= 'A' && nextChart <= 'Z';
}
/**
 * <zh/> 添加前缀
 *
 * <en/> Add prefix
 * @param str - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 添加前缀后的字符串 | <en/> string with prefix
 */
function addPrefix(str, prefix) {
    return `${prefix}${(0, util_1.upperFirst)(str)}`;
}
/**
 * <zh/> 移除前缀
 *
 * <en/> Remove prefix
 * @param string - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @param lowercaseFirstLetter - <zh/> 是否小写首字母 | <en/> whether lowercase first letter
 * @returns <zh/> 移除前缀后的字符串 | <en/> string without prefix
 */
function removePrefix(string, prefix, lowercaseFirstLetter = true) {
    if (!prefix)
        return string;
    if (!startsWith(string, prefix))
        return string;
    const str = string.slice(prefix.length);
    return lowercaseFirstLetter ? (0, util_1.lowerFirst)(str) : str;
}
/**
 * <zh/> 从样式中提取子样式
 *
 * <en/> Extract sub style from style
 * @param style - <zh/> 样式 | <en/> style
 * @param prefix - <zh/> 子样式前缀 | <en/> sub style prefix
 * @returns <zh/> 子样式 | <en/> sub style
 */
function subStyleProps(style, prefix) {
    const subStyle = Object.entries(style).reduce((acc, [key, value]) => {
        if (key === 'className' || key === 'class')
            return acc;
        if (startsWith(key, prefix)) {
            Object.assign(acc, { [removePrefix(key, prefix)]: value });
        }
        return acc;
    }, {});
    // 向下传递透明度，但避免覆盖子样式中的透明度属性
    // Pass down opacity, but avoid overwriting the opacity property in the sub-style
    if ('opacity' in style) {
        const subOpacityKey = addPrefix('opacity', prefix);
        const opacity = style.opacity;
        if (subOpacityKey in style) {
            const subOpacity = style[subOpacityKey];
            Object.assign(subStyle, { opacity: opacity * subOpacity });
        }
        else
            Object.assign(subStyle, { opacity });
    }
    return subStyle;
}
/**
 * <zh/> 从对象中提取指定前缀的属性，并移除前缀
 *
 * <en/> Extract properties with the specified prefix from the object and remove the prefix
 * @param obj - <zh/> 对象 | <en/> object
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 新对象 | <en/> new object
 */
function subObject(obj, prefix) {
    const prefixLength = prefix.length;
    return Object.keys(obj).reduce((acc, key) => {
        if (key.startsWith(prefix)) {
            const newKey = key.slice(prefixLength);
            acc[newKey] = obj[key];
        }
        return acc;
    }, {});
}
/**
 * <zh/> 从样式中排除子样式
 *
 * <en/> Omit sub style from style
 * @param style - <zh/> 样式 | <en/> style
 * @param prefix - <zh/> 子样式前缀 | <en/> sub style prefix
 * @returns <zh/> 排除子样式后的样式 | <en/> style without sub style
 */
function omitStyleProps(style, prefix) {
    const prefixArray = typeof prefix === 'string' ? [prefix] : prefix;
    const omitStyle = {};
    Object.keys(style).forEach((key) => {
        if (!prefixArray.find((p) => key.startsWith(p))) {
            omitStyle[key] = style[key];
        }
    });
    return omitStyle;
}
/**
 * <zh/> 替换前缀
 *
 * <en/> Replace prefix
 * @param style - <zh/> 样式 | <en/> style
 * @param oldPrefix - <zh/> 旧前缀 | <en/> old prefix
 * @param newPrefix - <zh/> 新前缀 | <en/> new prefix
 * @returns <zh/> 替换前缀后的样式 | <en/> style with replaced prefix
 */
function replacePrefix(style, oldPrefix, newPrefix) {
    return Object.entries(style).reduce((acc, [key, value]) => {
        if (startsWith(key, oldPrefix)) {
            acc[addPrefix(removePrefix(key, oldPrefix, false), newPrefix)] = value;
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=prefix.js.map