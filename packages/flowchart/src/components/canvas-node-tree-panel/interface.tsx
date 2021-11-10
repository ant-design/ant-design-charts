import type { Addon } from '@antv/x6';
import type { IPosition, NsGraph, IModelService, MODELS, IGraphCommandService } from '@ali/xflow-core';
import type React from 'react';
import type { Node as X6Node } from '@antv/x6';
import { RegisterNode } from '../../interface';

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
  showHeader?: boolean;
  position?: IPosition;
  style?: React.CSSProperties;
  prefixClz?: string;
  className?: string;
  onNodeDrop: IOnNodeDrop;
  dndOptions?: Partial<Addon.Dnd.Options>;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  x6NodeFactory?: (args: INodeFactoryArgs) => X6Node;
  searchService?: ISearchService;
  treeDataService: ITreeDataService;
  registerNode?: RegisterNode;
  defaultActiveKey?: string[];
}

export interface IOnNodeDrop {
  (nodeMeta: NsGraph.INodeConfig, commandService: IGraphCommandService, modelService: IModelService): Promise<void>;
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
  (graphMeta: MODELS.GRAPH_META.IState, modelService: IModelService): Promise<ITreeNode[]>;
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

export namespace NsTreePanelData {
  export const id = 'TREE_PANEL_DATA';
  export interface IState {
    treeNodeList: ITreeNode[];
    treeData: ITreeNode[];
    expandedKeys: string[];
    defaultExpandAll: boolean;
    keyword: string;
    searchList: ITreeNode[];
  }
}
