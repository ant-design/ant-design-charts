import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import ChartLoading from '../../utils/createLoading';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../hooks/useGraph';
import { registerCardNode } from '../graphs/customItems';
import {
  defaultNodeSize,
  defaultLabelCfg,
  defaultNodeAnchorPoints,
  defaultStateStyles,
  defaultEdgeStyle,
} from './constants';
import { getGraphSize, renderMinimap, getGraphId, renderGraph, bindEvents, useProps } from './utils';
import { RelationGraph } from './types';
import { registerCustomItems } from './customItems';

registerCustomItems();
registerCardNode();

const defaultNodeStyle = {
  stroke: '#40a9ff',
};
const defaultLayout = {
  type: 'dagre',
  rankdir: 'TB',
  nodesepFunc: () => 0,
  ranksepFunc: () => 0,
  controlPoints: true,
};

const defaultProps = {
  nodeType: 'modelRect',
  edgeType: 'polyline',
  behaviors: ['zoom-canvas', 'drag-canvas'],
  nodeSize: defaultNodeSize,
  nodeLabelCfg: defaultLabelCfg,
  edgeLabelCfg: defaultLabelCfg,
  nodeAnchorPoints: defaultNodeAnchorPoints,
  layout: defaultLayout,
  nodeStyle: defaultNodeStyle,
  edgeStyle: defaultEdgeStyle,
  nodeStateStyles: defaultStateStyles,
  edgeStateStyles: defaultStateStyles,
  autoFit: true,
};

const graphs: any = {};

const DagreGraph: React.FC<RelationGraph> = (props) => {
  const uProps = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    nodeType = 'modelRect',
    edgeType = 'polyline',
    behaviors = ['zoom-canvas', 'drag-canvas'],
    nodeSize = defaultNodeSize,
    nodeLabelCfg = defaultLabelCfg,
    edgeLabelCfg = defaultLabelCfg,
    nodeAnchorPoints = defaultNodeAnchorPoints,
    layout = defaultLayout,
    minimapCfg,
    nodeStyle = defaultNodeStyle,
    edgeStyle = defaultEdgeStyle,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
    autoFit = true,
    graphRef,
    onReady,
    loading,
    loadingTemplate,
    errorTemplate,
  } = uProps;
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
        modes: {
          default: behaviors,
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          style: nodeStyle,
          anchorPoints: nodeAnchorPoints,
          labelCfg: nodeLabelCfg,
        },
        defaultEdge: {
          type: edgeType,
          style: edgeStyle,
          labelCfg: edgeLabelCfg,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
        fitView: autoFit,
      });

      graphs[graphId] = graph;
    }

    if (graphRef) {
      graphRef!.current = graph;
    }

    renderMinimap(minimapCfg, graph);

    renderGraph(graph, data);

    if (onReady) {
      onReady(graph);
    }
    bindEvents(graph, props);
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

export default DagreGraph;
