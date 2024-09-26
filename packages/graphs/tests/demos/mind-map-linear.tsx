import type { MindMapOptions } from '@ant-design/graphs';
import { G6, MindMap as MindMapComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData } = G6;

export const MindMapLinear = () => {
  const options: MindMapOptions = {
    type: 'linear',
    data: treeToGraphData(data),
  };

  return <MindMapComponent {...options} />;
};
