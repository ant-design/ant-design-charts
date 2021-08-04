import { Addon } from '@antv/x6';
import {
  IPosition,
  NsGraph,
  ContextRegistry,
  ContextServiceConstant,
  GraphCommandRegistry,
  PanelConfig,
} from '@ali/xflow';
import React from 'react';

export interface IPanelProps {
  headerPosition: IPosition;
  bodyPosition: IPosition;
  footerPosition: IPosition;
}

export interface INodeFactoryArgs {
  data: NsGraph.INodeConfig;
  width: number;
  height: number;
  // X6_NODE_PORTAL_NODE_VIEW
  view: string;
  component: React.ReactNode;
}

export interface IProps extends Partial<IPanelProps> {
  show?: boolean;
  position?: IPosition;
  config?: PanelConfig;
  style?: React.CSSProperties;
  prefixClz?: string;
  className?: string;
  onNodeDrop: IOnNodeDrop;
  dndOptions?: Partial<Addon.Dnd.Options>;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  searchService?: ISearchService;
  treeDataService: ITreeDataService;
}

export interface IOnNodeDrop {
  (
    nodeMeta: NsGraph.INodeConfig,
    commands: GraphCommandRegistry,
    contextService: ContextRegistry,
  ): Promise<void>;
}

/** tree node model */
export interface ITreeNode {
  /**
   * The type of the menu item.
   */
  readonly id: string | 'root';
  /**
   * The parent menu id of the menu item.
   */
  readonly parentId: string;
  /**
   * The display label for the menu item.
   */
  readonly label: string;
  /**
   * The parent menu id of the menu item.
   */
  isDirectory?: boolean;
  /**
   * The parent menu id of the menu item.
   */
  isLeaf?: boolean;
  /**
   * The submenu for a `'submenu'` type item.
   */
  children?: ITreeNode[];
  /**
   *fieldName
   */
  [fieldName: string]: any;
}

/** service: 获取tree数据 */
export interface ITreeDataService {
  (graphMeta: ContextServiceConstant.GRAPH_META.IState, ctx: ContextRegistry): Promise<ITreeNode[]>;
}

/** service: 返回过滤后的数据 */
export interface ISearchService {
  (treeNodeList: ITreeNode[], keyword: string): Promise<ITreeNode[]>;
}

export interface IOnFolderExpand {
  (keys: string[]): void;
}
export interface IOnKeywordChange {
  (kwyword: string): void;
}
