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
import { DEFAULT_OPTIONS } from './options';
import type { FlowGraphOptions } from './types';

export const FlowGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<FlowGraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<FlowGraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { FlowGraphOptions };
