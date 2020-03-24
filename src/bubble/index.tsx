import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bubble as G2plotBubble, BubbleConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface BubbleConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotBubble | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const BubbleChart = forwardRef((props: BubbleConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotBubble, BubbleConfig>(G2plotBubble, rest);

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

BubbleChart.defaultProps = G2plotBubble.getDefaultOptions();

export default BubbleChart;
