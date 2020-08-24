import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bar as G2plotBar, BarOptions as G2plotProps } from 'g2plot-v2';
import useChart from '../hooks/useChart-v2';
import { ErrorBoundary } from '../base';

export interface BarConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const BarChart = forwardRef((props: BarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

// BarChart.defaultProps = G2plotBar.getDefaultOptions();

export default BarChart;
