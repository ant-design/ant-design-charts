import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const data = [
  { type: '1-3秒', value: 0.6 },
  { type: '4-10秒', value: 1 },
  { type: '11-30秒', value: 0.7 },
  { type: '31-60秒', value: 0.5 },
  { type: '1-3分', value: 0.2 },
  { type: '3-10分', value: 0.5 },
  { type: '10-30分', value: 0.3 },
  { type: '30+分', value: 0.25 },
];

const DemoColumn = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    markBackground: {
      style: {
        fill: '#eee',
      },
    },
    scale: {
      y: {
        domain: [0, 1],
      },
    },
    legend: false,
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoColumn />);
