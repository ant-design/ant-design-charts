import React, { useEffect } from 'react';
import G6, { NodeConfig, IEdge, INode } from '@antv/g6';
import ChartLoading from '../../util/createLoading';
import { ErrorBoundary } from '../../base';
import useGraph from '../../hooks/useGraph';
import { registerIconNode } from '../customItems';
import { defaultLabelCfg, defaultStateStyles, defaultNodeSize } from '../constants';
import { getGraphSize, processMinimap, getGraphId, renderGraph } from '../utils';
import { OrganizationTreeProps } from '../types';

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
const OrganizationalGraph: React.FC<OrganizationTreeProps> = (props) => {
  const {
    data,
    className,
    style,
    width,
    height,
    animate = true,
    nodeType = 'rect',
    edgeType = 'flow-line',
    nodeSize = defaultNodeSize,
    behaviors = ['drag-canvas', 'zoom-canvas'],
    nodeLabelCfg = defaultLabelCfg,
    edgeLabelCfg = defaultLabelCfg,
    layout = defaultLayout,
    showMarker = false,
    minimapCfg,
    nodeStyle,
    edgeStyle,
    markerStyle,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
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
      registerIconNode();
    }
    let graph = graphs[graphId];
    if (!graph) {
      graph = new G6.TreeGraph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        linkCenter: true,
        animate,
        modes: {
          default: behaviors,
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          labelCfg: nodeLabelCfg,
          markerStyle,
          showMarker,
        },
        defaultEdge: {
          type: edgeType,
          labelCfg: edgeLabelCfg,
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
          ...defaultEdgeStyle,
          ...edgeStyle,
        },
      };
    });

    processMinimap(minimapCfg, graph);
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

export default OrganizationalGraph;
