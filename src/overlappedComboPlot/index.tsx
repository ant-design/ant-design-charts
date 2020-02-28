import React, { useEffect, useContext } from 'react';
import { OverlappedComboPlot, OverlappedComboPlotConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface OverlappedComboPlotConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<OverlappedComboPlot | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechOverlappedComboPlot: React.FC<OverlappedComboPlotConfig> = (
  props: OverlappedComboPlotConfig,
) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<OverlappedComboPlot, OverlappedComboPlotConfig>(
    OverlappedComboPlot,
    rest,
  );

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: OverlappedComboPlotConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechOverlappedComboPlot {...config} {...props} />
    </ErrorBoundary>
  );
};
