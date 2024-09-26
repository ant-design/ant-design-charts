import type { IndentedTreeOptions } from '@ant-design/graphs';
import { G6, IndentedTree as IndentedTreeComponent } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData } = G6;

export const IndentedTreeBoxed = () => {
  const options: IndentedTreeOptions = {
    type: 'boxed',
    data: treeToGraphData(data),
  };

  return <IndentedTreeComponent {...options} />;
};
