import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const lineColor = {
  uv: 'rgb(91, 143, 249)',
  bill: 'rgb(90, 216, 166)',
  a: 'rgb(93, 112, 146)',
  b: 'rgb(246, 189, 22)',
  c: 'rgb(111, 94, 249)',
};

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
    interaction: { tooltip: { sort: (d) => ['uv', 'bill', 'a', 'b', 'c'].indexOf(d.name) } },
    axis: { y: { title: null } },
    children: [
      {
        data: uvBillData,
        type: 'line',
        yField: 'value',
        seriesField: 'type',
        shapeField: 'smooth',
        style: {
          lineWidth: 2,
          lineDash: [5, 5],
          stroke: (d) => lineColor[d[0].type],
        },
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
      },
      {
        data: transformData,
        type: 'point',
        yField: 'count',
        sizeField: 3,
        style: {
          fill: (d) => lineColor[d.name],
          stroke: (d) => lineColor[d.name],
        },
        tooltip: false,
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
