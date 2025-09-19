import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoBreaks = () => {
  const config = {
    data: [
      { name: 'Mon', value: 1800, type: 'Sports' },
      { name: 'Mon', value: 950, type: 'Strategy' },
      { name: 'Mon', value: 101200, type: 'Shooter' },
      { name: 'Mon', value: 4120500, type: 'Other' },
      { name: 'Tue', value: 2500, type: 'Sports' },
      { name: 'Tue', value: 1400, type: 'Strategy' },
      { name: 'Tue', value: 104800, type: 'Shooter' },
      { name: 'Tue', value: 4107800, type: 'Other' },
      { name: 'Wed', value: 3100, type: 'Sports' },
      { name: 'Wed', value: 2200, type: 'Strategy' },
      { name: 'Wed', value: 102600, type: 'Shooter' },
      { name: 'Wed', value: 4112300, type: 'Other' },
      { name: 'Thu', value: 4200, type: 'Sports' },
      { name: 'Thu', value: 1750, type: 'Strategy' },
      { name: 'Thu', value: 103500, type: 'Shooter' },
      { name: 'Thu', value: 4109500, type: 'Other' },
      { name: 'Fri', value: 3890, type: 'Sports' },
      { name: 'Fri', value: 2800, type: 'Strategy' },
      { name: 'Fri', value: 104200, type: 'Shooter' },
      { name: 'Fri', value: 4115000, type: 'Other' },
      { name: 'Sat', value: 5200, type: 'Sports' },
      { name: 'Sat', value: 3300, type: 'Strategy' },
      { name: 'Sat', value: 102900, type: 'Shooter' },
      { name: 'Sat', value: 4111200, type: 'Other' },
      { name: 'Sun', value: 5600, type: 'Sports' },
      { name: 'Sun', value: 2900, type: 'Strategy' },
      { name: 'Sun', value: 103800, type: 'Shooter' },
      { name: 'Sun', value: 4108800, type: 'Other' },
    ],
    xField: 'name',
    yField: 'value',
    colorField: 'type',
    group: true,
    scale: {
      y: {
        nice: true,
        breaks: [
          { start: 6000, end: 100000, gap: 0.03 },
          {
            start: 105000,
            end: 4100000,
            gap: 0.03,
            vertices: 60,
            verticeOffset: 4,
            compress: 'end',
          },
        ],
      },
    },
    axis: {
      x: { title: false },
      y: {
        title: false,
        labelAutoHide: false,
        transform: [],
        breaks: [
          { start: 6000, end: 100000, gap: '3%' },
          {
            start: 105000,
            end: 4100000,
            gap: '3%',
            vertices: 60,
            verticeOffset: 4,
            compress: 'end',
          },
        ],
      },
    },
    interaction: { tooltip: { shared: true } },
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBreaks />);
