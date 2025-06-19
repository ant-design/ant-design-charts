import { get, isPlainObject, set } from '../utils';
import type { Adaptor } from '../types';

/**
 * Data transformation.
 * @description `data` to `data.value`
 * If `data` is not an object or does not have a `value` property, it will be set to `data.value`.
 * If `data` is an object without a `type` property, it will be set to `data.value`.
 * @param params - The adaptor parameters.
 * @returns The updated parameters with transformed data.
 */
export const dataTransform = (params: Adaptor) => {
  console.log('11', params);

  const { options } = params;
  const { data } = options;

  if (get(data, 'value')) return params;

  if (typeof data !== 'object' || data === null) {
    console.warn('Invalid data type:', data);
    return params;
  }

  if (get(data, 'type') !== 'fetch' && isPlainObject(data)) {
    set(options, 'data.value', data);
  }
  return params;
};
