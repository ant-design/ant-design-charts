import React, { useContext, useEffect } from 'react';
import { PercentageStackColumn, PercentageStackColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PercentageStackColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<PercentageStackColumn | undefined>;
}

const TechPercentageStackColumn: React.FC<PercentageStackColumnConfig> = (
  props: PercentageStackColumnConfig,
) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<PercentageStackColumn, PercentageStackColumnConfig>(
    PercentageStackColumn,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PercentageStackColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
