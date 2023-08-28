import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/range-spline-area.json',
      transform: [
        {
          type: 'map',
          callback: ([x, low, high, v2, v3]) => ({ x, low, high, v2, v3 }),
        },
      ],
    },
    xField: 'x',
    yField: ['low', 'high'],
    shape: 'smooth',
    style: {
      fillOpacity: 0.5,
      fill: '#64b5f6',
      lineWidth: 1,
    },
    axis: {
      y: { title: false },
    },
    meta: {
      x: { type: 'linear', tickCount: 10 },
    },
    pointConfig: {
      yField: 'v2',
      shape: 'point',
      sizeField: 2,
    },
    lineConfig: {
      yField: 'v3',
      shape: 'smooth',
      style: {
        stroke: '#FF6B3B',
      },
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
