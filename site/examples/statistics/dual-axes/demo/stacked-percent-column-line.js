import { DualAxes, G2 } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoDualAxes = () => {
  const uvBillData = [
    { time: '2019-03', value: 350, type: 'uv' },
    { time: '2019-04', value: 900, type: 'uv' },
    { time: '2019-05', value: 300, type: 'uv' },
    { time: '2019-06', value: 450, type: 'uv' },
    { time: '2019-07', value: 470, type: 'uv' },
    { time: '2019-03', value: 220, type: 'bill' },
    { time: '2019-04', value: 300, type: 'bill' },
    { time: '2019-05', value: 250, type: 'bill' },
    { time: '2019-06', value: 220, type: 'bill' },
    { time: '2019-07', value: 362, type: 'bill' },
  ];

  const transformData = [
    { time: '2019-03', count: 800 },
    { time: '2019-04', count: 600 },
    { time: '2019-05', count: 400 },
    { time: '2019-06', count: 380 },
    { time: '2019-07', count: 220 },
  ];

  const config = {
    xField: 'time',
    children: [
      {
        data: uvBillData,
        type: 'interval',
        yField: 'value',
        stack: true,
        percent: true,
        colorField: 'type',
        style: { maxWidth: 80 },
        tooltip: { channel: 'y0', valueFormatter: '.0%' },
        axis: { y: { title: 'value', style: { titleFill: '#5B8FF9' } } },
        interaction: { elementHighlightByColor: { background: true } },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        colorField: () => 'count',
        style: { lineWidth: 2 },
        scale: { y: { independent: true } },
        axis: {
          y: {
            position: 'right',
            style: { titleFill: '#5AD8A6' },
          },
        },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
