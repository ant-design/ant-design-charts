import type { GraphOptions } from '@ant-design/graphs';
import { getNodeSide, measureTextSize, MindMap as MindMapComponent, MindMapNode } from '@ant-design/graphs';
import type { Graph, NodeData, TreeData } from '@antv/g6';
import { idOf, treeToGraphData } from '@antv/g6';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const measureMindMapNodeSize = (data: NodeData) => {
  const depth = data.data!.depth;
  const fontSize = depth === 1 ? 18 : 16;
  const font = { fontSize: fontSize, fontFamily: 'PingFang SC' };
  if (depth === 0) {
    Object.assign(font, { fontWeight: 'bold', fontSize: 20 });
  }
  return measureTextSize(idOf(data), font, 0, 360, [0, 36]);
};

export const MindMap2 = () => {
  const options: GraphOptions = {
    autoFit: 'view',
    padding: 20,
    data: treeToGraphData(data, {
      getNodeData: (datum: TreeData, depth: number) => {
        datum.data ||= {};
        datum.data.depth = depth;
        if (!datum.children) return datum as NodeData;
        const { children, ...restDatum } = datum;
        return { ...restDatum, children: children.map((child) => child.id) } as NodeData;
      },
    }),
    node: {
      type: 'react',
      style: {
        component: (data) => {
          const depth = data.data?.depth;
          const color = data.style?.color;
          const style = {
            height: 'inherit',
            width: 'inherit',
            border: 0,
            borderBottom: `2px solid ${color}`,
            transform: 'translateY(-1px)',
          };

          if (depth > 0) {
            Object.assign(style, {
              borderRadius: 0,
              padding: 0,
              background: 'transparent',
              color: '#252525',
              justifyContent: 'left',
              fontWeight: 'normal',
            });
          }

          return <MindMapNode text={idOf(data)} depth={depth} color={color} style={style} />;
        },
        size: (data: NodeData) => measureMindMapNodeSize(data),
        dx: function (data: NodeData) {
          const parentData = (this as unknown as Graph).getParentData(idOf(data), 'tree');
          const side = getNodeSide(data, parentData);
          const size = measureMindMapNodeSize(data);
          return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
        },
        ports: function (data: NodeData) {
          const parentData = (this as unknown as Graph).getParentData(idOf(data), 'tree');
          const side = getNodeSide(data, parentData);
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
      getVGap: () => 10,
      getWidth: () => 120,
      getHeight: (data) => measureMindMapNodeSize(data)[1],
    },
  };

  return <MindMapComponent {...options} />;
};
