import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Area, AreaOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface AreaMapConfig extends L7PlotConfig<AreaOptions, Area>, ContainerConfig {
  chartRef?: PlotRef<Area>;
}

const AreaMap = forwardRef((props: AreaMapConfig, ref) => {
  const { chartRef, containerStyle, className, loading, loadingTemplate, errorTemplate, ...config } = props;
  const { plotRef, containerRef } = useL7Plot<AreaOptions, Area>(Area, config);

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

export default AreaMap;
