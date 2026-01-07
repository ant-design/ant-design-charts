"use strict";
/**
 * Legend className utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLegendClassName = getLegendClassName;
exports.getClassNameFromAttrs = getClassNameFromAttrs;
/**
 * Generate legend className with optional prefix
 * @param baseClassName - Base className, e.g., 'title-text'
 * @param suffix - Suffix for prefixed className, e.g., 'title' -> '{prefix}legend-title'
 * @param classNamePrefix - Optional className prefix, e.g., 'g2-'
 * @returns Complete className, e.g., 'title-text g2-legend-title'
 *
 * @example
 * getLegendClassName('title-text', 'title', 'g2-')
 * // Returns: 'title-text g2-legend-title'
 */
function getLegendClassName(baseClassName, suffix, classNamePrefix) {
    if (!classNamePrefix)
        return baseClassName;
    return "".concat(baseClassName, " ").concat(classNamePrefix, "legend-").concat(suffix);
}
/**
 * Generate className from component attributes
 * @param attributes - Component attributes with classNamePrefix
 * @param baseClassName - CLASS_NAMES object, e.g., CLASS_NAMES.text
 * @param suffix - Suffix key from CLASSNAME_SUFFIX_MAP
 * @returns Complete className
 *
 * @example
 * getClassNameFromAttrs(this.attributes, CLASS_NAMES.text, 'title')
 * // Returns: 'title-text g2-legend-title' (if classNamePrefix = 'g2-')
 */
function getClassNameFromAttrs(attributes, baseClassName, suffix) {
    var _a = attributes.classNamePrefix, classNamePrefix = _a === void 0 ? '' : _a;
    return getLegendClassName(baseClassName.name, suffix, classNamePrefix);
}
//# sourceMappingURL=classname.js.map