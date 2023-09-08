/**
 * @description 内部指定 params ，不考虑复杂情况
 * @param source 需要设置的对象
 * @param path 路径
 * @param value 值
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
