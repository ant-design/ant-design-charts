import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  StackedColumnLine as G2plotStackedColumnLine,
  StackedColumnLineConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedColumnLineConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotStackedColumnLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StackedColumnLineChart = forwardRef((props: StackedColumnLineConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotStackedColumnLine, StackedColumnLineConfig>(
    G2plotStackedColumnLine,
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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

StackedColumnLineChart.defaultProps = G2plotStackedColumnLine.getDefaultOptions();

export default StackedColumnLineChart;
