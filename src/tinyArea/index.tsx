import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { TinyArea as G2plotTinyArea, TinyAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface TinyAreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTinyArea | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const TinyAreaChart = forwardRef((props: TinyAreaConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

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
