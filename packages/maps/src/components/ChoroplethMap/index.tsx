import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Choropleth, ChoroplethOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface ChoroplethMapConfig extends L7PlotConfig<ChoroplethOptions, Choropleth>, ContainerConfig {
  chartRef?: PlotRef<Choropleth>;
}

const ChoroplethMap = forwardRef((props: ChoroplethMapConfig, ref) => {
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
  const { plotRef, containerRef } = useL7Plot<ChoroplethOptions, Choropleth>(Choropleth, config);

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

export default ChoroplethMap;
