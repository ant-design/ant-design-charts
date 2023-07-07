import { NodeData, IGraph, IG6GraphEvent, INode, NodeConfig, FetchLoading, FlowGraphDatum } from '../../interface';
import { MARKER_CLICK, prefix } from '../../constants';
import { FlowAnalysisGraphConfig } from '../../components/flow-analysis-graph';
import { createFetchLoading, closeFetchLoading, isType, EventData } from '../../utils';

/**
 * 流向图展开收起
 */
type CollapsedNode = NodeData<unknown> & { collapsedLevel: number; g_level: number };

export const bindEvents = (params: {
  graph: IGraph;
  level: number;
  asyncData: FlowAnalysisGraphConfig['nodeCfg']['asyncData'];
  fetchLoading?: FetchLoading;
}) => {
  const { graph, level, asyncData, fetchLoading } = params;

  const changeData = (data, eventData?: FlowGraphDatum) => {
    if (eventData) graph.set('eventData', new EventData(eventData));
    graph.changeData(data);
    if (graph.get('fitCenter')) {
      graph.fitCenter();
    }
  };

  /**
   * 通过递归获取所有关联的需要更新的节点
   * @param nodeId 目标节点ID
   * @param fullEdges 所有的边数据
   * @param expandDirection 展开收起的方向，也会决定递归的方向
   * @returns
   */
  const getNodeTargets = (nodeId: string, fullEdges: any[], expandDirection: 'left' | 'right' = 'right') => {
    let allTargets = [];

    const getLinkedId = (currentId: string) => {
      fullEdges.forEach((edge) => {
        const { source, target } = edge;

        switch (expandDirection) {
          case 'left':
            if (target === currentId && !allTargets.includes(source)) {
              allTargets.push(source);
              getLinkedId(source);
            }
            break;
          case 'right':
            if (source === currentId && !allTargets.includes(target)) {
              allTargets.push(target);
              getLinkedId(target);
            }
            break;
          default:
        }
      });
    };

    getLinkedId(nodeId as string);

    // 避免成环的情况
    allTargets = allTargets.filter((t) => t !== nodeId);

    return allTargets;
  };

  /**
   *
   * @param e 事件对象
   * @param nodeId 当前节点的ID
   * @param collapsed 当前折叠状态，handle时要反着处理
   * @returns
   */
  const handleNodeCollapse = async (e: IG6GraphEvent, nodeId: string, collapsed: boolean) => {
    const markerCfg = graph?.['cfg']?.markerCfg;
    const controlData: { edges: any[]; nodes: any[] } = graph.get('eventData').getData();
    const { edges: fullEdges = [], nodes: fullNodes } = controlData ?? {};
    const item = e.item as INode;
    const model = item.getModel() as any;
    const markerCfgValue = typeof markerCfg === 'function' ? markerCfg(item.getModel(), item.get('group')) : markerCfg;

    let allTargets = getNodeTargets(nodeId, fullEdges, markerCfgValue?.expandDirection ?? 'right');

    // 展开 / 收起 逻辑部分
    if (!collapsed) {
      // collapse
      graph.findAll('node', (node) => allTargets.includes(node.get('id'))).forEach((node) => graph.hideItem(node));
      fullNodes.forEach((node: CollapsedNode) => {
        const { collapsedLevel = 0, id } = node;
        if (allTargets.includes(id)) {
          node.collapsedLevel = collapsedLevel + 1;
        }
      });
    } else {
      const { nodes: currentNodes, edges: currentEdges } = graph.get('data');
      if (allTargets.length) {
        // 已经展开过
        if (graph.findById(allTargets[0])) {
          allTargets.forEach((id) => {
            const n = graph.findById(id);
            if (n) {
              const { collapsedLevel } = n.getModel();
              if (!collapsedLevel || (collapsedLevel as number) < 2) graph.showItem(n);
            }
          });
          fullNodes.forEach((node: CollapsedNode) => {
            const { collapsedLevel = 0, id } = node;
            if (allTargets.includes(id)) {
              node.collapsedLevel = collapsedLevel - 1;
            }
          });
        } else {
          // 从全量 data 中取
          let concatNodes;
          if (level) {
            concatNodes = fullNodes.filter((n) => {
              return allTargets.includes(n.id) && n[`${prefix}_level`] === model[`${prefix}_level`] + 1;
            });
            allTargets = concatNodes.map((n) => n.id);
          }

          const currentData = {
            nodes: currentNodes
              .map((n) => {
                if (n.id === nodeId) n[`${prefix}_children`] = allTargets;
                return n;
              })
              .concat(concatNodes),
            edges: currentEdges.concat(fullEdges.filter((e) => e.source === nodeId)),
          };
          changeData(currentData);
        }
      } else if (asyncData) {
        createFetchLoading(item.getModel() as NodeConfig, fetchLoading);
        const { nodes: asyncNodes, edges: asyncEdges } = await asyncData(item.getModel() as NodeConfig);
        // modify current node collapsed status
        graph.updateItem(item, {
          collapsed: false,
        });
        graph.refreshItem(item);
        closeFetchLoading();
        const getDataByEvent = (nodes, edges) => {
          return {
            nodes: nodes
              .map((n) => {
                if (n.id === nodeId) n[`${prefix}_children`] = asyncNodes.map((n) => n.id);
                return n;
              })
              .concat(asyncNodes),
            edges: edges.concat(
              asyncEdges?.length ? asyncEdges : asyncNodes.map((t) => ({ source: nodeId, target: t.id })),
            ),
          };
        };
        changeData(getDataByEvent(currentNodes, currentEdges), getDataByEvent(fullNodes, fullEdges));
        graph.emit(MARKER_CLICK, e, {
          type: 'fetch',
          collapsed: true,
        });
        return;
      }
    }
  };

  const onClick = async (e: IG6GraphEvent) => {
    const controlData: { edges: any[]; nodes: any[] } = graph.get('eventData').getData();
    if (e.target.get('name')?.startsWith('collapse-icon')) {
      const item = e.item as INode;
      const model = item.getModel() as any;
      let { id: nodeId, collapsed } = model;

      if (!isType(collapsed, 'Boolean')) {
        // @ts-ignore
        collapsed = item._cfg.group
          .getChildren()
          .find((t) => t.get('name') === 'main-box')
          ?.attr('defaultCollapsed');
      }
      const { edges: fullEdges = [], nodes: fullNodes } = controlData ?? {};
      const updateItems: INode[] = [];
      const updateIds: string[] = [];

      // 处理节点的 展开 / 收起，获取所有待更新节点的数据
      handleNodeCollapse(e, nodeId, collapsed);

      // 更新连接边 Update Edges
      const { target: updateNodeTarget } = fullEdges.find((edge) => edge.source === nodeId);
      fullEdges.forEach((edge) => {
        const { source, target } = edge;
        if (target === updateNodeTarget) {
          updateIds.push(source);
        }
      });

      // 更新节点 Update Nodes
      Array.from(new Set(updateIds)).forEach((id: string) => {
        updateItems.push(graph.find('node', (node) => node.get('id') === id) as INode);
      });
      updateItems.forEach((nodeItem) => {
        graph.updateItem(nodeItem, {
          collapsed: !collapsed,
        });
        graph.refreshItem(nodeItem);
      });

      // 更新折叠图标 Update Markers
      graph.emit(MARKER_CLICK, e, {
        type: 'collapse',
        collapsed: !!collapsed,
      });
    }
  };
  graph.on('node:click', (e: IG6GraphEvent) => {
    onClick(e);
  });
};
