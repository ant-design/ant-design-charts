import React, { useContext, useEffect } from 'react';
import { Pie, PieConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface PieConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Pie | undefined>;
}

const TechPie: React.FC<PieConfig> = (props: PieConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Pie, PieConfig>(Pie, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: PieConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechPie {...config} {...props} />
    </ErrorBoundary>
  );
};
