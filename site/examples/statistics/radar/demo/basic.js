import { Radar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const data = [
  { name: 'G2', star: 12328 },
  { name: 'G6', star: 11536 },
  { name: 'F2', star: 7937 },
  { name: 'L7', star: 3831 },
  { name: 'X6', star: 6068 },
  { name: 'AVA', star: 1411 },
  { name: 'Ant Deisgn Charts', star: 2024 },
];

const DemoRadar = () => {
  const config = {
    data,
    xField: 'name',
    yField: 'star',
    scale: {
      x: {
        padding: 0.5,
        align: 0,
      },
      y: {
        nice: true,
      },
    },
    axis: {
      y: {
        labelFormatter: (v) => `${v / 1000} K`,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Radar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoRadar />);
