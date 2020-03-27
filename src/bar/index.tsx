import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bar as G2plotBar, BarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface BarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotBar | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const BarChart = forwardRef((props: BarConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotBar, BarConfig>(G2plotBar, rest);
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

BarChart.defaultProps = G2plotBar.getDefaultOptions();

export default BarChart;
