import { DualAxes } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoDualAxes = () => {
  const uvData = [
    { time: '2019-03', value: 35 },
    { time: '2019-04', value: 90 },
    { time: '2019-05', value: 30 },
    { time: '2019-06', value: 45 },
    { time: '2019-07', value: 47 },
  ];

  const transformData = [
    { time: '2019-03', count: 800, name: 'a' },
    { time: '2019-04', count: 600, name: 'a' },
    { time: '2019-05', count: 400, name: 'a' },
    { time: '2019-06', count: 380, name: 'a' },
    { time: '2019-07', count: 220, name: 'a' },
    { time: '2019-03', count: 750, name: 'b' },
    { time: '2019-04', count: 650, name: 'b' },
    { time: '2019-05', count: 450, name: 'b' },
    { time: '2019-06', count: 400, name: 'b' },
    { time: '2019-07', count: 320, name: 'b' },
    { time: '2019-03', count: 900, name: 'c' },
    { time: '2019-04', count: 600, name: 'c' },
    { time: '2019-05', count: 450, name: 'c' },
    { time: '2019-06', count: 300, name: 'c' },
    { time: '2019-07', count: 200, name: 'c' },
  ];

  const config = {
    xField: 'time',
    legend: true,
    scale: { color: { range: ['#1783FF', '#5AD8A6', '#5D7092', '#F6BD16'] } },
    interaction: { tooltip: { sort: (d) => ['value', 'a', 'b', 'c'].indexOf(d.name) } },
    children: [
      {
        data: uvData,
        type: 'interval',
        yField: 'value',
        style: { maxWidth: 80 },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        colorField: 'name',
        seriesField: 'name',
        axis: { y: { position: 'right' } },
        style: { lineWidth: 2 },
      },
    ],
  };
  return <DualAxes {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoDualAxes />);
