import { measureItem, PlainObject, OriginNode, OriginEdge } from './propsAndState';

// 边类型
export enum EdgeType {
  CONV_LINE = 'conv-line',
  CONV_CUBIC_VERTICAL = 'conv-cubic-vertical',
  CONV_CUBIC_HORIZONTAL = 'conv-cubic-horizontal',
}

// 元素状态
export enum ITEM_STATE {
  Active = 'active',
  Default = 'default',
  Selected = 'selected',
}

// 节点
export interface GraphNode {
  id: string; // 节点id
  label: string; // 节点名称
  layer: number; // 节点所属层级
  custom: {
    layerName: string; // 节点所属层级名称
    measure: measureItem; // 节点主指标
    relatedMeasures?: measureItem[]; // 节点相关指标
    compareMeasures?: measureItem[]; // 同环比指标
    [key: string]: any;
  };
  style: PlainObject; // 样式
  data: OriginNode; // 节点原始数据
  x?: number; // 节点x坐标
  y?: number; // 节点y坐标
}

// 边
export interface GraphEdge {
  id: string; // 边id
  source: string; // 边起点id
  target: string; // 边终点id
  label: string; // 边名称
  style: PlainObject; // 样式
  custom: {
    ratio: number; // 边比率
    showRatio: string; // 边比率(展示)
    [key: string]: any;
  };

  data: OriginEdge; // 边原始数据
}

// 转化流程图数据
export interface ConvGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}
