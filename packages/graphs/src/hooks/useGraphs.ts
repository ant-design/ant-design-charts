import G6, { IEdge, INode, ModeType } from '@antv/g6';
import { isEqual, isFunction, isObject, isString, omit } from '@antv/util';
import { useEffect, useRef } from 'react';
import { createNode } from '../utils/create-node';
import { createToolbar, Menu } from '../plugins';
import { ArrowConfig, CardNodeCfg, CommonConfig, EdgeConfig, NodeConfig, StateStyles } from '../interface';
import {
  deepClone,
  getAnchorPoints,
  getArrowCfg,
  getCommonCfg,
  getGraphId,
  getGraphSize,
  getLevelData,
  getMarkerPosition,
  processMinimap,
  renderGraph,
  setTag,
  getCenterNode,
  bindDefaultEvents,
  bindSourceMapCollapseEvents,
  bindStateEvents,
  bindRadialExplore,
} from '../utils';
import { setGlobalInstance } from '../utils/global';

export default function useGraph(graphClass: string, config: any, extra: { name?: string } = {}) {
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
    if (!graph) {
      return;
    }
    let currentData = data;
    if (level) {
      currentData = setTag(data);
    }
    graph.changeData(level ? getLevelData(currentData, level) : data);
    graph.get('eventData')?.setData(currentData);
    setEdgesState(graph.getEdges());
    if (fitCenter) {
      graph.fitCenter();
    }
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
      const { name = '' } = extra;
      const graphSize = getGraphSize(width, height, container);
      const plugins = [];
      const {
        nodeCfg,
        edgeCfg,
        behaviors,
        layout,
        animate,
        autoFit,
        fitCenter,
        onReady,
        tooltipCfg,
        customLayout,
        menuCfg,
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

      // tooltip
      if (tooltipCfg && isFunction(tooltipCfg.customContent)) {
        const { customContent, ...rest } = tooltipCfg;
        const tooltipPlugin = new G6.Tooltip({
          offsetX: 10,
          offsetY: 20,
          itemTypes: ['node'],
          ...rest,
          getContent(e) {
            return createNode(customContent(e.item.getModel()), 'g6-tooltip');
          },
        });
        plugins.push(tooltipPlugin);
      }
      // menu
      if (menuCfg && isFunction(menuCfg.customContent)) {
        const menuPlugin = new Menu({
          offsetX: 16 + 10,
          offsetY: 0,
          itemTypes: ['node'],
          ...menuCfg,
        });
        plugins.push(menuPlugin);
      }
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
      const graphId = getGraphId(graphRef.current, name);
      const graph = graphRef.current;
      graph.set('id', graphId);
      setGlobalInstance(graphId, graph);
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
      const customNode = ['fund-card', 'indicator-card', 'file-tree-node'];
      // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
      graph.node((node: NodeConfig) => {
        if (customNode.includes(nodeType) || name === 'OrganizationGraph') {
          const anchorPoints = getAnchorPoints(nodeAnchorPoints, node);
          node.markerCfg = markerCfg;
          node.edgeCfg = edgeCfg;
          return {
            anchorPoints,
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

      processMinimap(minimapCfg, graph);
      bindStateEvents(graph, config);
      if (markerCfg) {
        const sourceGraph = ['FlowAnalysisGraph', 'FundFlowGraph'];
        sourceGraph.includes(name)
          ? bindSourceMapCollapseEvents(graph, asyncData, fetchLoading)
          : bindDefaultEvents(graph, level, getChildren, fetchLoading);
      }
      if (name === 'RadialGraph') {
        const centerNode = getCenterNode(data);
        graph.set('centerNode', centerNode);
        bindRadialExplore(graph, asyncData, layout, fetchLoading);
      }
      renderGraph(graph, data, level);
      fitCenter && graph.fitCenter();
      onReady && onReady(graph);
      graphData.current = deepClone(data);
    }
  }, []);

  useEffect(() => {
    if (graphRef.current && toolbarCfg) {
      createToolbar({ graph: graphRef.current, container: container.current, toolbarCfg });
    }
  }, [graphRef, toolbarCfg]);

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
