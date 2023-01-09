import type { OriginEdge } from '../../types';

// 获取节点的所有出/入路径的边集合
export const getInOutPathEdges = (id: string, edges: OriginEdge[]) => {
  const relativeInEdges = [];
  const relativeOutEdges = [];
  const queriedNodeIds = new Set([id]);

  // 查询节点的一度入度边 + 出度边
  const queryOneDegreeEdges = (inNodeIds, outNodeIds) => {
    const inNodeIdSet = new Set();
    const outNodeIdSet = new Set();

    edges?.forEach((edge) => {
      // 查找入边
      if (inNodeIds.has(edge.target)) {
        relativeInEdges.push(edge);
        if (!queriedNodeIds.has(edge.source)) {
          inNodeIdSet.add(edge.source);
        }
      } else if (outNodeIds.has(edge.source)) {
        // 查找出边
        relativeOutEdges.push(edge);
        if (!queriedNodeIds.has(edge.target)) {
          outNodeIdSet.add(edge.target);
        }
      }
    });

    if (inNodeIdSet.size > 0 || outNodeIdSet.size > 0) {
      queryOneDegreeEdges(inNodeIdSet, outNodeIdSet);
    }
  };

  queryOneDegreeEdges(new Set([id]), new Set([id]));
  return {
    relativeInEdges,
    relativeOutEdges,
  };
};
