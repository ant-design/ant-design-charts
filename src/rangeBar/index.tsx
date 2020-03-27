import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { RangeBar as G2plotRangeBar, RangeBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RangeBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRangeBar | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const RangeBarChart = forwardRef((props: RangeBarConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

RangeBarChart.defaultProps = G2plotRangeBar.getDefaultOptions();

export default RangeBarChart;
