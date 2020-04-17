import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { RangeBar as G2plotRangeBar, RangeBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface RangeBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRangeBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const RangeBarChart = forwardRef((props: RangeBarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotRangeBar, RangeBarConfig>(G2plotRangeBar, rest);

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

RangeBarChart.defaultProps = G2plotRangeBar.getDefaultOptions();

export default RangeBarChart;
