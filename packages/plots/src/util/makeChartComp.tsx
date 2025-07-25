import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import React, { forwardRef } from 'react';
import { BaseChart } from '../components/base';
import useConfig from '../hooks/useConfig';
import scale from './scale';
import { flow } from '../util';
import type { Chart } from '../interface';

export function makeChartComp<C>(
  chartType: string,
): ForwardRefExoticComponent<PropsWithoutRef<C> & RefAttributes<Chart>> {
  const configKey = chartType.charAt(0).toLowerCase() + chartType.slice(1);
  return forwardRef<Chart, C>((props, ref) => {
    const config = useConfig();
    const flowProps = flow([scale])(props);
    if (!config || !config[configKey]) {
      return <BaseChart {...flowProps} chartType={chartType} ref={ref} />;
    }
    return <BaseChart {...config.common} {...config[configKey]} {...flowProps} chartType={chartType} ref={ref} />;
  });
}
