
import { DualAxes } from '@ant-design/plots';
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
    legend: {
      color: {
        position: 'bottom',
        layout: { justifyContent: 'center' },
      },
    },
    children: [
      {
        data: uvBillData,
        type: 'interval',
        yField: 'value',
        colorField: 'type',
        group: true,
        style: {
          fill: () => { }
        },
        label: { position: 'inside' },
        scale: { color: { range: ['#5B8FF9', '#5D7092'] } },
        tooltip: {
          items: [
            (d, index, _, column) => ({
              color: '#5B8FF9',
              name: 'uv',
              value: d.type === 'uv' ? d.value : column.y.value[index - uvBillData.length / 2],
            }),
            (d, index, _, column) => ({
              color: '#5D7092',
              name: 'bill',
              value: d.type === 'bill' ? d.value : column.y.value[index + uvBillData.length / 2],
            })
          ],
        },
        interaction: { elementHighlightByColor: { background: true, } },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 2,
        },
        meta: { y: { independent: true } },
        axis: { y: { position: 'right' } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          }
        }
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
