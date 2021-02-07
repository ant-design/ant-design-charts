import React, { useEffect } from 'react';
import G6, { IEdge, INode, IG6GraphEvent } from '@antv/g6';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import { processMinimap, getGraphSize } from './util';
import useGraph from '../hooks/useGraph';
import { deepClone } from '../util/utils';


const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};

const defaultNodeSize = [150, 30];

const defaultNodeStyle = {
  stroke: '#72CC4A',
  fill: '#f00',
};

const defaultNodeAnchorPoints = [
  [0.5, 0],
  [0.5, 1],
];

const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#91d5ff',
  },
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

let graph: any;

const DagreFundFlowGraph: React.SFC<RelationGraph> = ({
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
  handleEdgeClick,
  handleEdgeHover,
  handleEdgeUnHover,
  handleNodeClick,
  handleNodeHover,
  handleNodeUnHover,
  handleCanvasClick,
  graphRef,
}) => {
  const container = React.useRef(null);

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
    colorMap,
    handleEdgeClick,
    handleEdgeHover,
    handleEdgeUnHover,
    handleNodeClick,
    handleNodeHover,
    handleNodeUnHover,
    handleCanvasClick,
    graphRef,
  };

  useGraph(graph, props, container);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
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
    });
    if (graphRef) {
      graphRef!.current = graph;
    }

    processMinimap(minimapCfg, graph);
    const originData = deepClone(data);
    graph.data(originData);
    graph.render();

    // modify the node color according to the in edge
    const edges = graph.getEdges();
    // @ts-ignore
    edges.forEach(function(edge) {
      const line = edge.getKeyShape();
      const stroke = line.attr('stroke');
      const targetNode = edge.getTarget();
      targetNode.update({
        style: {
          stroke,
        },
      });
    });

    graph.fitView();

    graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      graph.setItemState(item, 'hover', true);
      if (handleEdgeHover) {
        handleEdgeHover(item, graph);
      }
    });
    graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      graph.setItemState(item, 'hover', false);
      if (handleEdgeUnHover) {
        handleEdgeUnHover(item, graph);
      }
    });
    graph.on('edge:click', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge;
      if (handleEdgeClick) {
        handleEdgeClick(item, graph);
      }
    });

    graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', false);
      if (handleNodeHover) {
        handleNodeHover(item, graph);
      }
    });
    graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', false);
      if (handleNodeUnHover) {
        handleNodeUnHover(item, graph);
      }
    });
    graph.on('node:click', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      if (handleNodeClick) {
        handleNodeClick(item, graph);
      }
    });

    graph.on('canvas:click', () => {
      handleCanvasClick?.(graph);
    });

  }, []);

  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default DagreFundFlowGraph;
