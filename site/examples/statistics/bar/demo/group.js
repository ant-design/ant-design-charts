import { Bar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoBar = () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config = {
    data,
    xField: 'label',
    yField: 'value',
    colorField: 'type',
    scale: {
      x: {
        padding: 0.5,
      },
    },
    group: true,
    style: {
      height: 10,
    },
  };
  return <Bar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBar />);
