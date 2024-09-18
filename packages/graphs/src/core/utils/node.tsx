import type { NodeData } from '@antv/g6';
import { positionOf } from '@antv/g6';

/**
 * 获取节点相对于根节点的位置
 * @param nodeData - 节点数据
 * @param parentData - 父节点数据
 * @returns 节点相对于根节点的位置
 */
export const getNodeSide = (nodeData: NodeData, parentData?: NodeData): 'center' | 'left' | 'right' => {
  if (!parentData) return 'center';

  const nodePositionX = positionOf(nodeData)[0];
  const parentPositionX = positionOf(parentData)[0];
  return parentPositionX > nodePositionX ? 'left' : 'right';
};
