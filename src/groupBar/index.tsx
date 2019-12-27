import React, { useContext, useEffect } from 'react';
import { GroupBar, GroupBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface GroupBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<GroupBar | undefined>;
}

const TechGroupBar: React.FC<GroupBarConfig> = (props: GroupBarConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<GroupBar, GroupBarConfig>(GroupBar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: GroupBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechGroupBar {...config} {...props} />
    </ErrorBoundary>
  );
};
