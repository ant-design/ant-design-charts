import React from 'react';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../utils/createLoading';
import { defaultFlowGraphAnchorPoints, defaultNodeSize, defaultStateStyles, defaultNodeStyle } from '../../constants';
import { registerFundFlowItems } from './customItem';
import { CommonConfig, EdgeData, NodeData } from '../../interface';

export type edgeType =
  | string
  | {
      text?: string;
      subText?: string;
    };

export type FundFlowEdgeData = EdgeData<edgeType>;

export type FundFlowNodeData = NodeData<{
  text?: string;
  icon?: string;
}>;
export interface FundFlowGraphConfig extends Omit<CommonConfig, 'data'> {
  data: {
    nodes: FundFlowNodeData[];
    edges: FundFlowEdgeData[];
  };
}

registerFundFlowItems();

const defaultLayout = {
  type: 'dagre',
  rankdir: 'LR',
  nodesep: 30,
  ranksep: 50,
};

const defaultProps = {
  nodeCfg: {
    type: 'fund-card',
    size: defaultNodeSize,
    style: defaultNodeStyle,
    anchorPoints: defaultFlowGraphAnchorPoints,
    nodeStateStyles: defaultStateStyles,
    padding: 6,
  },
  edgeCfg: {
    type: 'fund-line',
    edgeStateStyles: defaultStateStyles,
    style: {
      stroke: '#40a9ff',
    },
    endArrow: {
      fill: '#40a9ff',
    },
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  autoFit: true,
  fitCenter: true,
  style: {
    position: 'relative' as React.CSSProperties['position'],
    height: 'inherit',
    backgroundColor: '#fff',
  },
};

const FundFlowGraph: React.FC<FundFlowGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('Graph', rest, { name: 'FundFlowGraph' });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default FundFlowGraph;
