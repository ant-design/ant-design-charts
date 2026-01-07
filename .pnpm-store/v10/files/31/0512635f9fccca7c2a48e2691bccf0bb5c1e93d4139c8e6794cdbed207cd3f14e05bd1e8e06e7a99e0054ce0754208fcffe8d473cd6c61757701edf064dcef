import each from './each';
import isArray from './is-array';

/**
 * @param {Array} arr The array to iterate over.
 * @return {*} Returns the maximum value.
 * @example
 *
 * max([1, 2]);
 * // => 2
 *
 * max([]);
 * // => undefined
 *
 * const data = new Array(1250010).fill(1).map((d,idx) => idx);
 *
 * max(data);
 * // => 1250010
 * // Math.max(...data) will encounter "Maximum call stack size exceeded" error
 */
export default (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined;
  }
  return arr.reduce((prev, curr) => {
    return Math.max(prev, curr)
  }, arr[0]);
};
