import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import ChartLoading from '../util/createLoading';
import { ErrorBoundary } from '../base';
import useGraph from '../hooks/useGraph';
import { deepClone } from '../util/utils';
import { defaultNodeAnchorPoints, defaultStateStyles, defaultEdgeStyle } from './constants';
import { processMinimap, getGraphSize, getGraphId, bindEvents } from './utils';
import { RelationGraph } from './types';

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
const graphs: any = {};

const DagreFundFlowGraph: React.FC<RelationGraph> = (props) => {
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
  } = props;
  const container = React.useRef(null);
  const graph = React.useRef(null);
  const graphId = getGraphId(graph as any);
  useGraph(graphs[graphId], props, container);

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
        fitView: true,
      });

      graphs[graphId] = graph;
    }

    if (graphRef) {
      graphRef!.current = graph;
    }

    processMinimap(minimapCfg, graph);
    const originData = deepClone(data);
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
    autoFit ? graph.fitView() : graph.fitCenter();
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
