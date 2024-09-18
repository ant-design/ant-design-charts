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
import { getNodeSide } from '../../core/utils/node';
import { mergeOptions } from '../../core/utils/options';
import type { GraphOptions } from '../../types';

const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'react',
    style: {
      component: (data: NodeData) => (
        <MindMapNode text={idOf(data)} depth={data.data!.depth as number} color={data.style!.color as string} />
      ),
      size: (data: NodeData) => measureMindMapNodeSize(data),
      dx: function (data: NodeData) {
        const parentData = (this as unknown as Graph).getParentData(idOf(data), 'tree');
        const side = getNodeSide(data, parentData);
        const size = measureMindMapNodeSize(data);
        return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
      },
      ports: [{ placement: 'left' }, { placement: 'right' }],
    },
    state: {
      active: {
        halo: false,
      },
      selected: {
        halo: false,
      },
    },
  },
  edge: {
    type: 'cubic-horizontal',
    style: {
      stroke: function (data) {
        return (this.getNodeData(data.source).style!.color as string) || '#99ADD1';
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
  transforms: (prev) => [
    ...prev,
    'assign-color-by-branch',
    {
      type: 'collapse-expand-react-node',
      key: 'collapse-expand-react-node',
      trigger: 'node',
      iconPlacement: function (data: NodeData) {
        const parentData = (this as unknown as Graph).getParentData(idOf(data), 'tree');
        const side = getNodeSide(data, parentData);
        return side === 'left' ? 'left' : 'right';
      },
    },
  ],
  animation: {
    duration: 500,
  },
};

export const MindMap: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const options = useMemo(() => mergeOptions(COMMON_OPTIONS, DEFAULT_OPTIONS, props), [props]);

  return (
    <BaseGraph {...options} ref={ref}>
      {children}
    </BaseGraph>
  );
});
