import type { Graph } from '@antv/g6';
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  useMemo,
} from 'react';
import { BaseGraph } from '../../core/base-graph';
import { COMMON_OPTIONS } from '../../core/constants';
import { mergeOptions } from '../../core/utils/options';
import { DEFAULT_OPTIONS } from './options';
import type { NetworkGraphOptions } from './types';

export const NetworkGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<NetworkGraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<NetworkGraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { NetworkGraphOptions };
