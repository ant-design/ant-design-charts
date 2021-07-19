import {
  StateStyles,
  ShapeStyle,
  IGraph,
  ModelConfig,
  IG6GraphEvent,
  IGroup,
  LabelStyle,
  Node,
  Edge,
  EdgeConfig,
  NodeConfig,
  Graph,
  INode,
  IEdge,
  ArrowConfig as G6ArrowConfig,
} from '@antv/g6';

import { GraphContainerConfig } from '../interface';

export interface MiniMapConfig {
  show?: boolean;
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}

export type Shape = Edge | Node;
export type ShapeCfg = EdgeConfig | NodeConfig;
export type IShapeStyle =
  | ShapeStyle
  | ((edge: Shape | ShapeCfg, graph: IGraph | IGroup | undefined, name?: string) => ShapeStyle);
export type ILabelStyle =
  | LabelStyle
  | ((edge: Shape | ShapeCfg, graph: IGraph | IGroup | undefined, name?: string) => LabelStyle);

export interface ArrowConfig extends G6ArrowConfig {
  /** 是否展示 */
  show?: boolean;
  /** 箭头类型 */
  type?: string;
  /** 箭头大小 */
  size?: number;
}

export type IArrowConfig = false | ArrowConfig | ((edge: Shape | ShapeCfg) => ArrowConfig);

// 通用节点配置
export interface NodeCfg extends Omit<ModelConfig, 'style' | 'label'> {
  /** 节点类型 */
  type?: string;
  /** 节点大小 */
  size?: number | number[];
  /** 节点锚点 */
  anchorPoints?: number[][];
  /** 节点样式 */
  style?: IShapeStyle;
  /** 节点 label 样式 */
  label?: {
    style?: ILabelStyle;
  };
  /** 节点状态 */
  nodeStateStyles?: StateStyles;
  /** 箭头 是否指向节点中心 */
  linkCenter?: boolean;
}
// 通用边配置
export interface EdgeCfg {
  /** 边类型 */
  type?: string;
  /** 边 label 配置 */
  label?: {
    /** 仅在树图里面生效 */
    content?: string | ((edge: EdgeCfg) => string);
    style?: ILabelStyle;
  };
  /** 起始箭头 */
  startArrow?: IArrowConfig;
  /** 结束箭头 */
  endArrow?: IArrowConfig;
  /** 边样式 */
  style?: IShapeStyle;
  /** 边状态 */
  edgeStateStyles?: StateStyles;
}

export interface CustomCfg {
  /** 横向绘制起始位置 */
  startX?: number;
  /** 纵向绘制起始位置 */
  startY?: number;
  /** 容器宽度 */
  width?: number;
}

// 通用 card 配置
export interface CardNodeCfg extends NodeCfg {
  title?: {
    /** title 容器样式 */
    containerStyle?: IShapeStyle;
    /** title 样式 */
    style?: ILabelStyle;
  };
  items?: {
    /** items 容器样式 */
    containerStyle?: IShapeStyle;
    /** item 样式 */
    style?: ILabelStyle;
    /**
     * item 布局方式<default: bundled>
     * - flex: text、value、icon 均分容器宽度
     * - bundled: text、(value、icon) 均分容器宽度
     * sort: true 时无效
     */
    layout?: 'bundled' | 'flex';
    /** 是否根据 item 顺序绘制 */
    sort?: boolean;
    /** item 容器填充 */
    padding?: number;
  };
  /** card 容器填充 */
  padding?: number;
  /** 自定义节点 */
  customContent?: (item: CardItems, group: IGroup | undefined, cfg: CustomCfg) => number;
}

// 卡片配置
export interface CardItems {
  text: string | number;
  value?: string | number;
  icon?: string;
}

export interface NodeData<T> {
  id: string;
  value: T;
  children?: NodeData<T>[];
}

export interface EdgeData<T> {
  source: string;
  target: string;
  label?: T;
}

// 流向图节点数据
export interface FlowAnalysisGraphNodeData
  extends NodeData<
    Array<{
      title?: string;
      items?: CardItems[];
    }>
  > {}

export interface FlowAnalysisGraphEdgeData extends EdgeData<string> {}

export type MarkerPosition = 'left' | 'right' | 'top' | 'bottom';

export interface MarkerCfg {
  /** 是否展示 */
  show?: boolean;
  /** 是否折叠态 */
  collapsed?: boolean;
  position?: MarkerPosition;
  style?: ShapeStyle;
}

export type IMarkerCfg =
  | MarkerCfg
  | ((cfg: CardNodeCfg, graph: IGraph | IGroup | undefined) => MarkerCfg);

// 流向图数据
export interface FlowAnalysisGraphDatum {
  nodes: FlowAnalysisGraphNodeData[];
  edges: FlowAnalysisGraphEdgeData[];
}

export interface TreeGraphData
  extends NodeData<
    Array<{
      title?: string;
      items?: CardItems[];
    }>
  > {}

export interface OrganizationGraphData
  extends NodeData<
    Array<{
      name: string;
      title?: string;
      icon?: string;
    }>
  > {}

export type Datum = TreeGraphData | FlowAnalysisGraphDatum | OrganizationGraphData;

// Graph 通用配置
export interface CommonConfig extends GraphContainerConfig {
  /** 是否缩放节点大小自适应容器 */
  autoFit?: boolean;
  width?: number;
  height?: number;
  pixelRatio?: number;

  data: Datum;
  layout?: any;
  edgeCfg?: EdgeCfg;
  nodeCfg?: NodeCfg;
  markerCfg: IMarkerCfg;
  minimapCfg?: MiniMapConfig;
  behaviors?: string[];
  /** 是否开启动画 */
  animate?: boolean;
  /** 是否调整布局 */
  adjustLayout?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}

// FlowAnalysisGraph 配置
export interface FlowAnalysisGraphConfig extends CommonConfig {}

export interface IndentedTreeGraphConfig extends CommonConfig {
  /** 全局 title 样式 */
  titleStyle?: LabelStyle;
  /** 全局 body 样式 */
  bodyStyle?: LabelStyle;
  /** 全局 footer 样式 */
  footerStyle?: LabelStyle;
  /** 全局 footer value 样式 */
  footerValueStyle?: LabelStyle;
  /** 是否展示尾部箭头，默认 true */
  showArrow?: boolean;
  /** 是否可收缩 */
  collapseExpand?: boolean;
  /** expand icon 位置 */
  markerPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export interface OrganizationGraphConfig extends CommonConfig {}

export interface RadialTreeGraphConfig extends CommonConfig {}

export type GraphConfig = FlowAnalysisGraphConfig &
  IndentedTreeGraphConfig &
  OrganizationGraphConfig &
  RadialTreeGraphConfig;

export {
  StateStyles,
  ShapeStyle,
  Node,
  Edge,
  IGraph,
  ModelConfig,
  IG6GraphEvent,
  IGroup,
  LabelStyle,
  EdgeConfig,
  NodeConfig,
  INode,
  IEdge,
  Graph,
};
