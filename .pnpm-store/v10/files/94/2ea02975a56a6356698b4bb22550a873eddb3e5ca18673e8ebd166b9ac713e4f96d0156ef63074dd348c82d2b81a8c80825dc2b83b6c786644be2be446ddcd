import { isObject, isString, isFunction } from '@antv/util';
import type { MarkerStyleProps } from './types';
/**
 * 解析marker类型
 */
export function parseMarker(icon: MarkerStyleProps['symbol'] | string) {
  let type = 'default';
  if (isObject(icon) && icon instanceof Image) type = 'image';
  else if (isFunction(icon)) type = 'symbol';
  else if (isString(icon)) {
    const dataURLsPattern = new RegExp('data:(image|text)');
    if (icon.match(dataURLsPattern)) {
      type = 'base64';
    } else if (/^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(icon)) {
      type = 'url';
    } else {
      // 不然就当作symbol string 处理
      type = 'symbol';
    }
  }
  return type;
}
