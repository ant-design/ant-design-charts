import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

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
    children: [
      {
        type: 'interval',
        yField: 'value',
        style: {
          stroke: '#5B8FF9',
          maxWidth: 100,
        },
      },
      {
        type: 'line',
        yField: 'count',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 2,
        },
        axis: {
          y: {
            position: 'right',
            style: { titleFill: '#5AD8A6' },
          },
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
