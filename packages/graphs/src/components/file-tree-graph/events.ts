import { TreeGraphData } from '@antv/g6';
import { ITreeGraph, IG6GraphEvent, INode, NodeConfig, Datum, FetchLoading } from '../../interface';
import { prefix, MARKER_CLICK } from '../../constants';
import { DecompositionTreeGraphConfig } from '../decomposition-tree-graph';
import { createFetchLoading, closeFetchLoading, getChildrenData, setLevelData } from '../../utils';

// 展开&折叠事件
export const bindEvents = (params: {
  graph: ITreeGraph;
  level?: number;
  getChildren?: DecompositionTreeGraphConfig['nodeCfg']['getChildren'];
  fetchLoading?: FetchLoading;
}) => {
  const { graph, level, getChildren, fetchLoading } = params;
  const onClick = async (e: IG6GraphEvent) => {
    const item = e.item as INode;
    const model = item.getModel();
    if (e.target.get('name')?.startsWith('collapse-icon')) {
      const { collapsed, g_currentPath, children = [], g_parentId, g_level, id } = item.getModel();
      let appendChildren =
        level &&
        !(children as Array<Datum>).length &&
        getChildrenData(graph.get('eventData').getData(), g_currentPath as string);

      if (getChildren && !(children as Array<Datum>)?.length && !appendChildren?.length) {
        createFetchLoading(model as NodeConfig, fetchLoading);
        let appendChildrenData = await getChildren(item.getModel() as NodeConfig);
        if (appendChildrenData) {
          appendChildrenData = appendChildrenData.map((t, index) => {
            return {
              [`${prefix}_level`]: (g_level as number) + 1,
              [`${prefix}_parentId`]: `${g_parentId}-${id}`,
              [`${prefix}_currentPath`]: `${g_currentPath}-${index}`,
              ...t,
            };
          });
          setLevelData(graph, appendChildrenData, g_currentPath as string);
        }
        appendChildren = appendChildrenData;
        closeFetchLoading();
      }

      if (appendChildren?.length > 0) {
        model.children = appendChildren;
        graph.updateChild(model as TreeGraphData, model.id);
        graph.updateItem(item, {
          collapsed: false,
        });
        graph.refreshItem(item);
        graph.emit(MARKER_CLICK, e, {
          type: 'fetch',
          collapsed: true,
        });
      } else {
        graph.updateItem(item, {
          collapsed: !collapsed,
        });
        graph.layout();
        graph.emit(MARKER_CLICK, e, {
          type: 'collapse',
          collapsed: !!collapsed,
        });
      }
    }
  };
  graph.on('node:click', (e: IG6GraphEvent) => {
    onClick(e);
  });
  graph.on('node:touchstart', (e: IG6GraphEvent) => {
    onClick(e);
  });
};
