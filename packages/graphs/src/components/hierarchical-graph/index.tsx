import type { Graph, NodeData } from '@antv/g6';
import { idOf } from '@antv/g6';
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
import { upsertChildrenData } from '../../core/utils/data';
import { inferCollapsibleStyle, isCollapsible, isReactNode, parseCollapsible } from '../../core/utils/node';
import { mergeOptions } from '../../core/utils/options';
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'react',
    style: {
      component: (data: NodeData) => <PlainNode text={idOf(data)} isActive={data.states?.includes('active')} />,
      size: [80, 40],
      ports: [{ placement: 'top' }, { placement: 'bottom' }],
    },
  },
  edge: {
    type: 'polyline',
    style: {
      router: {
        type: 'orth',
      },
    },
  },
  layout: {
    type: 'antv-dagre',
    rankdir: 'TB',
  },
  animation: false,
};

export const HierarchicalGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const options = mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props);

    if (isCollapsible(options)) {
      const { direction } = parseCollapsible(options.collapsible);
      upsertChildrenData(options.data, direction!);

      if (isReactNode(options)) inferCollapsibleStyle(options);
    }

    return options;
  }, [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});
