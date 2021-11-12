import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Dot, DotOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface DotMapConfig extends L7PlotConfig<DotOptions, Dot>, ContainerConfig {
  chartRef?: PlotRef<Dot>;
}

const DotMap = forwardRef((props: DotMapConfig, ref) => {
  const { chartRef, containerStyle, className, loading, loadingTemplate, errorTemplate, ...config } = props;
  const { plotRef, containerRef } = useL7Plot<DotOptions, Dot>(Dot, config);

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

export default DotMap;
