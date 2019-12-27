import React, { useContext, useEffect } from 'react';
import { Histogram, HistogramConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface HistogramConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Histogram | undefined>;
}

const TechHistogram: React.FC<HistogramConfig> = (props: HistogramConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Histogram, HistogramConfig>(Histogram, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
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
