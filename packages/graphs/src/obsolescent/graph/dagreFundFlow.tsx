import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import ChartLoading from '../../utils/createLoading';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../hooks/useGraph';
import { deepClone } from '../../utils';
import { defaultNodeAnchorPoints, defaultStateStyles, defaultEdgeStyle } from './constants';
import { processMinimap, getGraphSize, getGraphId, bindEvents, useProps } from './utils';
import { RelationGraph } from './types';
import { registerCustomItems } from './customItems';

registerCustomItems();

const defaultNodeSize = [150, 30];

const defaultNodeStyle = {
  stroke: '#72CC4A',
  fill: '#f00',
};

const defaultLayout = {
  type: 'dagre',
  rankdir: 'LR',
  nodesep: 30,
  ranksep: 50,
};

const defaultLabelCfg = {
  style: {
    fill: '#000000A6',
    fontSize: 10,
  },
};

const defaultProps = {
  nodeType: 'round-rect',
  edgeType: 'fund-polyline',
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
  colorMap: {},
  autoFit: true,
};

const graphs: any = {};

const DagreFundFlowGraph: React.FC<RelationGraph> = (props) => {
  const uProps = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    nodeType = 'round-rect',
    edgeType = 'fund-polyline',
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
    colorMap = {},
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
          colorMap,
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

    processMinimap(minimapCfg, graph);
    const originData = deepClone(data as any);
    graph.data(originData);
    graph.render();
    if (onReady) {
      onReady(graph);
    }
    // modify the node color according to the in edge
    const edges = graph.getEdges();
    // @ts-ignore
    edges.forEach(function (edge) {
      const line = edge.getKeyShape();
      const stroke = line.attr('stroke');
      const targetNode = edge.getTarget();
      targetNode.update({
        style: {
          stroke,
        },
      });
    });
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

export default DagreFundFlowGraph;
