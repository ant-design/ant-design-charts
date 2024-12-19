import type { IndentedTreeOptions } from '@ant-design/graphs';
import { IndentedTree as IndentedTreeComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';
import { useGraphOptions } from './hooks/useQueryOptions';

export const IndentedTree = () => {
  const options = useGraphOptions<IndentedTreeOptions>({
    autoFit: 'view',
    data,
    animation: false,
  });

  return <IndentedTreeComponent {...options} />;
};
