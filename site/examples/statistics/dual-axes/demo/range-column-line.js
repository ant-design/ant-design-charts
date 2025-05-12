import { DualAxes } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoDualAxes = () => {
  const data = [
    { time: '2019-03', value: [200, 350], count: 800 },
    { time: '2019-04', value: [400, 650], count: 600 },
    { time: '2019-05', value: [150, 350], count: 400 },
    { time: '2019-06', value: [100, 450], count: 380 },
    { time: '2019-07', value: [500, 550], count: 220 },
  ];

  const config = {
    data,
    xField: 'time',
    legend: true,
    children: [
      {
        type: 'interval',
        yField: 'value',
        style: { maxWidth: 100 },
      },
      {
        type: 'line',
        yField: 'count',
        style: { lineWidth: 2 },
        axis: { y: { position: 'right' } },
      },
    ],
  };
  return <DualAxes {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoDualAxes />);
