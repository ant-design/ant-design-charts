import { DualAxes } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoDualAxes = () => {
  const data = [
    { year: '1991', value: 3, count: 10 },
    { year: '1992', value: 4, count: 4 },
    { year: '1993', value: 3.5, count: 5 },
    { year: '1994', value: 5, count: 5 },
    { year: '1995', value: 4.9, count: 4.9 },
    { year: '1996', value: 6, count: 35 },
    { year: '1997', value: 7, count: 7 },
    { year: '1998', value: 9, count: 1 },
    { year: '1999', value: 13, count: 20 },
  ];

  const config = {
    data,
    xField: 'year',
    legend: true,
    children: [
      {
        type: 'line',
        yField: 'value',
        style: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
        label: {
          text: (datum) => `${datum.value}个`,
          style: {
            dy: -10,
            textAlign: 'middle',
          },
        },
        axis: {
          y: {
            title: 'value',
            style: { titleFill: '#5B8FF9' },
          },
        },
      },
      {
        type: 'line',
        yField: 'count',
        shapeField: 'smooth',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 4,
          opacity: 0.5,
        },
        label: {
          text: (datum) => `${datum.count}个`,
          style: {
            dy: -10,
            textAlign: 'middle',
          },
        },
        axis: {
          y: {
            position: 'right',
            title: 'count',
            style: { titleFill: '#5AD8A6' },
          },
        },
      },
      {
        type: 'point',
        yField: 'count',
        sizeField: 4,
        style: {
          stroke: '#5AD8A6',
          fill: '#fff',
        },
        axis: { y: false },
        tooltip: false,
      },
    ],
  };
  return <DualAxes {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoDualAxes />);
