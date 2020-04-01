import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Donut as G2plotDonut, DonutConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface DonutConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotDonut | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const DonutChart = forwardRef((props: DonutConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotDonut, DonutConfig>(G2plotDonut, rest);

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

DonutChart.defaultProps = G2plotDonut.getDefaultOptions();

export default DonutChart;
