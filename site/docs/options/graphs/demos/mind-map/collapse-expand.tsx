import { MindMap, CollapseExpandIcon, type MindMapOptions } from '@ant-design/graphs';
import React from 'react';

const { PlusMinusIcon } = CollapseExpandIcon;

const data = {
  nodes: [
    { id: 'Modeling Methods', depth: 0, children: ['Classification', 'Consensus', 'Regression'] },
    { id: 'Classification', depth: 1 },
    { id: 'Consensus', depth: 1, children: ['Models diversity', 'Methods', 'Common'], style: { collapsed: true } },
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
    type: 'boxed',
    containerStyle: { height: '200px' },
    padding: [50, 100],
    autoFit: 'view',
    data,
    animation: false,
  };

  const updateCollapseExpandBehavior = (options) => {
    return (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'collapse-expand-react-node'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'collapse-expand-react-node') || {} as any),
        ...options,
      },
    ]
  }

  return <>
    <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true })} />
    <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true, trigger: 'node' })} />
    <MindMap {...options} transforms={updateCollapseExpandBehavior({
      enable: true,
      iconRender: (isCollapsed) => <PlusMinusIcon isCollapsed={isCollapsed} />,
      iconOffsetX: 8,
    })} />
  </>;
};
