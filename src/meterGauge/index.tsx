import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { MeterGauge as G2plotMeterGauge, MeterGaugeConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface MeterGaugeConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotMeterGauge | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const MeterGaugeChart = forwardRef((props: MeterGaugeConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotMeterGauge, MeterGaugeConfig>(G2plotMeterGauge, rest);

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

MeterGaugeChart.defaultProps = G2plotMeterGauge.getDefaultOptions();

export default MeterGaugeChart;
