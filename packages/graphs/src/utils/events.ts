import { TreeGraphData, GraphData } from '@antv/g6';
import { findIndex } from '@antv/util';
import { RadialLayout } from '@antv/layout';
import {
  NodeData,
  CommonConfig,
  IGraph,
  ITreeGraph,
  IG6GraphEvent,
  INode,
  NodeConfig,
  IEdge,
  Datum,
  FetchLoading,
} from '../interface';
import { prefix } from '../constants';
import { radialSectorLayout } from '../layout';
import { DecompositionTreeGraphConfig } from '../components/decomposition-tree-graph';
import { FlowAnalysisGraphConfig } from '../components/flow-analysis-graph';
import { createFetchLoading } from './create-fetch-loading';
import { closeFetchLoading } from './close-fetch-loading';
import { getChildrenData } from './get-children-data';
import { setLevelData } from './set-level-data';
import { setTag } from './set-tag';
import { isType } from './is-type';
import EventData from './event-data';

/** sector layout */
export const bindRadialExplore = (
  graph: ITreeGraph,
  asyncData: (nodeCfg: NodeConfig) => GraphData,
  layoutCfg?: RadialLayout,
  fetchLoading?: FetchLoading,
) => {
  const onDblClick = async (e: IG6GraphEvent) => {
    const item = e.item as INode;
    const itemModel = item.getModel();
    createFetchLoading(itemModel as NodeConfig, fetchLoading);
    const newData = await asyncData(item.getModel() as NodeConfig);
    closeFetchLoading();
    const nodes = graph.getNodes();
    const edges = graph.getEdges();
    const { x, y } = itemModel;
    const centerNodeId = graph.get('centerNode');
    const centerNode = centerNodeId ? graph.findById(centerNodeId) : nodes[0];
    const { x: centerX, y: centerY } = centerNode.getModel();
    // the max degree about foces(clicked) node in the original data
    const pureNodes = newData.nodes.filter(
      (item) => findIndex(nodes, (t: INode) => t.getModel().id === item.id) === -1,
    );
    const pureEdges = newData.edges.filter(
      (item) =>
        findIndex(edges, (t: IEdge) => {
          const { source, target } = t.getModel();
          return source === item.source && target === item.target;
        }) === -1,
    );

    // for graph.changeData()
    const allNodeModels: GraphData['nodes'] = [];
    const allEdgeModels: GraphData['edges'] = [];
    pureNodes.forEach((nodeModel) => {
      // set the initial positions of the new nodes to the focus(clicked) node
      nodeModel.x = itemModel.x;
      nodeModel.y = itemModel.y;
      graph.addItem('node', nodeModel);
    });

    // add new edges to graph
    pureEdges.forEach((em, i) => {
      graph.addItem('edge', em);
    });

    edges.forEach((e: IEdge) => {
      allEdgeModels.push(e.getModel());
    });
    nodes.forEach((n: INode) => {
      allNodeModels.push(n.getModel() as NodeConfig);
    });
    // 这里使用了引用类型
    radialSectorLayout({
      center: [centerX, centerY],
      eventNodePosition: [x, y],
      nodes: nodes.map((n) => n.getModel() as NodeConfig),
      layoutNodes: pureNodes,
      options: layoutCfg as any,
    });
    graph.positionsAnimate();
    graph.data({
      nodes: allNodeModels,
      edges: allEdgeModels,
    });
  };
  graph.on('node:dblclick', (e: IG6GraphEvent) => {
    onDblClick(e);
  });
};

// 展开&折叠事件
export const bindDefaultEvents = (
  graph: ITreeGraph,
  level?: number,
  getChildren?: DecompositionTreeGraphConfig['nodeCfg']['getChildren'],
  fetchLoading?: FetchLoading,
) => {
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
      } else {
        graph.updateItem(item, {
          collapsed: !collapsed,
        });
        graph.layout();
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

/**
 * 流向图展开收起
 */
type CollapsedNode = NodeData<unknown> & { collapsedLevel: number };

export const bindSourceMapCollapseEvents = (
  graph: IGraph,
  asyncData: FlowAnalysisGraphConfig['nodeCfg']['asyncData'],
  fetchLoading?: FetchLoading,
) => {
  const onClick = async (e: IG6GraphEvent) => {
    const controlData: { edges: any[]; nodes: any[] } = graph.get('eventData').getData();
    if (e.target.get('name')?.startsWith('collapse-icon')) {
      const item = e.item as INode;
      let { collapsed } = item.getModel();
      if (!isType(collapsed, 'Boolean')) {
        // @ts-ignore
        collapsed = item._cfg.group
          .getChildren()
          .find((item) => item.get('name') === 'main-box')
          ?.attr('defaultCollapsed');
      }
      const { edges: fullEdges = [] } = controlData ?? {};
      const { id: nodeId } = item.getModel();
      const targetNodeIds: string[] = [];
      const updateItems: INode[] = [];
      let updateIds: string[] = [];
      const getLinkedId = (currentId: string) => {
        fullEdges.forEach((edge) => {
          const { source, target } = edge;
          if (source === currentId) {
            targetNodeIds.push(target);
            getLinkedId(target);
          }
        });
      };
      getLinkedId(nodeId as string);
      if (!collapsed) {
        // collapse
        graph.findAll('node', (node) => targetNodeIds.includes(node.get('id'))).forEach((node) => graph.hideItem(node));
        controlData.nodes.forEach((node: NodeData<unknown> & { collapsedLevel: number }) => {
          const { collapsedLevel = 0, id } = node;
          if (targetNodeIds.includes(id)) {
            node.collapsedLevel = collapsedLevel + 1;
          }
        });
      } else {
        // expand
        const showNode = graph.findAll('node', (node) => {
          const { collapsedLevel } = controlData.nodes.find((item: CollapsedNode) => item.id === node.get('id'));
          return targetNodeIds.includes(node.get('id')) && (!collapsedLevel || collapsedLevel < 2);
        });
        if (showNode.length) {
          showNode.forEach((node) => graph.showItem(node));
          controlData.nodes.forEach((node: NodeData<unknown> & { collapsedLevel: number }) => {
            const { collapsedLevel = 0, id } = node;
            if (targetNodeIds.includes(id)) {
              node.collapsedLevel = collapsedLevel - 1;
            }
          });
        } else if (asyncData) {
          createFetchLoading(item.getModel() as NodeConfig, fetchLoading);
          const { nodes, edges } = await asyncData(item.getModel() as NodeConfig);
          const eventData = {
            nodes: controlData.nodes.concat(nodes),
            edges: controlData.edges.concat(
              edges?.length ? edges : nodes.map((item) => ({ source: nodeId, target: item.id })),
            ),
          };
          closeFetchLoading();
          graph.set('eventData', new EventData(eventData));
          graph.changeData(eventData);
          if (graph.get('fitCenter')) {
            graph.fitCenter();
          }
          return;
        }
      }
      fullEdges.forEach((edge) => {
        const { source, target } = edge;
        if (targetNodeIds.includes(target)) {
          updateIds.push(source);
        }
      });
      updateIds = Array.from(new Set(updateIds));
      updateIds.forEach((id: string) => {
        updateItems.push(graph.find('node', (node) => node.get('id') === id) as INode);
      });
      updateItems.forEach((nodeItem) => {
        graph.updateItem(nodeItem, {
          collapsed: !nodeItem.getModel().collapsed,
        });
        graph.refreshItem(nodeItem);
      });
    }
  };
  graph.on('node:click', (e: IG6GraphEvent) => {
    onClick(e);
  });
  graph.on('node:touchstart', (e: IG6GraphEvent) => {
    onClick(e);
  });
};

// 交互
export const bindStateEvents = (graph: IGraph, cfg?: Partial<CommonConfig> | undefined) => {
  const { nodeCfg = {}, edgeCfg = {} } = cfg ?? {};
  const { nodeStateStyles } = nodeCfg;
  const { edgeStateStyles } = edgeCfg;
  /**
   * 存储交互状态
   * id: [[endActive, endDefalut], [startActive, startDefalut]]
   */
  const statusCache = {};

  const updateArrowFill = (item: IEdge, endArrowFill: string, stratArrowFill: string) => {
    graph.updateItem(item, {
      style: {
        endArrow: !!endArrowFill && {
          fill: endArrowFill,
        },
        startArrow: !!stratArrowFill && {
          fill: stratArrowFill,
        },
      },
    });
  };

  const setState = (item: INode | IEdge, name: string, status: boolean) => {
    status ? item.toFront() : item.toBack();
    const { endArrow, startArrow } = item.getModel().style ?? {};

    if (endArrow || startArrow) {
      if (!statusCache[item.getID()]) {
        // @ts-ignore
        const { fill: endArrowFill } = endArrow ?? {};
        // @ts-ignore
        const { fill: startArrowFill } = startArrow ?? {};
        const hoverStatus = item.getModel().style?.[name]?.stroke;
        statusCache[item.getID()] = [
          [hoverStatus ?? endArrowFill, endArrowFill],
          [hoverStatus ?? startArrowFill, startArrowFill],
        ];
      }
      const fill = statusCache[item.getID()];
      updateArrowFill(item as IEdge, endArrow && fill[0][status ? 0 : 1], startArrow && fill[1][status ? 0 : 1]);
    }
    graph.setItemState(item, name, status);
  };
  const getRelationItems = (currentItem: INode | IEdge, name: string, status: boolean, type: string) => {
    const relationItems =
      type === 'node'
        ? graph.findAll('edge', (edge: IEdge) => edge.getSource() === currentItem || edge.getTarget() === currentItem)
        : graph.findAll(
            'node',
            (node: INode) =>
              (currentItem as IEdge).getSource().get('id') === node.get('id') ||
              (currentItem as IEdge).getTarget().get('id') === node.get('id'),
          );
    const highlightItems = [currentItem].concat(relationItems);

    highlightItems.forEach((item) => {
      setState(item, name, status);
    });
  };
  if (nodeStateStyles) {
    graph.on('node:mouseenter', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', true, 'node');
    });
    graph.on('node:mouseleave', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', false, 'node');
    });
  }
  if (edgeStateStyles) {
    graph.on('edge:mouseenter', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', true, 'edge');
    });
    graph.on('edge:mouseleave', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', false, 'edge');
    });
  }
};
