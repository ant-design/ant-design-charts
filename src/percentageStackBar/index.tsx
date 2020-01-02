import React, { useContext, useEffect } from 'react';
import { PercentageStackBar, PercentageStackBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PercentageStackBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<PercentageStackBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechPercentageStackBar: React.FC<PercentageStackBarConfig> = (
  props: PercentageStackBarConfig,
) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<PercentageStackBar, PercentageStackBarConfig>(
    PercentageStackBar,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: PercentageStackBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackBar {...config} {...props} />
    </ErrorBoundary>
  );
};
