import { Rose } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoRose = () => {
  const config = {
    autoFit: false,
    data: [
      { value: 40, name: 'rose 1' },
      { value: 33, name: 'rose 2' },
      { value: 28, name: 'rose 3' },
      { value: 22, name: 'rose 4' },
      { value: 20, name: 'rose 5' },
      { value: 15, name: 'rose 6' },
      { value: 12, name: 'rose 7' },
      { value: 10, name: 'rose 8' },
    ],
    xField: 'name',
    yField: 'value',
    innerRadius: 0.2,
    colorField: 'name',
    style: {
      radius: 5,
    },
  };
  return <Rose {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoRose />);
