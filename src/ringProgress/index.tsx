import React, { useEffect, useContext } from 'react';
import { RingProgress, RingProgressConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface RingProgressConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<RingProgress | undefined>;
}

const TechRingProgress: React.FC<RingProgressConfig> = (props: RingProgressConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<RingProgress, RingProgressConfig>(RingProgress, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: RingProgressConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRingProgress {...config} {...props} />
    </ErrorBoundary>
  );
};
