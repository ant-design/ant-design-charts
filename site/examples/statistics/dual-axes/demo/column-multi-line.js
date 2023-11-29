import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const lineColor = {
  a: 'rgb(90, 216, 166)',
  b: 'rgb(93, 112, 146)',
  c: 'rgb(246, 189, 22)',
};

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
        seriesField: 'name',
        style: {
          lineWidth: 2,
          stroke: (d) => lineColor[d[0].name],
        },
        axis: { y: { position: 'right' } },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
