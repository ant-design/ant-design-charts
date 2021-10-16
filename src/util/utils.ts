/* eslint-disable no-restricted-syntax */
// 类型检测
export const isType = (value: any, type: string): boolean => {
  const { toString } = {};
  return toString.call(value) === `[object ${type}]`;
};

export const clone = (source: Object) => {
  if (!source) {
    return source;
  }
  const target = {};
  // eslint-disable-next-line guard-for-in
  for (const k in source) {
    target[k] = source[k];
  }
  return target;
};

export const getType = (n: Object) => {
  return Object.prototype.toString.call(n).slice(8, -1);
};

/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */
export const deepClone = (source: Object | undefined) => {
  if (!source) {
    return source;
  }

  // @ts-ignore
  const target = new source.constructor();

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] =
        getType(source[key]) === 'Object' || getType(source[key]) === 'Array'
          ? deepClone(source[key])
          : source[key];
    }
  }

  return target;
};

/**
 * 存在时返回路径值，不存在时返回 undefined
 */
export const hasPath = (source: any, path: string[]) => {
  let current = source;
  for (let i = 0; i < path.length; i += 1) {
    if (current?.[path[i]]) {
      current = current[path[i]];
    } else {
      current = undefined;
      break;
    }
  }
  return current;
};

/**
 * 返回找到的所有路径值，如果不存在这样的路径，则返回空数组
 */
export const findPaths = (source: any, path: string[]) => {
  const paths = [] as any[];
  if (hasPath(source, path)) {
    paths.push(source);
  }
  for (const key in source) {
    if (source.hasOwnProperty(key) && typeof source[key] === 'object' && source[key] !== null) {
      paths.push(...findPaths(source[key], path));
    }
  }
  return paths;
};

/**
 * 内部指定 params ，不考虑复杂情况
 */
export const setPath = (source: object, path: string[], value: any) => {
  if (!source) {
    return source;
  }
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
