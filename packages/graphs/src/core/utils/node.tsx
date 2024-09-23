import type { Graph, NodeData } from '@antv/g6';
import { idOf, positionOf } from '@antv/g6';
import { memoize } from 'lodash';

/**
 * Get the side of the node relative to the reference node
 * @param nodeData - Node data
 * @param parentData - Reference node data
 * @returns The side of the node relative to the reference node
 */
export const getRelativeSide = memoize(
  (nodeData: NodeData, refNodeData?: NodeData): 'center' | 'left' | 'right' => {
    if (!refNodeData) return 'center';

    const nodePositionX = positionOf(nodeData)[0];
    const refNodePositionX = positionOf(refNodeData)[0];
    return refNodePositionX > nodePositionX ? 'left' : 'right';
  },
  (nodeData, refNodeData) =>
    refNodeData ? [positionOf(nodeData), positionOf(refNodeData)].flat().join('-') : 'center',
);

/**
 * Get the side of the node relative to the parent node
 * @param graph - Graph instance
 * @param data - Node data
 * @returns The side of the node relative to the parent node
 */
export const getNodeSide = (graph: Graph, data: NodeData) => {
  const parentData = graph.getParentData(idOf(data), 'tree');
  return getRelativeSide(data, parentData);
};

/**
 * Whether the node is a leaf node
 * @param nodeData - node data
 * @returns Whether the node is a leaf node
 */
export const isLeafNode = (nodeData: NodeData): boolean => {
  return !nodeData.children || nodeData.children.length === 0;
};
