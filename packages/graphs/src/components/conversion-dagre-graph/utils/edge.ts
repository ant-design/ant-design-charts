import type { Graph, EdgeConfig } from '@antv/g6';
import type { Rankdir } from '../types';
import { EdgeType } from '../types';
import type { LayerOrder } from '../types';

// 获取边的类型，起点和终点的anchorPoint索引值
export const getEdgeAnchorAndType = (
  graph: Graph,
  edge: EdgeConfig,
  layerOrder: LayerOrder,
  rankdir: Rankdir,
) => {
  const nodes = graph.getNodes().map((node) => node.getModel());
  const sourceNode = nodes.find((node) => node.id === edge.source);
  const targetNode = nodes.find((node) => node.id === edge.target);
  const sourceLayer = layerOrder.findIndex(
    (item) => item === (sourceNode?.custom as any)?.layerName,
  );
  const targetLayer = layerOrder.findIndex(
    (item) => item === (targetNode?.custom as any)?.layerName,
  );

  let sourceAnchor;
  let targetAnchor;
  let type;
  // 同层级节点之间的边，
  if (sourceLayer !== -1 && sourceLayer === targetLayer) {
    type = EdgeType.CONV_LINE;
    // 起始点的连接点根据起始点的位置顺序来
    if (rankdir === 'LR') {
      sourceAnchor = sourceNode.y < targetNode.y ? 1 : 0;
      targetAnchor = sourceNode.y < targetNode.y ? 0 : 1;
    } else {
      sourceAnchor = sourceNode.x < targetNode.x ? 3 : 2;
      targetAnchor = sourceNode.x < targetNode.x ? 2 : 3;
    }
  } else {
    if (rankdir === 'LR') {
      type = EdgeType.CONV_CUBIC_HORIZONTAL;
      sourceAnchor = sourceNode.x < targetNode.x ? 3 : 2;
      targetAnchor = sourceNode.x < targetNode.x ? 2 : 3;
    } else {
      type = EdgeType.CONV_CUBIC_VERTICAL;
      sourceAnchor = sourceNode.y < targetNode.y ? 1 : 0;
      targetAnchor = sourceNode.y < targetNode.y ? 0 : 1;
    }
  }

  return {
    type,
    sourceAnchor,
    targetAnchor,
  };
};

// 更新边对应的类型、起点和终点的连接点
export const updateEdgeAnchorAndType = (graph: Graph, layerOrder: LayerOrder, rankdir: Rankdir) => {
  graph.getEdges().forEach((edge) => {
    const edgeModel = edge.getModel();
    const { type, sourceAnchor, targetAnchor } = getEdgeAnchorAndType(
      graph,
      edgeModel,
      layerOrder,
      rankdir,
    );
    graph.updateItem(edgeModel.id, {
      type,
      sourceAnchor,
      targetAnchor,
    });
  });
};

// 获取自定义箭头
export const getArrowConfig = (color: string = '#B8C3D9') => {
  return {
    path: 'M 14,-4 C 14,-4,11,0,14,4 L 4,0 L 14,-4 Z',
    d: 2,
    fill: color,
    stroke: color,
    lineWidth: 1,
    lineDash: [],
  };
};
