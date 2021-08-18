import React, { useImperativeHandle, forwardRef } from 'react';
import { RadialBar as G2plotRadialBar, RadialBarOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface RadialBarConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {}

const RadialBarChart = forwardRef((props: RadialBarConfig, ref) => {
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotRadialBar, RadialBarConfig>(G2plotRadialBar, rest);

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default RadialBarChart;
