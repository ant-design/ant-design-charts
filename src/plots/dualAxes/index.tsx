import React, { useImperativeHandle, forwardRef } from 'react';
import { DualAxes as G2plotDualAxes, DualAxesOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface DualAxesConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {}

const DualAxesChart = forwardRef((props: DualAxesConfig, ref) => {
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  // @ts-ignore annotations 类型特殊
  const { chart, container } = useChart<G2plotDualAxes, DualAxesConfig>(G2plotDualAxes, rest);

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default DualAxesChart;
