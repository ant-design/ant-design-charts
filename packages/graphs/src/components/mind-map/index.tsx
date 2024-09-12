import type { Graph, ID } from '@antv/g6';
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
import { MindMapNode } from '../../core/nodes';
import { measureTextSize } from '../../core/nodes/mind-map-node';
import { assignColorToHierarchicalData, upsertChildrenData } from '../../core/utils/data';
import { inferCollapsibleStyle, isCollapsible, parseCollapsible } from '../../core/utils/node';
import { mergeOptions } from '../../core/utils/options';
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  collapsible: {
    trigger: 'node',
    iconPlacement: function (data) {
      const nodePositionX = data.style!.x!;
      const childPositionX = (this as Graph).getNodeData(data.children?.[0] as ID).style!.x!;
      return nodePositionX > childPositionX ? 'left' : 'right';
    },
  },
  node: {
    type: 'react',
    style: {
      component: (data) => <MindMapNode text={idOf(data)} depth={data.data!.depth} color={data.data!.color} />,
      size: (data) => measureTextSize(idOf(data), data.data!.depth as number),
      ports: [{ placement: 'left' }, { placement: 'right' }],
    },
  },
  edge: {
    type: 'cubic-horizontal',
    style: {
      stroke: function (data) {
        return (this.getNodeData(data.source).data!.color as string) || '#99ADD1';
      },
      lineWidth: 2,
      curvePosition: [0.7, 0.7],
    },
  },
  layout: {
    type: 'mindmap',
    direction: 'H',
    getHeight: (data) => measureTextSize(idOf(data), data.data!.depth as number)[1],
    getWidth: (data) => measureTextSize(idOf(data), data.data!.depth as number)[0],
    getVGap: () => 28,
    getHGap: () => 64,
    animation: false,
  },
  animation: {
    duration: 500,
  },
};

export const MindMap: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => {
    const options = mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props);

    if (isCollapsible(options)) {
      const { direction } = parseCollapsible(options.collapsible);
      upsertChildrenData(options.data, direction!);

      inferCollapsibleStyle(options);
    }

    assignColorToHierarchicalData(options.data);

    return options;
  }, [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});
