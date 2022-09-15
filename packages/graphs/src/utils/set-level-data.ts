import { IGraph, Datum } from '../interface';

/**
 * 挂载异步数据到全局 data
 */
export const setLevelData = (graph: IGraph, data: Datum, currentPath: string) => {
  const currentData = graph.get('eventData').getData();
  // 打标时已经做了编码，这直接取值即可
  const path = currentPath.split('-');
  path.shift(); // 根节点没有 path
  let current = currentData;
  path.forEach((childrenIndex: string) => {
    current = current.children[Number(childrenIndex)];
  });
  current.children = data;
};
