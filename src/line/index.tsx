import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Line as G2plotLine, LineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface LineConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
  memoData?: string | number;
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

LineChart.defaultProps = G2plotLine.getDefaultOptions();

export default LineChart;
