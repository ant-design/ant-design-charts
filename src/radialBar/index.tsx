import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { RadialBar as G2plotRadialBar, RadialBarOptions as G2plotConfig } from '@antv/g2plot';
import useChart, { ContainerConfig } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface RadialBarConfig extends G2plotConfig, ContainerConfig {
  chartRef?: ChartRefOptions;
}

const RadialBarChart = forwardRef((props: RadialBarConfig, ref) => {
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
  const { chart, container } = useChart<G2plotRadialBar, RadialBarConfig>(G2plotRadialBar, rest);
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

export default RadialBarChart;
