import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/temperatures1.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    colorField: 'condition',
    shapeField: 'hvh',
    style: {
      gradient: 'x',
      lineWidth: 2,
    },
    scale: {
      y: { nice: true },
      color: {
        domain: ['CLR', 'FEW', 'SCT', 'BKN', 'OVC', 'VV '],
        range: ['deepskyblue', 'lightskyblue', 'lightblue', '#aaaaaa', '#666666', '#666666'],
      },
    },
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
