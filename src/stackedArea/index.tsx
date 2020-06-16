import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StackedArea as G2plotStackedArea, StackedAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedAreaConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotStackedArea | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StackedAreaChart = forwardRef((props: StackedAreaConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

StackedAreaChart.defaultProps = G2plotStackedArea.getDefaultOptions();

export default StackedAreaChart;
