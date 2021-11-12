import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Heatmap, HeatmapOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface HeatMapConfig extends L7PlotConfig<HeatmapOptions, Heatmap>, ContainerConfig {
  chartRef?: PlotRef<Heatmap>;
}

const HeatMap = forwardRef((props: HeatMapConfig, ref) => {
  const { chartRef, containerStyle, className, loading, loadingTemplate, errorTemplate, ...config } = props;
  const { plotRef, containerRef } = useL7Plot<HeatmapOptions, Heatmap>(Heatmap, config);

  useEffect(() => {
    getChart(chartRef, plotRef.current);
  }, [plotRef.current]);

  useImperativeHandle(ref, () => ({
    getChart: () => plotRef.current,
  }));

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={containerStyle} ref={containerRef} />
    </ErrorBoundary>
  );
});

export default HeatMap;
