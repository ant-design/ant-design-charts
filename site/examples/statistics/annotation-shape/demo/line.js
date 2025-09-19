import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoAnnotations = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/top-30-countries-by-quality-of-life.json',
    },
    xField: 'x',
    yField: 'y',
    shapeField: 'circle',
    scale: { x: { domain: [137.5, 212] }, y: { domain: [0, 80] } },
    label: { text: 'name', fontSize: 10, dy: 6 },
    annotations: [
      {
        type: 'lineX',
        data: [200],
        style: {
          lineWidth: 2,
          stroke: 'red',
        },
      },
      {
        type: 'lineY',
        data: [30],
        style: {
          lineWidth: 2,
          stroke: 'red',
        },
        labels: [
          {
            text: 'lineX text',
            position: 'right',
            textBaseline: 'bottom',
            fill: '#000',
            fillOpacity: 0.45,
            background: true,
            backgroundFill: '#000',
            backgroundOpacity: 0.15,
          },
        ],
      },
      {
        type: 'text',
        data: [200, 80],
        style: {
          text: `2017-12-17, 受比特币影响，blockchain 搜索热度达到峰值：100`,
          wordWrap: true,
          wordWrapWidth: 164,
          dx: -174,
          dy: 30,
          fill: '#2C3542',
          fillOpacity: 0.65,
          fontSize: 10,
          background: true,
          backgroundRadius: 2,
          connector: true,
          startMarker: true,
          startMarkerFill: '#2C3542',
          startMarkerFillOpacity: 0.65,
        },
      },
    ],
  };
  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoAnnotations />);
