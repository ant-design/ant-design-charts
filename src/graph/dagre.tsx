import React, { useEffect } from 'react';
import G6, { Graph } from '@antv/g6/es';
import { IEdge } from '@antv/g6/es/interface/item';
import { IG6GraphEvent } from '@antv/g6/es/types';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import { getGraphSize, processMinimap } from './util';
import useGraph from '../hooks/useGraph';

const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2
  }
}

const defaultNodeSize = [120, 40];

const defaultNodeStyle = {
  stroke: '#40a9ff'
}

const defaultNodeAnchorPoints = [[0.5, 0], [0.5, 1]];

const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#91d5ff',
  }
}

const defaultLayout = {
  type: 'dagre',
  rankdir: 'TB',
  nodesepFunc: (d: any) => {
    return 0;
  },
  ranksepFunc: (d: any) => {
    return 0;
  },
  controlPoints: true
}

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12
  }
}

let graph: Graph;

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
  graphRef
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
    graphRef
  };
  const container = React.useRef(null);
  
  useGraph(graph, props, container);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
    if (!graph || graph.destroyed) {
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
          labelCfg: nodeLabelCfg
        },
        defaultEdge: {
          type: edgeType,
          style: edgeStyle,
          labelCfg: edgeLabelCfg
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
      });
      graphRef!.current = graph;
    }

    processMinimap(minimapCfg, graph);

    graph.data(data);
    graph.render();
    graph.fitView();

    graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graph.setItemState(item, 'hover', true)
      if (handleEdgeHover) {
        handleEdgeHover(item, graph)
      }
    })

    graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graph.setItemState(item, 'hover', false)
      if (handleEdgeUnHover) {
        handleEdgeUnHover(item, graph)
      }
    })

    graph.on('edge:click', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      if (handleEdgeClick) {
        handleEdgeClick(item, graph)
      }
    })


    return () => graph.destroy()
  }, []);


  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default DagreGraph;
