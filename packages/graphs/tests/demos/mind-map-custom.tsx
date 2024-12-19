import type { MindMapOptions } from '@ant-design/graphs';
import { getNodeSide, measureTextSize, MindMap as MindMapComponent, RCNode } from '@ant-design/graphs';
import { Graph, type NodeData } from '@antv/g6';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { TextNode } = RCNode;

export const MindMapCustom = () => {
  const options: MindMapOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (data) => {
          return <TextNode type="outlined" text={data.id} style={{ border: '2px dashed #1783ff' }} />;
        },
        size: (data) => measureTextSize(data.id, [24, 16]),
        dx: function (data: NodeData) {
          const side = getNodeSide(this as unknown as Graph, data);
          const size = measureTextSize(data.id, [24, 16]);
          return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
        },
      },
    },
    animation: false,
  };

  return <MindMapComponent {...options} />;
};
