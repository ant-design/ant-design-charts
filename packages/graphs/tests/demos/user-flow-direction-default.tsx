import { FlowDirectionGraph } from '@ant-design/graphs';
import React from 'react';
import data from '../datasets/user-flow.json';
import { useGraphOptions } from './hooks/useQueryOptions';

export const UserFlowDirectionDefault = () => {
  const options = useGraphOptions({
    autoFit: 'view',
    data,
  });

  return <FlowDirectionGraph {...options} />;
};
