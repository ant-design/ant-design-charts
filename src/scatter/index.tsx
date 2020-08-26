import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Scatter as G2plotScatter, ScatterOptions as G2plotProps } from 'g2plot-v2';
import useChart from '../hooks/useChart-v2';
import { ErrorBoundary } from '../base';

export interface ScatterConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotScatter | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const ScatterChart = forwardRef((props: ScatterConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotScatter, ScatterConfig>(G2plotScatter, rest);

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

export default ScatterChart;
