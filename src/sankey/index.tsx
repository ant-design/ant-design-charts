import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Sankey as G2plotSankey, SankeyOptions as G2plotConfig } from '@antv/g2plot';
import useChart, { ContainerConfig } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface SankeyConfig extends G2plotConfig, ContainerConfig {
  chartRef?: ChartRefOptions;
}

const SankeyChart = forwardRef((props: SankeyConfig, ref) => {
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
  const { chart, container } = useChart<G2plotSankey, SankeyConfig>(G2plotSankey, rest);
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

export default SankeyChart;
