import React, { useEffect } from 'react';
import G6, { NodeConfig } from '@antv/g6';
import ChartLoading from '../util/createLoading';
import { ErrorBoundary } from '../base';
import useGraph from '../hooks/useGraph';
import { customIconNode } from './customItems';
import { defaultLabelCfg, defaultStateStyles } from './constants';
import { getGraphSize, processMinimap, getGraphId, renderGraph, bindEvents } from './utils';
import { RelationGraph } from './types';

const defaultNodeStyle = {
  fill: '#91d5ff',
  stroke: '#40a9ff',
  radius: 2,
};

const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
    fill: '#91d5ff',
    d: -20,
  },
};

const defaultLayout = {
  type: 'compactBox',
  direction: 'TB',
  getId: function getId(d: NodeConfig) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16;
  },
  getWidth: function getWidth() {
    return 16;
  },
  getVGap: function getVGap() {
    return 40;
  },
  getHGap: function getHGap() {
    return 70;
  },
};

const graphs: any = {};
const OrganizationTreeGraphComponent: React.FC<RelationGraph> = (props) => {
  const {
    data,
    className,
    style,
    width,
    height,
    nodeType = 'rect',
    edgeType = 'flow-line',
    collapseExpand = false,
    nodeSize = [120, 40],
    nodeLabelCfg = defaultLabelCfg,
    edgeLabelCfg = defaultLabelCfg,
    layout = defaultLayout,
    enableEdit = false,
    minimapCfg,
    nodeStyle = defaultNodeStyle,
    edgeStyle = defaultEdgeStyle,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
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

    if (nodeType === 'icon-node') {
      customIconNode({ enableEdit });
    }

    let graph = graphs[graphId];
    if (!graph) {
      graph = new G6.TreeGraph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        linkCenter: true,
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          style: nodeStyle,
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
      graph.addBehaviors(
        {
          type: 'collapse-expand',
        },
        'default',
      );
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

export default OrganizationTreeGraphComponent;
