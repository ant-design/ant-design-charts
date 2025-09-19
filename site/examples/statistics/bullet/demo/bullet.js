import { Bullet } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoBullet = () => {
  const config = {
    // default xField: 'title'、rangeField: 'ranges'、measureField: 'measures'、targetField: 'targets'
    data: [
      {
        title: '满意度',
        ranges: 100,
        measures: 80,
        targets: 85,
      },
    ],
  };
  return <Bullet {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBullet />);
