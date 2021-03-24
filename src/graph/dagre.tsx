import React, { useEffect } from 'react';
import G6, { IEdge, INode, IG6GraphEvent } from '@antv/g6';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import { getGraphSize, processMinimap } from './util';
import { deepClone } from '../util/utils';
import useGraph from '../hooks/useGraph';

const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};

const defaultNodeSize = [120, 40];

const defaultNodeStyle = {
  stroke: '#40a9ff',
};

const defaultNodeAnchorPoints = [
  [0.5, 0],
  [0.5, 1],
];

const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
  },
};

const defaultLayout = {
  type: 'dagre',
  rankdir: 'TB',
  nodesepFunc: () => 0,
  ranksepFunc: () => 0,
  controlPoints: true,
};

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12,
  },
};
const graphs: any = {};

const DagreGraph: React.SFC<RelationGraph> = ({
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
  handleEdgeClick,
  handleEdgeHover,
  handleEdgeUnHover,
  handleNodeClick,
  handleNodeHover,
  handleNodeUnHover,
  handleCanvasClick,
  graphRef,
  graphId = 'defaultDagreGraph',
}) => {
  const props = {
    data,
    className,
    style,
    width,
    height,
    nodeType,
    edgeType,
    behaviors,
    nodeSize,
    nodeLabelCfg,
    edgeLabelCfg,
    nodeAnchorPoints,
    layout,
    minimapCfg,
    nodeStyle,
    edgeStyle,
    nodeStateStyles,
    edgeStateStyles,
    handleEdgeClick,
    handleEdgeHover,
    handleEdgeUnHover,
    handleNodeClick,
    handleNodeHover,
    handleNodeUnHover,
    handleCanvasClick,
    graphRef,
    graphId,
  };
  const container = React.useRef(null);

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
    graph.fitView();

    graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      graph.setItemState(item, 'hover', true);
      if (handleEdgeHover) {
        handleEdgeHover(item, graph);
      }
    });
    graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', true);
      if (handleNodeHover) {
        handleNodeHover(item, graph);
      }
    });

    graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      graph.setItemState(item, 'hover', false);
      if (handleEdgeUnHover) {
        handleEdgeUnHover(item, graph);
      }
    });
    graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', false);
      if (handleNodeUnHover) {
        handleNodeUnHover(item, graph);
      }
    });

    graph.on('edge:click', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      if (handleEdgeClick) {
        handleEdgeClick(item, graph);
      }
    });

    graph.on('node:click', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      if (handleNodeClick) {
        handleNodeClick(item, graph);
      }
    });

    graph.on('canvas:click', () => {
      if (handleCanvasClick) {
        handleCanvasClick(graph);
      }
    });

    return () => {
      if (graphs[graphId]) {
        graphs[graphId].destroy();
        delete graphs[graphId];
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default DagreGraph;
