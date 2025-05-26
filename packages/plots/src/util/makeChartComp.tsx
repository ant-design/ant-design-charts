import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import React, { forwardRef } from 'react';
import { BaseChart } from '../components/base';
import useConfig from '../hooks/useConfig';
import type { Chart } from '../interface';

export function makeChartComp<C>(
  chartType: string,
): ForwardRefExoticComponent<PropsWithoutRef<C> & RefAttributes<Chart>> {
  const configKey = chartType.charAt(0).toLowerCase() + chartType.slice(1);
  return forwardRef<Chart, C>((props, ref) => {
    const config = useConfig();
    return <BaseChart {...config.common} {...config[configKey]} {...props} chartType={chartType} ref={ref} />;
  });
}
