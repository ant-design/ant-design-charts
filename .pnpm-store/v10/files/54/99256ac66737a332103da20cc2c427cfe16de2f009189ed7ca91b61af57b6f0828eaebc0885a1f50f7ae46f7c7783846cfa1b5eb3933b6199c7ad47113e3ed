import each from './each';
import isArray from './is-array';
import isFunction from './is-function';
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
export default <T>(arr: T[], fn: ((v: T) => number) | string): T | undefined => {
  if (!isArray(arr)) {
    return undefined;
  }

  let maxItem;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const v = isFunction(fn) ? fn(item) : item[fn];

    if (v > max) {
      maxItem = item;
      max = v;
    }
  }

  return maxItem;
};
