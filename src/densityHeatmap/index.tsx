import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  DensityHeatmap as G2plotDensityHeatmap,
  DensityHeatmapConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface DensityHeatmapConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotDensityHeatmap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const DensityHeatmapChart = forwardRef((props: DensityHeatmapConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

DensityHeatmapChart.defaultProps = G2plotDensityHeatmap.getDefaultOptions();

export default DensityHeatmapChart;
