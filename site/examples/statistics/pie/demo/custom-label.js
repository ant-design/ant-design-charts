import { Pie } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 },
];

const customLabel = (_, datum) => (
  <div style={{ color: '#fff', padding: 4 }}>
    {datum.type} : <b>{datum.value}</b>
  </div>
);

const DemoPie = () => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'type',
      position: 'outside',
      textAlign: 'center',
      transform: [
        {
          type: 'contrastReverse',
        },
      ],
      render: customLabel,
    },
    legend: false,
  };
  return <Pie {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoPie />);
