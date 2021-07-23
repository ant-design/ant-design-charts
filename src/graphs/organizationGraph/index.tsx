import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import ChartLoading from '../../util/createLoading';
import { ErrorBoundary } from '../../base';
import useGraph from '../../hooks/useGraph';
import useProps from '../../hooks/useProps';
import { defaultStateStyles } from '../constants';
import {
  getGraphSize,
  processMinimap,
  getGraphId,
  renderGraph,
  getArrowCfg,
  getCommonConfig,
  bindStateEvents,
} from '../utils';
import { registerOrganizationCardNode } from './customItem';
import {
  IGroup,
  CommonConfig,
  ShapeCfg,
  Shape,
  NodeConfig,
  EdgeConfig,
  IGraph,
  NodeData,
} from '../interface';

export interface OrganizationGraphData
  extends NodeData<
    Array<{
      name: string;
      title?: string;
      icon?: string;
    }>
  > {}
export interface OrganizationGraphConfig extends Omit<CommonConfig, 'data'> {
  data: OrganizationGraphData;
}

registerOrganizationCardNode();

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
  nodeCfg: {
    type: 'organization-card',
    size: [100, 44],
    style: defaultNodeStyle,
    padding: 6,
    anchorPoints: [
      [0.5, 0],
      [0.5, 1],
    ],
    nodeStateStyles: defaultStateStyles,
    label: {
      style: (
        cfg: Shape | ShapeCfg,
        group: IGroup | IGraph | undefined,
        type: string | undefined,
      ) => {
        const styles = {
          icon: {
            width: 32,
            height: 32,
          },
          value: {
            fill: '#fff',
          },
          text: {
            fill: '#000',
          },
        };
        return type ? styles[type] : {};
      },
    },
  },
  edgeCfg: {
    type: 'polyline',
    endArrow: {
      type: 'triangle',
      fill: '#91d5ff',
    },
    edgeStateStyles: defaultStateStyles,
    style: {
      stroke: '#91d5ff',
    },
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  markerPosition: 'right' as 'right',
  autoFit: true,
  style: {
    height: 'inherit',
  },
};

const graphs: any = {};
const OrganizationGraph: React.FC<OrganizationGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    animate,
    behaviors,
    nodeCfg,
    layout,
    minimapCfg,
    edgeCfg,
    markerCfg,
    autoFit,
    onReady,
    loading,
    loadingTemplate,
    errorTemplate,
  } = uProps;
  const {
    type: nodeType,
    size: nodeSize,
    anchorPoints: nodeAnchorPoints,
    nodeStateStyles,
  } = nodeCfg ?? {};

  const {
    type: edgeType,
    style: edgeStyle,
    startArrow: startArrowCfg,
    endArrow: endArrowCfg,
    label: labelCfg,
    edgeStateStyles,
  } = edgeCfg ?? {};
  const container = React.useRef(null);
  const graph = React.useRef(null);
  const graphId = getGraphId(graph as any);
  useGraph(graphs[graphId], uProps, container);

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
          nodeCfg,
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

    // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
    graph.node((node: NodeConfig) => {
      node.markerCfg = markerCfg;
      return {};
    });

    graph.edge((edge: EdgeConfig) => {
      const startArrow = getArrowCfg(startArrowCfg, edge);
      const endArrow = getArrowCfg(endArrowCfg, edge);
      const { style, content } = labelCfg ?? {};
      return {
        label: getCommonConfig(content, edge, graph),
        labelCfg: {
          style: getCommonConfig(style, edge, graph),
        },
        style: {
          stroke: '#ccc',
          startArrow,
          endArrow,
          ...(typeof edgeStyle === 'function' ? edgeStyle(edge, graph) : edgeStyle),
        },
      };
    });

    processMinimap(minimapCfg, graph);
    bindStateEvents(graph, uProps);
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

export default OrganizationGraph;
