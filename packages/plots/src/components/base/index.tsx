import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { ErrorBoundary, ChartLoading } from 'rc-utils';
import useChart from '../../hooks/useChart';
import { Plots } from './plots';
import { CommonConfig, Chart } from '../../interface';

export const BaseChart: React.FC<any> = forwardRef(({ chartType, ...config }: CommonConfig, ref) => {
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = config;

  const { chart, container } = useChart<Chart, CommonConfig>(Plots[chartType], rest);

  useImperativeHandle(ref, () => chart.current);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});
