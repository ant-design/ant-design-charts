import isNil from './is-nil';
import isObject from './is-object'

const identity = <T>(v: T): T => v;

interface _Type<T> {
  [key: string]: T;
}

export default <T>(object: { [key: string]: T }, func: (value: T, key: string) => any = identity): { [key: string]: any } => {
  const r: _Type<T> = {};
  if (isObject(object) && !isNil(object)) {
    Object.keys(object).forEach(key => {
      // @ts-ignore
      r[key] = func(object[key], key);
    });
  }
  return r;
}
