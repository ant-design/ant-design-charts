import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Rose as G2plotRose, RoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface RoseConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRose | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const RoseChart = forwardRef((props: RoseConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotRose, RoseConfig>(G2plotRose, rest);

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

RoseChart.defaultProps = G2plotRose.getDefaultOptions();

export default RoseChart;
