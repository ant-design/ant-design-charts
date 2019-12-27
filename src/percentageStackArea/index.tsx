import React, { useContext, useEffect } from 'react';
import { PercentageStackArea, PercentageStackAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PercentageStackAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<PercentageStackArea | undefined>;
}

const TechPercentageStackArea: React.FC<PercentageStackAreaConfig> = (
  props: PercentageStackAreaConfig,
) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<PercentageStackArea, PercentageStackAreaConfig>(
    PercentageStackArea,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PercentageStackAreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackArea {...config} {...props} />
    </ErrorBoundary>
  );
};
