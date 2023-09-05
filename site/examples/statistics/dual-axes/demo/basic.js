import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoDualAxes = () => {
  const config = {
    data: [
      { time: '10:10', call: 4, waiting: 2, people: 2 },
      { time: '10:15', call: 2, waiting: 6, people: 3 },
      { time: '10:20', call: 13, waiting: 2, people: 5 },
      { time: '10:25', call: 9, waiting: 9, people: 1 },
      { time: '10:30', call: 5, waiting: 2, people: 3 },
      { time: '10:35', call: 8, waiting: 2, people: 1 },
      { time: '10:40', call: 13, waiting: 1, people: 2 },
    ],
    children: [
      {
        type: 'interval',
        xField: 'time',
        yField: 'waiting',
        axis: {
          y: { title: 'Waiting', style: { titleFill: '#5B8FF9' } },
        },
        label: {
          text: 'waiting',
          position: 'inside',
        },
      },
      {
        type: 'line',
        xField: 'time',
        yField: 'people',
        shapeField: 'smooth',
        style: {
          stroke: '#fdae6b',
          lineWidth: 2,
        },
        label: {
          text: 'people',
        },
        meta: {
          y: {
            independent: true,
          },
        },
        axis: {
          y: {
            position: 'right',
            grid: null,
            title: 'People',
            style: {
              titleFill: '#fdae6b',
            },
          },
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
