import type { MindMapOptions } from '@ant-design/graphs';
import { G6, MindMap as MindMapComponent } from '@ant-design/graphs';
import type { NodeData, TreeData } from '@antv/g6';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData } = G6;

export const MindMap = () => {
  const options: MindMapOptions = {
    data: treeToGraphData(data, {
      getNodeData: (datum: TreeData, depth: number) => {
        datum.data ||= {};
        datum.data.depth = depth;
        if (!datum.children) return datum as NodeData;
        const { children, ...restDatum } = datum;
        return { ...restDatum, children: children.map((child) => child.id) } as NodeData;
      },
    }),
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
