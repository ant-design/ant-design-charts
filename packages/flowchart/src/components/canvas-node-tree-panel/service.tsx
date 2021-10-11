import React from 'react';
import uniqBy from 'lodash/uniqBy';
import cloneDeep from 'lodash/cloneDeep';
import { Disposable, ContextServiceConstant, useContextAsState, createPromiseValue } from '@ali/xflow';
import { usePanelContext } from '@ali/xflow';
import { IProps, ITreeNode } from './interface';
import { TREE_ROOT_ID } from './constants';
// import { NsTreePanelData} from '@ali/xflow/es/canvas-node-tree-panel/service'
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

export const useTreePanelData = (props: IProps) => {
  const { treeDataService, searchService } = props;
  const { contextService } = usePanelContext();
  React.useEffect(() => {
    if (contextService.hasContext(NsTreePanelData.id)) {
      return;
    }

    /** 注册成为全局状态，方便其他组件联动 */
    contextService.registerContext<NsTreePanelData.IState>({
      id: NsTreePanelData.id,
      initialValue: {
        treeData: [],
        searchList: [],
        treeNodeList: [],
        expandedKeys: [],
        defaultExpandAll: false,
        keyword: '',
      },
      createContext: async (onCtxChange, useContext, self) => {
        const graphMetaModel = await useContext(ContextServiceConstant.GRAPH_META.id);
        const fetch = async (meta) => {
          const listData = await treeDataService(meta, contextService);
          const { treeData, rootNodes } = NodeList2Tree(listData);
          const currentState = await createPromiseValue<NsTreePanelData.IState>(self);
          const expandedKeys =
            currentState.expandedKeys.length > 0 ? currentState.expandedKeys : rootNodes.map((i) => i.id);
          return { listData, treeData, expandedKeys };
        };

        const graphMetaDisposable = graphMetaModel.onDidChange(async (meta) => {
          const data = await fetch(meta);
          onCtxChange({
            treeNodeList: data.listData,
            treeData: data.treeData,
            expandedKeys: data.expandedKeys,
            defaultExpandAll: false,
            keyword: '',
            searchList: [],
          });
        });

        return Disposable.create(() => {
          graphMetaDisposable.dispose();
        });
      },
    });
  }, []);

  const [state, setState] = useContextAsState<NsTreePanelData.IState>(NsTreePanelData.id, contextService, {
    keyword: '',
    treeData: [],
    treeNodeList: [],
    expandedKeys: [],
    defaultExpandAll: false,
    searchList: [],
  });

  const onFolderExpand = React.useCallback(
    (expandedKeys: string[]) => {
      setState((state) => ({ ...state, expandedKeys }));
    },
    [setState],
  );

  const onKeywordChange = React.useCallback(
    async (keyword: string) => {
      if (!searchService) {
        return console.warn('searchService is not defined');
      }
      if (keyword) {
        const list = await searchService(state.treeNodeList, keyword);
        setState((state) => ({
          ...state,
          keyword,
          searchList: list,
        }));
      } else {
        setState((state) => ({
          ...state,
          keyword: '',
          searchList: [],
        }));
      }
    },
    [state, setState],
  );

  return {
    state,
    setState,
    onKeywordChange,
    onFolderExpand,
  };
};

// 将list数据转换为树
export function NodeList2Tree(treeNodes: ITreeNode[] = []) {
  const getGroupByIdMap = (list: ITreeNode[]) => {
    const uniqList = uniqBy(list, 'id');
    const groups = uniqList.reduce((map, node) => {
      const parentId = node.parentId || TREE_ROOT_ID;
      if (!map.has(parentId)) {
        map.set(parentId, []);
      }
      const group = map.get(parentId);
      group.push(node);
      return map;
    }, new Map<string, ITreeNode[]>());
    return groups;
  };

  const groupMap = getGroupByIdMap(cloneDeep(treeNodes));

  function iterator(nodes: ITreeNode[], groupMap: Map<string, ITreeNode[]>) {
    return nodes.map((node) => {
      if (groupMap.has(node.id)) {
        const children = groupMap.get(node.id);
        node.key = node.id;
        node.isDirectory = true;
        node.children = iterator(children, groupMap) || [];
      } else {
        node.isLeaf = true;
      }
      return node;
    });
  }

  const rootNodes = groupMap.get(TREE_ROOT_ID) || [];
  const treeData = iterator(rootNodes, groupMap);
  return { treeData, rootNodes };
}
