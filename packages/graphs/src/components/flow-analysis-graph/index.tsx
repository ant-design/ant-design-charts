import React from 'react';
import { DagreLayout } from '@antv/layout';
import { defaultFlowGraphAnchorPoints, defaultNodeSize, defaultNodeStyle, defaultStateStyles } from '../../constants';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../utils/createLoading';

import {
  CardItems,
  CommonConfig,
  FlowGraphEdgeData,
  NodeCfg,
  NodeData,
  NodeConfig,
  FetchLoading,
} from '../../interface';
import { registerIndicatorGeometries } from './customItem';

export type FlowAnalysisNodeData = NodeData<{
  title?: string;
  items?: CardItems[];
}>;

export interface FlowAnalysisGraphConfig extends Omit<CommonConfig<DagreLayout>, 'data' | 'nodeCfg'>, FetchLoading {
  data: {
    nodes: FlowAnalysisNodeData[];
    edges: FlowGraphEdgeData[];
  };
  nodeCfg?: NodeCfg & {
    /** 点击展开时异步获取数据 */
    asyncData?: (nodeCfg: NodeConfig) => Promise<{
      nodes: FlowAnalysisNodeData[];
      edges?: FlowGraphEdgeData[];
    }>;
  };
}

registerIndicatorGeometries();

const defaultLayout = {
  type: 'dagre',
  rankdir: 'LR',
  center: [0, 0],
  nodesepFunc: () => 1,
  ranksepFunc: () => 1,
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
  },
  edgeCfg: {
    type: 'cubic-horizontal',
    edgeStateStyles: defaultStateStyles,
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  markerPosition: 'right' as 'right',
  autoFit: true,
  fitCenter: true,
  style: {
    position: 'relative' as React.CSSProperties['position'],
    height: 'inherit',
    backgroundColor: '#fff',
  },
};

const FlowAnalysisGraph: React.FC<FlowAnalysisGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('Graph', rest, { name: 'FlowAnalysisGraph' });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default FlowAnalysisGraph;
