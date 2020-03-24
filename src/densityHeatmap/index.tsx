import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  DensityHeatmap as G2plotDensityHeatmap,
  DensityHeatmapConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface DensityHeatmapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotDensityHeatmap | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const DensityHeatmapChart = forwardRef((props: DensityHeatmapConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

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
