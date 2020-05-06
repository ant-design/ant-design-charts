import React, {  useEffect, useImperativeHandle, forwardRef } from 'react';
import { ColumnLine as G2plotColumnLine, ColumnLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import {  ErrorBoundary } from '../base';

export interface ColumnLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotColumnLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const ColumnLineChart = forwardRef((props: ColumnLineConfig, ref) => {
  
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotColumnLine, ColumnLineConfig>(G2plotColumnLine, rest);
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

ColumnLineChart.defaultProps = G2plotColumnLine.getDefaultOptions();

export default ColumnLineChart;
