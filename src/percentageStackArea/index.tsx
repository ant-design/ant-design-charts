import React, { useContext, useEffect } from 'react';
import { PercentageStackArea, PercentageStackAreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface PercentageStackAreaConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<PercentageStackArea | undefined>;
}

const TechPercentageStackArea: React.FC<PercentageStackAreaConfig> = (
  props: PercentageStackAreaConfig,
) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<PercentageStackArea, PercentageStackAreaConfig>(
    PercentageStackArea,
    rest,
  );

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PercentageStackAreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPercentageStackArea {...config} {...props} />
    </ErrorBoundary>
  );
};
