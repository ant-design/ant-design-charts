import type { Graph } from '@antv/g6';
import { isEmpty } from 'lodash';
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
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'circle',
    style: {
      labelText: (d) => d.id,
    },
  },
};

export interface DendrogramOptions extends GraphOptions {
  /**
   * The direction of the dendrogram.
   * - `'vertical'`: vertical direction (top to bottom).
   * - `'horizontal'`: horizontal direction (left to right).
   * - `'radial'`: radial direction (clockwise).
   * @default 'horizontal'
   */
  direction?: 'vertical' | 'horizontal' | 'radial';
  /**
   * Whether to compact the layout.
   * @default false
   */
  compact?: boolean;
}

export const Dendrogram: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<DendrogramOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<DendrogramOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const { direction = 'horizontal', compact = false, ...restProps } = props;
    return mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, getDendrogramOptions(direction, compact), restProps);
  }, [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

const getDendrogramOptions = (direction: 'vertical' | 'horizontal' | 'radial', compact: boolean): GraphOptions => {
  const isLeafNode = (d) => isEmpty(d.children);

  const layoutType = compact ? 'compact-box' : 'dendrogram';
  if (direction === 'vertical') {
    return {
      node: {
        style: {
          labelBackground: true,
          labelPlacement: 'right',
          labelTransform: (d) => (isLeafNode(d) ? 'rotate(90deg) translate(18px)' : 'translate(18px)'),
          ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
      },
      edge: { type: 'cubic-vertical' },
      layout: { type: layoutType, direction: 'TB', nodeSep: 40, rankSep: 140, getVGap: () => 80, getHGap: () => 20 },
    };
  } else if (direction === 'horizontal') {
    return {
      node: {
        style: {
          labelBackground: true,
          labelPlacement: (d) => (isLeafNode(d) ? 'right' : 'left'),
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      edge: { type: 'cubic-horizontal' },
      layout: { type: layoutType, direction: 'LR', nodeSep: 40, rankSep: 200, getVGap: () => 5, getHGap: () => 100 },
    };
  } else {
    return {
      node: { style: { labelBackground: true } },
      edge: { type: 'cubic-radial' },
      layout: {
        type: layoutType,
        direction: 'RL',
        radial: true,
        nodeSep: 40,
        rankSep: 200,
        getVGap: () => 30,
        getHGap: () => 60,
      },
      transforms: (prev) => [...prev, 'place-radial-labels'],
    };
  }
};
