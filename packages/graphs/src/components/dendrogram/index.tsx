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
import { formatTreeData } from '../../core/utils/data';
import { mergeOptions } from '../../core/utils/options';
import { DEFAULT_OPTIONS, getDendrogramOptions } from './options';
import type { DendrogramOptions } from './types';

export const Dendrogram: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<DendrogramOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<DendrogramOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const { data, defaultExpandLevel, direction = 'horizontal', compact = false, ...restProps } = props;

    return mergeOptions(
      COMMON_OPTIONS,
      DEFAULT_OPTIONS,
      { data: formatTreeData(data, defaultExpandLevel) },
      getDendrogramOptions({ direction, compact }),
      restProps,
    );
  }, [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { DendrogramOptions };
