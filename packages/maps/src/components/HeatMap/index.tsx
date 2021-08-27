import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Heatmap, HeatmapOptions } from '@antv/l7plot';
import { MapRefConfig, MapContainerConfig } from '../../interface';
import useMap from '../../hooks/useMap';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface HeatMapConfig extends HeatmapOptions, MapContainerConfig<HeatmapOptions> {
  chartRef?: MapRefConfig;
}

const HeatMap = forwardRef((props: HeatMapConfig, ref) => {
  const {
    chartRef,
    containerStyle,
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...config
  } = props;
  const { map, container } = useMap<Heatmap, HeatMapConfig>(Heatmap, config);

  useEffect(() => {
    getChart(chartRef, map.current);
  }, [map.current]);

  useImperativeHandle(ref, () => ({
    getChart: () => map.current,
  }));

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={containerStyle} ref={container} />
    </ErrorBoundary>
  );
});

export default HeatMap;
