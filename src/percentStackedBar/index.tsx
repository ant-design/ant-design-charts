import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  PercentStackedBar as G2plotPercentStackedBar,
  PercentStackedBarConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface PercentStackedBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotPercentStackedBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const PercentStackedBarChart = forwardRef((props: PercentStackedBarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotPercentStackedBar, PercentStackedBarConfig>(
    G2plotPercentStackedBar,
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

PercentStackedBarChart.defaultProps = G2plotPercentStackedBar.getDefaultOptions();

export default PercentStackedBarChart;
