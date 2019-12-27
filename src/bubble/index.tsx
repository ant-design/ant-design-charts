import React, { useContext, useEffect } from 'react';
import { Bubble, BubbleConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../Base';

export interface BubbleConfig extends G2plotProps {
  theme?: string;
  ref?: React.MutableRefObject<Bubble | undefined>;
}

const TechBubble: React.FC<BubbleConfig> = (props: BubbleConfig) => {
  const { ref, ...rest } = props;

  const { chart, container } = useChart<Bubble, BubbleConfig>(Bubble, rest);

  useEffect(() => {
    if (ref) {
      ref.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: BubbleConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechBubble {...config} {...props} />
    </ErrorBoundary>
  );
};
