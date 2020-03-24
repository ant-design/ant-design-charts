import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedBar as G2plotStackedBar, StackedBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StackedBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStackedBar | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const StackedBarChart = forwardRef((props: StackedBarConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotStackedBar, StackedBarConfig>(G2plotStackedBar, rest);

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

StackedBarChart.defaultProps = G2plotStackedBar.getDefaultOptions();

export default StackedBarChart;
