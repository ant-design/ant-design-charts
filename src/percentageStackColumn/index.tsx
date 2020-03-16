import React, { useContext, useEffect } from 'react';
import { PercentageStackColumn, PercentageStackColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PercentageStackColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<PercentageStackColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechPercentageStackColumn: React.FC<PercentageStackColumnConfig> = (
  props: PercentageStackColumnConfig,
) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<PercentageStackColumn, PercentageStackColumnConfig>(
    PercentageStackColumn,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const PercentageStackColumnChart = (props: PercentageStackColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackColumn {...config} {...props} />
    </ErrorBoundary>
  );
};

PercentageStackColumnChart.defaultProps = PercentageStackColumn.getDefaultOptions();

export default PercentageStackColumnChart;
