import React, { useContext } from 'react';
import uniqBy from 'lodash/uniqBy';
import cloneDeep from 'lodash/cloneDeep';
import { createComponentModel, Disposable, MODELS, useXFlowApp } from '@antv/xflow';
import { IProps, ITreeNode } from './interface';
import { TREE_ROOT_ID } from './constants';
import AppContext from '../../context';
// import { NsTreePanelData} from '@antv/xflow/es/canvas-node-tree-panel/service'
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
  const { modelService } = useXFlowApp();
  const { flowchartId } = useContext(AppContext);
  /** 使用model */
  const [state, setState, panelModel] = createComponentModel<NsTreePanelData.IState>({
    treeData: [],
    searchList: [],
    treeNodeList: [],
    expandedKeys: [],
    defaultExpandAll: false,
    keyword: '',
  });

  /** 注册成为全局状态，方便其他组件联动 */
  React.useEffect(() => {
    if (modelService.findDeferredModel(NsTreePanelData.id)) {
      return;
    }

    modelService.registerModel<NsTreePanelData.IState>({
      id: NsTreePanelData.id,
      modelFactory: () => panelModel,
      watchChange: async (self) => {
        const graphMetaModel = await MODELS.GRAPH_META.getModel(modelService); //useContext(MODELS.GRAPH_META.id)
        const fetch = async (meta: MODELS.GRAPH_META.IState) => {
          const listData = await treeDataService(meta, modelService, flowchartId);
          const { treeData, rootNodes } = NodeList2Tree(listData);
          const currentState = await self.getValidValue();
          // 设置默认展开的keys
          const expandedKeys =
            currentState.expandedKeys.length > 0 ? currentState.expandedKeys : rootNodes.map((i) => i.id);

          return { listData, treeData, expandedKeys };
        };

        const graphMetaDisposable = graphMetaModel.watch(async (meta) => {
          const data = await fetch(meta);
          self.setValue({
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

    /* eslint-disable-next-line  */
  }, []);

  /** 折叠文件夹 */
  const onFolderExpand = React.useCallback(
    (expandedKeys: string[]) => {
      debugger;
      setState((modelState: { expandedKeys: string[] }) => {
        modelState.expandedKeys = expandedKeys;
      });
    },
    [setState],
  );

  /** 搜索 */
  const onKeywordChange = React.useCallback(
    async (keyword: string) => {
      if (!searchService) {
        return;
      }
      if (keyword) {
        const list = await searchService(state.treeNodeList, keyword);
        setState((modelState) => {
          modelState.keyword = keyword;
          modelState.searchList = list;
        });
      } else {
        setState((modelState) => {
          modelState.keyword = '';
          modelState.searchList = [];
        });
      }
    },
    [searchService, state.treeNodeList, setState],
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
      group?.push(node);
      return map;
    }, new Map<string, ITreeNode[]>());
    return groups;
  };

  const groupMap = getGroupByIdMap(cloneDeep(treeNodes));

  function iterator(nodes: ITreeNode[], groupMapArgs: Map<string, ITreeNode[]>) {
    return nodes.map((node) => {
      if (groupMapArgs.has(node.id)) {
        const children = groupMapArgs.get(node.id) || [];
        node.key = node.id;
        node.isDirectory = true;
        node.children = iterator(children, groupMapArgs) || [];
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
