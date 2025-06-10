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
    type: 'linear',
    autoFit: 'view',
    padding: 8,
    data,
    transforms: (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'assign-color-by-branch'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'assign-color-by-branch') || ({} as any)),
        colors: ['rgb(78, 121, 167)', 'rgb(242, 142, 44)', 'rgb(225, 87, 89)'],
      },
    ],
    animation: false,
  };

  return <MindMap {...options} />;
};
