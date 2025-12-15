import React from 'react';
import { Radar } from '../../src';

const data = [
  { name: 'G2', star: 0 },
  { name: 'G6', star: 0 },
  { name: 'F2', star: 0 },
  { name: 'L7', star: 0 },
];

export const DemoRadar = () => {
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
        labelFormatter: (v: number) => `${v / 1000} K`,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Radar {...config} />;
};
