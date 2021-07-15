import {
  TreeGraphData,
  StateStyles,
  ShapeStyle,
  INode,
  IEdge,
  IGraph,
  ModelConfig,
  IG6GraphEvent,
  IGroup,
  LabelStyle,
  ArrowConfig,
} from '@antv/g6';
import { GraphContainerConfig } from '../../interface';

export interface MiniMapConfig {
  show?: boolean;
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}

// nodeType: `card`
export interface CardItems {
  content: string | number;
  value?: string | number;
  style?: LabelStyle;
  valueStyle?: LabelStyle;
}
export interface EdgeCfg {
  label?: string;
  labelCfg?: {
    style: LabelStyle;
  };
  style?: {
    endArrow: ArrowConfig;
    startArrow: ArrowConfig;
  } & ShapeStyle;
}

export interface NodeCfg {
  labelCfg?: {
    style: LabelStyle;
  };
  style?: ShapeStyle;
}
export type CardNodeConfig = string | number | CardItems;

export type INodeStyle = ShapeStyle | ((node: INode, graph: IGraph) => ShapeStyle);
export type IEdgeStyle = ShapeStyle | ((edge: IEdge, graph: IGraph) => ShapeStyle);
export type ILabelStyle = LabelStyle | ((item: INode | IEdge, graph: IGraph) => LabelStyle);
export type IEdgeCfg = EdgeCfg | ((edge: IEdge, graph: IGraph) => EdgeCfg);
export type INodeCfg = NodeCfg | ((edge: INode, graph: IGraph) => NodeCfg);

export type IMarkerStyle = INodeStyle;

export interface CardModelConfig extends ModelConfig {
  title?: CardNodeConfig;
  body?: CardNodeConfig;
  footer?: CardNodeConfig;
  labelStyle?: ILabelStyle;
}

export interface IconNodeModelConfig extends ModelConfig {
  /** 头像配置 */
  leftIcon?: {
    style?: ShapeStyle;
    /** 头像横向位置 */
    x?: number;
    /** 头像纵向位置 */
    y?: number;
    /** 头像宽度 */
    width?: number;
    /** 头像高度 */
    height?: number;
    /** 头像地址或头像 base64 */
    img: 'string';
  };
}

export interface Datum extends TreeGraphData {}

export interface CommonConfig extends GraphContainerConfig {
  data: Datum;
  width?: number;
  height?: number;
  pixelRatio?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: INodeStyle; // 不推荐使用
  edgeStyle?: IEdgeStyle; // 不推荐使用
  edgeCfg?: IEdgeCfg;
  nodeCfg?: INodeCfg;
  markerStyle?: IMarkerStyle;
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  nodeAnchorPoints?: number[][];
  minimapCfg?: MiniMapConfig;
  behaviors?: string[];
  /** 是否展示箭头 */
  showArrow?: boolean;
  /** 箭头类型 */
  arrowType?: string;
  layout?: any;
  /** 是否开启动画 */
  animate?: boolean;
  /** 是否缩放节点大小自适应容器 */
  autoFit?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}

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

export interface OrganizationalGraphConfig extends CommonConfig {
  /** 是否展示底部 marker，默认 false */
  showMarker?: boolean;
  nodeLabelCfg?: {
    style: ILabelStyle;
  };
}

export interface RadialGraphConfig extends CommonConfig {
  /** 是否连接节点中心 */
  linkCenter?: boolean;
}

export type GraphConfig = IndentedTreeGraphConfig & OrganizationalGraphConfig & RadialGraphConfig;

export {
  TreeGraphData,
  StateStyles,
  ShapeStyle,
  INode,
  IEdge,
  IGraph,
  ModelConfig,
  IG6GraphEvent,
  IGroup,
  LabelStyle,
};
