import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  PercentStackedArea as G2plotPercentStackedArea,
  PercentStackedAreaConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface PercentStackedAreaConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotPercentStackedArea | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const PercentStackedAreaChart = forwardRef((props: PercentStackedAreaConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotPercentStackedArea, PercentStackedAreaConfig>(
    G2plotPercentStackedArea,
    rest,
  );

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

PercentStackedAreaChart.defaultProps = G2plotPercentStackedArea.getDefaultOptions();

export default PercentStackedAreaChart;
