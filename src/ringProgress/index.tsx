import React, { useEffect, useContext } from 'react';
import { RingProgress, RingRingProgressConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../Base';

export interface RingRingProgressConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<RingProgress | undefined>;
}

const TechRingProgress: React.FC<RingRingProgressConfig> = (props: RingRingProgressConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<RingProgress, RingRingProgressConfig>(RingProgress, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: RingRingProgressConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRingProgress {...config} {...props} />
    </ErrorBoundary>
  );
};
