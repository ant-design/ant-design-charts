import React, {  useEffect, useImperativeHandle, forwardRef } from 'react';
import { GroupedRose as G2plotGroupedRose, GroupedRoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import {  ErrorBoundary } from '../base';

export interface GroupedRoseConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotGroupedRose | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const GroupedRoseChart = forwardRef((props: GroupedRoseConfig, ref) => {
  
  const { chartRef, chartStyle = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotGroupedRose, GroupedRoseConfig>(G2plotGroupedRose, rest);
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

GroupedRoseChart.defaultProps = G2plotGroupedRose.getDefaultOptions();

export default GroupedRoseChart;
