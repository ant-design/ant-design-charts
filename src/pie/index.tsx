import React, { useContext, useEffect } from 'react';
import { Pie, PieConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PieConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Pie | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechPie: React.FC<PieConfig> = (props: PieConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Pie, PieConfig>(Pie, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const PieChart = (props: PieConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPie {...config} {...props} />
    </ErrorBoundary>
  );
};

PieChart.defaultProps = Pie.getDefaultOptions();

export default PieChart;
