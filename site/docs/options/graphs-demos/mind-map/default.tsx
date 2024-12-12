import { MindMap, type MindMapOptions } from '@ant-design/graphs';
import React from 'react';

const data = {
  nodes: [
    { id: 'Modeling Methods', depth: 0, children: ['Classification', 'Consensus', 'Regression'] },
    {
      id: 'Classification',
      depth: 1,
      children: ['Logistic regression', 'Linear discriminant analysis'],
    },
    { id: 'Consensus', depth: 1, children: ['Models diversity', 'Methods', 'Common'] },
    { id: 'Models diversity', depth: 2 },
    { id: 'Methods', depth: 2 },
    { id: 'Common', depth: 2 },
    { id: 'Regression', depth: 1, children: ['Multiple linear regression', 'Partial least squares'] },
    { id: 'Logistic regression', depth: 2 },
    { id: 'Linear discriminant analysis', depth: 2 },
    { id: 'Multiple linear regression', depth: 2 },
    { id: 'Partial least squares', depth: 2 },
  ],
  edges: [
    { source: 'Modeling Methods', target: 'Classification' },
    { source: 'Modeling Methods', target: 'Consensus' },
    { source: 'Modeling Methods', target: 'Regression' },
    { source: 'Consensus', target: 'Models diversity' },
    { source: 'Consensus', target: 'Methods' },
    { source: 'Consensus', target: 'Common' },
    { source: 'Classification', target: 'Logistic regression' },
    { source: 'Classification', target: 'Linear discriminant analysis' },
    { source: 'Regression', target: 'Multiple linear regression' },
    { source: 'Regression', target: 'Partial least squares' },
  ],
};

export default () => {
  const options: MindMapOptions = {
    containerStyle: { height: '200px' },
    autoFit: 'view',
    data,
    edge: { style: { endArrow: true } },
    animation: false,
  };
  return <MindMap {...options} />;
};
