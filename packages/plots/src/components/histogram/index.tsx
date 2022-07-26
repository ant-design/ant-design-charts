import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Histogram as G2plotHistogram, HistogramOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { getChart } from '../../util';
import { BaseConfig } from '../../interface';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface HistogramConfig extends Omit<G2plotConfig, 'tooltip'>, BaseConfig<G2plotConfig> {}

const HistogramChart = forwardRef((props: HistogramConfig, ref) => {
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
  const { chart, container } = useChart<G2plotHistogram, HistogramConfig>(G2plotHistogram, rest);
  useEffect(() => {
    getChart(chartRef, chart.current);
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} theme={props.theme} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default HistogramChart;
