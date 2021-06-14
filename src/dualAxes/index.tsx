import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { DualAxes as G2plotDualAxes, DualAxesOptions as G2plotConfig } from '@antv/g2plot';
import useChart, { ContainerConfig } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface DualAxesConfig extends G2plotConfig, ContainerConfig {
  chartRef?: ChartRefOptions;
}

const DualAxesChart = forwardRef((props: DualAxesConfig, ref) => {
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
  // @ts-ignore annotations 类型特殊
  const { chart, container } = useChart<G2plotDualAxes, DualAxesConfig>(G2plotDualAxes, rest);
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

export default DualAxesChart;
