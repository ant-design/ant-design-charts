import React, { useContext, useEffect } from 'react';
import { PercentageStackColumn, PercentageStackColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface PercentageStackColumnConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<PercentageStackColumn | undefined>;
}

const TechPercentageStackColumn: React.FC<PercentageStackColumnConfig> = (
  props: PercentageStackColumnConfig,
) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<PercentageStackColumn, PercentageStackColumnConfig>(
    PercentageStackColumn,
    rest,
  );

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PercentageStackColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
