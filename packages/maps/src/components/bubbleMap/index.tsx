import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { BubbleMap as Bubble, BubbleMapOptions } from '@antv/l7plot';
import { MapRefConfig, MapContainerConfig } from '../../interface';
import useMap from '../../hooks/useMap';
import { getChart } from '../../util';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface BubbleMapConfig
  extends Omit<BubbleMapOptions, 'style'>,
    MapContainerConfig<BubbleMapOptions> {
  chartRef?: MapRefConfig;
  mapStyle?: BubbleMapOptions['style'];
}

const BubbleMap = forwardRef((props: BubbleMapConfig, ref) => {
  const { chartRef, style, className, loading, loadingTemplate, errorTemplate, mapStyle, ...rest } =
    props;
  const config = Object.assign(rest, { style: mapStyle });
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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default BubbleMap;
