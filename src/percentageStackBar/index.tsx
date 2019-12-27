import React, { useContext, useEffect } from 'react';
import { PercentageStackBar, PercentageStackBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface PercentageStackBarConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<PercentageStackBar | undefined>;
}

const TechPercentageStackBar: React.FC<PercentageStackBarConfig> = (
  props: PercentageStackBarConfig,
) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<PercentageStackBar, PercentageStackBarConfig>(
    PercentageStackBar,
    rest,
  );

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PercentageStackBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackBar {...config} {...props} />
    </ErrorBoundary>
  );
};
