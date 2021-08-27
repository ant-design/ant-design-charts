import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { BubbleMap as Bubble, BubbleMapOptions } from '@antv/l7plot';
import { MapRefConfig, MapContainerConfig } from '../../interface';
import useMap from '../../hooks/useMap';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface BubbleMapConfig extends BubbleMapOptions, MapContainerConfig<BubbleMapOptions> {
  chartRef?: MapRefConfig;
}

const BubbleMap = forwardRef((props: BubbleMapConfig, ref) => {
  const {
    chartRef,
    containerStyle,
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...config
  } = props;
  const { map, container } = useMap<Bubble, BubbleMapConfig>(Bubble, config);

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

export default BubbleMap;
