import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Heatmap as G2plotHeatmap, HeatmapConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface HeatmapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotHeatmap | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const HeatmapChart = forwardRef((props: HeatmapConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotHeatmap, HeatmapConfig>(G2plotHeatmap, rest);

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
HeatmapChart.defaultProps = G2plotHeatmap.getDefaultOptions();

export default HeatmapChart;
