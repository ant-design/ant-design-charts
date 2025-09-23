import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import React, { forwardRef, useMemo } from 'react';
import { BaseChart } from '../components/base';
import useConfig from '../hooks/useConfig';
import type { Chart } from '../interface';
import { flow } from '../util';
import scale from './scale';

export function makeChartComp<C>(
  chartType: string,
): ForwardRefExoticComponent<PropsWithoutRef<C> & RefAttributes<Chart>> {
  const configKey = chartType.charAt(0).toLowerCase() + chartType.slice(1);
  return forwardRef<Chart, C>((props, ref) => {
    const config = useConfig();
    const configKey = useMemo(() => chartType.charAt(0).toLowerCase() + chartType.slice(1), [chartType]);
    const flowProps = flow([scale])(props);
    const mergedConfig = {
      ...(config?.common ?? {}),
      ...(config?.[configKey] ?? {}),
    };

    return <BaseChart {...mergedConfig} {...flowProps} chartType={chartType} ref={ref} />;
  });
}
