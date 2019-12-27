import React, { useContext, useEffect } from 'react';
import { GroupColumn, GroupColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface GroupColumnConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<GroupColumn | undefined>;
}

const TechGroupColumn: React.FC<GroupColumnConfig> = (props: GroupColumnConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<GroupColumn, GroupColumnConfig>(GroupColumn, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: GroupColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechGroupColumn {...config} {...props} />
    </ErrorBoundary>
  );
};
