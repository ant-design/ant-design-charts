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
    axis: { y: { title: null } },
    children: [
      {
        data: uvBillData,
        type: 'interval',
        yField: 'value',
        stack: true,
        colorField: 'type',
        style: { maxWidth: 80 },
        meta: { y: { domainMax: 1200 } },
        interaction: { elementHighlightByColor: { background: true, } },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        colorField: () => 'count',
        style: { lineWidth: 2 },
        axis: { y: { position: 'right' } },
        meta: { y: { independent: true } },
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
