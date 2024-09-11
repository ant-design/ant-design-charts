import type { Graph } from '@antv/g6';
import React, { forwardRef, ForwardRefExoticComponent, PropsWithChildren, PropsWithoutRef, RefAttributes } from 'react';
import { BaseGraph } from '../../core/base-graph';
import type { GraphOptions } from '../../types';

const HierarchicalGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => (
  <BaseGraph type="hierarchical-graph" {...props} ref={ref}>
    {children}
  </BaseGraph>
));

export default HierarchicalGraph;
