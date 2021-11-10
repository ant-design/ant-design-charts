import React from 'react';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../utils/createLoading';

import { CommonConfig, FlowGraphDatum } from '../../interface';
import { defaultFlowGraphAnchorPoints, defaultStateStyles, defaultNodeStyle } from '../../constants';

export interface RadialTreeGraphConfig extends Omit<CommonConfig, 'data'> {
  data: FlowGraphDatum;
}

const defaultLayout = {
  type: 'dendrogram',
  direction: 'LR',
  nodeSep: 20,
  rankSep: 100,
  radial: true,
};

const defaultProps = {
  nodeCfg: {
    type: 'circle',
    size: 30,
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

const RadialTreeGraph: React.FC<RadialTreeGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('TreeGraph', rest, { name: 'RadialTreeGraph' });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default RadialTreeGraph;
