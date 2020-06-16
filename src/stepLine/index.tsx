import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { StepLine as G2plotStepLine, StepLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StepLineConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotStepLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StepLineChart = forwardRef((props: StepLineConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotStepLine, StepLineConfig>(G2plotStepLine, rest);

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

StepLineChart.defaultProps = G2plotStepLine.getDefaultOptions();

export default StepLineChart;
