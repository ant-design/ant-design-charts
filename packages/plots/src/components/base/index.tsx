import React, { useImperativeHandle, forwardRef } from 'react';
import { ErrorBoundary, ChartLoading } from '@ant-design/charts-util';
import useChart from '../../hooks/useChart';
import { Plots } from '../../core';
import { CommonConfig, Chart } from '../../interface';

export const BaseChart: React.FC<any> = forwardRef(({ chartType = 'Base', ...config }: CommonConfig, ref) => {
  const {
    containerStyle = {
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
      <div className={className} style={containerStyle} ref={container} />
    </ErrorBoundary>
  );
});
