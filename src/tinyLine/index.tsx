import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { TinyLine as G2plotTinyLine, TinyLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface TinyLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTinyLine | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const TinyLineChart = forwardRef((props: TinyLineConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotTinyLine, TinyLineConfig>(G2plotTinyLine, rest);

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

TinyLineChart.defaultProps = G2plotTinyLine.getDefaultOptions();

export default TinyLineChart;
