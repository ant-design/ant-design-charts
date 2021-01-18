import React, { useEffect, useRef } from 'react';
import { Graph, FunctionExt, ObjectExt, Edge } from '@antv/x6';
import { Layout, ILayout } from '@antv/layout';
import * as CONSTANT from './constant'
import './tooltip';
import '@antv/x6-react-shape';

export type PipelineNodeComponent = React.ReactElement | ((data: any) => React.ReactElement);

export interface PipelineNode {
  shape: 'react-shape';
  id: string;
  width?: number;
  height?: number;
  data?: any;
  component?: PipelineNodeComponent;
}

export interface PipelineEdge {
  source: string;
  target: string;
  sourceAnchor?: string | { name: string; args: any };
  targetAnchor?: string | { name: string; args: any };

  edgeColor?: string;
  edgeWidth?: number;

  label?: string;
  labelColor?: string;
  labelBackgroundColor?: string;
  labelPosition?: { distance?: number; offset?: number };
  tip?: string;
}

export interface PipelineData {
  nodes: PipelineNode[];
  edges?: PipelineEdge[];
}

export type LayoutOptions = ILayout.LayoutOptions | ((model: PipelineData) => PipelineData)

export interface PipelineProps {
  // graph
  width?: number;
  height?: number;
  // node
  nodeWidth?: number;
  nodeHeight?: number;
  nodeComponent?: PipelineNodeComponent;
  // edge
  edgeColor?: string;
  edgeWidth?: number;
  labelColor?: string;
  labelBackgroundColor?: string;
  labelPosition?: { distance?: number; offset?: number };
  router?: string | { name: string; args: any };
  connector?: string | { name: string; args: any };
  marker?: string | null | { name: string; size: number };
  sourceAnchor?: string | { name: string; args: any };
  targetAnchor?: string | { name: string; args: any };
  // data
  data: PipelineData;
  // layout
  layout?: LayoutOptions;
  // callback
  onEdgeClick?: (edge: Edge) => void;
}

const getNodeComponent = (
  local: PipelineNodeComponent | undefined,
  global: PipelineNodeComponent | undefined,
  data: any,
) => {
  let ret = local;
  if (typeof local === 'function') {
    ret = FunctionExt.call(local, null, data);
  }
  if (React.isValidElement(ret)) {
    return ret;
  }
  if (typeof global === 'function') {
    ret = FunctionExt.call(global, null, data);
  }
  if (React.isValidElement(ret)) {
    return ret;
  }
  return <div />;
};

const layout = (model: PipelineData, layoutOptions: LayoutOptions | undefined) => {
  if (typeof layoutOptions === 'function') {
    return FunctionExt.call(layoutOptions, null, model);
  }
  const dagreLayout = new Layout(
    ObjectExt.merge({}, CONSTANT.LAYOUT_CONFIG, layoutOptions),
  );

  return dagreLayout.layout(model);
};

const preprocess = (data: PipelineData, config: Partial<PipelineProps>) => {
  let model = ObjectExt.cloneDeep(data) as any;
  // do layout
  model = layout(model, config.layout);
  // process node
  model.nodes.forEach((node: PipelineNode) => {
    const cNode = node as any;
    cNode.shape = 'react-shape';
    if (!cNode.width) {
      cNode.width = config.nodeWidth || CONSTANT.NODE_WIDTH;
    }
    if (!cNode.height) {
      cNode.height = config.nodeHeight || CONSTANT.NODE_HEIGHT;
    }
    cNode.data = cNode.data || {};
    cNode.component = getNodeComponent(cNode.component, config.nodeComponent, cNode.data);
    // adjust x y
    cNode.x = cNode.x - cNode.width / 2;
    cNode.y = cNode.y - cNode.height / 2;
  });
  // process edge
  const prop = (edge: PipelineEdge, attr: string, defaultValue: any) => {
    return edge[attr] || config[attr] || defaultValue
  }
  model.edges.forEach((edge: PipelineEdge) => {
    const cEdge = edge as any;
    const edgeWidth = prop(cEdge, 'edgeWidth', CONSTANT.EDGE_WIDTH);
    const edgeColor = prop(cEdge, 'edgeColor', CONSTANT.EDGE_COLOR)
    const labelColor = prop(cEdge, 'labelColor', CONSTANT.LABEL_COLOR);
    const labelBackgroundColor = prop(cEdge, 'labelBackgroundColor', CONSTANT.LABEL_BACKGROUND);
    const marker = config.marker || CONSTANT.MARKER;
    cEdge.attrs = {
      line: {
        stroke: edgeColor,
        strokeWidth: edgeWidth,
        targetMarker: marker,
      },
    };
    if (cEdge.sourceAnchor || config.sourceAnchor) {
      cEdge.source = {
        cell: cEdge.source,
        anchor: cEdge.sourceAnchor || config.sourceAnchor,
      };
    }
    if (cEdge.targetAnchor || config.targetAnchor) {
      cEdge.target = {
        cell: cEdge.target,
        anchor: cEdge.targetAnchor || config.targetAnchor,
      };
    }
    if (cEdge.label) {
      cEdge.labels = [
        {
          attrs: {
            body: {
              fill: labelBackgroundColor,
            },
            text: {
              text: cEdge.label,
              fill: labelColor,
              fontSize: 12,
            },
          },
          position: {
            ...config.labelPosition,
            ...cEdge.labelPosition,
            options: {
              keepGradient: true,
            },
          },
        },
      ];
      cEdge.label = undefined;
    }
    if (cEdge.tip) {
      cEdge.tools = {
        name: 'tooltip',
        args: { follow: false, tooltip: cEdge.tip },
      };
    }
  });
  return model;
};

const Pipeline: React.FC<PipelineProps> = (props) => {
  const el = useRef(null);
  const graphRef = useRef<Graph>();

  const initShape = () => {
    const { data, ...config } = props;
    const graph = graphRef.current;
    if (data && graph) {
      const model = preprocess(data, config);
      graph.fromJSON(model);
    }
  };

  useEffect(() => {
    const { width, height, router, connector, sourceAnchor, targetAnchor } = props;
    graphRef.current = new Graph({
      container: el.current!,
      width,
      height,
      connecting: {
        sourceAnchor: sourceAnchor || CONSTANT.SOURCE_ANCHOR,
        targetAnchor: targetAnchor || CONSTANT.TARGET_ANCHOR,
        connectionPoint: CONSTANT.CONNECTORPOINT,
        router: router || CONSTANT.ROUTER,
        connector: connector || CONSTANT.CONNECTOR,
      },
      interacting: false,
    });

    // event
    const graph = graphRef.current;
    graph.on('edge:click', ({ cell }) => {
      const onEdgeClick = props.onEdgeClick!
      if (FunctionExt.isFunction(onEdgeClick)) {
        onEdgeClick(cell);
      }
    });
  }, []);

  useEffect(() => {
    initShape();
  }, [props.data]);

  return <div className="x6-graph" ref={el} />;
};

export default Pipeline;
