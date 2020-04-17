import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Waterfall as G2plotWaterfall, WaterfallConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface WaterfallConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotWaterfall | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const WaterfallChart = forwardRef((props: WaterfallConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotWaterfall, WaterfallConfig>(G2plotWaterfall, rest);

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

WaterfallChart.defaultProps = G2plotWaterfall.getDefaultOptions();

export default WaterfallChart;
