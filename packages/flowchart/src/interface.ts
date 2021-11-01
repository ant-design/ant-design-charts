import {
  GraphConfig,
  IGraphCommandService,
  IModelService,
  NsGraph,
  IPosition,
  NsJsonSchemaForm,
  IToolbarLayout,
} from '@ali/xflow';
import { Cell, Graph, Edge, Node } from '@antv/x6';
import { PopoverProps as AntDPopoverConfig } from 'antd/es/popover';

export interface FlowchartContainerProps {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

export type Datum = {
  nodes?: unknown[];
  egdes?: unknown[];
};

export interface CustomNode {
  name: string;
  component: NsGraph.INodeRender<any>;
  popover?: React.Component<any>;
  label?: string;
  width?: number;
  height?: number;
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

export interface CanvasProps {
  /** 节点位置 */
  position?: IPosition;
}

export type Command =
  | 'undo-cmd'
  | 'redo-cmd'
  | 'front-node'
  | 'back-node'
  | 'save-graph-data'
  | 'multi-select'
  | 'add-group'
  | 'delete-group';

export type CommandItem = {
  /** 命令 */
  command: Command;
  /** 名称 */
  text?: string;
  /** icon */
  // icon?: React.ForwardRefExoticComponent<any>;
  /** tooltip */
  tooltip?: string;
  /** iconName */
  iconName?: string;
};
export interface ToolbarPanelProps extends BaseProps {
  commands?: CommandItem[];
  layout?: IToolbarLayout;
}

export type ScaleToolbarPanelProps = BaseProps;

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

export interface IGraph extends Graph {
  getGraphData?: () => void;
  updateNodeKeyById?: (id: string, key: string, data: object) => void;
  __proto__?: Record<string, any>;
}

// Flowchart 通用配置
export interface FlowchartProps extends FlowchartContainerProps {
  /** 默认数据 */
  data?: Datum;
  /** 主题 */
  theme?: 'light' | 'dark';
  /** 点击回调，仅支持 save-graph-data */
  onSave?: (data: Datum) => void;
  /** 节点面板配置 */
  nodePanelProps?: NodePanelProps;
  /** 画布主要区域配置 */
  canvasProps?: CanvasProps;
  /** toolbar */
  toolbarPanelProps?: ToolbarPanelProps;
  /** scale toolbar */
  scaleToolbarPanelProps?: ScaleToolbarPanelProps;
  /** form editor */
  detailPanelProps?: DetailPanelProps;
  /** 主画布配置 */
  graphProps?: GraphConfig;
  /** 右键菜单配置 */
  contextMenuPanelProps?: ContextMenuPanelProps;
  /** popover */
  popoverProps?: PopoverProps;
  /** 新增节点时回调 */
  onAddNode?: (node: NsGraph.INodeConfig) => void;
  /** 新增边时回调 */
  onAddEdge?: (node: NsGraph.IEdgeConfig) => void;
  /** onReady */
  onReady?: (graph) => void;
  /** 节点或边更新数据时调用 */
  onConfigChange?: (Datum) => void;
}

type NodeConfig = NsGraph.INodeConfig;
type EdgeConfig = NsGraph.IEdgeConfig;

export { NsGraph, Edge, NodeConfig, EdgeConfig, Node };
