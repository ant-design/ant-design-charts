/**
 * Legend className utility functions
 */

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
export function getLegendClassName(baseClassName: string, suffix: string, classNamePrefix?: string): string {
  if (!classNamePrefix) return baseClassName;
  return `${baseClassName} ${classNamePrefix}legend-${suffix}`;
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
export function getClassNameFromAttrs(
  attributes: { classNamePrefix?: string },
  baseClassName: { name: string },
  suffix: string
): string {
  const { classNamePrefix = '' } = attributes;
  return getLegendClassName(baseClassName.name, suffix, classNamePrefix);
}
