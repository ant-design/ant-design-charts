import React, { useContext, useEffect } from 'react';
import { Line, LineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface LineConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Line | undefined>;
}

const TechLine: React.FC<LineConfig> = (props: LineConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Line, LineConfig>(Line, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: LineConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechLine {...config} {...props} />
    </ErrorBoundary>
  );
};
