import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { ErrorBoundary } from '../../base';
import useGraph from '../../hooks/useGraph';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../util/createLoading';
import { getGraphSize, getGraphId } from '../utils';
import {
  processMinimap,
  renderGraph,
  getCommonConfig,
  getArrowCfg,
  bindStateEvents,
} from '../utils';
import { CommonConfig, EdgeConfig, NodeConfig, FlowGraphDatum } from '../interface';
import { defaultFlowGraphAnchorPoints, defaultStateStyles, defaultNodeStyle } from '../constants';

export interface RadialTreeGraphConfig extends Omit<CommonConfig, 'data'> {
  data: FlowGraphDatum;
}

const graphs: any = {};

const defaultLayout = {
  type: 'dendrogram',
  direction: 'LR',
  nodeSep: 20,
  rankSep: 100,
  radial: true,
};

const defaultProps = {
  nodeCfg: {
    type: 'circle',
    size: 30,
    anchorPoints: defaultFlowGraphAnchorPoints,
    linkCenter: true,
    nodeStateStyles: defaultStateStyles,
    style: defaultNodeStyle,
  },
  edgeCfg: {
    type: 'line',
    edgeStateStyles: defaultStateStyles,
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  markerPosition: 'right' as 'right',
  autoFit: true,
  style: {
    height: 'inherit',
  },
};

const RadialTreeGraph: React.FC<RadialTreeGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    behaviors,
    layout,
    animate,
    nodeCfg,
    edgeCfg,
    autoFit,
    minimapCfg,
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
    linkCenter,
    style: nodeStyle,
    label: nodeLabelCfg,
  } = nodeCfg ?? {};

  const {
    type: edgeType,
    style: edgeStyle,
    startArrow: startArrowCfg,
    endArrow: endArrowCfg,
    label: edgeLabelCfg,
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
      graph = new G6.TreeGraph({
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
        },
        defaultEdge: {
          type: edgeType,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
      });
      graphs[graphId] = graph;
    }

    graph.node((node: NodeConfig) => {
      const { style } = nodeLabelCfg ?? {};

      return {
        label: node.value,
        labelCfg: {
          style: getCommonConfig(style, node, graph),
        },
        style: {
          stroke: '#ccc',
          ...(typeof nodeStyle === 'function' ? nodeStyle(node, graph) : nodeStyle),
        },
      };
    });
    graph.edge((edge: EdgeConfig) => {
      const startArrow = getArrowCfg(startArrowCfg, edge);
      const endArrow = getArrowCfg(endArrowCfg, edge);
      const { style, content } = edgeLabelCfg ?? {};

      return {
        label: getCommonConfig(content, edge, graph),
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
    processMinimap(minimapCfg, graph);
    bindStateEvents(graph, uProps);
    renderGraph(graph, data, autoFit);

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

export default RadialTreeGraph;
