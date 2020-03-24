import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Line as G2plotLine, LineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface LineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotLine | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const LineChart = forwardRef((props: LineConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotLine, LineConfig>(G2plotLine, rest);

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

LineChart.defaultProps = G2plotLine.getDefaultOptions();

export default LineChart;
