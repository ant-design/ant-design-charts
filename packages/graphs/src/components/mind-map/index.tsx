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
import { measureMindMapNodeSize, MindMapNode } from '../../core/nodes';
import { assignColorToHierarchicalData, upsertChildrenData } from '../../core/utils/data';
import { getNodeSide, inferCollapsibleStyle, isCollapsible, parseCollapsible } from '../../core/utils/node';
import { mergeOptions } from '../../core/utils/options';
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  collapsible: {
    trigger: 'node',
    iconPlacement: function (data: NodeData) {
      const parentData = this.getParentData(idOf(data), 'tree');
      const side = getNodeSide(data, parentData);
      return side === 'left' ? 'left' : 'right';
    },
  },
  node: {
    type: 'react',
    style: function (data) {
      const { depth, color } = data.data as { depth: number; color: string };
      const parentData = this.getParentData(idOf(data), 'tree');
      const side = getNodeSide(data, parentData);
      const size = measureMindMapNodeSize(data);

      return {
        component: <MindMapNode text={idOf(data)} depth={depth} color={color} />,
        size,
        dx: side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0,
        ports: [{ placement: 'left' }, { placement: 'right' }],
      };
    },
  },
  edge: {
    type: 'cubic-horizontal',
    style: {
      stroke: function (data) {
        return (this.getNodeData(data.source).data!.color as string) || '#99ADD1';
      },
      lineWidth: 2,
    },
  },
  layout: {
    type: 'mindmap',
    direction: 'H',
    getWidth: () => 120,
    getHeight: (data) => measureMindMapNodeSize(data)[1],
    getVGap: () => 28,
    getHGap: () => 64,
    animation: false,
  },
  animation: {
    duration: 500,
  },
  transforms: [],
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
