import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoAnnotationShape = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
      transform: [
        {
          type: 'fold',
          fields: ['blockchain', 'nlp'],
          key: 'type',
          value: 'value',
        },
      ],
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    colorField: 'type',
    axis: { x: { labelAutoHide: 'greedy' } },
    annotations: [
      {
        type: 'text',
        data: [new Date('2017-12-17'), 100],
        shape: 'badge',
        style: {
          text: '100',
          dy: -1,
          markerSize: 24,
          markerFill: '#6395FA',
          markerFillOpacity: 0.55,
        },
        tooltip: false,
      },
    ],
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoAnnotationShape />);
