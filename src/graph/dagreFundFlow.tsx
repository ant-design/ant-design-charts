import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { IGraph } from '@antv/g6/lib/interface/graph';
import { IEdge } from '@antv/g6/lib/interface/item';
import { IG6GraphEvent } from '@antv/g6/lib/types';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import { processMinimap, getGraphSize } from './util';


const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2
  }
}

const defaultNodeSize = [150, 30];

const defaultNodeStyle = {
  stroke: '#72CC4A'
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
  rankdir: 'LR',
  nodesep: 30,
  ranksep: 50,
}

const defaultLabelCfg = {
  style: {
    fill: '#000000A6',
    fontSize: 10,
  }
}

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
}) => {
  let graph: IGraph;
  const container = React.useRef(null);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
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
      });
    }

    processMinimap(minimapCfg, graph);

    graph.data(data);
    graph.render();

    // modify the node color according to the in edge
    const edges = graph.getEdges();
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

export default DagreFundFlowGraph;
