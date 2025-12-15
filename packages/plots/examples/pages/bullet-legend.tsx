import React from 'react';
import { Bullet } from '../../src';

const data = [
  { name: 'G2', star: 0 },
  { name: 'G6', star: 0 },
  { name: 'F2', star: 0 },
  { name: 'L7', star: 0 },
];

export const DemoBulletLegend = () => {
  const config = {
    // default xField: 'title'、rangeField: 'ranges'、measureField: 'measures'、targetField: 'targets'
    data: [
      {
        title: '满意度',
        ranges: 100,
        measures: 80,
        targets: 85,
      },
    ],
    legend: false,
  };
  return <Bullet {...config} />;
};
