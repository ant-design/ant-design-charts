import React, { Component } from 'react';
import G6 from '@antv/g6';
import type { Graph as G6Graph } from '@antv/g6';
import { isEqual } from 'lodash';
import { DEFAULT_LAYOUT_OPTIONS, DEFAULT_NODE, DEFAULT_EDGE, DEFAULT_MODE } from './constants';
import type { Props } from './types';
import { ITEM_STATE } from './types';
import { transformOriginData, drawLayerName, updateEdgeAnchorAndType } from './utils';
import registerBehavior from './behaviors';
import { resigterNodes } from './nodes';
import { resigterEdges } from './edges';
import { resigterLayout } from './layout';

export default class ConversionDagreGraph extends Component<Props, any> {
  private container: HTMLElement | null;
  private graph: G6Graph | null;
  private shouldCacheZoomAndTranslate: boolean;
  private cacheData;
  private resizeObserver: any;

  static defaultProps = {
    data: null,
    layerOrder: [],
    segmLayer: '',
    ratioMethod: 'both',
    layout: {
      rankdir: 'TB', // 默认从上到下
    }
  }

  constructor(props: ComponentProps) {
    super(props);
    this.container = null;
    this.graph = null;
    this.shouldCacheZoomAndTranslate = false;
    const { data, layerOrder, segmLayer, ratioMethod } = props;
    this.state = {
      graphData: transformOriginData(data, layerOrder, segmLayer, ratioMethod),
    };
  }

  componentDidMount() {
    // 先做图相关的注册：如节点、边、布局
    this.registerGraphRelative();
    // 创建主图
    this.newGraph();
    // 绘制节点和边
    this.renderGraph();
  }

  static getDerivedStateFromProps(props, state) {
    const { data, layerOrder, segmLayer, ratioMethod } = props;
    // props数据 -> G6渲染图数据
    const graphData = transformOriginData(
      data,
      layerOrder,
      segmLayer,
      ratioMethod,
    );
    return {
      graphData,
    };
  }

  componentDidUpdate(prevProps) {
    const { layerOrder, layout, data } = this.props;
    // 缓存当前视口状态
    this.handleCacheGraph();
    const { graphData } = this.state;
    const prevGraphData = transformOriginData(
      prevProps.data,
      prevProps.layerOrder,
      prevProps.segmLayer,
      prevProps.ratioMethod,
    );
    this.shouldCacheZoomAndTranslate = !this.getGraphShallowDiff(data, prevProps.data);
    if (isEqual(prevGraphData, graphData) && !isEqual(layout, prevProps.layout)) {
      // 仅更新布局
      this.graph.updateLayout(this.getLayoutParams(!isEqual(layout, prevProps.layout)));
      return;
    }
    // 数据变化或者层级顺序发生变化
    if (!isEqual(prevGraphData, graphData) || !isEqual(layerOrder, prevProps.layerOrder)) {
      // 更新布局
      this.graph.updateLayout(this.getLayoutParams(!isEqual(layerOrder, prevProps.layerOrder)));
      // 重新绘制节点和边
      this.renderGraph();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { graphData } = this.state;
    const nextGraphData = transformOriginData(
      nextProps.data,
      nextProps.layerOrder,
      nextProps.segmLayer,
      nextProps.ratioMethod,
    );
    if (!isEqual(nextGraphData, graphData) || !isEqual(nextProps.layout, this.props.layout)) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    // 移除事件监听
    this.removeEventListener();
  }

  // 图相关的注册
  registerGraphRelative = () => {
    // 注册节点
    resigterNodes();
    // 注册边
    resigterEdges();
    // 注册布局
    resigterLayout();
  }

  // 浅比较图数据: 只比较图结构有没有变化
  getGraphShallowDiff = (data = { nodes: [], edges: [] }, prevData = { nodes: [], edges: [] }) => {
    const { nodes, edges } = data;
    const { nodes: prevNodes, edges: prevEdges } = prevData;
    if (nodes.length !== prevNodes.length || edges.length !== prevEdges.length) {
      return true;
    }
    const noNodeChange = nodes.every((node) =>
      prevNodes.find((prevNode) => prevNode.id === node.id),
    );
    const noEdgeChange = edges.every((edge) =>
      prevEdges.find((prevEdge) => prevEdge.id === edge.id),
    );
    return !(noNodeChange && noEdgeChange);
  };

  // 创建主图
  newGraph = () => {
    if (this.graph) {
      this.removeEventListener();
      this.graph.destroy();
    }
    const width = this.container?.scrollWidth;
    const height = this.container?.scrollHeight;
    const graph = new G6.Graph({
      container: this.container,
      width,
      height,
      modes: {
        default: DEFAULT_MODE,
      },
      defaultNode: DEFAULT_NODE,
      defaultEdge: DEFAULT_EDGE,
      layout: this.getLayoutParams(),
      minZoom: 0.001,
    });
    this.graph = graph;
    const { onReady } = this.props;
    if (onReady) {
      onReady(graph);
    }
    // 注册自定义behavior
    registerBehavior(this.graph);
    this.addEventListener();
  };

  // 绘制节点和边
  renderGraph = () => {
    const { graphData } = this.state;
    this.graph.data(graphData);
    this.graph.render();
  };

  // 添加事件监听
  addEventListener = () => {
    // 布局完成
    this.graph.on('afterlayout', this.handleAfterLayout);
  };

  // 移除事件监听
  removeEventListener = () => {
    if (this.graph && !this.graph?.destroyed) {
      // 移除布局完成监听
      this.graph.off('afterlayout', this.handleAfterLayout);
      // 移除container resize监听
      this.resizeObserver.disconnect();
    }
  };

  // 获取布局参数
  getLayoutParams = (forceLayout?: boolean) => {
    const { layout, data } = this.props;
    // 是否每个节点都有位置信息
    const hasPosition = data?.nodes?.every((node) => node.x !== undefined && node.y !== undefined);
    // 如果每个节点都有位置信息，则走自定义preset布局
    if (!forceLayout && hasPosition) {
      return {
        type: 'conv-preset',
      };
    }
    return {
      ...DEFAULT_LAYOUT_OPTIONS,
      ranksep: layout.rankdir === 'TB' ? 75 : 150,
      ...layout,
      type: 'dagre',
    };
  };

  // 布局完成回调
  handleAfterLayout = () => {
    const {
      layerOrder,
      layout: { rankdir },
    } = this.props;
    if (!layerOrder?.length) {
      // 画布内容自适应视口大小
      this.graph.fitView(20);
      return;
    }
    // 更新边对应的类型、起点和终点的连接点
    updateEdgeAnchorAndType(this.graph, layerOrder, rankdir);
    // 绘制层级名称
    drawLayerName(this.graph, layerOrder, rankdir);
    if (this.shouldCacheZoomAndTranslate) {
      // 设置画布缩放比、位移、选中元素
      this.setCacheGraph();
    } else {
      // 画布内容自适应视口大小
      this.graph.fitView(20);
      // 首次非空图数据，缓存当前视口状态
      if (this.state.graphData?.nodes?.length) {
        this.shouldCacheZoomAndTranslate = true;
        this.handleCacheGraph();
      }
    }
  };

  // 缓存画布缩放比、画布位移、选中元素
  handleCacheGraph = () => {
    if (!this.graph || this.graph.destroyed) {
      return;
    }
    const width = this.graph.get('width');
    const height = this.graph.get('height');
    // 记录保存时的视口中心点对应的canvas坐标
    const centerPoint = this.graph.getCanvasByPoint(width / 2, height / 2);
    // 选中的节点
    const selectedNodes = this.graph
      .getNodes()
      .filter((node) => node.hasState(ITEM_STATE.Selected))
      .map((node) => node.get('id'));
    // 选中的边
    const selectedEdges = this.graph
      .getEdges()
      .filter((edge) => edge.hasState(ITEM_STATE.Selected))
      .map((edge) => edge.get('id'));
    // 缓存视口数据
    this.cacheData = {
      zoom: this.graph.getZoom(), // 缩放比
      centerPoint, // 视口中心对应的canvas坐标
      selectedNodes, // 选中的节点
      selectedEdges, // 选中的边
    };
  };

  // 设置画布缩放比、位移、选中的节点
  setCacheGraph = () => {
    if (!this.cacheData) {
      return;
    }
    const {
      selectedNodes,
      selectedEdges,
      zoom,
      centerPoint: { x, y },
    } = this.cacheData;
    const width = this.graph.get('width');
    const height = this.graph.get('height');
    this.graph.zoomTo(zoom);
    // 获取视口中心点对应的canvas坐标
    const newCenterPoint = this.graph.getCanvasByPoint(width / 2, height / 2);
    // 做视口中心点的平移
    this.graph.translate(x - newCenterPoint.x, y - newCenterPoint.y);
    // 还原选中的节点状态
    selectedNodes.forEach((selectedNode) => {
      this.graph.setItemState(selectedNode, ITEM_STATE.Selected, true);
    });
    // 还原选中的边状态
    selectedEdges.forEach((selectedEdge) => {
      this.graph.setItemState(selectedEdge, ITEM_STATE.Selected, true);
    });
  };

  handleMouseDown = (event) => {
    //阻止外层拖动影响
    event.preventDefault();
  };

  render(): React.ReactNode {
    const { className, style: propsStyle = {} } = this.props;
    const style = {
      width: '100%',
      height: '100%',
      ...propsStyle,
    }
    
    return (
      <div
        className={className}
        style={style}
        onMouseDown={this.handleMouseDown}
        ref={(container) => {
          this.container = container;
        }}
      />
    );
  }
}
