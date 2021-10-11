import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes = () => {
  const data = [
    {
      time: '2019-03',
      value: [200, 350],
      count: 800,
    },
    {
      time: '2019-04',
      value: [400, 650],
      count: 600,
    },
    {
      time: '2019-05',
      value: [150, 350],
      count: 400,
    },
    {
      time: '2019-06',
      value: [100, 450],
      count: 380,
    },
    {
      time: '2019-07',
      value: [500, 550],
      count: 220,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        isRange: true,
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
        lineStyle: {
          lineWidth: 2,
          stroke: '#5AD8A6',
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
