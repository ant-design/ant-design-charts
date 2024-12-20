import type { IndentedTreeOptions } from '@ant-design/graphs';
import { IndentedTree as IndentedTreeComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';
import { useGraphOptions } from './hooks/useQueryOptions';

export const IndentedTreeCollapseExpandTriggerNode = () => {
  const options = useGraphOptions<IndentedTreeOptions>({
    autoFit: 'view',
    data,
    type: 'linear',
    defaultExpandLevel: 2,
    transforms: (existingTransforms: any[]) => {
      return [
        ...existingTransforms.filter((transform) => transform.key !== 'collapse-expand-react-node'),
        {
          ...existingTransforms.find((transform) => transform.key === 'collapse-expand-react-node'),
          enable: true,
          trigger: 'node',
        },
      ];
    },
  });

  return <IndentedTreeComponent {...options} />;
};
