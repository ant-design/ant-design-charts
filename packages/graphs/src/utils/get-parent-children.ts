import { Datum } from '../interface';
/**
 * 将查询到的节点挂载到当前图数据上
 */
export const setParentChildren = (parendData: Datum, currentPath: string, children: Datum[]): Datum => {
  const path = currentPath.split('-');
  path.shift();
  let current = parendData;
  path.forEach((childrenIndex: string) => {
    current = current.children[Number(childrenIndex)];
  });
  current.children = children;
  return parendData;
};
