import type { Graph, NodeData, SingleLayoutOptions } from '@antv/g6';
import { idOf } from '@antv/g6';
import React from 'react';
import { CollapseExpandIcon, RCNode, TextNodeProps } from '../../core/base';
import { measureTextSize } from '../../core/utils/measure-text';
import { getNodeSide } from '../../core/utils/node';
import { getBoxedTextNodeStyle, getLinearTextNodeStyle } from '../../core/utils/tree';
import type { IndentedTreeOptions } from './types';

const { ArrowCountIcon } = CollapseExpandIcon;
const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: IndentedTreeOptions = {
  node: {
    type: 'react',
    style: {
      component: (data) => <TextNode type="filled" text={idOf(data)} />,
      size: (data) => measureTextSize(idOf(data), [24, 16]),
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
    type: 'indented',
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
        return <ArrowCountIcon graph={this as unknown as Graph} data={data} isCollapsed={isCollapsed} />;
      },
    },
  ],
  layout: {
    type: 'indented',
    direction: 'LR',
    indent: (node) => getIndent(node, 20),
    getWidth: (data) => measureTextSize(idOf(data), [24, 16])[0],
    getHeight: (data) => measureTextSize(idOf(data), [24, 16])[1],
    getVGap: () => 14,
  },
  animation: {
    duration: 500,
  },
};

const getIndent = (node, preset) => {
  if (node.depth === 0) return 0;

  let totalWidth = preset;
  let currentNode = node.parent;

  while (currentNode) {
    totalWidth += currentNode.width / 2;
    currentNode = currentNode.parent;
  }

  return totalWidth / node.depth;
};

const getNodeTextAlign = (graph: Graph, data: NodeData) => {
  const side = getNodeSide(graph, data);
  return side === 'left' ? 'right' : side === 'center' ? 'center' : 'left';
};

export const getIndentedTreeOptions = ({
  type,
  nodeMinWidth,
  nodeMaxWidth,
  direction,
}: Pick<IndentedTreeOptions, 'type' | 'nodeMinWidth' | 'nodeMaxWidth' | 'direction'>): IndentedTreeOptions => {
  let options: IndentedTreeOptions = {};
  const minWidth = nodeMinWidth || 0;
  const maxWidth = nodeMaxWidth || 300;

  if (type === 'boxed') {
    options = {
      node: {
        style: {
          component: function (data: NodeData) {
            const depth = data.depth as number;
            const color = data.style?.color as string;
            const props: TextNodeProps = {
              type: depth === 0 || depth === 1 ? 'filled' : 'outlined',
              text: idOf(data),
              color: depth === 0 ? '#f1f4f5' : color,
              maxWidth,
              font: getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, depth).font,
              style: {
                textAlign: getNodeTextAlign(this as unknown as Graph, data),
                ...(depth === 0 ? { color: '#252525' } : {}),
              },
            };
            return <TextNode {...props} />;
          },
          size: (data: NodeData) =>
            getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size,
        },
      },
      edge: {
        style: {
          stroke: function (data) {
            return (this.getNodeData(data.source).style!.color as string) || '#99ADD1';
          },
          radius: 16,
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
        type: 'indented',
        indent: (node) => getIndent(node, 20),
        getWidth: (data) => getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[0],
        getHeight: (data) =>
          getBoxedTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[1],
        getVGap: () => 14,
      },
    };
  } else if (type === 'linear') {
    options = {
      node: {
        style: {
          component: function (data: NodeData) {
            const depth = data.depth as number;
            const color = data.style?.color as string;
            const props = {
              text: idOf(data),
              color,
              maxWidth,
              font: getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, depth).font,
            } as TextNodeProps;
            Object.assign(
              props,
              depth === 0
                ? { type: 'filled', color: '#f1f4f5', style: { color: '#252525' } }
                : {
                  type: 'underlined',
                  style: { textAlign: getNodeTextAlign(this as unknown as Graph, data) },
                },
            );
            return <TextNode {...props} />;
          },
          size: (data: NodeData) =>
            getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size,
          ports: function (data: NodeData) {
            const side = getNodeSide(this as unknown as Graph, data);
            return side === 'left'
              ? [{ placement: 'bottom' }, { placement: 'bottom-right' }]
              : side === 'center'
                ? [{ placement: 'bottom' }]
                : [{ placement: 'bottom' }, { placement: 'bottom-left' }];
          },
        },
      },
      edge: {
        style: {
          stroke: function (data) {
            return (this.getNodeData(data.target).style!.color as string) || '#99ADD1';
          },
          radius: 24,
        },
      },
      layout: {
        type: 'indented',
        indent: (node) => getIndent(node, 20),
        getWidth: (data) =>
          getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[0],
        getHeight: (data) =>
          getLinearTextNodeStyle(idOf(data), minWidth, maxWidth, data.depth as number).size[1],
        getVGap: () => 12,
      },
      transforms: (prev) => [
        ...prev,
        {
          type: 'assign-color-by-branch',
          key: 'assign-color-by-branch',
        },
        {
          type: 'arrange-edge-z-index',
          key: 'arrange-edge-z-index',
        },
      ],
    };
  }

  if (direction) {
    options.layout ||= {} as SingleLayoutOptions;
    Object.assign(options.layout as SingleLayoutOptions, {
      direction: direction === 'alternate' ? 'H' : direction === 'left' ? 'RL' : 'LR',
    });
  }

  return options;
};
