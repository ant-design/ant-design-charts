import React, { useContext, useEffect } from 'react';
import { StackColumn, StackColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StackColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<StackColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechStackColumn: React.FC<StackColumnConfig> = (props: StackColumnConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<StackColumn, StackColumnConfig>(StackColumn, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: StackColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechStackColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
