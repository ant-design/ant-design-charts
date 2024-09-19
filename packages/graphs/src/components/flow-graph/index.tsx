import type { Graph, NodeData } from '@antv/g6';
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
import { PlainNode } from '../../core/nodes';
import { mergeOptions } from '../../core/utils/options';
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'react',
    style: {
      component: (data: NodeData) => <PlainNode isActive={data.states?.includes('active')} />,
      size: [80, 40],
      ports: [{ placement: 'left' }, { placement: 'right' }],
    },
    state: {
      active: {
        halo: false,
      },
      selected: {
        halo: false,
      },
    },
  },
  edge: {
    type: 'cubic-horizontal',
    style: {
      strokeOpacity: 0.5,
    },
    state: {
      active: {
        strokeOpacity: 1,
      },
    },
  },
  layout: {
    type: 'antv-dagre',
    rankdir: 'LR',
  },
  transforms: ['translate-react-node-origin'],
};

export const FlowGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});
