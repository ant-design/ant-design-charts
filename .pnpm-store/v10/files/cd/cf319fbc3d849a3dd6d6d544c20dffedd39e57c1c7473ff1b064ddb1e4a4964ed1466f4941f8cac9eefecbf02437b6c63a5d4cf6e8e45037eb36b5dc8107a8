import isObjectLike from './is-object-like';
import isArrayLike from './is-array-like';
import isString from './is-string';

const isEqual = (value: any, other: any): boolean => {
  if (value === other) {
    return true;
  }
  if (!value || !other) {
    return false;
  }
  if (isString(value) || isString(other)) {
    return false;
  }
  if (isArrayLike(value) || isArrayLike(other)) {
    if (value.length !== other.length) {
      return false;
    }
    let rst = true;
    for (let i = 0; i < value.length; i++) {
      rst = isEqual(value[i], other[i]);
      if (!rst) {
        break;
      }
    }
    return rst;
  }
  if (isObjectLike(value) || isObjectLike(other)) {
    const valueKeys = Object.keys(value);
    const otherKeys = Object.keys(other);
    if (valueKeys.length !== otherKeys.length) {
      return false;
    }
    let rst = true;
    for (let i = 0; i < valueKeys.length; i++) {
      rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
      if (!rst) {
        break;
      }
    }
    return rst;
  }
  return false;
};

export default isEqual;
