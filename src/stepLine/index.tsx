import React, { useContext, useEffect } from 'react';
import { StepLine, StepLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StepLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<StepLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechStepLine: React.FC<StepLineConfig> = (props: StepLineConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<StepLine, StepLineConfig>(StepLine, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const StepLineChart = (props: StepLineConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechStepLine {...config} {...props} />
    </ErrorBoundary>
  );
};

StepLineChart.defaultProps = StepLine.getDefaultOptions();

export default StepLineChart;
