import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { TinyArea as G2plotTinyArea, TinyAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TinyAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTinyArea | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const TinyAreaChart = forwardRef((props: TinyAreaConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotTinyArea, TinyAreaConfig>(G2plotTinyArea, rest);

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

TinyAreaChart.defaultProps = G2plotTinyArea.getDefaultOptions();

export default TinyAreaChart;
