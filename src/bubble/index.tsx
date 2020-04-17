import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bubble as G2plotBubble, BubbleConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface BubbleConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotBubble | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const BubbleChart = forwardRef((props: BubbleConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

BubbleChart.defaultProps = G2plotBubble.getDefaultOptions();

export default BubbleChart;
