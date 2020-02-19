import React, { useContext, useEffect } from 'react';
import { RangeColumn, RangeColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RangeColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<RangeColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechRangeColumn: React.FC<RangeColumnConfig> = (props: RangeColumnConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<RangeColumn, RangeColumnConfig>(RangeColumn, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: RangeColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRangeColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
