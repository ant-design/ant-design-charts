import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { FanGauge as G2plotFanGauge, FanGaugeConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface FanGaugeConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotFanGauge | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const FanGaugeChart = forwardRef((props: FanGaugeConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotFanGauge, FanGaugeConfig>(G2plotFanGauge, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

FanGaugeChart.defaultProps = G2plotFanGauge.getDefaultOptions();

export default FanGaugeChart;
