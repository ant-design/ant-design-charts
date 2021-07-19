import React, { useEffect } from 'react';
import G6, { NodeConfig, IEdge, INode } from '@antv/g6';
import ChartLoading from '../../../util/createLoading';
import { ErrorBoundary } from '../../../base';
import useGraph from '../../../hooks/useGraph';
import { registerIconNode } from '../customItems';
import { defaultLabelStyle, defaultStateStyles, defaultNodeSize } from '../constants';
import {
  getGraphSize,
  processMinimap,
  getGraphId,
  renderGraph,
  getDefaultEdgeArrowCfg,
  useProps,
} from '../utils';
import { OrganizationalGraphConfig } from '../types';

export { OrganizationalGraphConfig };

const defaultNodeStyle = {
  fill: '#91d5ff',
  stroke: '#40a9ff',
  radius: 2,
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
const defaultProps = {
  animate: true,
  nodeType: 'rect',
  edgeType: 'polyline',
  nodeSize: defaultNodeSize,
  behaviors: ['drag-canvas', 'zoom-canvas'],
  nodeLabelCfg: {
    style: defaultLabelStyle,
  },
  layout: defaultLayout,
  showMarker: false,
  showArrow: true,
  arrowType: 'triangle',
  nodeStateStyles: defaultStateStyles,
  edgeStateStyles: defaultStateStyles,
  autoFit: true,
  style: {
    height: 'inherit',
  },
};

const graphs: any = {};
const OrganizationalGraph: React.FC<OrganizationalGraphConfig> = (props) => {
  const uProps = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    animate = true,
    nodeType = 'rect',
    edgeType = 'polyline',
    nodeSize = defaultNodeSize,
    behaviors = ['drag-canvas', 'zoom-canvas'],
    nodeLabelCfg,
    nodeCfg,
    layout = defaultLayout,
    showMarker = false,
    showArrow = true,
    arrowType = 'triangle',
    minimapCfg,
    edgeCfg,
    markerStyle,
    nodeStateStyles = defaultStateStyles,
    edgeStateStyles = defaultStateStyles,
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
  const arrowOffset = (Array.isArray(nodeSize) ? nodeSize[1] : nodeSize) / 2;

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
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
      });

      graphs[graphId] = graph;
    }

    graph.node((node: INode) => {
      if (typeof nodeCfg === 'function') {
        return nodeCfg(node, graph);
      }
      return {
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
        ...edgeCfg,
        style: {
          stroke: '#91d5ff',
          ...(showArrow && getDefaultEdgeArrowCfg(arrowOffset, arrowType, '#91d5ff')),
          ...edgeCfg?.style,
        },
      };
    });

    processMinimap(minimapCfg, graph);
    renderGraph(graph, data, autoFit);
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
