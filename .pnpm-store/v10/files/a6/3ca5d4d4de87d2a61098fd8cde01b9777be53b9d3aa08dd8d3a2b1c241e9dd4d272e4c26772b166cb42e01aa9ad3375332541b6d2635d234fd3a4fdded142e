import isArrayLike from './is-array-like';

const splice = Array.prototype.splice;

const pullAt = function pullAt <T>(arr: T[], indexes: number[]): T[] {
  if (!isArrayLike(arr)) {
    return [];
  }
  let length = arr ? indexes.length : 0;
  const last = length - 1;

  while (length--) {
    let previous;
    const index = indexes[length];
    if (length === last || index !== previous) {
      previous = index;
      splice.call(arr, index, 1);
    }
  }
  return arr;
};

export default pullAt;
