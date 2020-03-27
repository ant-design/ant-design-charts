import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { StepLine as G2plotStepLine, StepLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StepLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStepLine | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const StepLineChart = forwardRef((props: StepLineConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

StepLineChart.defaultProps = G2plotStepLine.getDefaultOptions();

export default StepLineChart;
