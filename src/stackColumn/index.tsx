import React, { useContext, useEffect } from 'react';
import { StackColumn, StackColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface StackColumnConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<StackColumn | undefined>;
}

const TechStackColumn: React.FC<StackColumnConfig> = (props: StackColumnConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<StackColumn, StackColumnConfig>(StackColumn, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: StackColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechStackColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
