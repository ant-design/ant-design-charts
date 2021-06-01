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

// nodeType: `card`
export interface CardItems {
  content: string | number;
  value?: string | number;
  style?: LabelStyle;
  valueStyle?: LabelStyle;
}

export type CardNodeConfig = string | number | CardItems;

export interface CardModelConfig extends ModelConfig {
  title?: CardNodeConfig;
  body?: CardNodeConfig;
  footer?: CardNodeConfig;
}

export interface Datum extends TreeGraphData {}

export interface RelationGraph extends ContainerProps {
  data: Datum;
  width?: number;
  height?: number;
  pixelRatio?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: ShapeStyle | ((node: INode, graph: IGraph) => ShapeStyle);
  edgeStyle?: ShapeStyle | ((edge: IEdge, graph: IGraph) => ShapeStyle);
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  nodeAnchorPoints?: number[][];
  behaviors?: string[];
  layout?: any;
  collapseExpand?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}

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
