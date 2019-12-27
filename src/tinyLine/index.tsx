import React, { useEffect, useContext } from 'react';
import { TinyLine, TinyLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../Base';

export interface TinyLineConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<TinyLine | undefined>;
}

const TechTinyLine: React.FC<TinyLineConfig> = (props: TinyLineConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<TinyLine, TinyLineConfig>(TinyLine, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: TinyLineConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTinyLine {...config} {...props} />
    </ErrorBoundary>
  );
};
