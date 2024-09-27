import type { IndentedTreeOptions } from '@ant-design/graphs';
import { G6, IndentedTree as IndentedTreeComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData } = G6;

export const IndentedTree = () => {
  const options: IndentedTreeOptions = {
    type: 'default',
    data: treeToGraphData(data),
    // transforms: (prev) => [
    //   ...prev.filter((transform) => (transform as any).type !== 'collapse-expand-react-node'),
    //   {
    //     ...(prev.find((transform) => (transform as any).type === 'collapse-expand-react-node') as any),
    //     enable: true,
    //   },
    // ],
  };

  return <IndentedTreeComponent {...options} />;
};
