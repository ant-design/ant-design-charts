import { Mix } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoQuadrants = () => {
  const colors = ['red', 'blue', 'yellow', 'green'];

  const config = {
    type: 'view',
    height: 500,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/top-30-countries-by-quality-of-life.json',
    },
    style: { mainStroke: '#5B8FF9', mainLineWidth: 2 },
    axis: { x: false, y: false },
    xField: 'x',
    yField: 'y',
    children: [
      {
        type: 'range',
        data: [
          { x: [0, 0.5], y: [0, 0.5] },
          { x: [0.5, 1], y: [0, 0.5] },
          { x: [0, 0.5], y: [0.5, 1] },
          { x: [0.5, 1], y: [0.5, 1] },
        ],

        scale: {
          x: { independent: true, domain: [0, 1] },
          y: { independent: true, domain: [0, 1] },
        },
        style: {
          lineWidth: 1,
          fill: (_, index) => colors[index],
          fillOpacity: 0.15,
        },
        animate: false,
        tooltip: false,
      },
      {
        type: 'point',
        shapeField: 'circle',
        scale: { x: { domain: [137.5, 212] }, y: { domain: [0, 80] } },
        label: { text: 'name', fontSize: 10, dy: 6 },
      },
    ],
  };
  return <Mix {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoQuadrants />);
