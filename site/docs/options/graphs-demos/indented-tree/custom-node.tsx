import { IndentedTree, type IndentedTreeOptions, measureTextSize } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

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
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: IndentedTreeOptions = {
    autoFit: 'view',
    padding: 8,
    background: '#F3F3F6',
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.id} />,
        size: (data) => measureTextSize(data.id, [24, 16]),
      },
    },
    edge: {
      style: {
        stroke: '#8B5DFF',
      },
    },
    animation: false,
  };
  return <IndentedTree {...options} />;
};
