import React, { useContext, useEffect } from 'react';
import { StackBar, StackBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StackBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<StackBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechStackBar: React.FC<StackBarConfig> = (props: StackBarConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<StackBar, StackBarConfig>(StackBar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: StackBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechStackBar {...config} {...props} />
    </ErrorBoundary>
  );
};
