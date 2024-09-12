import { GraphOptions, MindMap as MindMapComponent } from '@ant-design/graphs';
import type { NodeData, TreeData } from '@antv/g6';
import { treeToGraphData } from '@antv/g6';
import React from 'react';
import data from '../datasets/mind-mapping.json';

export const MindMap = () => {
  const options: GraphOptions = {
    autoFit: 'view',
    data: treeToGraphData(data, {
      getNodeData: (datum: TreeData, depth: number) => {
        datum.data ||= {};
        datum.data.depth = depth;
        if (!datum.children) return datum as NodeData;
        const { children, ...restDatum } = datum;
        return { ...restDatum, children: children.map((child) => child.id) } as NodeData;
      },
    }),
  };

  return <MindMapComponent {...options} />;
};
