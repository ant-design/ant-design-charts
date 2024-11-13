import type { MindMapOptions } from '@ant-design/graphs';
import { G6, MindMap as MindMapComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData } = G6;

export const MindMap = () => {
  const options: MindMapOptions = {
    autoFit: 'view',
    data: treeToGraphData(data),
    transforms: (prev) => [
      ...prev.filter((transform) => (transform as any).type !== 'collapse-expand-react-node'),
      {
        ...(prev.find((transform) => (transform as any).type === 'collapse-expand-react-node') as any),
        enable: true,
      },
    ],
  };

  return <MindMapComponent {...options} />;
};
