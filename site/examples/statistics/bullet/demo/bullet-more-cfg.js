import { Bullet } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoBullet = () => {
  const config = {
    data: [
      {
        title: '满意度',
        ranges: 100,
        measures: 80,
        targets: 85,
      },
    ],
    range: {
      style: {
        maxWidth: 50,
      },
    },
    measure: {
      style: {
        lineWidth: 1,
        stroke: '#fff',
      },
    },
    target: {
      sizeField: 40,
    },
  };
  return <Bullet {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBullet />);
