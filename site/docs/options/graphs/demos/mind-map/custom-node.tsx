import { MindMap, type MindMapOptions, measureTextSize } from '@ant-design/graphs';
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

const CustomNode = ({ text }: { text: string }) => {
  return <div style={{
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f7f0fe',
    color: '#873bf4',
    boxShadow: '0 0 0 2px #873bf4'
  }}>{text}</div>
}

export default () => {
  const options: MindMapOptions = {
    containerStyle: { height: '200px' },
    autoFit: 'view',
    padding: 20,
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.id} />,
        size: (data) => measureTextSize(data.id, [24, 16]),
      },
    },
    edge: {
      style: { stroke: '#873bf4' },
    },
    animation: false,
  };
  return <MindMap {...options} />;
};
