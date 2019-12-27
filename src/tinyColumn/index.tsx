import React, { useEffect, useContext } from 'react';
import { TinyColumn, TinyColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TinyColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<TinyColumn | undefined>;
}

const TechTinyColumn: React.FC<TinyColumnConfig> = (props: TinyColumnConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<TinyColumn, TinyColumnConfig>(TinyColumn, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: TinyColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTinyColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
