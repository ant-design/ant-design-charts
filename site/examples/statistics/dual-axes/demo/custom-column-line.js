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
    children: [
      {
        type: 'interval',
        yField: 'value',
        style: { maxWidth: 80 },
        label: { position: 'inside' },
        interaction: {
          elementHighlight: true,
          elementHighlightByColor: { background: true },
        },
      },
      {
        type: 'line',
        yField: 'count',
        shapeField: 'smooth',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 2,
        },
        scale: { y: { independent: true } },
        axis: { y: { position: 'right' } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
    annotations: [
      {
        type: 'text',
        data: ['2019-05', 280],
        style: {
          text: '2019-05, 发布新版本',
          dy: -30,
          fill: '#2C3542',
          fillOpacity: 0.65,
          fontSize: 10,
          background: true,
          backgroundRadius: 4,
          connector: true,
          startMarker: true,
          startMarkerSize: 6,
          startMarkerFill: '#fff',
        },
        tooltip: false,
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
