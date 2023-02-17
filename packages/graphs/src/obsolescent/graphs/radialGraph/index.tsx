import React, { useEffect } from 'react';
import G6, { IEdge, INode } from '@antv/g6';
import ErrorBoundary from '../../../errorBoundary';
import useGraph from '../../hooks/useGraph';
import { ChartLoading } from '../../../utils';
import { getGraphSize, getGraphId, getDefaultEdgeArrowCfg, useProps } from '../utils';
import { RadialGraphConfig } from '../types';
import { renderGraph } from '../utils';
import { defaultNodeAnchorPoints, defaultStateStyles, defaultNodeStyle } from '../constants';

export { RadialGraphConfig };

const graphs: any = {};

const defaultLayout = {
  type: 'dendrogram',
  direction: 'LR',
  nodeSep: 20,
  rankSep: 100,
  radial: true,
};

const defaultProps = {
  nodeType: 'circle',
  linkCenter: true,
  edgeType: 'line',
  behaviors: ['zoom-canvas', 'drag-canvas'],
  nodeAnchorPoints: defaultNodeAnchorPoints,
  nodeSize: 30,
  layout: defaultLayout,
  animate: true,
  nodeStateStyles: defaultStateStyles,
  edgeStateStyles: defaultStateStyles,
  showArrow: false,
  arrowType: 'triangle',
  autoFit: true,
};

const RadialGraph: React.FC<RadialGraphConfig> = (props) => {
  const uProps = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    nodeType = 'circle',
    linkCenter = true,
    edgeType = 'line',
    behaviors = ['zoom-canvas', 'drag-canvas'],
    nodeAnchorPoints = defaultNodeAnchorPoints,
    nodeSize = 30,
    layout,
    animate = true,
    nodeCfg,
    edgeCfg,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
    showArrow = false,
    arrowType = 'triangle',
    autoFit = true,
    onReady,
    loading,
    loadingTemplate,
    errorTemplate,
  } = uProps;
  const container = React.useRef(null);
  const graph = React.useRef(null);
  const graphId = getGraphId(graph as any);
  useGraph(graphs[graphId], uProps, container);
  const arrowOffset = (Array.isArray(nodeSize) ? nodeSize[0] : nodeSize) / 2;

  useEffect(() => {
    const graphSize = getGraphSize(width, height, container);
    let graph = graphs[graphId];
    if (!graph) {
      graph = new G6.TreeGraph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        animate,
        linkCenter,
        modes: {
          default: behaviors,
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          anchorPoints: nodeAnchorPoints,
        },
        defaultEdge: {
          type: edgeType,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
        fitView: autoFit,
      });
      graphs[graphId] = graph;
    }

    graph.node((node: INode) => {
      if (typeof nodeCfg === 'function') {
        return nodeCfg(node, graph);
      }
      return {
        ...nodeCfg,
        style: {
          ...defaultNodeStyle,
          ...nodeCfg?.style,
        },
      };
    });
    graph.edge((edge: IEdge) => {
      if (typeof edgeCfg === 'function') {
        return edgeCfg(edge, graph);
      }
      return {
        style: {
          stroke: '#ccc',
          ...(showArrow && getDefaultEdgeArrowCfg(arrowOffset, arrowType)),
          ...edgeCfg?.style,
        },
      };
    });

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

export default RadialGraph;
