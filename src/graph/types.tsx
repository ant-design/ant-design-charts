import { TreeGraphData, GraphData, StateStyles, ShapeStyle, INode, IEdge, IGraph } from '@antv/g6';
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
export interface RelationGraph extends ContainerProps {
  data: TreeGraphData | GraphData;
  width?: number;
  height?: number;
  pixelRatio?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: ShapeStyle;
  edgeStyle?: ShapeStyle;
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  nodeLabelCfg?: {
    style: {
      stroke?: string;
      fontSize?: number;
    };
  };
  edgeLabelCfg?: {
    style: {
      stroke?: string;
      fontSize?: number;
    };
  };
  nodeAnchorPoints?: number[][];
  behaviors?: string[];
  layout?: any;
  enableEdit?: boolean;
  minimapCfg?: MiniMapConfig;
  handleNodeClick?: (item: INode, graph: IGraph) => void;
  handleEdgeClick?: (item: IEdge, graph: IGraph) => void;
  handleNodeHover?: (item: INode, graph: IGraph) => void;
  handleNodeUnHover?: (item: INode, graph: IGraph) => void;
  handleEdgeHover?: (item: IEdge, graph: IGraph) => void;
  handleEdgeUnHover?: (item: IEdge, graph: IGraph) => void;
  handleCanvasClick?: (graph: IGraph) => void;
  collapseExpand?: boolean;
  colorMap?: Object;
  graphRef?: React.MutableRefObject<IGraph | undefined>;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}
