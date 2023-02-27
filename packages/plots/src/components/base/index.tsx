import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { stateProxy, useSnapshot, ErrorBoundary, ChartLoading } from 'rc-utils';
import useChart from '../../hooks/useChart';
import { Plots } from './plots';
import { CommonConfig, Options, Plot } from '../../interface';

export const BaseChart = forwardRef(({ config, proxy, chartType }: CommonConfig, ref) => {
  const { snap, state } = stateProxy(config);
  const snapshot = useSnapshot(state);
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
  } = snapshot;

  const { chart, container } = useChart<Plot<Options>, CommonConfig['config']>(Plots[chartType], snapshot);

  useEffect(() => {
    if (typeof proxy === 'function') proxy(snap());
  }, [chart.current]);

  useImperativeHandle(ref, () => chart.current);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} theme={snapshot.theme} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});
