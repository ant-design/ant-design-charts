import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedArea as G2plotStackedArea, StackedAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStackedArea | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const StackedAreaChart = forwardRef((props: StackedAreaConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotStackedArea, StackedAreaConfig>(
    G2plotStackedArea,
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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

StackedAreaChart.defaultProps = G2plotStackedArea.getDefaultOptions();

export default StackedAreaChart;
