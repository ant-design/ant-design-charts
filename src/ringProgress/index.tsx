import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  RingProgress as G2plotRingProgress,
  RingProgressOptions as G2plotConfig,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefConfig, ContainerConfig } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface RingProgressConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {
  chartRef?: ChartRefConfig;
}

const RingProgressChart = forwardRef((props: RingProgressConfig, ref) => {
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
  const { chart, container } = useChart<G2plotRingProgress, RingProgressConfig>(
    G2plotRingProgress,
    rest,
  );
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

export default RingProgressChart;
