import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json',
    },
    xField: 'GDP',
    yField: 'LifeExpectancy',
    sizeField: 'Population',
    colorField: 'continent',
    shapeField: 'point',
    scale: { size: { type: 'log', range: [4, 20] } },
    style: { fillOpacity: 0.3, lineWidth: 1 },
    legend: { size: false },
    interaction: { fisheye: true },
  };
  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoInteraction />);
