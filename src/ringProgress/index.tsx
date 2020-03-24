import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  RingProgress as G2plotRingProgress,
  RingProgressConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface RingProgressConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRingProgress | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const RingProgressChart = forwardRef((props: RingProgressConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotRingProgress, RingProgressConfig>(
    G2plotRingProgress,
    rest,
  );

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

RingProgressChart.defaultProps = G2plotRingProgress.getDefaultOptions();

export default RingProgressChart;
