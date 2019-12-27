import React, { useEffect, useContext } from 'react';
import { Progress, ProgressConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../Base';

export interface ProgressConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Progress | undefined>;
}

const TechProgress: React.FC<ProgressConfig> = (props: ProgressConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Progress, ProgressConfig>(Progress, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: ProgressConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechProgress {...config} {...props} />
    </ErrorBoundary>
  );
};
