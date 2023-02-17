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
      let allTargets: string[] = [];
      const getLinkedId = (currentId: string) => {
        fullEdges.forEach((edge) => {
          const { source, target } = edge;
          if (source === currentId && !allTargets.includes(target)) {
            allTargets.push(target);
            getLinkedId(target);
          }
        });
      };
      getLinkedId(nodeId as string);
      // 避免成环的情况
      allTargets = allTargets.filter((t) => t !== nodeId);
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
                if (!collapsedLevel || collapsedLevel < 2) graph.showItem(n);
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
          const { nodes: asnycNodes, edges: asyncEdges } = await asyncData(item.getModel() as NodeConfig);
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
                  if (n.id === nodeId) n[`${prefix}_children`] = asnycNodes.map((n) => n.id);
                  return n;
                })
                .concat(asnycNodes),
              edges: edges.concat(
                asyncEdges?.length ? asyncEdges : asnycNodes.map((t) => ({ source: nodeId, target: t.id })),
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
      const { target: updateNodeTarget } = fullEdges.find((edge) => edge.source === nodeId);
      fullEdges.forEach((edge) => {
        const { source, target } = edge;
        if (target === updateNodeTarget) {
          updateIds.push(source);
        }
      });
      Array.from(new Set(updateIds)).forEach((id: string) => {
        updateItems.push(graph.find('node', (node) => node.get('id') === id) as INode);
      });
      updateItems.forEach((nodeItem) => {
        graph.updateItem(nodeItem, {
          collapsed: !collapsed,
        });
        graph.refreshItem(nodeItem);
      });
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
