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
  const options = useMemo(() => {
    const { type = 'default', nodeMinWidth, nodeMaxWidth, mode = 'right', ...restProps } = props;
    const options = mergeOptions(
      COMMON_OPTIONS,
      DEFAULT_OPTIONS,
      getIndentedTreeOptions({ type, nodeMinWidth, nodeMaxWidth, mode }),
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

export type { IndentedTreeOptions };
