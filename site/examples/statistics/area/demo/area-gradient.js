import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/stocks.json',
      transform: [{ type: 'filter', callback: (d) => d.symbol === 'GOOG' }],
    },
    xField: (d) => new Date(d.date),
    yField: 'price',
    shapeField: 'smooth',
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {
      style: {
        stroke: 'darkgreen',
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
