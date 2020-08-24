import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bullet as G2plotBullet, BulletConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface BulletConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotBullet | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const BulletChart = forwardRef((props: BulletConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

BulletChart.defaultProps = G2plotBullet.getDefaultOptions();

export default BulletChart;
