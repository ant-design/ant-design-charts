import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedRose as G2plotStackedRose, StackedRoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedRoseConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotStackedRose | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StackedRoseChart = forwardRef((props: StackedRoseConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

StackedRoseChart.defaultProps = G2plotStackedRose.getDefaultOptions();

export default StackedRoseChart;
