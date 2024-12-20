import type { Graph, NodeData, SingleLayoutOptions } from '@antv/g6';
import { get } from 'lodash';
import React from 'react';
import type { TextNodeProps } from '../../core/base';
import { CollapseExpandIcon, RCNode } from '../../core/base';
import { formatLabel } from '../../core/utils/label';
import { measureTextSize } from '../../core/utils/measure-text';
import { getNodeSide } from '../../core/utils/node';
import { getBoxedTextNodeStyle, getLinearTextNodeStyle } from '../../core/utils/tree';
import type { GraphOptions } from '../../types';
import type { MindMapOptions } from './types';

const { ArrowCountIcon } = CollapseExpandIcon;
const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'react',
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
    preLayout: false,
    getWidth: () => 120,
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
  labelField,
}: Pick<MindMapOptions, 'type' | 'nodeMaxWidth' | 'nodeMinWidth' | 'direction' | 'labelField'>): GraphOptions {
  let options: GraphOptions = {};

  if (type === 'boxed') {
    const minWidth = nodeMinWidth || 120;
    const maxWidth = nodeMaxWidth || 300;

    options = {
      node: {
        style: {
          component: (data: NodeData) => {
            const depth = data.depth;
            const color = data.style?.color;
            const label = formatLabel(data, labelField);
            const { font } = getBoxedTextNodeStyle(label, minWidth, maxWidth, depth);
            const props = { text: label, color, maxWidth, font } as TextNodeProps;
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
          size: (data: NodeData) => {
            const label = formatLabel(data, labelField);
            return getBoxedTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
          },
          dx: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const label = formatLabel(data, labelField);
            const [width] = getBoxedTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
            return side === 'left' ? -width : side === 'center' ? -width / 2 : 0;
          },
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      edge: {
        style: {
          stroke: function (data) {
            const source = this.getNodeData(data.source);
            return get(source, 'style.color', '#99ADD1') as string;
          },
        },
      },
      transforms: (prev) => [...prev, { type: 'assign-color-by-branch', key: 'assign-color-by-branch' }],
      layout: {
        type: 'mindmap',
        getHeight: (data) => {
          const label = formatLabel(data, labelField);
          const [, height] = getBoxedTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
          return height;
        },
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
            const depth = data.depth;
            const color = data.style?.color;
            const label = formatLabel(data, labelField);
            const { font } = getLinearTextNodeStyle(label, minWidth, maxWidth, depth);
            const props = { text: label, color, maxWidth, font } as TextNodeProps;
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
          size: (data: NodeData) => {
            const label = formatLabel(data, labelField);
            return getLinearTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
          },
          dx: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const label = formatLabel(data, labelField);
            const [width] = getLinearTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
            return side === 'left' ? -width : side === 'center' ? -width / 2 : 0;
          },
          dy: function (data: NodeData) {
            const label = formatLabel(data, labelField);
            const [, height] = getLinearTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
            return height / 2;
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
            const target = this.getNodeData(data.target);
            return get(target, 'style.color', '#99ADD1') as string;
          },
        },
      },
      layout: {
        type: 'mindmap',
        getHeight: (data) => {
          const label = formatLabel(data, labelField);
          const [, height] = getLinearTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
          return height;
        },
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
            const label = formatLabel(data, labelField);
            const [, height] = getLinearTextNodeStyle(label, minWidth, maxWidth, data.depth).size;
            return height / 2;
          },
        },
      ],
    };
  } else {
    const PADDING = [24, 16];
    options = {
      node: {
        style: {
          component: (data) => {
            const label = formatLabel(data, labelField);
            return <TextNode type="filled" text={label} />;
          },
          size: (data) => {
            const label = formatLabel(data, labelField);
            return measureTextSize(label, PADDING);
          },
          dx: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            const label = formatLabel(data, labelField);
            const [width] = measureTextSize(label, PADDING);
            return side === 'left' ? -width : side === 'center' ? -width / 2 : 0;
          },
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      layout: {
        type: 'mindmap',
        getHeight: (data) => {
          const label = formatLabel(data, labelField);
          const [, height] = measureTextSize(label, PADDING);
          return height;
        },
      },
    };
  }

  if (direction) {
    options.layout ||= {} as SingleLayoutOptions;
    (options.layout as SingleLayoutOptions).direction =
      direction === 'alternate' ? 'H' : direction === 'left' ? 'RL' : 'LR';
  }

  return options;
}
