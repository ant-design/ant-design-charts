import { get, forOwnRight, isPlainObject } from 'lodash';

/**
 * 下划线转驼峰命名
 */
export const camelCase = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (_, n) => n.toUpperCase());
};

/**
 * 获取对象差异, source里面不存在，target里面存在
 * @param {source} object 原始对象
 * @param {target} object 目标对象
 * @param {deep} boolean 是否深层对比
 */
export const checkChanged = (source: object, target: object, deep?: boolean) => {
  // 测试数据
  return true;
  const result: any = {};
  forOwnRight(target, (value: any, key: string) => {
    // source中不存在， 直接赋值
    if (!get(source, key)) {
      result[key] = value;
    } else {
      // plain object
      if (isPlainObject(value)) {
        if (!deep) {
          if (JSON.stringify(value) !== JSON.stringify(get(source, key))) {
            result[key] = value;
          }
        } else {
          result[key] = checkChanged(get(source, key), value, deep);
        }
      } else {
        // special type, eg. null、undefined、''
        if (!value) {
          if (get(target, key)) {
            result[key] = value;
          }
        } else {
          // string、number
          if (
            (typeof value === 'string' || typeof value === 'number') &&
            get(source, key) !== value
          ) {
            result[key] = value;
          }

          // Array
          if (value instanceof Array) {
            if (!sameArray(value, get(source, key))) {
              result[key] = value;
            }
          }
          // function
          if (typeof value === 'function') {
            console.warn(key + ": doesn't comparison");
            result[key] = value;
          }
        }
      }
    }
  });
  return result;
};

/**
 * 判断两数组是否完全相同
 * @param {source} [] 原数组
 * @param {target} [] 目标数组
 */
export function sameArray(source: any[], target: any[]): boolean {
  return new Set(source.concat(target)).size === source.length;
}
