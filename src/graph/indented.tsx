import React, { useEffect } from 'react';
import G6, { IEdge, INode, IG6GraphEvent } from '@antv/g6';
import { RelationGraph } from './types';
import { ErrorBoundary } from '../base';
import './customItems';
import { processMinimap, getGraphSize } from './util';
import useGraph from '../hooks/useGraph';
import { deepClone } from '../util/utils';

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
  [0, 0.5],
  [1, 0.5],
];

const defaultEdgeStyle = {
  stroke: '#ccc',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#ccc',
  },
};

const defaultLayout = {
  type: 'indented',
  direction: 'LR',
  dropCap: false,
  indent: 250,
  getHeight: () => {
    return 60;
  },
  getWidth: () => {
    return 100;
  },
};

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12,
  },
};

let graph: any;

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
    nodeAnchorPoints,
    layout,
    minimapCfg,
    nodeStyle,
    edgeStyle,
    nodeStateStyles,
    edgeStateStyles,
    collapseExpand,
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
          labelCfg: nodeLabelCfg,
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

      processMinimap(minimapCfg, graph);

      const originData = deepClone(data);
      graph.data(originData);
      graph.render();
      graph.fitView();

      if (collapseExpand) {
        const onClick = (e: IG6GraphEvent) => {
          const item = e.item as INode;
          if (e.target.get('name') === 'collapse-icon') {
            graph.updateItem(item, {
              collapsed: !item.getModel().collapsed,
            });
            graph.layout();
          } else if (handleNodeClick) {
            handleNodeClick(item, graph);
          }
        };
        graph.on('node:click', (e: IG6GraphEvent) => {
          onClick(e);
        });
        graph.on('node:touchstart', (e: IG6GraphEvent) => {
          onClick(e);
        });
      }
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
      graph.on('edge:touchstart', (evt: IG6GraphEvent) => {
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

      graph.on('canvas:click', () => {
        handleCanvasClick?.(graph);
      });

      graph.on('canvas:touchstart', () => {
        handleCanvasClick?.(graph);
      });
    }
  }, []);
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default IndentedTree;
