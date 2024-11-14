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
import { DEFAULT_OPTIONS, getIndentedTreeOptions } from './options';
import type { IndentedTreeOptions } from './types';

export const IndentedTree: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<IndentedTreeOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<IndentedTreeOptions>>(({ children, ...props }, ref) => {
  const { type = 'default', nodeMinWidth, nodeMaxWidth, direction = 'right', ...restProps } = props;

  const options = useMemo(() => mergeOptions(
    COMMON_OPTIONS,
    DEFAULT_OPTIONS,
    getIndentedTreeOptions({ type, nodeMinWidth, nodeMaxWidth, direction }),
    restProps,
  ), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});

export type { IndentedTreeOptions };
