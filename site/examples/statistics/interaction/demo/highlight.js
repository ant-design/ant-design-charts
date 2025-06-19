import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    },
    xField: 'letter',
    yField: 'frequency',
    axis: { y: { labelFormatter: '.0%' } },
    interaction: { elementHighlight: { background: true } },
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoInteraction />);
