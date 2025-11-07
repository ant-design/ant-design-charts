import isArray from './is-array';

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
 */
const flatten = function <T>(arr: T[]): T[] {
  if (!isArray(arr)) {
    return [];
  }
  let rst: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    rst = rst.concat(arr[i]);
  }
  return rst;
};

export default flatten;
