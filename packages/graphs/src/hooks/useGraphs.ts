import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6, { ModeType, INode, IEdge } from '@antv/g6';
import { isObject, isString, isEqual, isFunction } from '@antv/util';
import {
  getGraphSize,
  processMinimap,
  getCommonConfig,
  getArrowCfg,
  getMarkerPosition,
  setTag,
  getLevelData,
  getGraphId,
  renderGraph,
  bindStateEvents,
  bindDefaultEvents,
  bindSourceMapCollapseEvents,
  deepClone,
} from '../utils';
import { NodeConfig, EdgeConfig, CardNodeCfg, StateStyles, ArrowConfig, CommonConfig } from '../interface';
import { createToolbar } from '../components/toolbar';

export default function useGraph(graphClass: string, config: any, extra: { name?: string } = {}) {
  const container = useRef(null);
  const graphRef = useRef<any>();
  const graphOptions = useRef<CommonConfig>();
  // data 单独处理，会被 G6 修改
  const graphData = useRef();

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
      graph!.updateItem(node, {
        nodeCfg,
        markerCfg,
        type: nodeType,
        style: nodeStyle,
        anchorPoints: nodeAnchorPoints,
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
      // 资金流向图
      if (edgeType === 'fund-line') {
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
          label: getCommonConfig(content, edgeCfgModel, graph),
          labelCfg: {
            style: getCommonConfig(style, edgeCfgModel, graph),
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
      graphData.current = deepClone(data);
      changeData();
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
      const { nodeCfg, edgeCfg, behaviors, layout, animate, autoFit, fitCenter, onReady, tooltipCfg, customLayout } =
        config;

      const {
        type: nodeType,
        size: nodeSize,
        anchorPoints: nodeAnchorPoints,
        nodeStateStyles,
        style: nodeStyle,
        title: nodeLabelCfg,
        linkCenter,
        getChildren,
      } = nodeCfg ?? {};

      const {
        type: edgeType,
        style: edgeStyle,
        startArrow: startArrowCfg,
        endArrow: endArrowCfg,
        label: labelCfg,
        edgeStateStyles,
      } = edgeCfg ?? {};

      if (tooltipCfg && isFunction(tooltipCfg.customContent)) {
        const { customContent, ...rest } = tooltipCfg;
        const createNode = (children: React.ReactNode) => {
          const mountPoint = document.createElement('div');
          mountPoint.className = 'g6-tooltip';
          ReactDOM.render(children as React.ReactElement, mountPoint);
          return mountPoint;
        };
        const tooltipPlugin = new G6.Tooltip({
          offsetX: 10,
          offsetY: 20,
          itemTypes: ['node'],
          ...rest,
          getContent(e) {
            return createNode(customContent(e.item.getModel()));
          },
        });
        plugins.push(tooltipPlugin);
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
          type: nodeType,
          size: nodeSize,
          anchorPoints: nodeAnchorPoints,
          nodeCfg,
        },
        defaultEdge: {
          type: edgeType,
          edgeCfg,
          labelCfg: labelCfg?.style,
        },
        nodeStateStyles,
        edgeStateStyles: getEdgeStateStyles(edgeStateStyles),
        layout: customLayout ? undefined : layout,
        fitView: autoFit,
        fitCenter,
        plugins,
      });
      const graphId = getGraphId(graphRef.current);
      const graph = graphRef.current;
      graph.set('id', graphId);

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
      const customNode = ['fund-card', 'indicator-card'];
      // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
      graph.node((node: NodeConfig) => {
        if (customNode.includes(nodeType) || name === 'OrganizationGraph') {
          node.markerCfg = markerCfg;
          return {};
        }
        const { style } = (nodeLabelCfg ?? {}) as CardNodeCfg;
        return {
          label: getLabel(node.value),
          labelCfg: {
            style: getCommonConfig(style, node, graph),
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
          return getCommonConfig(content, edge, graph);
        }
        if (name === 'FundFlowGraph') {
          const { value } = edge;
          // @ts-ignore
          return typeof value === 'object' ? value?.text : value;
        }
        return edge.value;
      };
      if (edgeType !== 'fund-line') {
        graph.edge((edge: EdgeConfig) => {
          const startArrow = getArrowCfg(startArrowCfg, edge);
          const endArrow = getArrowCfg(endArrowCfg, edge);
          const { style } = labelCfg ?? {};
          return {
            label: getEdgeLabel(edge),
            labelCfg: {
              style: getCommonConfig(style, edge, graph),
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
        sourceGraph.includes(name) ? bindSourceMapCollapseEvents(graph) : bindDefaultEvents(graph, level, getChildren);
      }
      renderGraph(graph, data, level);
      if (fitCenter) {
        graph.fitCenter();
      }
      if (onReady) {
        onReady(graph);
      }
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
