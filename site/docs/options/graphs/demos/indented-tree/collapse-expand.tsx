import { IndentedTree, CollapseExpandIcon, type IndentedTreeOptions } from '@ant-design/graphs';
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
  const options: IndentedTreeOptions = {
    type: 'boxed',
    containerStyle: { height: '240px' },
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

  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
    <IndentedTree {...options} transforms={updateCollapseExpandBehavior({ enable: true })} />
    <IndentedTree {...options} transforms={updateCollapseExpandBehavior({ enable: true, trigger: 'node' })} />
    <IndentedTree {...options} transforms={updateCollapseExpandBehavior({
      enable: true,
      iconRender: (isCollapsed) => <PlusMinusIcon isCollapsed={isCollapsed} />,
      iconOffsetY: 8,
    })} />
  </div>;
};
