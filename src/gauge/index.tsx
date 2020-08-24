import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Gauge as G2plotGauge, GaugeConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface GaugeConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotGauge | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const GaugeChart = forwardRef((props: GaugeConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotGauge, GaugeConfig>(G2plotGauge, rest);

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

GaugeChart.defaultProps = G2plotGauge.getDefaultOptions();

export default GaugeChart;
