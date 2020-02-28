import React, { useEffect, useContext } from 'react';
import { Treemap, TreemapConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TreemapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Treemap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechTreemap: React.FC<TreemapConfig> = (props: TreemapConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Treemap, TreemapConfig>(Treemap, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: TreemapConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTreemap {...config} {...props} />
    </ErrorBoundary>
  );
};
