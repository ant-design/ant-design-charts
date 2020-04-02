import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Scatter as G2plotScatter, ScatterConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface ScatterConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotScatter | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const ScatterChart = forwardRef((props: ScatterConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

ScatterChart.defaultProps = G2plotScatter.getDefaultOptions();

export default ScatterChart;
