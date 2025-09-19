import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json',
    },
    xField: 'height',
    yField: 'weight',
    colorField: 'gender',
  };
  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoScatter />);
