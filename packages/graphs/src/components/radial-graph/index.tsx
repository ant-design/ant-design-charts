import React from 'react';
import { RadialLayout } from '@antv/layout';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import { ChartLoading } from '../../utils';
import { CommonConfig, GraphData, NodeCfg, NodeConfig, FetchLoading } from '../../interface';
import { defaultFlowGraphAnchorPoints, defaultStateStyles, defaultNodeStyle } from '../../constants';
import { bindRadialExplore } from './events';

export interface RadialGraphConfig extends Omit<CommonConfig<Partial<RadialLayout>>, 'data'>, FetchLoading {
  data: GraphData;
  nodeCfg?: NodeCfg & {
    /** 点击展开时异步获取数据 */
    asyncData?: (nodeCfg: NodeConfig) => Promise<GraphData>;
  };
}

const defaultLayout = {
  type: 'radial',
  unitRadius: 50,
  preventOverlap: true,
  maxPreventOverlapIteration: 100,
};

const defaultProps = {
  nodeCfg: {
    type: 'circle',
    size: 10,
    anchorPoints: defaultFlowGraphAnchorPoints,
    linkCenter: true,
    nodeStateStyles: defaultStateStyles,
    style: defaultNodeStyle,
  },
  edgeCfg: {
    type: 'line',
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

const RadialGraph: React.FC<RadialGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('Graph', rest, { name: 'RadialGraph', bindEvents: bindRadialExplore });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default RadialGraph;
