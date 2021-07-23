import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { ErrorBoundary } from '../../base';
import useGraph from '../../hooks/useGraph';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../util/createLoading';
import {
  getGraphSize,
  getGraphId,
  processMinimap,
  renderGraph,
  getCommonConfig,
  getArrowCfg,
  bindStateEvents,
  bindDefaultEvents,
} from '../utils';
import {
  defaultFlowGraphAnchorPoints,
  defaultNodeSize,
  defaultStateStyles,
  defaultNodeStyle,
} from '../constants';
import { registerIndicatorCardNode } from '../flowAnalysisGraph/customItem';
import {
  CommonConfig,
  NodeConfig,
  EdgeConfig,
  ShapeCfg,
  Shape,
  IGroup,
  IGraph,
  CardNodeCfg,
  TreeGraphData,
} from '../interface';

export interface DecompositionTreeGraphConfig extends Omit<CommonConfig, 'data'> {
  data: TreeGraphData;
}

const graphs: any = {};

registerIndicatorCardNode();

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

const defaultProps = {
  nodeCfg: {
    type: 'indicator-card',
    size: defaultNodeSize,
    style: defaultNodeStyle,
    anchorPoints: defaultFlowGraphAnchorPoints,
    padding: 6,
    layout: 'bundled',
    nodeStateStyles: defaultStateStyles,
    label: {
      style: (
        cfg: Shape | ShapeCfg,
        group: IGroup | IGraph | undefined,
        type: string | undefined,
      ) => {
        const styles = {
          icon: {
            width: 10,
            height: 10,
          },
          value: {
            fill: '#000',
          },
          text: {
            fill: '#aaa',
          },
        };
        return type ? styles[type] : {};
      },
    },
  },
  edgeCfg: {
    type: 'cubic-horizontal',
    endArrow: {
      type: 'vee',
    },
    edgeStateStyles: defaultStateStyles,
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  autoFit: true,
  adjustLayout: false,
  style: {
    height: 'inherit',
  },
};

const DecompositionTreeGraph: React.FC<DecompositionTreeGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const {
    data,
    className,
    style,
    width,
    height,
    behaviors = ['zoom-canvas', 'drag-canvas'],
    layout,
    animate,
    edgeCfg,
    nodeCfg,
    markerCfg,
    minimapCfg,
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
    style: nodeStyle,
    title: nodeLabelCfg,
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
          edgeCfg,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
      });
      graphs[graphId] = graph;
    }

    // defaultNode 默认只能绑定 plainObject，针对 Function 类型需要通过该模式绑定
    graph.node((node: NodeConfig) => {
      if (nodeType === 'indicator-card') {
        node.markerCfg = markerCfg;
        return {};
      }
      const { style } = nodeLabelCfg as CardNodeCfg;
      return {
        label: node.value?.title,
        labelCfg: {
          style: getCommonConfig(style, node, graph),
        },
        style: {
          ...(typeof nodeStyle === 'function' ? nodeStyle(node, graph) : nodeStyle),
        },
      };
    });
    graph.edge((edge: EdgeConfig) => {
      const startArrow = getArrowCfg(startArrowCfg, edge);
      const endArrow = getArrowCfg(endArrowCfg, edge);
      const { style } = labelCfg ?? {};
      return {
        label: edge.value,
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
    if (markerCfg) {
      bindDefaultEvents(graph);
    }
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

export default DecompositionTreeGraph;
