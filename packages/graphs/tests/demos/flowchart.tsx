import { Flowchart as FlowchartComponent, RCNode, type FlowchartOptions } from '@ant-design/graphs';
import type { NodeData } from '@antv/g6';
import React from 'react';
import data from '../datasets/task-scheduling.json';

const { TextNode } = RCNode;

export const Flowchart = () => {
  const options: FlowchartOptions = {
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

  return <FlowchartComponent {...options} />;
};
