import each from './each';
import isArray from './is-array';
import isPlainObject from './is-plain-object';
import { ObjectType } from './types';

const reduce = function <T, G>(arr: G[] | ObjectType<T>, fn: (result: T, data: G, idx: string | number) => T, init: T) {
  if (!isArray(arr) && !isPlainObject(arr)) {
    return arr;
  }
  let result = init;
  each(arr, (data, i) => {
    result = fn(result, data, i);
  });
  return result;
};

export default reduce;
