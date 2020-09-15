import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Liquid as G2plotLiquid, LiquidOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface LiquidConfig extends G2plotProps, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotLiquid | undefined>;
}

const LiquidChart = forwardRef((props: LiquidConfig, ref) => {
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
  const { chart, container } = useChart<G2plotLiquid, LiquidConfig>(G2plotLiquid, rest);
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

export default LiquidChart;
