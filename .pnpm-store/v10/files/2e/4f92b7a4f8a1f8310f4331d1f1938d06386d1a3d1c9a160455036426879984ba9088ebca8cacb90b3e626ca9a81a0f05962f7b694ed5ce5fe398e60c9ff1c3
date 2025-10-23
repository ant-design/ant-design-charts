import isObject from './is-object';
import isString from './is-string';
import isNumber from './is-number';

/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */
export default (obj: any, path: string | any[], value: any): any => {
  let o = obj;

  const keyArr = isString(path) ? path.split('.') : path;

  keyArr.forEach((key: string | number, idx: number) => {
    // 不是最后一个
    if (idx < keyArr.length - 1) {
      if (!isObject(o[key])) {
        o[key] = isNumber(keyArr[idx + 1]) ? [] : {};
      }
      o = o[key];
    } else {
      o[key] = value;
    }
  });

  return obj;
};
