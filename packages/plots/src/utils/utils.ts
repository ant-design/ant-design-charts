/**
 * 存在时返回路径值，不存在时返回 undefined
 */
export const getPathConfig = (source: any, path: string[]) => {
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
 * 内部指定 params ，不考虑复杂情况
 */
export const setPathConfig = (source: object, path: string[], value?: any) => {
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
