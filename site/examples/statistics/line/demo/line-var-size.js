import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
