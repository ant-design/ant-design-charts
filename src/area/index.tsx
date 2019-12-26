import React, { useContext, useEffect } from 'react';
import { Area, AreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface AreaConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Area | undefined>;
}

const TechArea: React.FC<AreaConfig> = (props: AreaConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Area, AreaConfig>(Area, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: AreaConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechArea {...config} {...props} />
    </ErrorBoundary>
  );
};
