import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  BidirectionalBar as G2plotBidirectionalBar,
  BidirectionalBarOptions as G2plotProps,
} from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { getChart } from '../util';
import { ChartRefOptions } from '../interface';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface BidirectionalBarConfig extends G2plotProps, ContainerProps {
  chartRef?: ChartRefOptions;
}

const BidirectionalBarChart = forwardRef((props: BidirectionalBarConfig, ref) => {
  const {
    chartRef,
    style = {
      height: '100%',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotBidirectionalBar, BidirectionalBarConfig>(
    G2plotBidirectionalBar,
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

export default BidirectionalBarChart;
