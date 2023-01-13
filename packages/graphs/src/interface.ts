import {
  ArrowConfig as G6ArrowConfig,
  Edge,
  EdgeConfig as G6EdgeConfig,
  Graph,
  IEdge,
  IG6GraphEvent,
  IGraph,
  ITreeGraph,
  IGroup,
  INode,
  IPoint,
  IShape,
  LabelStyle,
  ModelConfig,
  Node,
  NodeConfig as G6NodeConfig,
  ShapeStyle,
  StateStyles,
  TreeGraphData as G6TreeGraphData,
  GraphData,
  Item,
  TreeGraph,
} from '@antv/g6';

import { MenuConfig } from './plugins';

export interface GraphContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: React.ReactNode | ((e: Error) => React.ReactNode);
}
export interface NodeConfig extends G6NodeConfig {
  value?: any;
}

export interface EdgeConfig<T = string> extends G6EdgeConfig {
  value?: T;
}

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
export type ShapeCfg = EdgeConfig<string | object> | NodeConfig;
export type IShapeStyle =
  | ShapeStyle
  | ((edge: Shape | ShapeCfg, graph: IGraph | IGroup | undefined, name?: string) => ShapeStyle);
export type ILabelStyle =
  | LabelStyle
  | ((edge: Shape | ShapeCfg, graph: IGraph | IGroup | undefined, name?: string) => LabelStyle);

export interface FetchLoading {
  /** 异步请求时的加载动画，仅在配置了异步请求时生效 */
  fetchLoading?: React.ReactNode | ((item: NodeConfig) => React.ReactNode);
}

export interface ArrowConfig extends G6ArrowConfig {
  /** 是否展示 */
  show?: boolean;
  /** 箭头类型 */
  type?: string;
  /** 箭头大小 */
  size?: number;
}

export type IArrowConfig = false | ArrowConfig | ((edge: Shape | ShapeCfg | undefined) => ArrowConfig);

// 通用节点配置
export interface NodeCfg extends Omit<ModelConfig, 'style' | 'label'> {
  /** 节点类型 */
  type?: string;
  /** 节点大小 */
  size?: number | number[];
  /** 节点锚点 */
  anchorPoints?: number[][] | ((node: NodeConfig) => number[][]);
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
  type?: string | { text: string; subText?: string };
  /** 边 label 配置 */
  label?: {
    /** 仅在树图里面生效 */
    content?: string | ((edge: EdgeCfg) => string);
    style?: ILabelStyle;
    margin?: number;
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

export interface BadgeCfg {
  /** 标记位置 */
  position?: 'left' | 'top' | 'right' | 'bottom';
  /** 标记大小 */
  size?: number | number[];
  /** 标记样式 */
  style?: IShapeStyle;
}

export interface PercentCfg extends Omit<BadgeCfg, 'position' | 'size'> {
  /** 标记高度 */
  size?: number;
  /** 标记位置 */
  position?: 'top' | 'bottom';
  /** 占比背景色 */
  backgroundStyle?: IShapeStyle;
}

type PluginContainer<T> = {
  /** tooltip css 类名 */
  className?: string;
  /** tooltip 容器样式 */
  style?: React.CSSProperties;
  /** tooltip 容器，默认和 canvas 使用同一父容器 */
  container?: HTMLDivElement | string | null;
  /** 自定义模板 */
  customContent?: (item: T) => React.ReactElement;
};

type ToolbarCfgCustomContent = {
  zoomIn: () => void;
  zoomOut: () => void;
  toggleFullscreen: () => void;
  fullscreen: boolean;
  graph: IGraph;
};

export interface ToolbarCfg extends Omit<PluginContainer<ToolbarCfgCustomContent>, 'container'> {
  /** 是否展示 */
  show?: boolean;
  /** 缩放因子 */
  zoomFactor?: number;
  /**
   * @title renderIcon，自定义渲染
   * @deprecated
   */
  renderIcon?: ({
    zoomIn,
    zoomOut,
    toggleFullscreen,
    fullscreen,
    graph,
  }: ToolbarCfgCustomContent) => React.ReactElement;
}

// 通用 card 配置
export interface CardNodeCfg extends NodeCfg {
  /** graph id */
  readonly _graphId?: string;
  /** graph data */
  readonly graphData?: any;
  title?: {
    /** title 容器样式 */
    containerStyle?: IShapeStyle;
    /** title 样式 */
    style?: ILabelStyle;
    /** 是否自动隐藏 */
    autoEllipsis?: boolean;
  };
  items?: {
    /** items 容器样式 */
    containerStyle?: IShapeStyle;
    /** item 样式 */
    style?: ILabelStyle;
    /**
     * item 布局方式<default: bundled>
     * - flex: text、value、icon 均分容器宽度
     * - bundled: text、(value、icon) 均分容器宽度(sort: true 时无效)
     * - follow: 从左到右依次排放
     *
     */
    layout?: 'bundled' | 'flex' | 'follow';
    /**
     * 内容横向间距
     * layout: 'follow' 时生效
     */
    itemSpacing?: number;
    /** 是否根据 item 顺序绘制 */
    sort?: boolean;
    /** item 容器填充 */
    padding?: number | number[];
  };
  /** card 容器填充 */
  padding?: number | number[];
  /** 节点标记 */
  badge?: BadgeCfg;
  /** 占比标记 */
  percent?: PercentCfg;
  /** 是否自动调节节点宽度 */
  autoWidth?: boolean;
  /** 自定义节点 */
  customContent?: (item: CardItems | OrgItem, group: IGroup | undefined, cfg: CustomCfg) => number;
}

// 卡片配置
export interface CardItems {
  text: string | number;
  value?: string | number;
  icon?: string;
}
/** 组织架构图 */
export type OrgItem = {
  name: string;
  title?: string;
  icon?: string;
};
export interface NodeData<T> {
  id: string;
  value: T;
  children?: NodeData<T>[];
}

export interface EdgeData<T> {
  source: string;
  target: string;
  value?: T;
}
export type MarkerPosition = 'left' | 'right' | 'top' | 'bottom';
export interface MarkerCfg {
  /** 是否展示 */
  show?: boolean;
  /** 是否折叠态 */
  collapsed?: boolean;
  position?: MarkerPosition;
  style?: ShapeStyle;
}

export interface TooltipCfg extends PluginContainer<NodeConfig | EdgeConfig> {
  show?: boolean;
  offsetX?: number;
  offsetY?: number;
  /** 是否展示 */
  shouldBegin?: (evt?: IG6GraphEvent) => boolean;
  /** item 类型 ['node','edge'] */
  itemTypes?: string[];
  /** 触发方式 */
  trigger?: 'mouseenter' | 'click';
  /** 固定位置 */
  fixToNode?: [number, number] | undefined;
}

export type IMarkerCfg =
  | MarkerCfg
  | MarkerCfg[]
  | ((cfg: CardNodeCfg, graph: IGraph | IGroup | undefined) => MarkerCfg | MarkerCfg[]);

export type Datum = Record<string, any>;

// Graph 通用配置
export interface CommonConfig<T = any> extends GraphContainerConfig {
  data: Datum;
  /** 是否缩放节点大小自适应容器 */
  autoFit?: boolean;
  /** 是否将图平移到中心位置 */
  fitCenter?: boolean;
  width?: number;
  height?: number;
  pixelRatio?: number;
  /** 不同组件 layout 有差别，参考对应组件文档 */
  layout?: T;
  /** 边配置 */
  edgeCfg?: EdgeCfg;
  /** 节点配置 */
  nodeCfg?: NodeCfg;
  /** marker 配置 */
  markerCfg?: IMarkerCfg;
  /** 迷你地 */
  minimapCfg?: MiniMapConfig;
  /** 交互组件 */
  toolbarCfg?: ToolbarCfg;
  /** 提示 */
  tooltipCfg?: TooltipCfg;
  /** 右键菜单 */
  menuCfg?: MenuConfig;
  /** 交互行为 */
  behaviors?: Array<string | object>;
  /** 是否开启动画 */
  animate?: boolean;
  /**
   * @title 是否自定义布局
   * @description 开启后，layout 失效，使用 data 里面的 x/y 进行数据布局
   * @example
   * ```ts
   *  {
   *   id: '-3',
   *   x: 100,
   *   y: 100,
   *   value: {
   *     title: '来源页面A',
   *     items: [
   *       {
   *         text: '曝光PV',
   *         value: '10.30万',
   *         icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
   *       },
   *     ],
   *   },
   *  },
   * ```
   * @default false
   */
  customLayout?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}
export type CardItem = {
  title?: string;
  items?: CardItems[];
  /** 归一化百分比，仅在 `nodeCfg.percent` 配置时生效 */
  percent?: number;
};

export type TreeGraphData = NodeData<CardItem>;
// 流向图节点数据
export type FlowGraphNodeData = NodeData<CardItem[]>;
export type FlowGraphEdgeData = EdgeData<string>;

// 流向图数据
export interface FlowGraphDatum {
  nodes: FlowGraphNodeData[];
  edges: FlowGraphEdgeData[];
}

export {
  StateStyles,
  ShapeStyle,
  Node,
  Edge,
  IGraph,
  ITreeGraph,
  ModelConfig,
  IG6GraphEvent,
  IGroup,
  LabelStyle,
  INode,
  IEdge,
  Graph,
  IPoint,
  IShape,
  G6TreeGraphData,
  GraphData,
  Item,
  TreeGraph,
};
