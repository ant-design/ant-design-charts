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
import { DEFAULT_OPTIONS, getFishboneOptions } from './options';
import type { FishboneOptions } from './types';

export const Fishbone: ForwardRefExoticComponent<PropsWithoutRef<PropsWithChildren<FishboneOptions>> & RefAttributes<Graph>> = forwardRef<Graph, PropsWithChildren<FishboneOptions>>(({ children, ...props }, ref) => {
  const { type = 'cause', ...restProps } = props;

  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, getFishboneOptions({ type }), restProps), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
})

export type { FishboneOptions };
