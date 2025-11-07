import isArrayLike from './is-array-like';

export default function last(o: unknown) {
  if (isArrayLike(o)) {
    const arr = o as ArrayLike<any>;
    return arr[arr.length - 1];
  }
  return undefined;
}
