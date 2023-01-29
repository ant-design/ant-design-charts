import { prefix } from '../constants';
import { FlowGraphDatum } from '../interface';

/**
 * 对数据进行打标，加上 level
 */
export const setFlowTag = (data: FlowGraphDatum, limitLevel: number = 100) => {
  const { nodes = [], edges = [] } = data;
  let levelNodes = [];
  const getTarget = (source: string) => {
    return edges.filter((item) => item.source === source);
  };
  const getSource = (target: string) => {
    return edges.filter((item) => item.target === target);
  };
  edges.forEach((item) => {
    const { source } = item;
    if (!edges.find((item) => item.target === source)) levelNodes.push(source);
  });
  let resNodes = [];
  let level = 0;
  while (levelNodes.length) {
    const currentLevelNodes = nodes.filter((item) => levelNodes.includes(item.id));
    resNodes = resNodes.concat(
      currentLevelNodes.map((item) => ({
        ...item,
        [`${prefix}_level`]: level,
        [`${prefix}_parent`]: getSource(item.id).map((n) => n.source),
        [`${prefix}_children`]: level < limitLevel - 1 ? getTarget(item.id).map((n) => n.target) : [],
      })),
    );
    const nextLevelNodes = [];
    levelNodes.forEach((source) => {
      nextLevelNodes.push(...getTarget(source).map((item) => item.target));
    });
    levelNodes = nextLevelNodes;
    level += 1;
  }

  return { nodes: resNodes, edges };
};
