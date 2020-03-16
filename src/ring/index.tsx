import React, { useContext, useEffect } from 'react';
import { Ring, RingConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RingConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Ring | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechRing: React.FC<RingConfig> = (props: RingConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Ring, RingConfig>(Ring, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const RingChart = (props: RingConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRing {...config} {...props} />
    </ErrorBoundary>
  );
};

RingChart.defaultProps = Ring.getDefaultOptions();

export default RingChart;
