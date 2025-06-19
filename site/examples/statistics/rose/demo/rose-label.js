import { Rose } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoRose = () => {
  const config = {
    data: [
      { value: 30, name: 'rose 1' },
      { value: 28, name: 'rose 2' },
      { value: 26, name: 'rose 3' },
      { value: 24, name: 'rose 4' },
      { value: 22, name: 'rose 5' },
      { value: 20, name: 'rose 6' },
      { value: 18, name: 'rose 7' },
      { value: 16, name: 'rose 8' },
    ],
    xField: 'name',
    yField: 'value',
    colorField: 'name',
    innerRadius: 0.2,
    scale: { x: { padding: 0 } },
    axis: false,
    legend: false,
    label: {
      text: 'value',
      position: 'outside',
    },
  };
  return <Rose {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoRose />);
