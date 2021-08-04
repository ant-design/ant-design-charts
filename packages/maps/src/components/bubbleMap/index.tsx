import React from 'react';
import L7Plot, { L7PlotCfg } from '@antv/l7plot';
import ErrorBoundary from '../../errorBoundary';
import useMap from '../../hooks/useMap';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../util/createLoading';

import { CommonConfig } from '../../interface';

export interface BubbleMapConfig extends Omit<CommonConfig, 'data'> {
  // TODO
  data: any;
}

const defaultProps = {
  animate: true,
  autoFit: true,
  style: {
    height: 'inherit',
  },
};

const BubbleMap: React.FC<BubbleMapConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useMap<L7Plot, L7PlotCfg>(L7Plot, rest);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default BubbleMap;
