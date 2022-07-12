import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Grid, GridOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface GridMapConfig extends L7PlotConfig<GridOptions, Grid>, ContainerConfig {
  chartRef?: PlotRef<Grid>;
}

const GridMap = forwardRef((props: GridMapConfig, ref) => {
  const {
    chartRef,
    containerStyle = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...config
  } = props;
  const { plotRef, containerRef } = useL7Plot<GridOptions, Grid>(Grid, config);

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

export default GridMap;
