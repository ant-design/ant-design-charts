import { prefix } from '../constants';
import { FlowGraphDatum } from '../interface';

/**
 * 根据 level 获取相关数据
 */
export const getFlowLevelData = (data: FlowGraphDatum, level: number): FlowGraphDatum => {
  const { nodes, edges } = data;
  if (level <= 0) {
    return data;
  }
  const levelNodes = nodes.filter((item) => item[`${prefix}_level`] < level);
  return {
    nodes: levelNodes,
    edges: edges.filter((item) => {
      const { source, target } = item;
      return levelNodes.filter((n) => [source, target].includes(n.id)).length >= 2;
    }),
  };
};
