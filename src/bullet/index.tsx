import React, { useEffect, useContext } from 'react';
import { Bullet, BulletConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface BulletConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Bullet | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechBullet: React.FC<BulletConfig> = (props: BulletConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Bullet, BulletConfig>(Bullet, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: BulletConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechBullet {...config} {...props} />
    </ErrorBoundary>
  );
};
