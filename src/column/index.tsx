import React, {  useEffect, useImperativeHandle, forwardRef } from 'react';
import { Column as G2PlotColumn, ColumnOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface ColumnConfig extends G2plotProps, ContainerProps {
  chartRef?: ChartRefOptions;
}

const ColumnChart = forwardRef((props: ColumnConfig, ref) => {
  const {
    chartRef,
    style,
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2PlotColumn, ColumnConfig>(G2PlotColumn, rest);
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

export default ColumnChart;