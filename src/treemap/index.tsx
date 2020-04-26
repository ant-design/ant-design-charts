import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Treemap as G2plotTreemap, TreemapConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface TreemapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTreemap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TreemapChart = forwardRef((props: TreemapConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotTreemap, TreemapConfig>(G2plotTreemap, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));

  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

TreemapChart.defaultProps = G2plotTreemap.getDefaultOptions();

export default TreemapChart;
