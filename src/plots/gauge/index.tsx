import React, { useImperativeHandle, forwardRef } from 'react';
import { Gauge as G2plotGauge, GaugeOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface GaugeConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {}

const GaugeChart = forwardRef((props: GaugeConfig, ref) => {
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
  const { chart, container } = useChart<G2plotGauge, GaugeConfig>(G2plotGauge, rest);

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

export default GaugeChart;
