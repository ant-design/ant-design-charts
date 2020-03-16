import React, { useEffect, useContext } from 'react';
import { Bar, BarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface BarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Bar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechBar: React.FC<BarConfig> = (props: BarConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Bar, BarConfig>(Bar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const BarChart = (props: BarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechBar {...config} {...props} />
    </ErrorBoundary>
  );
};

BarChart.defaultProps = Bar.getDefaultOptions();

export default BarChart;
