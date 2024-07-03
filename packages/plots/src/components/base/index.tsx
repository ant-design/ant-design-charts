import React, { useImperativeHandle, forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { ErrorBoundary, ChartLoading } from '@ant-design/charts-util';
import useChart from '../../hooks/useChart';
import { Plots } from '../../core';
import type { CommonConfig, Chart } from '../../interface';

export const BaseChart: ForwardRefExoticComponent<PropsWithoutRef<CommonConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  CommonConfig
>(({ chartType = 'Base', ...config }, ref) => {
  const {
    containerStyle = {
      height: 'inherit',
      flex: 1
    },
    containerAttributes = {},
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
      <div className={className} style={containerStyle} ref={container} {...containerAttributes} />
    </ErrorBoundary>
  );
});
