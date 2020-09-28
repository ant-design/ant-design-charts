import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bullet as G2plotBullet, BulletOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../hooks/useChart';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface BulletConfig extends Omit<G2plotProps, 'color' | 'label' | 'style'>, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotBullet | undefined>;
}

const BulletChart = forwardRef((props: BulletConfig, ref) => {
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
  const { chart, container } = useChart<G2plotBullet, BulletConfig>(G2plotBullet, rest);
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

export default BulletChart;
