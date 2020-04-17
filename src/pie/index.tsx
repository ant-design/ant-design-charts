import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Pie as G2plotPie, PieConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface PieConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotPie | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const PieChart = forwardRef((props: PieConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotPie, PieConfig>(G2plotPie, rest);

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

PieChart.defaultProps = G2plotPie.getDefaultOptions();

export default PieChart;
