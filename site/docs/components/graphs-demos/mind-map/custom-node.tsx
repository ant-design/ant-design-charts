import { MindMap, type MindMapOptions, measureTextSize } from '@ant-design/graphs';
import React from 'react';

const data = {
  id: 'Modeling Methods',
  children: [
    { id: 'Classification', children: [{ id: 'Logistic regression' }, { id: 'Linear discriminant analysis' }] },
    { id: 'Consensus', children: [{ id: 'Models diversity' }, { id: 'Methods' }, { id: 'Common' }] },
    { id: 'Regression', children: [{ id: 'Multiple linear regression' }, { id: 'Partial least squares' }] },
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
        backgroundColor: '#FFF6E3',
        color: '#8B5DFF',
        boxShadow: '0 0 0 2px #8B5DFF',
        fontFamily: 'Futura',
      }}
    >
      {prefix}
      {text}
    </div>
  );
};

export default () => {
  const options: MindMapOptions = {
    autoFit: 'view',
    padding: 8,
    background: '#F3F3F6',
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.id} />,
        size: (d) => measureTextSize(d.id, [24, 16]),
      },
    },
    edge: {
      style: {
        stroke: '#8B5DFF',
        endArrow: true,
      },
    },
    animation: false,
  };

  return <MindMap {...options} />;
};
