import { isPlainObject } from 'lodash';
import type { GraphOptions, ParsedGraphOptions } from '../../types';

/**
 * 合并多个图配置项，优先级从左到右递增
 * @param options 图配置项列表
 * @returns 最后用于渲染的配置项
 */
export function mergeOptions(...options: GraphOptions[]): ParsedGraphOptions {
  if (options.length === 0) return {} as ParsedGraphOptions;

  const merged = { ...options[0] };

  for (let i = 1; i < options.length; i++) {
    const currentOptions = options[i];

    for (const key in currentOptions) {
      if (currentOptions.hasOwnProperty(key)) {
        const currValue = currentOptions[key];
        const prevValue = merged[key];

        if (['component', 'data'].includes(key)) {
          merged[key] = currValue;
        } else if (typeof currValue === 'function') {
          if (['plugins', 'behaviors', 'transforms'].includes(key)) {
            merged[key] = currValue(prevValue || []);
          } else {
            merged[key] = function (datum) {
              const value = currValue.call(this, datum);
              if (isPlainObject(value)) return mergeOptions(prevValue, value);
              return value;
            };
          }
        } else if (isPlainObject(currValue) && isPlainObject(prevValue)) {
          merged[key] = mergeOptions(prevValue, currValue);
        } else {
          merged[key] = currValue;
        }
      }
    }
  }

  return merged as ParsedGraphOptions;
}
