import G6, { IEdge, INode, ModeType } from '@antv/g6';
import { isEqual, isObject, isString, omit } from '@antv/util';
import { useEffect, useRef } from 'react';
import { ArrowConfig, CardNodeCfg, CommonConfig, EdgeConfig, NodeConfig, StateStyles } from '../interface';
import {
  deepClone,
  getAnchorPoints,
  getArrowCfg,
  getCommonCfg,
  getGraphId,
  getGraphSize,
  getMarkerPosition,
  renderGraph,
  getCenterNode,
  bindStateEvents,
  runAsyncEvent,
  getRenderData,
} from '../utils';
import { processMinimap, processTooltip, processMenu, processToolbar } from '../plugins';
import { setGlobalInstance } from '../utils/global';

export default function useGraph(
  graphClass: string,
  config: any,
  extra: { name?: string; bindEvents?: Function } = {},
) {
  const container = useRef(null);
  const graphRef = useRef<any>();
  const graphOptions = useRef<CommonConfig>();
  // data 单独处理，会被 G6 修改
  const graphData = useRef<any>();

  const {
    data,
    width,
    height,
    layout,
    minimapCfg,
    behaviors,
    fitCenter,
    nodeCfg,
    edgeCfg,
    markerCfg,
    level,
    toolbarCfg,
    tooltipCfg,
    menuCfg,
    customLayout,
  } = config;
  const graph = graphRef.current;
  /** 隐藏孤立边 */
  const setEdgesState = (edges: IEdge[]) => {
    edges.forEach((edge: IEdge) => {
      const { source, target } = edge.getModel();
      const sourceVisible = graph?.findById(source as string)?.get('visible');
      const targetVisible = graph?.findById(target as string)?.get('visible');
      if (sourceVisible === false || targetVisible === false) {
        edge.changeVisibility(false);
      }
    });
  };

  const changeData = () => {
    if (!graph) return;
    let originData = data;
    let tagData = originData;
    if (level) [originData, tagData] = getRenderData(data, level);
    graph.changeData(originData);
    graph.get('eventData')?.setData(tagData);
    setEdgesState(graph.getEdges());
    if (fitCenter) {
      graph.fitCenter();
    }
    runAsyncEvent(graph.get('id'));
  };

  const updateLayout = () => {
    graph?.updateLayout(layout);
    if (fitCenter) {
      graph?.fitCenter();
    }
  };

  const updateNodes = () => {
    if (!graph) {
      return;
    }
    const { type: nodeType, anchorPoints: nodeAnchorPoints, style: nodeStyle, title: nodeLabelCfg } = nodeCfg ?? {};

    graph.getNodes().forEach((node: INode) => {
      const anchorPoints = getAnchorPoints(nodeAnchorPoints, node.getModel() as NodeConfig);
      graph!.updateItem(node, {
        nodeCfg,
        markerCfg,
        type: nodeType,
        style: nodeStyle,
        anchorPoints,
        labelCfg: nodeLabelCfg,
      });
    });
    runAsyncEvent(graph.get('id'));
  };

  const updateEdges = () => {
    if (!graph) {
      return;
    }
    const {
      type: edgeType,
      style: edgeStyle,
      startArrow: startArrowCfg,
      endArrow: endArrowCfg,
      label: labelCfg,
    } = edgeCfg ?? {};
    graph.getEdges().forEach((edge: IEdge) => {
      // 资金流向图&来源去向图
      if (['fund-line', 'labels-line'].includes(edgeType)) {
        graph!.updateItem(edge, {
          edgeCfg,
        });
      } else {
        const edgeCfgModel = edge.getModel();
        const startArrow = getArrowCfg(startArrowCfg, edgeCfgModel);
        const endArrow = getArrowCfg(endArrowCfg, edgeCfgModel);
        const { style, content } = labelCfg ?? {};

        graph!.updateItem(edge, {
          type: edgeType,
          label: getCommonCfg(content, edgeCfgModel, graph),
          labelCfg: {
            style: getCommonCfg(style, edgeCfgModel, graph),
          },
          style: {
            stroke: '#ccc',
            startArrow,
            endArrow,
            ...(typeof edgeStyle === 'function' ? edgeStyle(edgeCfgModel, graph) : edgeStyle),
          },
        });
      }
    });
  };

  // 目前仅支持更新位置
  const updateMarker = () => {
    if (!graph) {
      return;
    }
    graph.getNodes().forEach((node: INode) => {
      const { position = 'right' } =
        typeof markerCfg === 'function' ? markerCfg(node.getModel(), node.get('group')) : markerCfg;
      const { width, height } = node.getBBox();
      const markerShape = node
        .get('group')
        .get('children')
        .find((item: INode) => item.get('name') === 'collapse-icon');
      if (markerShape) {
        markerShape?.attr({
          ...getMarkerPosition(position, [width, height]),
        });
      }
    });
  };

  const getEdgeStateStyles = (edgeStateStyles: StateStyles | undefined) => {
    const { name = '' } = extra;
    if (name !== 'FundFlowGraph') {
      return edgeStateStyles;
    }
    if (!edgeStateStyles) {
      return;
    }
    const { hover = {} } = edgeStateStyles;
    const { endArrow, startArrow } = hover;
    if (!endArrow && !startArrow) {
      return edgeStateStyles;
    }
    return {
      hover: {
        ...hover,
        endArrow: endArrow ? getArrowCfg(endArrow as ArrowConfig) : false,
        startArrow: startArrow ? getArrowCfg(startArrow as ArrowConfig) : false,
      },
    };
  };

  useEffect(() => {
    if (graph && !graph.destroyed) {
      if (isEqual(data, graphData.current)) {
        return;
      }
      if (extra.name === 'RadialGraph' && !graphData.current.nodes?.length) {
        const centerNode = getCenterNode(data);
        graph.set('centerNode', centerNode);
        graph.updateLayout({
          ...layout,
          focusNode: centerNode,
        });
      } else {
        changeData();
      }
      graphData.current = deepClone(data);
    }
  }, [data]);

  useEffect(() => {
    if (graph && !graph.destroyed) {
      if (isEqual(config, graphOptions.current)) {
        return;
      }
      if (!customLayout && !isEqual(layout, graphOptions.current?.layout)) {
        updateLayout();
      }
      if (!isEqual(minimapCfg, graphOptions.current?.minimapCfg)) {
        processMinimap(minimapCfg, graph);
      }
      if (!isEqual(nodeCfg, graphOptions.current?.nodeCfg)) {
        updateNodes();
      }
      if (!isEqual(edgeCfg, graphOptions.current?.edgeCfg)) {
        updateEdges();
      }
      if (!isEqual(markerCfg, graphOptions.current?.markerCfg)) {
        updateMarker();
      }
      graphOptions.current = config;
    }
  }, [config]);

  useEffect(() => {
    if (graph && !graph.destroyed) {
      const graphSize = getGraphSize(width, height, container);
      graph.changeSize(graphSize[0], graphSize[1]);
    }
  }, [container, width, height]);

  useEffect(() => {
    if (graph && !graph.destroyed) {
      const { default: defaultMode } = graph.get('modes');
      const removingBehaviors: string[] = [];
      defaultMode.forEach((be: string | ModeType) => {
        if (isObject(be)) {
          removingBehaviors.push(be.type);
        } else if (isString(be)) {
          removingBehaviors.push(be);
        }
      });
      graph.removeBehaviors(removingBehaviors, 'default');
      graph.addBehaviors(behaviors, 'default');
    }
  }, [behaviors]);

  useEffect(() => {
    if (container.current && graphClass) {
      const { name = '', bindEvents } = extra;
      const graphSize = getGraphSize(width, height, container);
      const {
        nodeCfg,
        edgeCfg,
        behaviors = [],
        layout,
        animate,
        autoFit,
        fitCenter,
        onReady,
        customLayout,
        fetchLoading,
      } = config;

      const {
        type: nodeType,
        anchorPoints: nodeAnchorPoints,
        nodeStateStyles,
        style: nodeStyle,
        title: nodeLabelCfg,
        linkCenter,
        getChildren,
        asyncData,
      } = nodeCfg ?? {};

      const {
        type: edgeType,
        style: edgeStyle,
        startArrow: startArrowCfg,
        endArrow: endArrowCfg,
        label: labelCfg,
        edgeStateStyles,
      } = edgeCfg ?? {};

      if (!graphRef.current) {
        graphRef.current = new G6[graphClass]({
          container: container.current as any,
          width: graphSize[0],
          height: graphSize[1],
          animate,
          linkCenter,
          modes: {
            default: behaviors,
          },
          defaultNode: {
            ...nodeCfg,
            nodeCfg,
          },
          defaultEdge: {
            ...omit(edgeCfg, ['label']),
            edgeCfg,
            labelCfg: labelCfg?.style,
          },
          nodeStateStyles,
          edgeStateStyles: getEdgeStateStyles(edgeStateStyles),
          layout: customLayout ? undefined : layout,
          fitView: autoFit,
          fitCenter,
          plugins,
          extraPlugin: {
            getChildren,
            fetchLoading,
          },
        });
      }

      const graphId = getGraphId(graphRef.current, name);
      const graph = graphRef.current;
      graph.set('id', graphId);
      setGlobalInstance(graphId, graph);

      const customNode = ['fund-card', 'indicator-card', 'file-tree-node'];
      const getLabel = (value: { [key: string]: string } | string): string => {
        // 辐射树图
        if (isString(value)) {
          return value;
        }
        if (name === 'FundFlowGraph') {
          return value?.text;
        }
        return value?.title;
      };
      // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
      graph.node((node: NodeConfig) => {
        if (customNode.includes(nodeType) || name === 'OrganizationGraph') {
          const anchorPoints = getAnchorPoints(nodeAnchorPoints, node);
          node.markerCfg = markerCfg;
          node.edgeCfg = edgeCfg;
          return {
            anchorPoints,
            _draggable: behaviors.includes('drag-node'),
            _graphId: graphId,
          };
        }
        const { style } = (nodeLabelCfg ?? {}) as CardNodeCfg;
        return {
          _graphId: graphId,
          label: getLabel(node.value),
          labelCfg: {
            style: getCommonCfg(style, node, graph),
          },
          style: {
            stroke: '#ccc',
            ...(typeof nodeStyle === 'function' ? nodeStyle(node, graph) : nodeStyle),
          },
        };
      });

      const getEdgeLabel = (edge: EdgeConfig) => {
        const { content } = labelCfg ?? {};

        if (['DecompositionTreeGraph', 'OrganizationGraph', 'RadialTreeGraph'].includes(name)) {
          return getCommonCfg(content, edge, graph);
        }
        if (['FundFlowGraph', 'FlowAnalysisGraph'].includes(name)) {
          const { value } = edge;
          // @ts-ignore
          return typeof value === 'object' ? value?.text : value;
        }
        return edge.value;
      };
      if (!['fund-line', 'labels-line'].includes(edgeType)) {
        graph.edge((edge: EdgeConfig) => {
          const startArrow = getArrowCfg(startArrowCfg, edge);
          const endArrow = getArrowCfg(endArrowCfg, edge);
          const { style } = labelCfg ?? {};
          return {
            label: getEdgeLabel(edge),
            labelCfg: {
              style: getCommonCfg(style, edge, graph),
            },
            style: {
              stroke: '#ccc',
              startArrow,
              endArrow,
              ...(typeof edgeStyle === 'function' ? edgeStyle(edge, graph) : edgeStyle),
            },
          };
        });
      }

      bindStateEvents(graph, config);
      // 绑定节点辐射事件
      if (name === 'RadialGraph') {
        const centerNode = getCenterNode(data);
        graph.set('centerNode', centerNode);
      }
      // 绑定事件
      if (typeof bindEvents === 'function') {
        bindEvents({
          graph,
          level,
          asyncData,
          getChildren,
          fetchLoading,
          layout,
        });
      }
      renderGraph(graph, data, level);
      fitCenter && graph.fitCenter();
      onReady && onReady(graph);
      graphData.current = deepClone(data);
    }
  }, []);

  useEffect(() => {
    if (graphRef.current) {
      const _graph = graphRef.current;
      processMinimap(minimapCfg, _graph);
      processTooltip(tooltipCfg, _graph);
      processMenu(menuCfg, _graph);
      processToolbar(toolbarCfg, _graph, container.current);
    }
  }, [graphRef, toolbarCfg, tooltipCfg, menuCfg]);

  useEffect(() => {
    return () => {
      if (graph?.current && !graph.current.destroyed) {
        graph.current.destroy();
      }
    };
  }, []);

  return {
    container,
  };
}
