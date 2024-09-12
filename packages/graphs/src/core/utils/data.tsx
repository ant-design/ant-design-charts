import type { EdgeData, EdgeDirection, GraphData, ID } from '@antv/g6';
import { ANTV_PALETTE } from '../constants/palette';

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

/**
 * 插入或更新子节点数据，children 字段在展开/折叠节点时被消费
 * @param data - 图数据
 * @param direction - 边的方向
 * @returns 更新后的图数据
 */
export function upsertChildrenData(data: GraphData, direction: EdgeDirection) {
  const { nodes = [], edges = [] } = data || {};

  if (nodes.length === 0) return;

  Object.assign(data, {
    nodes: nodes.map((node) => {
      const children = getNeighborNodeIds(node.id, edges, direction);
      return children.length === 0 ? node : { ...node, children };
    }),
  });
}
