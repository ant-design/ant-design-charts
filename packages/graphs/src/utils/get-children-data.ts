import { Datum } from '../interface';

/**
 * get children
 * 获取相关路径下的一级节点
 */
export const getChildrenData = (data: Datum, currentPath: string = ''): Datum => {
  // 打标时已经做了编码，这直接取值即可
  const path = currentPath.split('-');
  path.shift(); // 根节点没有 path
  let current = data;
  path.forEach((childrenIndex: string) => {
    if (!current) return;
    current = current.children[Number(childrenIndex)];
  });
  if (!current?.children) {
    return [];
  }
  return current.children.map((item: Datum) => ({
    ...item,
    children: [],
  }));
};
