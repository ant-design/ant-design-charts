import type { PrefixStyleProps } from '../core';
import { addPrefix, removePrefix, toUppercaseFirstLetter } from './string';

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
export function applyStyleSheet(element: HTMLElement, style: { [key: string]: Object }): void {
  Object.entries(style).forEach(([selector, styleString]) => {
    // apply styles to element and children
    [element, ...element.querySelectorAll(selector)]
      .filter((el) => el.matches(selector))
      .forEach((target) => {
        if (!target) return;
        const temp = target as HTMLElement;
        temp.style.cssText += Object.entries(styleString).reduce((total, currVal) => {
          return `${total}${currVal.join(':')};`;
        }, '');
      });
  });
}

const startsWith = (text: string, prefix: string) => {
  if (!text?.startsWith(prefix)) return false;
  const nextChart = text[prefix.length];
  return nextChart >= 'A' && nextChart <= 'Z';
};

export function subStyleProps<T = Record<string, any>>(
  style: Record<string, any>,
  prefix: string,
  invert: boolean = false
) {
  const result: Record<string, any> = {};
  Object.entries(style).forEach(([key, value]) => {
    // never transfer class property
    if (key === 'className' || key === 'class') {
      // do nothing
    }
    // @example showHandle -> showHandle, showHandleLabel -> showLabel
    else if (startsWith(key, 'show') && startsWith(removePrefix(key, 'show'), prefix) !== invert) {
      if (key === addPrefix(prefix, 'show')) result[key] = value;
      else result[key.replace(new RegExp(toUppercaseFirstLetter(prefix)), '')] = value;
    }
    // @example navFormatter -> formatter
    else if (!startsWith(key, 'show') && startsWith(key, prefix) !== invert) {
      const name = removePrefix(key, prefix);
      // don't transfer filter if it represents “过滤器”
      if (name === 'filter' && typeof value === 'function') {
        // do nothing
      } else result[name] = value;
    }
  });
  return result as T;
}

export function superStyleProps<T extends Record<string, any>, P extends string>(
  style: T,
  prefix: P
): PrefixStyleProps<T, P> {
  return Object.entries(style).reduce((acc, [key, value]) => {
    if (key.startsWith('show')) acc[`show${prefix}${key.slice(4)}`] = value;
    else acc[`${prefix}${toUppercaseFirstLetter(key)}`] = value;
    return acc;
  }, {} as any);
}

/**
 * extract group style from mixin style
 * @param style
 * @param ignoreStyleDict style will be ignore from style
 * @returns shape style and rest style
 */
export function splitStyle(
  style: { [keys: string]: any },
  ignoreStyleDict: string[] = ['x', 'y', 'class', 'className']
) {
  const groupStyleDict: string[] = [
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
  const output: typeof style = {};
  const groupStyle: typeof style = {};
  Object.entries(style).forEach(([key, val]) => {
    if (ignoreStyleDict.includes(key)) {
      // do nothing
    } else if (groupStyleDict.indexOf(key) !== -1) groupStyle[key] = val;
    else output[key] = val;
  });
  return [output, groupStyle];
}
