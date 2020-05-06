import React, {  useEffect, useImperativeHandle, forwardRef } from 'react';
import { GroupedColumnLine as G2plotGroupedColumnLine, GroupedColumnLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import {  ErrorBoundary } from '../base';

export interface GroupedColumnLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotGroupedColumnLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const GroupedColumnLineChart = forwardRef((props: GroupedColumnLineConfig, ref) => {
  
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotGroupedColumnLine, GroupedColumnLineConfig>(G2plotGroupedColumnLine, rest);
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

GroupedColumnLineChart.defaultProps = G2plotGroupedColumnLine.getDefaultOptions();

export default GroupedColumnLineChart;
