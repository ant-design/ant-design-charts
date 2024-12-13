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
import { DEFAULT_OPTIONS, getFlowDirectionGraphOptions } from './options';
import type { FlowDirectionGraphOptions } from './types';

export const FlowDirectionGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<FlowDirectionGraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<FlowDirectionGraphOptions>>(({ children, ...props }, ref) => {
  const { labelField, ...restProps } = props;
  const options = useMemo(
    () => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, getFlowDirectionGraphOptions({ labelField }), restProps),
    [props],
  );

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { FlowDirectionGraphOptions };
