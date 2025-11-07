import isArrayLike from './is-array-like';

const indexOf = function<T> (arr: T[], obj: T): number {
  if (!isArrayLike(arr)) {
    return -1;
  }
  const m = Array.prototype.indexOf;
  if (m) {
    return m.call(arr, obj);
  }
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      index = i;
      break;
    }
  }
  return index;
};

export default indexOf;
