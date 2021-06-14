import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Scatter as G2plotScatter, ScatterOptions as G2plotConfig } from '@antv/g2plot';
import useChart, { ContainerConfig } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface ScatterConfig extends G2plotConfig, ContainerConfig {
  chartRef?: ChartRefOptions;
}

const ScatterChart = forwardRef((props: ScatterConfig, ref) => {
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
  const { chart, container } = useChart<G2plotScatter, ScatterConfig>(G2plotScatter, rest);
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

export default ScatterChart;
