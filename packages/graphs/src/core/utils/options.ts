import { isPlainObject } from 'lodash';
import type { GraphOptions, ParsedGraphOptions } from '../../types';

/**
 * 将用户配置项与默认配置项合并
 * @param options - 用户配置项
 * @param defaultOptions - 默认配置项
 * @returns 最后用于渲染的配置项
 */
export function mergeOptions(options: GraphOptions, defaultOptions: GraphOptions): ParsedGraphOptions {
  const merged = { ...defaultOptions };

  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      const propValue = options[key];
      const defaultValue = defaultOptions[key];

      if (['component', 'data'].includes(key)) {
        merged[key] = propValue;
      } else if (typeof propValue === 'function') {
        merged[key] = function (datum) {
          return mergeOptions(propValue.call(this, datum), defaultValue);
        };
      } else if (
        isPlainObject(propValue) &&
        isPlainObject(defaultValue) &&
        propValue !== null &&
        defaultValue !== null
      ) {
        merged[key] = mergeOptions(propValue, defaultValue);
      } else {
        merged[key] = propValue;
      }
    }
  }

  return merged as ParsedGraphOptions;
}
