import {
  IGraphCommandService,
  IModelService,
  NsGraph,
  IPosition,
  NsJsonSchemaForm,
  IToolbarLayout,
  IAppDestroy,
  IAppConfigReady,
  IApplication,
  KeybindingConfig,
  IFlowchartGraphProps,
} from '@antv/xflow';
import { Cell, Graph } from '@antv/x6';
import { PopoverProps as AntDPopoverConfig } from 'antd/es/popover';

export interface FlowchartContainerProps {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

type Datum = {
  nodes?: unknown[];
  egdes?: unknown[];
};

export interface CustomNode {
  /** 节点名称，唯一 */
  name: string;
  /** 节点 React 组件 */
  component: NsGraph.INodeRender<any>;
  /** popover 组件 */
  popover?: React.Component<any> | React.FC<any>;
  /** 默认标签 */
  label?: string;
  /** 默认宽度 */
  width?: number;
  /** 默认高度 */
  height?: number;
  /** 连接锚点配置，默认上下左右四个 */
  ports?: NsGraph.INodeConfig['ports'];
}

export interface RegisterNode {
  title?: string;
  nodes: CustomNode[];
}

export interface BaseProps {
  style?: React.CSSProperties;
  className?: string;
  /** 是否展示 */
  show?: boolean;
  /** 节点位置 */
  position?: IPosition;
}

export interface NodePanelProps extends BaseProps {
  /** 自定义节点 */
  registerNode?: RegisterNode;
  /** 是否展示 header */
  showHeader?: boolean;
  /** 默认展开的面板 */
  defaultActiveKey?: string[];
}

export type CanvasProps = Omit<IFlowchartGraphProps, 'onAddNode' | 'onAddEdge' | 'onConfigChange'>;

export type Command =
  | 'undo-cmd'
  | 'redo-cmd'
  | 'front-node'
  | 'back-node'
  | 'save-graph-data'
  | 'multi-select'
  | 'add-group'
  | 'del-group'
  | 'graph-toggle-multi-select'
  | 'graph-copy-selection'
  | 'graph-paste-selection';

export type CommandItem = {
  /** 命令 */
  command: Command;
  /** 名称 */
  text?: string;
  /** tooltip */
  tooltip?: string;
  /** iconName */
  iconName?: string;
};
export interface ToolbarPanelProps extends BaseProps {
  commands?: CommandItem[];
  layout?: IToolbarLayout;
  readonly flowchartId?: string;
}

export interface ScaleToolbarPanelProps extends BaseProps {
  layout?: IToolbarLayout;
}

export type ContextMenuPanelProps = Pick<BaseProps, 'show'>;

export interface DetailPanelProps extends BaseProps {
  controlMapService?: (editorMap: NsJsonSchemaForm.IControlMap) => NsJsonSchemaForm.IControlMap;
  formSchemaService?: (args: {
    cell: Cell;
    targetType: NsJsonSchemaForm.TargetType;
    targetData: NsJsonSchemaForm.TargetData;
    modelService: IModelService;
    commandService: IGraphCommandService;
  }) => Promise<NsJsonSchemaForm.ISchema>;
  prefixClz?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface GraphEvents {
  /** 节点点击事件 */
  handleNodeClick?: (node: NsGraph.INodeConfig) => void;
  /** 边点击事件 */
  handleEdgeClick?: (edge: NsGraph.IEdgeConfig) => void;
}

export interface PopoverProps extends Omit<AntDPopoverConfig, 'title' | 'content'> {
  title?: (data: NsGraph.INodeConfig) => React.ReactNode;
  content?: (data: NsGraph.INodeConfig) => React.ReactNode;
}

export interface IFlowchartGraph extends Graph {
  getGraphData?: (flowchartId: string) => Promise<Datum>;
  updateNodeKeyById?: (id: string, key: string, data: object) => void;
  loadData?: (data: Datum) => void;
  readonly flowchartId?: string;
}

export interface IGraphConfig {}

// Flowchart 通用配置
export interface FlowchartProps extends FlowchartContainerProps {
  /** 默认数据 */
  data?: Datum;
  /** 主题 */
  theme?: 'light' | 'dark';
  /** 画布的配置 */
  // graphConfig?: GraphConfig;
  /** 画布是否自动居中 */
  isAutoCenter?: boolean;
  /** 节点面板配置 */
  nodePanelProps?: NodePanelProps;
  /** 画布主要区域配置 */
  canvasProps?: CanvasProps;
  /**
   * @title 画布状态
   * @description scan 会禁用一些画布事件，例如连线、鼠标右键等
   * @default "edit"
   */
  mode?: 'edit' | 'scan';
  /** toolbar */
  toolbarPanelProps?: ToolbarPanelProps;
  /** keyBinding */
  keyBindingProps?: false | KeybindingConfig;
  /** scale toolbar */
  scaleToolbarPanelProps?: ScaleToolbarPanelProps;
  /** mini map */
  // miniMapProps?: MiniMapProps;
  /** form editor */
  detailPanelProps?: DetailPanelProps;
  /** 右键菜单配置 */
  contextMenuPanelProps?: ContextMenuPanelProps;
  /** popover */
  popoverProps?: PopoverProps;
  /** onReady */
  onReady?: (graph: IFlowchartGraph, app: IApplication) => void;
  /** 点击回调，仅支持 save-graph-data */
  onSave?: (data: Datum) => void;
  /** 新增节点时回调 */
  onAddNode?: (node: NsGraph.INodeConfig) => void;
  /** 新增边时回调 */
  onAddEdge?: (edge: NsGraph.IEdgeConfig) => void;
  /** xflow app 销毁前的回调 */
  onDestroy?: IAppDestroy;
  /** xflow app 初始化后的回调 */
  onConfigReady?: IAppConfigReady;
  /** 节点或边更新数据时调用 */
  onConfigChange?: (params: { data: Datum; type: string; config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig }) => void;
}

export { NsGraph };
