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
import { DEFAULT_OPTIONS, getFishboneOptions } from './options';
import type { FishboneOptions } from './types';

export const Fishbone: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<FishboneOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<FishboneOptions>>(({ children, ...props }, ref) => {
  const { data, defaultExpandLevel, type = 'cause', labelField, ...restProps } = props;

  const options = useMemo(
    () =>
      mergeOptions(
        COMMON_OPTIONS,
        DEFAULT_OPTIONS,
        { data: formatTreeData(data) },
        getFishboneOptions({ type, labelField }),
        restProps,
      ),
    [props],
  );

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { FishboneOptions };
