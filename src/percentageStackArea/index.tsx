import React, { useContext, useEffect } from 'react';
import { PercentageStackArea, PercentageStackAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PercentageStackAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<PercentageStackArea | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechPercentageStackArea: React.FC<PercentageStackAreaConfig> = (
  props: PercentageStackAreaConfig,
) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<PercentageStackArea, PercentageStackAreaConfig>(
    PercentageStackArea,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const PercentageStackAreaChart = (props: PercentageStackAreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackArea {...config} {...props} />
    </ErrorBoundary>
  );
};

PercentageStackAreaChart.defaultProps = PercentageStackArea.getDefaultOptions();

export default PercentageStackAreaChart;
