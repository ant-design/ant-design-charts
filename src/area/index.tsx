import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Area as G2plotArea, AreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface AreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotArea | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const AreaChart = forwardRef((props: AreaConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);
  const { chart, container } = useChart<G2plotArea, AreaConfig>(G2plotArea, rest);
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

AreaChart.defaultProps = G2plotArea.getDefaultOptions();

export default AreaChart;
