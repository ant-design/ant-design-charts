import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Radar as G2plotRadar, RadarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface RadarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRadar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const RadarChart = forwardRef((props: RadarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotRadar, RadarConfig>(G2plotRadar, rest);

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

RadarChart.defaultProps = G2plotRadar.getDefaultOptions();

export default RadarChart;
