import React, { useContext, useEffect } from 'react';
import { Area, AreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface AreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Area | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechArea: React.FC<AreaConfig> = (props: AreaConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Area, AreaConfig>(Area, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: AreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechArea {...config} {...props} />
    </ErrorBoundary>
  );
};
