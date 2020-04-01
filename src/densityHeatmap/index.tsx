import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  DensityHeatmap as G2plotDensityHeatmap,
  DensityHeatmapConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface DensityHeatmapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotDensityHeatmap | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const DensityHeatmapChart = forwardRef((props: DensityHeatmapConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotDensityHeatmap, DensityHeatmapConfig>(
    G2plotDensityHeatmap,
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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

DensityHeatmapChart.defaultProps = G2plotDensityHeatmap.getDefaultOptions();

export default DensityHeatmapChart;
