import { MindMap, type MindMapOptions } from '@ant-design/graphs';
import React from 'react';

const data = {
  id: 'Modeling Methods',
  children: [
    { id: 'Classification', children: [{ id: 'Logistic regression' }, { id: 'Linear discriminant analysis' }] },
    { id: 'Consensus', children: [{ id: 'Models diversity' }, { id: 'Methods' }, { id: 'Common' }] },
    { id: 'Regression', children: [{ id: 'Multiple linear regression' }, { id: 'Partial least squares' }] },
  ],
};

export default () => {
  const options: MindMapOptions = {
    autoFit: 'view',
    data,
    edge: {
      style: {
        endArrow: true,
      },
    },
    animation: false,
  };
  return <MindMap {...options} />;
};
