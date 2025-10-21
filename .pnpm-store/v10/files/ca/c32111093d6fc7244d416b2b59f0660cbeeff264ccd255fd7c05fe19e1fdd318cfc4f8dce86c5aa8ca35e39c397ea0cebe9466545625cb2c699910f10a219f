import type { PrefixStyleProps } from '../core';
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
export declare function applyStyleSheet(element: HTMLElement, style: {
    [key: string]: Object;
}): void;
export declare function subStyleProps<T = Record<string, any>>(style: Record<string, any>, prefix: string, invert?: boolean): T;
export declare function superStyleProps<T extends Record<string, any>, P extends string>(style: T, prefix: P): PrefixStyleProps<T, P>;
/**
 * extract group style from mixin style
 * @param style
 * @param ignoreStyleDict style will be ignore from style
 * @returns shape style and rest style
 */
export declare function splitStyle(style: {
    [keys: string]: any;
}, ignoreStyleDict?: string[]): {
    [keys: string]: any;
}[];
