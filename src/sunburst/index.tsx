import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Sunburst as G2plotSunburst, SunburstOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface SunburstConfig extends G2plotProps, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotSunburst | undefined>;
}

const SunburstChart = forwardRef((props: SunburstConfig, ref) => {
  const {
    chartRef,
    style = {
      height: '100%',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotSunburst, SunburstConfig>(G2plotSunburst, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default SunburstChart;
