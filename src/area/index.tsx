import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Area as G2plotArea, AreaConfig as G2plotProps } from '@antv/g2plot';
import { useSet } from '@umijs/hooks';
import useChart from '../hooks/useChart';
import { utils } from '../util';
import { ErrorBoundary } from '../base';

export interface AreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotArea | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const AreaChart = forwardRef((props: AreaConfig, ref) => {
  const { chartRef, chartStyle = {}, className, children, ...rest } = props;
  const [set, { add, has }] = useSet<object>();
  const { chart, container } = useChart<G2plotArea, AreaConfig>(G2plotArea, utils.getChartConfig(rest, set));
  const childs = React.Children.toArray(children);
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
      <div className={className} style={chartStyle} ref={container} />
      {chart && typeof children === 'function' && children({ chart, setChartConfig: add, chartConfig: set, hasChartConfig: has })}
      {chart && childs.map((child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, {
          ...child.props, chart, setChartConfig: add, chartConfig: set, hasChartConfig: has
        });
      })}
    </ErrorBoundary>
  );
});

AreaChart.defaultProps = G2plotArea.getDefaultOptions();

export default AreaChart;
