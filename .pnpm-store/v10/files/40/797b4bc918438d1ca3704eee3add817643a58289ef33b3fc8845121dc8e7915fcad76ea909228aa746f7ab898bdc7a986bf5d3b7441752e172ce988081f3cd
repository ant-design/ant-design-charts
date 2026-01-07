import isString from './is-string';
/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */
export default (obj: any, key: string | any[], defaultValue?: any): any => {
  let p = 0;

  const keyArr = isString(key) ? key.split('.') : key;

  while (obj && p < keyArr.length) {
    obj = obj[keyArr[p++]];
  }

  return obj === undefined || p < keyArr.length ? defaultValue : obj;
};
