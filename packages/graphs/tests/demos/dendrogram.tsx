import { Dendrogram as DendrogramComponent, DendrogramOptions } from '@ant-design/graphs';
import { treeToGraphData } from '@antv/g6';
import React from 'react';
import data from '../datasets/algorithm-category.json';

export const Dendrogram = () => {
  const options: DendrogramOptions = {
    autoFit: 'view',
    data: treeToGraphData(data),
    direction: 'vertical',
    compact: true,
    behaviors: (prev) => [
      ...prev,
      {
        key: 'hover-activate',
        type: 'hover-activate',
        degree: Infinity,
        direction: 'in',
        inactiveState: 'inactive',
      },
    ],
  };

  return <DendrogramComponent {...options} />;
};
