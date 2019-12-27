import React, { useEffect, useContext } from 'react';
import { TinyArea, TinyAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../Base';

export interface TinyAreaConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<TinyArea | undefined>;
}

const TechTinyArea: React.FC<TinyAreaConfig> = (props: TinyAreaConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<TinyArea, TinyAreaConfig>(TinyArea, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: TinyAreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTinyArea {...config} {...props} />
    </ErrorBoundary>
  );
};
