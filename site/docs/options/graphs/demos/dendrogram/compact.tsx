import { Dendrogram, type DendrogramOptions } from '@ant-design/graphs';
import React from 'react';

const data = {
  nodes: [
    { id: 'Modeling Methods', depth: 0, children: ['Classification', 'Consensus', 'Regression'] },
    { id: 'Classification', depth: 1 },
    { id: 'Consensus', depth: 1, children: ['Models diversity', 'Methods', 'Common'] },
    { id: 'Models diversity', depth: 2 },
    { id: 'Methods', depth: 2 },
    { id: 'Common', depth: 2 },
    {
      id: 'Regression', depth: 1, "children": [
        "Multiple linear regression",
        "Partial least squares",
        "Multi-layer feedforward neural network",
        "General regression neural network",
        "Support vector regression"
      ]
    },
    { "id": "Multiple linear regression", depth: 3 },
    { "id": "Partial least squares", depth: 3 },
    { "id": "Multi-layer feedforward neural network", depth: 3 },
    { "id": "General regression neural network", depth: 3 },
    { "id": "Support vector regression", depth: 3 },
  ],
  edges: [
    { source: 'Modeling Methods', target: 'Classification' },
    { source: 'Modeling Methods', target: 'Consensus' },
    { source: 'Modeling Methods', target: 'Regression' },
    { source: 'Consensus', target: 'Models diversity' },
    { source: 'Consensus', target: 'Methods' },
    { source: 'Consensus', target: 'Common' },
    { source: 'Regression', target: 'Multiple linear regression' },
    { source: 'Regression', target: 'Partial least squares' },
    { source: 'Regression', target: 'Multi-layer feedforward neural network' },
    { source: 'Regression', target: 'General regression neural network' },
    { source: 'Regression', target: 'Support vector regression' },
  ],
};

export default () => {
  const options: DendrogramOptions = {
    containerStyle: { height: '320px' },
    compact: true,
    autoFit: 'view',
    data,
    animation: false,
  };

  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
    <Dendrogram {...options} direction='vertical' />
    <Dendrogram {...options} direction='horizontal' />
    <Dendrogram {...options} direction='radial' />
  </div>;
};
