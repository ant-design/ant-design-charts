import filter from './filter';
import contains from './contains';

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
const difference = function <T>(arr: T[], values: T[] = []): T[] {
  return filter(arr, (value: any) => !contains(values, value));
};

export default difference;
