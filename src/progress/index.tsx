import React, { useEffect, useContext } from 'react';
import { Progress, ProgressConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface ProgressConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Progress | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechProgress: React.FC<ProgressConfig> = (props: ProgressConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Progress, ProgressConfig>(Progress, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const ProgressChart = (props: ProgressConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechProgress {...config} {...props} />
    </ErrorBoundary>
  );
};

ProgressChart.defaultProps = Progress.getDefaultOptions();

export default ProgressChart;
