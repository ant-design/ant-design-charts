import type { MindMapOptions } from '@ant-design/graphs';
import { MindMap as MindMapComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';
import { useGraphOptions } from './hooks/useQueryOptions';

export const MindMap = () => {
  const options = useGraphOptions<MindMapOptions>({
    autoFit: 'view',
    data,
    animation: false,
  });

  return <MindMapComponent {...options} />;
};
