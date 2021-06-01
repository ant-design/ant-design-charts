import React, { useEffect } from 'react';
import G6, { IEdge, INode } from '@antv/g6';
import { ErrorBoundary } from '../base';
import useGraph from '../hooks/useGraph';
import ChartLoading from '../util/createLoading';
import { getGraphSize, getGraphId } from './utils';
import { RelationGraph } from './types';
import { bindDefaultEvents, renderGraph } from './utils';
import './customItems';
import {
  defaultNodeAnchorPoints,
  defaultNodeSize,
  defaultStateStyles,
  defaultLayout,
  defaultNodeStyle,
  defaultEdgeArrowStyle,
} from './contants';

const graphs: any = {};

export interface IndentedTreeProps extends RelationGraph {
  /** 全局 title 样式 */
  titleStyle?: CSSStyleDeclaration;
  /** 全局 body 样式 */
  bodyStyle?: CSSStyleDeclaration;
  /** 全局 footer 样式 */
  footerStyle?: CSSStyleDeclaration;
  /** 是否展示尾部监听，默认 true */
  showArrow?: boolean;
}

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
    nodeStyle,
    edgeStyle,
    nodeStateStyles,
    edgeStateStyles,
    collapseExpand = true,
    titleStyle,
    bodyStyle,
    footerStyle,
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
        },
        defaultEdge: {
          type: edgeType,
        },
        nodeStateStyles: {
          ...defaultStateStyles,
          ...nodeStateStyles,
        },
        edgeStateStyles: {
          ...defaultStateStyles,
          ...edgeStateStyles,
        },
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
