import G6 from '@antv/g6';
import { deepClone, isType } from '../util/utils';
import {
  MiniMapConfig,
  CardNodeCfg,
  IArrowConfig,
  NodeData,
  FlowAnalysisGraphDatum,
  GraphConfig,
  IGraph,
  IG6GraphEvent,
  INode,
  Graph,
  IGroup,
  EdgeConfig,
  NodeConfig,
  IEdge,
} from './interface';
import { defaultMinimapCfg } from './constants';

export const getGraphSize = (
  width: number | undefined,
  height: number | undefined,
  container: React.RefObject<HTMLDivElement>,
): number[] => {
  let CANVAS_WIDTH;
  let CANVAS_HEIGHT;
  if (container && container.current) {
    CANVAS_WIDTH = container.current.offsetWidth;
    CANVAS_HEIGHT = container.current.offsetHeight || 500;
  }
  if ((!width && !CANVAS_WIDTH) || (!height && !CANVAS_HEIGHT)) {
    console.warn('请为 Graph 指定 width 与 height！否则将使用默认值 500 * 500');
    return [500, 500];
  }

  return [width || CANVAS_WIDTH || 500, height || CANVAS_HEIGHT || 500];
};

// 展开&折叠事件
export const bindDefaultEvents = (graph: IGraph) => {
  const onClick = (e: IG6GraphEvent) => {
    const item = e.item as INode;
    if (e.target.get('name') === 'collapse-icon') {
      graph.updateItem(item, {
        collapsed: !item.getModel().collapsed,
      });
      graph.layout();
    }
  };
  graph.on('node:click', (e: IG6GraphEvent) => {
    onClick(e);
  });
  graph.on('node:touchstart', (e: IG6GraphEvent) => {
    onClick(e);
  });
};

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 同一页面存在多 graph 时需要指定 graphId
export const getGraphId = (graph: { current?: string }) => {
  if (graph.current) {
    return graph.current;
  }
  graph.current = `IndentedTreeGraph-${uuid()}`;
  return graph.current;
};

export const renderGraph = (
  graph: IGraph,
  data: any,
  autoFit: boolean | undefined,
  adjustLayout: boolean = true,
) => {
  const originData = deepClone(data);
  graph.data(originData);
  graph.render();
  // 关闭局部刷新，各种 bug
  graph.get('canvas').set('localRefresh', false);
  if (adjustLayout) {
    autoFit ? graph.fitView() : graph.fitCenter();
  }
};

export const processMinimap = (cfg: MiniMapConfig | undefined = {}, graph: Graph) => {
  if (!graph || graph.destroyed) return;
  if (cfg.show) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
    });

    graph.addPlugin(minimap);
    return minimap;
  }
  return null;
};

/**
 * min ma
 */
export const getMarkerPosition = (direction: string = 'right', size: number[]) => {
  const [width, height] = size;
  let x = 0;
  let y = 0;
  switch (direction) {
    case 'top':
      x = width / 2;
      y = 0;
      break;
    case 'right':
      x = width;
      y = height / 2;
      break;
    case 'bottom':
      x = width / 2;
      y = height;
      break;
    case 'left':
      x = 0;
      y = height / 2;
      break;
  }

  return { x, y };
};

/**
 * 流向图展开收起
 */
type CollapsedNode = NodeData<unknown> & { collapsedLevel: number };
export const bindSourceMapCollapseEvents = (
  graph: IGraph,
  fullData: FlowAnalysisGraphDatum | undefined,
) => {
  const controlData = deepClone(fullData);
  const onClick = (e: IG6GraphEvent) => {
    if (e.target.get('name') === 'collapse-icon') {
      const item = e.item as INode;
      let collapsed = item.getModel().collapsed;
      if (!isType(collapsed, 'Boolean')) {
        // @ts-ignore
        collapsed = item._cfg.group
          .getChildren()
          .find((item) => item.get('name') === 'main-box')
          ?.attr('defaultCollapsed');
      }
      // @ts-ignore
      const marker = e.item._cfg.group.getChildren().find((item) => item.cfg.type === 'marker');
      const { edges: fullEdges = [] } = fullData ?? {};
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
        graph
          .findAll('node', (node) => targetNodeIds.includes(node.get('id')))
          .forEach((node) => graph.hideItem(node));
        controlData.nodes.forEach((node: NodeData<unknown> & { collapsedLevel: number }) => {
          const { collapsedLevel = 0, id } = node;
          if (targetNodeIds.includes(id)) {
            node.collapsedLevel = collapsedLevel + 1;
          }
        });
      } else {
        // expand
        graph
          .findAll('node', (node) => {
            const { collapsedLevel } = controlData.nodes.find(
              (item: CollapsedNode) => item.id === node.get('id'),
            );
            return (
              targetNodeIds.includes(node.get('id')) && (!collapsedLevel || collapsedLevel < 2)
            );
          })
          .forEach((node) => graph.showItem(node));
        controlData.nodes.forEach((node: NodeData<unknown> & { collapsedLevel: number }) => {
          const { collapsedLevel = 0, id } = node;
          if (targetNodeIds.includes(id)) {
            node.collapsedLevel = collapsedLevel - 1;
          }
        });
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
/**
 * padding | margin 按 CSS 规则转换
 */
export const getCssPadding = (padding: number | number[]) => {
  if (typeof padding === 'number') {
    return [padding, padding, padding, padding];
  }
  let result: number[] = [];
  switch (padding.length) {
    case 1:
      result = [padding[0], padding[0], padding[0], padding[0]];
      break;
    case 2:
      result = [padding[0], padding[1], padding[0], padding[1]];
      break;
    case 3:
      result = [padding[0], padding[1], padding[2], padding[1]];
      break;
    case 4:
      result = padding;
      break;
    default:
      break;
  }
  return result;
};

// 默认箭头样式
export const getArrowCfg = (arrowCfg: IArrowConfig | undefined, edge: EdgeConfig) => {
  if (!arrowCfg) {
    return;
  }
  if (typeof arrowCfg === 'function') {
    return arrowCfg(edge);
  }
  if (arrowCfg?.show === false) {
    return;
  }
  const { type = 'vee', d = 0, size = 10 } = arrowCfg;
  return {
    path: G6.Arrow[type](size, size, d),
    fill: '#ccc',
    d,
    ...arrowCfg,
  };
};

// 交互
export const bindStateEvents = (graph: IGraph, cfg?: Partial<GraphConfig> | undefined) => {
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
        //@ts-ignore
        const { fill: endArrowFill } = endArrow ?? {};
        //@ts-ignore
        const { fill: startArrowFill } = startArrow ?? {};
        const hoverStatus = item.getModel().style?.[name]?.stroke;
        statusCache[item.getID()] = [
          [hoverStatus ?? endArrowFill, endArrowFill],
          [hoverStatus ?? startArrowFill, startArrowFill],
        ];
      }
      const fill = statusCache[item.getID()];
      updateArrowFill(
        item as IEdge,
        endArrow && fill[0][status ? 0 : 1],
        startArrow && fill[1][status ? 0 : 1],
      );
    }
    graph.setItemState(item, name, status);
  };
  const getRelationItems = (
    currentItem: INode | IEdge,
    name: string,
    status: boolean,
    type: string,
  ) => {
    const relationItems =
      type === 'node'
        ? graph.findAll(
            'edge',
            (edge: IEdge) => edge.getSource() === currentItem || edge.getTarget() === currentItem,
          )
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

// 统一处理 config，支持回调
export const getStyle = (
  source: unknown,
  cfg: CardNodeCfg,
  item?: IGroup | undefined,
  current?: string | number,
) => {
  if (typeof source === 'function') {
    return source(cfg, item, current);
  }
  return source || {};
};

// 统一处理 config，支持回调
export const getCommonConfig = (
  cfg: unknown,
  item: EdgeConfig | NodeConfig | undefined,
  graph?: IGraph | IGroup | undefined,
) => {
  if (typeof cfg === 'function') {
    return cfg(item, graph);
  }
  return cfg;
};
