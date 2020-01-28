import React, { useContext, useEffect } from 'react';
import { Funnel, FunnelConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface FunnelConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Funnel | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechFunnel: React.FC<FunnelConfig> = (props: FunnelConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Funnel, FunnelConfig>(Funnel, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: FunnelConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechFunnel {...config} {...props} />
    </ErrorBoundary>
  );
};
