import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Stock as G2plotStock, StockOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface StockConfig extends G2plotProps, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotStock | undefined>;
}

const StockChart = forwardRef((props: StockConfig, ref) => {
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
  const { chart, container } = useChart<G2plotStock, StockConfig>(G2plotStock, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
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

export default StockChart;
