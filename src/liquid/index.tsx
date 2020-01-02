import React, { useContext, useEffect } from 'react';
import { Liquid, LiquidConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface LiquidConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Liquid | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechLiquid: React.FC<LiquidConfig> = (props: LiquidConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Liquid, LiquidConfig>(Liquid, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: LiquidConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechLiquid {...config} {...props} />
    </ErrorBoundary>
  );
};
