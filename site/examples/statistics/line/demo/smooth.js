import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoLine = () => {
  const data = [
    { year: '1991', value: 8 },
    { year: '1992', value: 9 },
    { year: '1993', value: 9.1 },
    { year: '1994', value: 10 },
    { year: '1995', value: 12 },
    { year: '1996', value: 12.9 },
    { year: '1997', value: 12.9 },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    shapeField: 'smooth',
    scale: {
      y: {
        domainMin: 0,
      },
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
