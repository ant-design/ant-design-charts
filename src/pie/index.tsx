import React, { useContext, useEffect } from 'react';
import { Pie, PieConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface PieConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Pie | undefined>;
}

const TechPie: React.FC<PieConfig> = (props: PieConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Pie, PieConfig>(Pie, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
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
