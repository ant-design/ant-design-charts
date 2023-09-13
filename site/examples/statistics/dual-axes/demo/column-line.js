import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoDualAxes = () => {
  const data = [
    { time: '2019-03', value: 350, count: 800 },
    { time: '2019-04', value: 900, count: 600 },
    { time: '2019-05', value: 300, count: 400 },
    { time: '2019-06', value: 450, count: 380 },
    { time: '2019-07', value: 470, count: 220 },
  ];

  const config = {
    data,
    xField: 'time',
    axis: { y: { title: null } },
    children: [
      {
        type: 'interval',
        yField: 'value',
        style: { maxWidth: 80 },
      },
      {
        type: 'line',
        yField: 'count',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 2,
        },
        meta: { y: { independent: true } },
        axis: { y: { position: 'right' } },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
