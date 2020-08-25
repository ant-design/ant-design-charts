import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedBar as G2plotStackedBar, StackedBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStackedBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StackedBarChart = forwardRef((props: StackedBarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

StackedBarChart.defaultProps = G2plotStackedBar.getDefaultOptions();

export default StackedBarChart;
