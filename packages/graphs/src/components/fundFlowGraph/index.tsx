import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraph';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../util/createLoading';
import {
  getGraphSize,
  getGraphId,
  bindSourceMapCollapseEvents,
  processMinimap,
  renderGraph,
  getCommonConfig,
  getArrowCfg,
  bindStateEvents,
} from '../../util';
import {
  defaultFlowGraphAnchorPoints,
  defaultNodeSize,
  defaultStateStyles,
  defaultNodeStyle,
} from '../../constants';
import { registerFundFlowItems } from './customItem';
import {
  CommonConfig,
  EdgeData,
  EdgeConfig,
  NodeConfig,
  NodeData,
  StateStyles,
  ArrowConfig,
} from '../../interface';

export type edgeType =
  | string
  | {
      text?: string;
      subText?: string;
    };

export interface FundFlowEdgeData extends EdgeData<edgeType> {}

export interface FundFlowNodeData
  extends NodeData<{
    text?: string;
    icon?: string;
  }> {}
export interface FundFlowGraphConfig extends Omit<CommonConfig, 'data'> {
  data: {
    nodes: FundFlowNodeData[];
    edges: FundFlowEdgeData[];
  };
}

const graphs: any = {};

registerFundFlowItems();

const defaultLayout = {
  type: 'dagre',
  rankdir: 'LR',
  nodesep: 30,
  ranksep: 50,
};

const defaultProps = {
  nodeCfg: {
    type: 'fund-card',
    size: defaultNodeSize,
    style: defaultNodeStyle,
    anchorPoints: defaultFlowGraphAnchorPoints,
    nodeStateStyles: defaultStateStyles,
    padding: 6,
  },
  edgeCfg: {
    type: 'fund-polyline',
    edgeStateStyles: defaultStateStyles,
    style: {
      stroke: '#40a9ff',
    },
    endArrow: {
      fill: '#40a9ff',
    },
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  autoFit: true,
  fitCenter: true,
  style: {
    height: 'inherit',
  },
};

const getEdgeStateStyles = (edgeStateStyles: StateStyles | undefined) => {
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

const FundFlowGraph: React.FC<FundFlowGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    nodeCfg,
    edgeCfg,
    behaviors,
    layout,
    animate,
    minimapCfg,
    autoFit,
    fitCenter,
    markerCfg,
    onReady,
    loading,
    loadingTemplate,
    errorTemplate,
  } = uProps;

  const {
    type: nodeType,
    size: nodeSize,
    anchorPoints: nodeAnchorPoints,
    nodeStateStyles,
    style: nodeStyle,
    label: nodeLabelCfg,
  } = nodeCfg ?? {};

  const {
    type: edgeType,
    style: edgeStyle,
    startArrow: startArrowCfg,
    endArrow: endArrowCfg,
    label: labelCfg,
    edgeStateStyles,
  } = edgeCfg ?? {};
  const container = React.useRef(null);
  const graph = React.useRef(null);
  const graphId = getGraphId(graph as any);
  useGraph(graphs[graphId], uProps, container);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
    let graph = graphs[graphId];

    if (!graph) {
      graph = new G6.Graph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        animate,
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
        },
        nodeStateStyles,
        edgeStateStyles: getEdgeStateStyles(edgeStateStyles),
        layout,
        fitView: autoFit,
        fitCenter,
      });
      graphs[graphId] = graph;
    }
    // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
    graph.node((node: NodeConfig) => {
      if (node.type === 'fund-card') {
        node.markerCfg = markerCfg;
        return {};
      }
      const { style } = nodeLabelCfg ?? {};

      return {
        label: node.value?.text,
        labelCfg: {
          style: getCommonConfig(style, node, graph),
        },
        style: {
          stroke: '#ccc',
          ...(typeof nodeStyle === 'function' ? nodeStyle(node, graph) : nodeStyle),
        },
      };
    });
    if (edgeType !== 'fund-polyline') {
      graph.edge((edge: EdgeConfig<edgeType>) => {
        const startArrow = getArrowCfg(startArrowCfg, edge);
        const endArrow = getArrowCfg(endArrowCfg, edge);
        const { style } = labelCfg ?? {};
        const { value } = edge;
        return {
          label: typeof value === 'object' ? value?.text : value,
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
    bindStateEvents(graph, uProps as FundFlowGraphConfig);
    if (markerCfg) {
      bindSourceMapCollapseEvents(graph, data as FundFlowGraphConfig['data']);
    }
    renderGraph(graph, data);
    if (onReady) {
      onReady(graph);
    }
    return () => {
      if (graphs[graphId]) {
        graphs[graphId].destroy();
        delete graphs[graphId];
      }
    };
  }, []);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default FundFlowGraph;
