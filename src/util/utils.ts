/**
 * 下划线转驼峰命名
 */
export const camelCase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (_, n) => n.toUpperCase());

/**
 * 获取对象差异
 * @param {source} object 原始对象
 * @param {target} object 目标对象
 */
export const checkChanged = (source: object, target: object) =>
  JSON.stringify(source) === JSON.stringify(target);

/**
 * 判断两数组是否完全相同
 * @param {source} [] 原数组
 * @param {target} [] 目标数组
 */
export const sameArray = (source: any[], target: any[]): boolean =>
  new Set(source.concat(target)).size === source.length;

export const isType = (value: any, type: string) => {
  const toString = {}.toString;
  return toString.call(value) === '[object ' + type + ']';
};

export const clone = (source: Object) => {
  if (!source) {
    return source;
  }
  const target = {};
  for (let k in source) {
    target[k] = source[k];
  }
  return target;
};

/**
 * 存在时返回路径值，不存在时返回 undefined
 */
export const hasPath = (source: any, path: string[]) => {
  let current = source;
  for (let i = 0; i < path.length; i++) {
    if (current[path[i]]) {
      current = current[path[i]];
    } else {
      current = undefined;
      break;
    }
  }
  return current;
};

// 路径设置，不考虑复杂情况
export const setPath = (source: any, path: string[], value: any) => {
  let o = source;
  path.forEach((key: string, idx: number) => {
    // 不是最后一个
    if (idx < path.length - 1) {
      o = o[key];
    } else {
      o[key] = value;
    }
  });
  return source;
};
