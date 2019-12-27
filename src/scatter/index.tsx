import React, { useContext, useEffect } from 'react';
import { Scatter, ScatterConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface ScatterConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Scatter | undefined>;
}

const TechScatter: React.FC<ScatterConfig> = (props: ScatterConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Scatter, ScatterConfig>(Scatter, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: ScatterConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechScatter {...config} {...props} />
    </ErrorBoundary>
  );
};
