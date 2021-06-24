import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Radar as G2plotRadar, RadarOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefConfig, ContainerConfig } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface RadarConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {
  chartRef?: ChartRefConfig;
}

const RadarChart = forwardRef((props: RadarConfig, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotRadar, RadarConfig>(G2plotRadar, rest);
  useEffect(() => {
    getChart(chartRef, chart.current);
  }, [chart.current]);
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

export default RadarChart;
