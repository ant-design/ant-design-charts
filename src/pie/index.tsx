import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Pie as G2plotPie, PieOptions as G2plotConfig } from '@antv/g2plot';
import useChart, { ContainerConfig } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface PieConfig extends G2plotConfig, ContainerConfig {
  chartRef?: ChartRefOptions;
}

const PieChart = forwardRef((props: PieConfig, ref) => {
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
  const { chart, container } = useChart<G2plotPie, PieConfig>(G2plotPie, rest);
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

export default PieChart;
