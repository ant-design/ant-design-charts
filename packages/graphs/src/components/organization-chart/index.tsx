import type { Graph } from '@antv/g6';
import React, {
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  useMemo,
} from 'react';
import { BaseGraph } from '../../core/base-graph';
import { COMMON_OPTIONS } from '../../core/constants';
import { mergeOptions } from '../../core/utils/options';
import { DEFAULT_OPTIONS, getOrganizationChartOptions } from './options';
import type { OrganizationChartOptions } from './types';

export const OrganizationChart: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<OrganizationChartOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<OrganizationChartOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const { direction = 'vertical', ...restProps } = props;
    const options = mergeOptions(
      COMMON_OPTIONS,
      DEFAULT_OPTIONS,
      getOrganizationChartOptions({ direction }),
      restProps,
    );
    return options;
  }, [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { OrganizationChartOptions };
