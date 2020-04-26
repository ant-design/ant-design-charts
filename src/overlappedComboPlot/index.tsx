import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  OverlappedComboPlot as G2plotOverlappedComboPlot,
  OverlappedComboPlotConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface OverlappedComboPlotConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotOverlappedComboPlot | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const OverlappedComboPlotChart = forwardRef((props: OverlappedComboPlotConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotOverlappedComboPlot, OverlappedComboPlotConfig>(
    G2plotOverlappedComboPlot,
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

// OverlappedComboPlotChart.defaultProps = OverlappedComboPlot.getDefaultOptions();

export default OverlappedComboPlotChart;
