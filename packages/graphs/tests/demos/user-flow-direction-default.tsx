import type { GraphOptions } from '@ant-design/graphs';
import { FlowDirectionGraph } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/user-flow.json';

export const UserFlowDirectionDefault = () => {
  const options: GraphOptions = {
    autoFit: 'view',
    data,
  };

  return <FlowDirectionGraph {...options} />;
};
