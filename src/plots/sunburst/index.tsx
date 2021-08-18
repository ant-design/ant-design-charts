import React, { useImperativeHandle, forwardRef } from 'react';
import { Sunburst as G2plotSunburst, SunburstOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface SunburstConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {}

const SunburstChart = forwardRef((props: SunburstConfig, ref) => {
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
  const { chart, container } = useChart<G2plotSunburst, SunburstConfig>(G2plotSunburst, rest);

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

export default SunburstChart;
