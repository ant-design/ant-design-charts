import React, { useEffect } from 'react';
import G6, { INode, IG6GraphEvent } from '@antv/g6';
import ChartLoading from '../util/createLoading';
import { ErrorBoundary } from '../base';
import useGraph from '../hooks/useGraph';
import { defaultNodeSize, defaultLabelCfg, defaultStateStyles } from './constants';
import { processMinimap, getGraphSize, getGraphId, renderGraph, bindEvents } from './utils';
import { RelationGraph } from './types';
import { registerCustomItems } from './customItems';

registerCustomItems();
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

const graphs: any = {};

const IndentedTree: React.FC<RelationGraph> = (props) => {
  const {
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
    autoFit = true,
    handleNodeClick,
    graphRef,
    onReady,
    loading,
    loadingTemplate,
    errorTemplate,
  } = props;
  const graph = React.useRef(null);
  const graphId = getGraphId(graph as any);
  const container = React.useRef(null);
  useGraph(graphs[graphId], props, container);

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
    let graph = graphs[graphId];
    if (!graph) {
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

      graphs[graphId] = graph;
    }

    if (graphRef) {
      graphRef!.current = graph;
    }

    processMinimap(minimapCfg, graph);

    renderGraph(graph, data, autoFit);
    if (onReady) {
      onReady(graph);
    }
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

export default IndentedTree;
