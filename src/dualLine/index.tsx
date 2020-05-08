import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { DualLine as G2plotDualLine, DualLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface DualLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotDualLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const DualLineChart = forwardRef((props: DualLineConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotDualLine, DualLineConfig>(G2plotDualLine, rest);
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

DualLineChart.defaultProps = G2plotDualLine.getDefaultOptions();

export default DualLineChart;
