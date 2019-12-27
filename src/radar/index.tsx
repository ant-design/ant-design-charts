import React, { useContext, useEffect } from 'react';
import { Radar, RadarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RadarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Radar | undefined>;
}

const TechRadar: React.FC<RadarConfig> = (props: RadarConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Radar, RadarConfig>(Radar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: RadarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRadar {...config} {...props} />
    </ErrorBoundary>
  );
};
