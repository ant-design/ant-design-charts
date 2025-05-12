import { Base } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demobase = () => {
  const config = {
    type: 'repeatMatrix',
    width: 300,
    height: 720,
    autoFit: false,
    paddingLeft: 60,
    paddingBottom: 60,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/weather.json',
      transform: [
        {
          type: 'map',
          callback: ({ date, ...d }) => ({
            ...d,
            date: new Date(date).getMonth() + '',
          }),
        },
      ],
    },
    encode: { y: ['temp_max', 'precipitation', 'wind'], x: 'date' },
    children: [
      {
        type: 'line',
        encode: { color: 'location' },
        transform: [{ type: 'groupX', y: 'mean' }],
        scale: { y: { zero: true } },
      },
    ],
  };
  return <Base {...config} />;
};

createRoot(document.getElementById('container')).render(<Demobase />);
