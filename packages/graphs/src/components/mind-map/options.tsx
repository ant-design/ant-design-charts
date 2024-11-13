import type { Graph, NodeData, SingleLayoutOptions } from '@antv/g6';
import { idOf } from '@antv/g6';
import React from 'react';
import type { TextNodeProps } from '../../core/base';
import { CollapseExpandIcon, RCNode } from '../../core/base';
import { measureTextSize } from '../../core/utils/measure-text';
import { getNodeSide } from '../../core/utils/node';
import { getBoxedTextNodeStyle, getLinearTextNodeStyle } from '../../core/utils/tree';
import type { MindMapOptions } from './types';

const { ArrowCountIcon } = CollapseExpandIcon;
const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: MindMapOptions = {
  node: {
    type: 'react',
    style: {
      component: (data) => <TextNode type="filled" text={idOf(data)} />,
      size: (data) => measureTextSize(idOf(data), [24, 16]),
      dx: function (data: NodeData) {
        const side = getNodeSide(this as unknown as Graph, data);
        const size = measureTextSize(idOf(data), [24, 16]);
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
      lineWidth: 3,
    },
  },
  transforms: (prev) => [
    ...prev,
    {
      type: 'collapse-expand-react-node',
      key: 'collapse-expand-react-node',
      enable: false,
      trigger: 'icon',
      iconRender: function (isCollapsed: boolean, data: NodeData) {
        const side = getNodeSide(this as unknown as Graph, data);
        return (
          <ArrowCountIcon
            graph={this as unknown as Graph}
            data={data}
            isCollapsed={isCollapsed}
            placement={side === 'left' ? 'left' : 'right'}
          />
        );
      },
      iconPlacement: function (data: NodeData) {
        const side = getNodeSide(this as unknown as Graph, data);
        return side === 'left' ? 'left' : 'right';
      },
    },
  ],
  layout: {
    type: 'mindmap',
    direction: 'H',
    getWidth: (data) => 120,
    getHeight: (data) => measureTextSize(data.id, [24, 16])[1],
    getHGap: () => 64,
  },
  animation: {
    duration: 500,
  },
};

export function getMindMapOptions({
  type,
  direction,
  nodeMinWidth,
  nodeMaxWidth,
}: Pick<MindMapOptions, 'type' | 'nodeMaxWidth' | 'nodeMinWidth' | 'direction'>): MindMapOptions {
  let options: MindMapOptions = {};
  if (type === 'boxed') {
    const minWidth = nodeMinWidth || 120;
    const maxWidth = nodeMaxWidth || 300;

    options = {
      node: {
        style: {
          component: (data: NodeData) => {
            const depth = data.depth as number;
            const color = data.style?.color as string;
            const props = {
              text: idOf(data),
              color,
              maxWidth,
              font: getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, depth).font,
            } as TextNodeProps;
            Object.assign(
              props,
              depth === 0
                ? { type: 'filled', color: '#f1f4f5', style: { color: '#252525' } }
                : depth === 1
                  ? { type: 'filled' }
                  : { type: 'outlined' },
            );
            return <TextNode {...props} />;
          },
          size: (data: NodeData) =>
            getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size,
          dx: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const size = getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size;
            return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
          },
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      edge: {
        style: {
          stroke: function (data) {
            return (this.getNodeData(data.source).style!.color as string) || '#99ADD1';
          },
        },
      },
      transforms: (prev) => [
        ...prev,
        {
          type: 'assign-color-by-branch',
          key: 'assign-color-by-branch',
        },
      ],
      layout: {
        type: 'mindmap',
        getHeight: (data) =>
          getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[1],
        getVGap: () => 14,
      },
    };
  } else if (type === 'linear') {
    const minWidth = nodeMinWidth || 0;
    const maxWidth = nodeMaxWidth || 300;

    options = {
      node: {
        style: {
          component: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const depth = data.depth as number;
            const color = data.style?.color as string;
            const { font } = getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, depth);
            const props = { text: idOf(data), color, maxWidth, font } as TextNodeProps;
            Object.assign(
              props,
              depth === 0
                ? { type: 'filled', color: '#f1f4f5', style: { color: '#252525' } }
                : {
                  type: 'underlined',
                  style: side === 'left' ? { textAlign: 'right' } : side === 'center' ? { textAlign: 'center' } : {},
                },
            );
            return <TextNode {...props} />;
          },
          size: (data: NodeData) =>
            getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size,
          dx: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const size = getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size;
            return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
          },
          ports: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            return side === 'center'
              ? [{ placement: 'left' }, { placement: 'right' }]
              : [{ placement: 'left-bottom' }, { placement: 'right-bottom' }];
          },
        },
      },
      edge: {
        style: {
          stroke: function (data) {
            return (this.getNodeData(data.target).style!.color as string) || '#99ADD1';
          },
        },
      },
      layout: {
        type: 'mindmap',
        getHeight: (data) =>
          getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[1],
        getVGap: () => 12,
      },
      transforms: (prev) => [
        ...prev.filter((t) => (t as any).key !== 'collapse-expand-react-node'),
        {
          type: 'assign-color-by-branch',
          key: 'assign-color-by-branch',
        },
        {
          ...(prev.find((t) => (t as any).key === 'collapse-expand-react-node') as any),
          iconOffsetY: (data) => {
            if (data.depth === 0) return 0;
            const size = getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size;
            return size[1] / 2;
          },
        },
      ],
    };
  }

  if (direction) {
    options.layout ||= {} as SingleLayoutOptions;
    (options.layout as SingleLayoutOptions).direction = direction === 'alternate' ? 'H' : direction === 'left' ? 'RL' : 'LR';
  }

  return options;
}
