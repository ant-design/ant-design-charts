/**
 * Generate axis className with optional prefix
 * @param baseClassName Base className (e.g., 'axis-line')
 * @param suffix Suffix (e.g., 'line')
 * @param classNamePrefix User-defined prefix (e.g., 'g2-')
 * @returns Concatenated className
 *
 * @example
 * getAxisClassName('axis-line', 'line', 'g2-')
 * // => 'axis-line g2-axis-line'
 *
 * getAxisClassName('axis-line', 'line', undefined)
 * // => 'axis-line'
 */
export declare function getAxisClassName(baseClassName: string, suffix: string, classNamePrefix?: string): string;
/**
 * Extract className from component attributes
 * @param attributes Component attributes
 * @param baseClassName Base className object
 * @param suffix Suffix string
 * @returns Concatenated className
 */
export declare function getClassNameFromAttrs(attributes: {
    classNamePrefix?: string;
}, baseClassName: {
    name: string;
}, suffix: string): string;
/**
 * Apply full className (with prefix) to a selection element
 * This is a helper to implement the two-step pattern:
 * 1. Create element with base className
 * 2. Apply full className with prefix
 *
 * @param selection The selection to apply className to
 * @param baseClassName Base className object from CLASS_NAMES
 * @param suffix Suffix from CLASSNAME_SUFFIX_MAP
 * @param classNamePrefix Optional user-defined prefix
 * @returns The selection for chaining
 *
 * @example
 * const element = container.maybeAppendByClassName(CLASS_NAMES.grid, 'g');
 * applyClassName(element, CLASS_NAMES.grid, CLASSNAME_SUFFIX_MAP.grid, classNamePrefix);
 */
export declare function applyClassName(selection: any, baseClassName: {
    name: string;
}, suffix: string, classNamePrefix?: string): any;
