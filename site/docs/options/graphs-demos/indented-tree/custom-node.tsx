import { IndentedTree, type IndentedTreeOptions, measureTextSize } from '@ant-design/graphs';
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

const CustomNode = ({ text }: { text: string }) => {
  const prefix = text === 'Modeling Methods' ? '🔍 ' : '';
  return (
    <div
      style={{
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '16px',
        backgroundColor: '#f7f0fe',
        color: '#873bf4',
        boxShadow: '0 0 0 3px #873bf4',
      }}
    >
      {prefix}
      {text}
    </div>
  );
};

export default () => {
  const options: IndentedTreeOptions = {
    containerStyle: { height: '320px' },
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
  return <IndentedTree {...options} />;
};
