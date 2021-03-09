import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Line as G2PlotLine, LineOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface LineConfig extends G2plotProps, ContainerProps {
  chartRef?: ChartRefOptions;
}

const LineChart = forwardRef((props: LineConfig, ref) => {
  const { chartRef, style, className, loading, loadingTemplate, errorTemplate, ...rest } = props;
  const { chart, container } = useChart<G2PlotLine, LineConfig>(G2PlotLine, rest);
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

export default LineChart;
