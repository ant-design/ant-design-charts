"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheStyle = cacheStyle;
exports.getCachedStyle = getCachedStyle;
exports.hasCachedStyle = hasCachedStyle;
exports.setCacheStyle = setCacheStyle;
const util_1 = require("@antv/util");
const CacheTargetKey = 'cachedStyle';
const getStyleCacheKey = (name) => `__${name}__`;
/**
 * <zh/> 缓存图形样式
 *
 * <en/> Cache shape style
 * @param element - <zh/> 图形元素 | <en/> shape element
 * @param name - <zh/> 样式名 | <en/> style name
 */
function cacheStyle(element, name) {
    const names = Array.isArray(name) ? name : [name];
    if (!(0, util_1.get)(element, CacheTargetKey))
        (0, util_1.set)(element, CacheTargetKey, {});
    names.forEach((n) => {
        (0, util_1.set)((0, util_1.get)(element, CacheTargetKey), getStyleCacheKey(n), element.attributes[n]);
    });
}
/**
 * <zh/> 获取缓存的样式
 *
 * <en/> Get cached style
 * @param element - <zh/> 图形元素 | <en/> shape element
 * @param name - <zh/> 样式名 | <en/> style name
 * @returns <zh/> 样式值 | <en/> style value
 */
function getCachedStyle(element, name) {
    return (0, util_1.get)(element, [CacheTargetKey, getStyleCacheKey(name)]);
}
/**
 * <zh/> 是否有缓存的样式
 *
 * <en/> Whether there is a cached style
 * @param element - <zh/> 图形元素 | <en/> shape element
 * @param name - <zh/> 样式名 | <en/> style name
 * @returns <zh/> 是否有缓存的样式 | <en/> Whether there is a cached style
 */
function hasCachedStyle(element, name) {
    return getStyleCacheKey(name) in ((0, util_1.get)(element, CacheTargetKey) || {});
}
/**
 * <zh/> 设置缓存的样式
 *
 * <en/> Set cached style
 * @param element - <zh/> 图形元素 | <en/> shape element
 * @param name - <zh/> 样式名 | <en/> style name
 * @param value - <zh/> 样式值 | <en/> style value
 */
function setCacheStyle(element, name, value) {
    (0, util_1.set)(element, [CacheTargetKey, getStyleCacheKey(name)], value);
}
//# sourceMappingURL=cache.js.map