import React, { useEffect } from 'react';
import G6, { TreeGraph } from '@antv/g6/es';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import './customItems';
import { processMinimap, getGraphSize } from './util';
import useGraph from '../hooks/useGraph';


const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2
  }
}

const defaultNodeSize = [120, 40];

const defaultNodeStyle = {
  stroke: '#40a9ff',
}

const defaultNodeAnchorPoints = [[0, 0.5], [1, 0.5]];

const defaultEdgeStyle = {
  stroke: '#ccc',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#ccc',
  }
}

const defaultLayout = {
  type: 'indented',
  direction: 'LR',
  dropCap: false,
  indent: 250,
  getHeight: () => {
    return 60;
  },
  getWidth: (d: any) => {
    return 100;
  }
}

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12
  }
}

let graph: TreeGraph;

const IndentedTree: React.SFC<RelationGraph> = ({
  data,
  className,
  style,
  width,
  height,
  nodeType = 'card-node',
  edgeType = 'cubic-horizontal',
  behaviors = ['zoom-canvas', 'drag-canvas'],
  nodeSize = defaultNodeSize,
  nodeLabelCfg = defaultLabelCfg,
  nodeAnchorPoints = defaultNodeAnchorPoints,
  layout = defaultLayout,
  minimapCfg,
  nodeStyle = defaultNodeStyle,
  edgeStyle = defaultEdgeStyle,
  nodeStateStyles = defaultStateStyles,
  edgeStateStyles = defaultStateStyles,
  collapseExpand = true,
  graphRef
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
    nodeAnchorPoints,
    layout,
    minimapCfg,
    nodeStyle,
    edgeStyle,
    nodeStateStyles,
    edgeStateStyles,
    collapseExpand,
    graphRef
  }
  
  useGraph(graph, props, container);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
    if (!graph || graph.destroyed) {
      graph = new G6.TreeGraph({
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
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
      });
      if (graphRef) {
        graphRef!.current = graph;
      }
    }

    processMinimap(minimapCfg, graph);

    graph.data(data);
    graph.render();
    graph.fitView();

    if (collapseExpand) {
      graph.on('node:click', (e: any) => {
        if (e.target.get('name') === 'collapse-icon') {
          e.item.getModel().collapsed = !e.item.getModel().collapsed;
          graph.setItemState(e.item, 'collapsed', e.item.getModel().collapsed);
          graph.layout();
        }
      })
    }

    return () => graph.destroy()
  }, []);
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default IndentedTree;
