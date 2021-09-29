import {
  GraphConfig,
  GraphCommandRegistry,
  ContextRegistry,
  NsGraph,
  IPosition,
  NsGraphConfig,
  NsConfigFormPanel,
  IToolbarLayout,
} from '@ali/xflow';
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
  component: NsGraphConfig.INodeRender<any>;
  popover?: React.Component<any>;
  label?: string;
  width?: number;
  height?: number;
  ports?: NsGraph.INodeConfig['ports'];
}

export interface RegisterNode {
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
}

export type Command = 'undo-cmd' | 'redo-cmd' | 'front-node' | 'back-node' | 'save-graph-data';
export type CommandItem = {
  /** 命令 */
  command: Command;
  /** 名称 */
  text?: string;
  /** icon */
  icon?: React.ForwardRefExoticComponent<any>;
};
export interface ToolbarPanelProps extends BaseProps {
  commands?: CommandItem[];
  layout?: IToolbarLayout;
}

export type ScaleToolbarPanelProps = BaseProps;

export type ContextMenuPanelProps = Pick<BaseProps, 'show'>;

export interface DetailPanelProps extends BaseProps {
  controlMapService?: (editorMap: NsConfigFormPanel.IControlMap) => NsConfigFormPanel.IControlMap;
  formSchemaService?: Promise<
    (args: {
      values: Record<string, any>;
      currentNode: NsGraph.INodeConfig | null;
      contextService: ContextRegistry;
      commands: GraphCommandRegistry;
    }) => NsConfigFormPanel.ISchema
  >;
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
}
