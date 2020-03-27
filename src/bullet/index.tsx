import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Bullet as G2plotBullet, BulletConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface BulletConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotBullet | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const BulletChart = forwardRef((props: BulletConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

BulletChart.defaultProps = G2plotBullet.getDefaultOptions();

export default BulletChart;
