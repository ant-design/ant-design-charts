"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeElementCallbackStyle = computeElementCallbackStyle;
exports.mergeOptions = mergeOptions;
exports.getSubShapeStyle = getSubShapeStyle;
/**
 * <zh/> 计算支持回调的动态样式
 *
 * <en/> compute dynamic style that supports callback
 * @param callableStyle - <zh/> 动态样式 | <en/> dynamic style
 * @param context - <zh/> 样式计算迭代上下文 | <en/> style iteration context
 * @returns <zh/> 静态样式 | <en/> static style
 */
function computeElementCallbackStyle(callableStyle, context) {
    const { datum, graph } = context;
    if (typeof callableStyle === 'function')
        return callableStyle.call(graph, datum);
    return Object.fromEntries(Object.entries(callableStyle).map(([key, style]) => {
        if (typeof style === 'function')
            return [key, style.call(graph, datum)];
        return [key, style];
    }));
}
/**
 * <zh/> 合并图形配置项
 *
 * <en/> Merge shape configuration
 * @param defaultOptions - <zh/> 配置项1 | <en/> configuration 1
 * @param modifiedOptions - <zh/> 配置项2 | <en/> configuration 2
 * @returns <zh/> 合并后的配置项 | <en/> merged configuration
 */
function mergeOptions(defaultOptions, modifiedOptions) {
    const s1 = (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.style) || {};
    const s2 = (modifiedOptions === null || modifiedOptions === void 0 ? void 0 : modifiedOptions.style) || {};
    for (const key in s1) {
        if (!(key in s2))
            s2[key] = s1[key];
    }
    return Object.assign({}, defaultOptions, modifiedOptions, {
        style: s2,
    });
}
/**
 * <zh/> 获取图形子图形样式
 *
 * <en/> Get the style of the sub-shape of the shape
 * @param style - <zh/> 图形样式 | <en/> shape style
 * @returns <zh/> 子图形样式 | <en/> sub-shape style
 * @remarks
 * <zh/> 从给定的属性对象中提取图形样式属性。删除特定的属性，如位置、变换和类名
 *
 * <en/> Extracts the shape styles from a given attribute object.
 * Removes specific styles like position, transformation, and class name.
 */
function getSubShapeStyle(style) {
    const { x, y, z, class: cls, className, transform, transformOrigin, zIndex, visibility } = style, rest = __rest(style, ["x", "y", "z", "class", "className", "transform", "transformOrigin", "zIndex", "visibility"]);
    return rest;
}
//# sourceMappingURL=style.js.map