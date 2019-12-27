import React, { useContext, useEffect } from 'react';
import { Histogram, HistogramConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface HistogramConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Histogram | undefined>;
}

const TechHistogram: React.FC<HistogramConfig> = (props: HistogramConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Histogram, HistogramConfig>(Histogram, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: HistogramConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechHistogram {...config} {...props} />
    </ErrorBoundary>
  );
};
