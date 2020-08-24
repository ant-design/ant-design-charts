import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Line as G2plotLine, LineOptions as G2plotProps } from 'g2plot-v2';
import useChart from '../hooks/useChart-v2';
import { ErrorBoundary } from '../base';

export interface LineConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const LineChart = forwardRef((props: LineConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotLine, LineConfig>(G2plotLine, rest);

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

export default LineChart;
