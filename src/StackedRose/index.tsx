import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedRose as G2plotStackedRose, StackedRoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedRoseConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStackedRose | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const StackedRoseChart = forwardRef((props: StackedRoseConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotStackedRose, StackedRoseConfig>(
    G2plotStackedRose,
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

StackedRoseChart.defaultProps = G2plotStackedRose.getDefaultOptions();

export default StackedRoseChart;
