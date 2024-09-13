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

export function assignColorToHierarchicalData(graphData: GraphData, colors = ANTV_PALETTE) {
  const { nodes = [] } = graphData;

  if (nodes.length === 0) return;

  let colorIndex = 0;
  const dfs = (nodeId: string, color?: string) => {
    const node = nodes.find((datum) => datum.id == nodeId);
    if (!node) return;

    if (node.data?.depth !== 0) {
      node.data!.color = color || colors[colorIndex++ % colors.length];
    }

    node.children?.forEach((childId) => dfs(childId, node.data!.color as string));
  };

  nodes.filter((node) => node.data?.depth === 0).forEach((rootNode) => dfs(rootNode.id));
}
