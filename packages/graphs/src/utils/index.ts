import G6, { TreeGraphData, GraphData } from '@antv/g6';
import { isNumber, isObject, isString, clone, findIndex, isFunction } from '@antv/util';
import { RadialLayout } from '@antv/layout';
import { countBy } from './countBy';
import {
  MiniMapConfig,
  CardNodeCfg,
  IArrowConfig,
  NodeData,
  CommonConfig,
  IGraph,
  ITreeGraph,
  IG6GraphEvent,
  INode,
  Graph,
  IGroup,
  EdgeConfig,
  NodeConfig,
  IEdge,
  ModelConfig,
  MarkerCfg,
  FetchLoading,
} from '../interface';
import {
  defaultMinimapCfg,
  defaultNodeSize,
  defaultCardStyle,
  prefix,
  defaultFlowGraphAnchorPoints,
} from '../constants';
import { radialSectorLayout } from '../layout';
import { DecompositionTreeGraphConfig } from '../components/decomposition-tree-graph';
import { FlowAnalysisGraphConfig } from '../components/flow-analysis-graph';
import { createNode } from './create-node';

// 类型检测
export const isType = (value: any, type: string): boolean => {
  const { toString } = {};
  return toString.call(value) === `[object ${type}]`;
};

export const Log = window.console;

export const getType = (n: Object) => {
  return Object.prototype.toString.call(n).slice(8, -1);
};

/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */
export const deepClone = (source: Object | undefined) => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  let target;
  if (Array.isArray(source)) {
    target = source.map((item) => deepClone(item));
  } else if (source instanceof HTMLElement) {
    target = source;
  } else {
    target = {};
    Object.keys(source).forEach((key) => {
      return (target[key] = deepClone(source[key]));
    });
  }

  return target;
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
    Log.warn('请为 Graph 指定 width 与 height！否则将使用默认值 500 * 500');
    return [500, 500];
  }

  return [width || CANVAS_WIDTH || 500, height || CANVAS_HEIGHT || 500];
};

type Datum = any;
class EventData {
  data: Datum;
  constructor(data?: Datum) {
    data && this.setData(data);
  }
  getData(): Datum {
    return this.data;
  }
  setData(data: Datum) {
    this.data = data;
  }
}

export const getCenterNode = (data: GraphData) => {
  const { nodes, edges } = data;
  if (nodes.length === 1) {
    return nodes[0].id;
  }
  const linkCount: string[] = [];
  edges.forEach((item) => {
    linkCount.push(item.source);
  });
  const timesObj = countBy(linkCount);
  let maxTimes = 0;
  let maxTimeKey = '';
  for (let k in timesObj) {
    if (timesObj.hasOwnProperty(k) && timesObj[k] > maxTimes) {
      maxTimes = timesObj[k];
      maxTimeKey = k;
    }
  }
  return maxTimeKey;
};

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
    createLoading(itemModel as NodeConfig, fetchLoading);
    const newData = await asyncData(item.getModel() as NodeConfig);
    closeLoading();
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
    if (e.target.get('name') === 'collapse-icon') {
      const { collapsed, g_currentPath, children = [], g_parentId, g_level, id } = item.getModel();
      let appendChildren =
        level &&
        !(children as Array<Datum>).length &&
        getChildrenData(graph.get('eventData').getData(), g_currentPath as string);

      if (getChildren && !(children as Array<Datum>)?.length && !appendChildren?.length) {
        createLoading(model as NodeConfig, fetchLoading);
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
        closeLoading();
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

export const renderGraph = (graph: IGraph, data: any, level?: number) => {
  let originData = deepClone(data);
  let tagData = originData;
  if (level) {
    tagData = setTag(data);
    originData = getLevelData(tagData, level);
  }
  graph.data(originData);
  graph.set('eventData', new EventData(tagData));
  graph.render();
  // 关闭局部刷新，各种 bug
  graph.get('canvas').set('localRefresh', false);
};

const grapgMinmapMaps = {};
export const processMinimap = (cfg: MiniMapConfig | undefined = {}, graph: Graph) => {
  const graphId = graph?.get('id');
  if (!graph || graph.destroyed) {
    grapgMinmapMaps[graphId] = null;
    return;
  }
  if ((!cfg || !cfg.show) && grapgMinmapMaps[graphId]) {
    const [pluginMinimap] = graph.get('plugins');
    if (pluginMinimap) {
      graph.removePlugin(pluginMinimap);
    }
    grapgMinmapMaps[graphId] = null;
  }
  if (cfg.show && !grapgMinmapMaps[graphId]) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
      id: graphId,
    });

    graph.addPlugin(minimap);
    grapgMinmapMaps[graphId] = minimap;
    return minimap;
  }
  return null;
};

const getUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 同一页面存在多 graph 时需要指定 graphId
export const getGraphId = (graph: { current?: string }) => {
  if (graph.current) {
    return graph.current;
  }
  graph.current = `graph-${getUuid()}`;
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
  asyncData: FlowAnalysisGraphConfig['nodeCfg']['asyncData'],
  fetchLoading?: FetchLoading,
) => {
  const onClick = async (e: IG6GraphEvent) => {
    const controlData: { edges: any[]; nodes: any[] } = graph.get('eventData').getData();
    if (e.target.get('name') === 'collapse-icon') {
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
          createLoading(item.getModel() as NodeConfig, fetchLoading);
          const { nodes, edges } = await asyncData(item.getModel() as NodeConfig);
          const eventData = {
            nodes: controlData.nodes.concat(nodes),
            edges: controlData.edges.concat(
              edges?.length ? edges : nodes.map((item) => ({ source: nodeId, target: item.id })),
            ),
          };
          closeLoading();
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

// 统一处理 config，支持回调
export const getStyle = (
  source: unknown,
  cfg: CardNodeCfg | ModelConfig,
  item?: IGroup | undefined,
  current?: string | number,
) => {
  if (typeof source === 'function') {
    return source(cfg, item, current) || {};
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
  const appendPadding: number[] = [];
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
export const cloneBesidesImg = (obj: any) => {
  const clonedObj = {};
  Object.keys(obj).forEach((key1) => {
    const obj2 = obj[key1];
    if (isObject(obj2)) {
      const clonedObj2 = {};
      Object.keys(obj2).forEach((key2) => {
        const v = obj2[key2];
        if (key2 === 'img' && !isString(v)) return;
        clonedObj2[key2] = clone(v);
      });
      clonedObj[key1] = clonedObj2;
    } else {
      clonedObj[key1] = clone(obj2);
    }
  });
  return clonedObj;
};

export const setStyles = (container: HTMLDivElement, style: React.CSSProperties = {}) => {
  const keys = Object.keys(style);
  keys.forEach((key: string) => {
    container.style[key] = style[key];
  });
};

/**
 * 对数据进行打标，加上 level 和  parentId
 */
export const setTag = (data: Datum, level = 0, parentId = '', path: string = '') => {
  const { id, children = [] } = data;
  return {
    [`${prefix}_level`]: level,
    [`${prefix}_parentId`]: parentId,
    [`${prefix}_currentPath`]: path,
    ...data,
    children: children?.map((item: Datum, index: number) => {
      return setTag(item, level + 1, parentId ? `${parentId}-${id}` : id, `${path}-${index}`);
    }),
  };
};

/**
 * 根据 level 获取相关数据
 */
export const getLevelData = (data: Datum, level: number): Datum => {
  const { children = [], g_level = 0 } = data;
  if (level <= 0) {
    return data;
  }
  return {
    ...data,
    children:
      g_level + 1 < level
        ? children?.map((item: Datum) => {
            return getLevelData(item, level);
          })
        : [],
  };
};

/**
 * 挂载异步数据到全局 data
 */
export const setLevelData = (graph: IGraph, data: Datum, currentPath: string) => {
  const currentData = graph.get('eventData').getData();
  // 打标时已经做了编码，这直接取值即可
  const path = currentPath.split('-');
  path.shift(); // 根节点没有 path
  let current = currentData;
  path.forEach((childrenIndex: string) => {
    current = current.children[Number(childrenIndex)];
  });
  current.children = data;
};

/**
 * get children
 * 获取相关路径下的一级节点
 */
export const getChildrenData = (data: Datum, currentPath: string): Datum => {
  // 打标时已经做了编码，这直接取值即可
  const path = currentPath.split('-');
  path.shift(); // 根节点没有 path
  let current = data;
  path.forEach((childrenIndex: string) => {
    current = current.children[Number(childrenIndex)];
  });
  if (!current?.children) {
    return [];
  }
  return current.children.map((item: Datum) => ({
    ...item,
    children: [],
  }));
};

/**
 * 将查询到的节点挂载到当前图数据上
 */
export const setParentChildren = (parendData: Datum, currentPath: string, children: Datum[]): Datum => {
  const path = currentPath.split('-');
  path.shift();
  let current = parendData;
  path.forEach((childrenIndex: string) => {
    current = current.children[Number(childrenIndex)];
  });
  current.children = children;
  return parendData;
};

/** 超出省略 */
export const setEllipsis = (text: string, fontSize: string | number = 12, contentWidth: number = 120) => {
  const size = isNumber(fontSize) ? fontSize : Number(fontSize.replace('px', ''));
  const maxWords = Math.floor(contentWidth / size);
  if (text.length <= maxWords) {
    return text;
  }
  return text.slice(0, maxWords - 1) + '...';
};

/** 开启加载动画， 不支持同时存在多个 */
export const createLoading = (node: NodeConfig, fetchLoading: FetchLoading) => {
  const loadingClassName = `${prefix}-antd-loading`;
  if (fetchLoading) {
    const loadingTemplate = isFunction(fetchLoading) ? fetchLoading(node) : fetchLoading;
    document.body.appendChild(createNode(loadingTemplate, loadingClassName));
  } else {
    const container = document.createElement('div');
    container.className = loadingClassName;
    const styles = {
      position: 'fixed' as 'fixed',
      left: '0',
      top: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0, 0.25)',
      color: '#fff',
      fontSize: '16px',
      zIndex: 999,
    };
    setStyles(container, styles);
    const span = document.createElement('span');
    span.innerText = 'loading...';
    container.appendChild(span);
    document.body.appendChild(container);
  }
};

/** 关闭加载动画 */
export const closeLoading = () => {
  const hideContainer = document.getElementsByClassName(`${prefix}-antd-loading`);
  Array.from(hideContainer).forEach((el) => {
    document.body.removeChild(el);
  });
};
/** 支持自定义 anchor */
export const getAnchorPoints = (anchorPoints: ((node: NodeConfig) => number[][]) | number[][], node?: NodeConfig) => {
  if (typeof anchorPoints === 'function' && node) {
    return anchorPoints(node) || {};
  }
  if (Array.isArray(anchorPoints)) {
    return anchorPoints;
  }
  return defaultFlowGraphAnchorPoints;
};
