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
} from '@antv/g6';
import { ContainerProps } from '../interface';

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

export type CardNodeConfig = string | number | CardItems;

export type INodeStyle = ShapeStyle | ((node: INode, graph: IGraph) => ShapeStyle);
export type IEdgeStyle = ShapeStyle | ((edge: IEdge, graph: IGraph) => ShapeStyle);
export type ILabelStyle = LabelStyle | ((item: INode | IEdge, graph: IGraph) => LabelStyle);

export type IMarkerStyle = INodeStyle;

export interface CardModelConfig extends ModelConfig {
  title?: CardNodeConfig;
  body?: CardNodeConfig;
  footer?: CardNodeConfig;
  labelStyle?: ILabelStyle;
}

export interface Datum extends TreeGraphData {}

export interface RelationGraph extends ContainerProps {
  data: Datum;
  width?: number;
  height?: number;
  pixelRatio?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: INodeStyle;
  edgeStyle?: IEdgeStyle;
  markerStyle?: IMarkerStyle;
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  nodeAnchorPoints?: number[][];
  nodeLabelCfg?: {
    style: ILabelStyle;
  };
  edgeLabelCfg?: {
    style: ILabelStyle;
  };
  minimapCfg?: MiniMapConfig;
  behaviors?: string[];
  layout?: any;
  /** 是否开启动画 */
  animate?: boolean;
  /** 更新数据后是否自动调整布局 */
  autoFit?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}

export interface IndentedTreeProps extends RelationGraph {
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
}

export interface OrganizationTreeProps extends RelationGraph {
  /** 是否展示底部 marker，默认 false */
  showMarker?: boolean;
}

export type GraphConfig = IndentedTreeProps & OrganizationTreeProps;

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
