import type { EdgeData, EdgeDirection, ID } from '@antv/g6';

/**
 * 获取邻居节点
 * @param nodeId - 节点 ID
 * @param edges - 边数据
 * @param direction - 边的方向
 * @returns 邻居节点 ID
 */
export const getNeighborNodeIds = (nodeId: ID, edges: EdgeData[], direction: EdgeDirection): ID[] => {
  const getSuccessorNodeIds = (reverse = false): ID[] => {
    const [source, target] = reverse ? ['target', 'source'] : ['source', 'target'];
    return edges.filter((edge) => edge[source] === nodeId).map((edge) => edge[target]) as ID[];
  };

  if (direction === 'out') return getSuccessorNodeIds();
  if (direction === 'in') return getSuccessorNodeIds(true);
  return getSuccessorNodeIds().concat(getSuccessorNodeIds(true));
};
