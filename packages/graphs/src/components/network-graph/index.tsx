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
import type { GraphOptions } from '../../types';

const SIZE = 32;

const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'circle',
    style: {
      size: SIZE,
    },
  },
  layout: {
    type: 'd3-force',
    link: {
      distance: 3 * SIZE,
    },
    collide: {
      radius: SIZE,
    },
    manyBody: {
      strength: -3 * SIZE,
    },
  },
};

export const NetworkGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});
