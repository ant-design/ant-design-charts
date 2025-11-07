import isArrayLike from './is-array-like';
import pullAt from './pull-at';

const remove = function <T>(arr: T[], predicate: (value: T, idx: number, arr?: T[]) => boolean): T[] {
  /**
   * const arr = [1, 2, 3, 4]
   * const evens = remove(arr, n => n % 2 == 0)
   * console.log(arr) // => [1, 3]
   * console.log(evens) // => [2, 4]
   */
  const result = [];
  if (!isArrayLike(arr)) {
    return result;
  }
  let i = -1;
  const indexes = [];
  const length = arr.length;

  while (++i < length) {
    const value = arr[i];
    if (predicate(value, i, arr)) {
      result.push(value);
      indexes.push(i);
    }
  }
  pullAt(arr, indexes);
  return result;
};

export default remove;
