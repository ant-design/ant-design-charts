export type PlainObject = Record<string, any>;

// 单个指标
export interface measureItem {
  name: string; // 指标名称
  value: number; // 指标数值
  formattedValue?: number; // 指标格式化后的值
  formattedUnit?: string; // 指标格式化后的单位
}

// 原始节点数据
export interface OriginNode {
  id: string; // 节点id
  name: string; // 节点名称
  layerName: string; // 节点所属层级名称
  layer?: number; // 节点所属层级
  measure: measureItem; // 节点主指标
  relatedMeasures?: measureItem[]; // 节点相关指标
  compareMeasures?: measureItem[]; // 同环比指标
  x?: number; // 节点x坐标
  y?: number; // 节点y坐标
  style?: PlainObject; // 样式
}

// 原始边数据
export interface OriginEdge {
  id: string; // 边id
  source: string; // 边起点id
  target: string; // 边终点id
  measure: measureItem; // 边主指标
  name?: string; // 边名称
  ratio?: number; // 边比率
  style?: PlainObject; // 样式
}


export type Rankdir = 'TB' | 'LR';

export interface LayoutParams {
  rankdir: Rankdir;
  [key: string]: any;
}

// 层级顺序
export type LayerOrder = string[];

// 边比率计算方式
export type RatioMethod = 'proportion' | 'splitFlow' | 'both'; // 占比、分流、占比和分流

// 原始图数据
export interface OriginData {
  nodes: OriginNode[];
  edges: OriginEdge[];
}

// 组件props
export interface Props {
  data: OriginData; // 图数据
  layerOrder?: LayerOrder; // 层级顺序
  segmLayer?: string; // 分段层级
  ratioMethod?: RatioMethod; // 比率计算方式
  layout?: LayoutParams; // 布局配置
  className?: string; // class类名
  style?: PlainObject; // 样式配置
}
