import React, { useContext, useEffect } from 'react';
import { StackArea, StackAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StackAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<StackArea | undefined>;
}

const TechStackArea: React.FC<StackAreaConfig> = (props: StackAreaConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<StackArea, StackAreaConfig>(StackArea, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: StackAreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechStackArea {...config} {...props} />
    </ErrorBoundary>
  );
};
