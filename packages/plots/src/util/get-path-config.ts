/**
 * @description 存在时返回路径值，不存在时返回 undefined
 * @param source 需要获取的对象
 * @param path 路径
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
