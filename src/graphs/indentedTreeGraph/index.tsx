import React, { useEffect } from 'react';
import G6, { IEdge, INode } from '@antv/g6';
import { ErrorBoundary } from '../../base';
import useGraph from '../../hooks/useGraph';
import ChartLoading from '../../util/createLoading';
import { getGraphSize, getGraphId } from '../utils';
import { IndentedTreeProps } from '../types';
import { bindDefaultEvents, renderGraph } from '../utils';
import { registerCardNode } from '../customItems';
import {
  defaultNodeAnchorPoints,
  defaultNodeSize,
  defaultStateStyles,
  defaultNodeStyle,
  defaultEdgeArrowStyle,
} from '../constants';

const graphs: any = {};

registerCardNode();

const defaultLayout = {
  type: 'compactBox',
  direction: 'LR',
  getId: (d: any) => {
    return d.id;
  },
  getHeight: () => {
    return 60;
  },
  getWidth: () => {
    return 16;
  },
  getVGap: () => {
    return 16;
  },
  getHGap: () => {
    return 100;
  },
};

const IndentedTreeGraph: React.FC<IndentedTreeProps> = (props) => {
  const {
    data,
    className,
    style,
    width,
    height,
    nodeType = 'card',
    edgeType = 'cubic-horizontal',
    behaviors = ['zoom-canvas', 'drag-canvas'],
    nodeAnchorPoints = defaultNodeAnchorPoints,
    nodeSize = defaultNodeSize,
    layout,
    animate = true,
    nodeStyle,
    edgeStyle,
    markerStyle,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
    collapseExpand = true,
    titleStyle,
    bodyStyle,
    footerStyle,
    footerValueStyle,
    showArrow = true,
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
      graph = new G6.TreeGraph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        animate,
        modes: {
          default: behaviors,
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          anchorPoints: nodeAnchorPoints,
          titleStyle,
          bodyStyle,
          footerStyle,
          footerValueStyle,
          markerStyle,
        },
        defaultEdge: {
          type: edgeType,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout: {
          ...defaultLayout,
          ...layout,
        },
      });
      graphs[graphId] = graph;
    }

    graph.node((node: INode) => {
      if (typeof nodeStyle === 'function') {
        return {
          style: nodeStyle(node, graph),
        };
      }
      return {
        style: {
          ...defaultNodeStyle,
          ...nodeStyle,
        },
      };
    });
    graph.edge((edge: IEdge) => {
      if (typeof edgeStyle === 'function') {
        return {
          style: edgeStyle(edge, graph),
        };
      }
      return {
        style: {
          stroke: '#ccc',
          ...(showArrow && defaultEdgeArrowStyle),
          ...edgeStyle,
        },
      };
    });

    if (collapseExpand) {
      bindDefaultEvents(graph, collapseExpand);
    }
    renderGraph(graph, data);

    if (onReady) {
      onReady(graph);
    }

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

export default IndentedTreeGraph;
