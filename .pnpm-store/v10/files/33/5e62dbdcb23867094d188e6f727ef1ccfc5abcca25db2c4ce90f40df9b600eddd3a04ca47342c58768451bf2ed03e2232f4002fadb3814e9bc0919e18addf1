import isNil from './is-nil';
import keys from './keys';

function isMatch(obj: any, attrs: any): boolean {
  const _keys = keys(attrs);
  const length = _keys.length;
  if (isNil(obj)) return !length;
  for (let i = 0; i < length; i += 1) {
    const key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) {
      return false;
    }
  }
  return true;
}

export default isMatch;
