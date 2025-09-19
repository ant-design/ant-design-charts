import { Bullet } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

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
    transpose: false,
  };
  return <Bullet {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBullet />);
