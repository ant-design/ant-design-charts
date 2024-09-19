import type { NodeData } from '@antv/g6';
import { positionOf } from '@antv/g6';

/**
 * 获取节点相对于指定节点的位置
 * @param nodeData - 节点数据
 * @param parentData - 父节点数据
 * @returns 节点相对于指定节点的位置
 */
export const getNodeSide = (nodeData: NodeData, refNodeData?: NodeData): 'center' | 'left' | 'right' => {
  if (!refNodeData) return 'center';

  const nodePositionX = positionOf(nodeData)[0];
  const refNodePositionX = positionOf(refNodeData)[0];
  return refNodePositionX > nodePositionX ? 'left' : 'right';
};
