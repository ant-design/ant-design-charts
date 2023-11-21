import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoDualAxes = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/weather.json',
      transform: [{ type: 'filter', callback: (d) => d.location === 'Seattle' }],
    },
    children: [
      {
        type: 'area',
        xField: (d) => new Date(d.date).getUTCMonth(),
        yField: ['temp_max', 'temp_min'],
        transform: [{ type: 'groupX', y: 'mean', y1: 'mean' }],
        scale: { y: { nice: true } },
        style: { fill: '#85c5A6', fillOpacity: 0.3 },
        axis: { y: { title: 'Avg. Temperature (°C)', titleFill: '#85C5A6' } },
        tooltip: {
          items: [
            { channel: 'y', valueFormatter: '.1f' },
            { channel: 'y1', valueFormatter: '.1f' },
          ],
        },
      },
      {
        type: 'line',
        xField: (d) => new Date(d.date).getMonth(),
        yField: 'precipitation',
        shapeField: 'smooth',
        transform: [{ type: 'groupX', y: 'mean' }],
        scale: { y: { independent: true } },
        style: { stroke: 'steelblue' },
        axis: {
          y: {
            position: 'right',
            grid: null,
            title: 'Precipitation (inches)',
            titleFill: 'steelblue',
          },
        },
        tooltip: { items: [{ channel: 'y', valueFormatter: '.1f' }] },
      },
    ],
  };
  return <DualAxes {...config} />;
};

ReactDOM.render(<DemoDualAxes />, document.getElementById('container'));
