import { FlowGraph as FlowGraphComponent, RCNode, type FlowGraphOptions } from '@ant-design/graphs';
import type { NodeData } from '@antv/g6';
import React from 'react';
import data from '../datasets/task-scheduling.json';

const { TextNode } = RCNode;

export const FlowGraph = () => {
  const options: FlowGraphOptions = {
    autoFit: 'center',
    data,
    node: {
      style: {
        component: (d: NodeData) => {
          const isActive = d.states?.includes('active');
          return <TextNode isActive={isActive} type="filled" />;
        },
      },
    },
    behaviors: (prev) => [...prev, 'hover-activate-chain'],
  };

  return <FlowGraphComponent {...options} />;
};
