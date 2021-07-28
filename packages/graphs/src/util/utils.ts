import G6 from '@antv/g6';
import { isNumber, isFunction } from '@antv/util';
import {
  MiniMapConfig,
  CardNodeCfg,
  IArrowConfig,
  NodeData,
  FlowGraphDatum,
  CommonConfig,
  IGraph,
  IG6GraphEvent,
  INode,
  Graph,
  IGroup,
  EdgeConfig,
  NodeConfig,
  IEdge,
  ModelConfig,
  MarkerCfg,
  ChartRefConfig,
} from '../interface';
import { defaultMinimapCfg, defaultNodeSize, defaultCardStyle } from '../constants';
import { FundFlowGraphConfig } from '../components/fundFlowGraph';
import { FlowAnalysisGraphConfig } from '../components/flowAnalysisGraph';

// 类型检测
export const isType = (value: any, type: string): boolean => {
  const { toString } = {};
  return toString.call(value) === `[object ${type}]`;
};

export const clone = (source: Object) => {
  if (!source) {
    return source;
  }
  const target = {};
  // eslint-disable-next-line guard-for-in
  for (const k in source) {
    target[k] = source[k];
  }
  return target;
};

export const getType = (n: Object) => {
  return Object.prototype.toString.call(n).slice(8, -1);
};

/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */
export const deepClone = (source: Object | undefined) => {
  if (!source) {
    return source;
  }

  // @ts-ignore
  const target = new source.constructor();

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] =
        getType(source[key]) === 'Object' || getType(source[key]) === 'Array'
          ? deepClone(source[key])
          : source[key];
    }
  }

  return target;
};

/**
 * 存在时返回路径值，不存在时返回 undefined
 */
export const hasPath = (source: any, path: string[]) => {
  let current = source;
  for (let i = 0; i < path.length; i += 1) {
    if (current?.[path[i]]) {
      current = current[path[i]];
    } else {
      current = undefined;
      break;
    }
  }
  return current;
};

/**
 * 内部指定 params ，不考虑复杂情况
 */
export const setPath = (source: object, path: string[], value: any) => {
  if (!source) {
    return source;
  }
  let o = source;
  path.forEach((key: string, idx: number) => {
    // 不是最后一个
    if (idx < path.length - 1) {
      o = o[key];
    } else {
      o[key] = value;
    }
  });
  return source;
};

/**
 * 获取或者绑定图表实例
 */
export const getChart = (chartRef: ChartRefConfig | undefined, chart: any) => {
  if (!chartRef) {
    return;
  }
  if (isFunction(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};

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

export const renderGraph = (graph: IGraph, data: any) => {
  const originData = deepClone(data);
  graph.data(originData);
  graph.render();
  // 关闭局部刷新，各种 bug
  graph.get('canvas').set('localRefresh', false);
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

const getUuid = () => {
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
  graph.current = `IndentedTreeGraph-${getUuid()}`;
  return graph.current;
};

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
  fullData:
    | FundFlowGraphConfig['data']
    | FlowAnalysisGraphConfig['data']
    | FlowGraphDatum
    | undefined,
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
export const getArrowCfg = (
  arrowCfg: IArrowConfig | undefined,
  edge?: EdgeConfig<
    | string
    | {
        text?: string;
        subText?: string;
      }
  >,
) => {
  if (!arrowCfg) {
    return;
  }
  if (typeof arrowCfg === 'object' && arrowCfg?.show === false) {
    return;
  }
  const cfg = typeof arrowCfg === 'function' ? arrowCfg(edge) : arrowCfg;
  const { type = 'vee', d = 0, size = 10 } = cfg;
  return {
    path: G6.Arrow[type](size, size, d),
    fill: '#ccc',
    d,
    ...cfg,
  };
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
  cfg: CardNodeCfg | ModelConfig,
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
  item:
    | EdgeConfig<
        | string
        | {
            text?: string;
            subText?: string;
          }
      >
    | NodeConfig
    | undefined,
  graph?: IGraph | IGroup | undefined,
) => {
  if (typeof cfg === 'function') {
    return cfg(item, graph);
  }
  return cfg;
};

export const getSize = (size: number | number[] | undefined) => {
  if (Array.isArray(size)) {
    return size;
  }
  return size ? [size, size] : defaultNodeSize;
};

// status bar 的默认宽度
const DefaultStatusBarWidth = 4;
/**
 * card status 对布局的影响，直接加到 padding 中
 */
export const getStatusBBox = (cfg: CardNodeCfg['badge'] | undefined) => {
  if (!cfg) {
    return [0, 0, 0, 0];
  }
  const { size = [], position = 'left' } = cfg;
  const [width, height] = getSize(size);
  const appendPadding = [];
  switch (position) {
    case 'top':
      appendPadding.push(height ?? DefaultStatusBarWidth, 0, 0, 0);
      break;
    case 'right':
      appendPadding.push(0, width ?? DefaultStatusBarWidth, 0, 0);
      break;
    case 'bottom':
      appendPadding.push(0, 0, height ?? DefaultStatusBarWidth, 0);
      break;
    case 'left':
      appendPadding.push(0, 0, 0, width ?? DefaultStatusBarWidth);
      break;
  }
  return appendPadding;
};

export const getStatusCfg = (cfg: CardNodeCfg['badge'], cardSize: [number, number]) => {
  const { size = [], position = 'left' } = cfg ?? {};
  const [width, height] = getSize(size);
  const [cardWidth, cardHeight] = cardSize;
  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;
  switch (position) {
    case 'top':
      x = 0;
      y = 0;
      w = width ?? cardWidth;
      h = height ?? DefaultStatusBarWidth;
      break;
    case 'left':
      x = 0;
      y = 0;
      w = width ?? DefaultStatusBarWidth;
      h = height ?? cardHeight;
      break;
    case 'right':
      x = cardWidth - (isNumber(width) ? width : DefaultStatusBarWidth);
      y = 0;
      w = width ?? DefaultStatusBarWidth;
      h = height ?? cardHeight;
      break;
    case 'bottom':
      x = 0;
      y = cardHeight - (isNumber(height) ? height : DefaultStatusBarWidth);
      w = width ?? cardWidth;
      h = height ?? DefaultStatusBarWidth;
      break;
  }

  return {
    x,
    y,
    width: w,
    height: h,
  };
};

export const createMarker = (cfg: MarkerCfg, group: IGroup | undefined, size: number[]) => {
  const { show, position, collapsed, style } = cfg;
  if (show) {
    group!.addShape('marker', {
      attrs: {
        ...getMarkerPosition(position, size),
        r: 6,
        cursor: 'pointer',
        symbol: collapsed ? G6.Marker.expand : G6.Marker.collapse,
        stroke: defaultCardStyle.stroke,
        lineWidth: 1,
        fill: '#fff',
        ...style,
      },
      defaultCollapsed: false,
      name: 'collapse-icon',
    });
  }
};
