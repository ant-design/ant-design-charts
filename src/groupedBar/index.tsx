import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { GroupedBar as G2plotGroupedBar, GroupedBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface GroupedBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotGroupedBar | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const GroupedBarChart = forwardRef((props: GroupedBarConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotGroupedBar, GroupedBarConfig>(G2plotGroupedBar, rest);

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

GroupedBarChart.defaultProps = G2plotGroupedBar.getDefaultOptions();

export default GroupedBarChart;
