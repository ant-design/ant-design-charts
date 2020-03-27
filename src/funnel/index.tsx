import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Funnel as G2plotFunnel, FunnelConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface FunnelConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotFunnel | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const FunnelChart = forwardRef((props: FunnelConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotFunnel, FunnelConfig>(G2plotFunnel, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary>
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

// FunnelChart.defaultProps = Funnel.getDefaultOptions();

export default FunnelChart;
