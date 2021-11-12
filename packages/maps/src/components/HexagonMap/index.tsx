import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Hexagon, HexagonOptions } from '@antv/l7plot';
import { PlotRef, ContainerConfig } from '../../types';
import useL7Plot, { L7PlotConfig } from '../../hooks/useL7Plot';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface HexagonMapConfig extends L7PlotConfig<HexagonOptions, Hexagon>, ContainerConfig {
  chartRef?: PlotRef<Hexagon>;
}

const HexagonMap = forwardRef((props: HexagonMapConfig, ref) => {
  const { chartRef, containerStyle, className, loading, loadingTemplate, errorTemplate, ...config } = props;
  const { plotRef, containerRef } = useL7Plot<HexagonOptions, Hexagon>(Hexagon, config);

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

export default HexagonMap;
