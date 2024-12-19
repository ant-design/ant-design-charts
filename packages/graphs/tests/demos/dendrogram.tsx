import { Dendrogram as DendrogramComponent, DendrogramOptions } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';
import { useGraphOptions } from './hooks/useQueryOptions';

export const Dendrogram = () => {
  const options = useGraphOptions<DendrogramOptions>({
    autoFit: 'view',
    data,
  });

  return <DendrogramComponent {...options} />;
};
