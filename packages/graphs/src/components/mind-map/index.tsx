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
import { DEFAULT_OPTIONS, getMindMapOptions } from './options';
import type { MindMapOptions } from './types';

export const MindMap: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<MindMapOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<MindMapOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const {
      data,
      type = 'default',
      nodeMinWidth,
      nodeMaxWidth,
      direction = 'alternate',
      labelField,
      defaultExpandLevel,
      ...restProps
    } = props;
    const options = mergeOptions(
      COMMON_OPTIONS,
      DEFAULT_OPTIONS,
      { data: formatTreeData(data, defaultExpandLevel) },
      getMindMapOptions({ type, nodeMinWidth, nodeMaxWidth, direction, labelField }),
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

export type { MindMapOptions };
