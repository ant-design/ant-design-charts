import { MindMap, type MindMapOptions, type G6 } from '@ant-design/graphs';
import React from 'react';

const data = {
  nodes: [
    { id: 'Modeling Methods', depth: 0, children: ['Classification', 'Consensus', 'Regression'] },
    { id: 'Classification', depth: 1 },
    { id: 'Consensus', depth: 1, children: ['Models diversity', 'Methods', 'Common'] },
    { id: 'Models diversity', depth: 2 },
    { id: 'Methods', depth: 2 },
    { id: 'Common', depth: 2 },
    { id: 'Regression', depth: 1 },
  ],
  edges: [
    { source: 'Modeling Methods', target: 'Classification' },
    { source: 'Modeling Methods', target: 'Consensus' },
    { source: 'Modeling Methods', target: 'Regression' },
    { source: 'Consensus', target: 'Models diversity' },
    { source: 'Consensus', target: 'Methods' },
    { source: 'Consensus', target: 'Common' },
  ],
};

export default () => {
  const options: MindMapOptions = {
    containerStyle: { height: '200px' },
    type: 'boxed',
    autoFit: 'view',
    data,
    transforms: (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'assign-color-by-branch'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'assign-color-by-branch') || {} as any),
        colors: ['rgb(78, 121, 167)', 'rgb(242, 142, 44)', 'rgb(225, 87, 89)']
      },
    ],
    animation: false,
  };

  return <>
    <MindMap {...options} />
  </>;
};
