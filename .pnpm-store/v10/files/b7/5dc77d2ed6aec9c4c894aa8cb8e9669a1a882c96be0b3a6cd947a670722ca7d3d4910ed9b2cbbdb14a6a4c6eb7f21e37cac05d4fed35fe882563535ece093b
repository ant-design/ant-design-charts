import isArrayLike from './is-array-like';

export default (value: any): any[] => {
  return isArrayLike(value) ? Array.prototype.slice.call(value) : [];
}
