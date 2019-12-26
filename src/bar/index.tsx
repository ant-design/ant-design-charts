import React, { useEffect, useContext } from 'react';
import { Bar, BarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../Base';

export interface BarConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Bar | undefined>;
}

const TechBar: React.FC<BarConfig> = (props: BarConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Bar, BarConfig>(Bar, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: BarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechBar {...config} {...props} />
    </ErrorBoundary>
  );
};
