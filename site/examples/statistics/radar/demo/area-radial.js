import { Radar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoRadar = () => {
  const config = {
    autoFit: false,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/seasonal-weather.json',
      transform: [
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            date: new Date(d.date),
          }),
        },
      ],
    },
    xField: 'date',
    yField: 'avg',
    scale: { x: { utc: true } },
    style: { stroke: 'steelblue', strokeWidth: 1.5 },
    tooltip: { items: [{ channel: 'y', valueFormatter: '.1f' }] },
    innerRadius: 0.4,
    axis: {
      y: {
        zIndex: 1,
        direction: 'center',
        title: null,
        labelFormatter: (d, i, array) => (i === array.length - 1 ? `${d}°F` : `${d}`),
        style: { labelStroke: '#fff', labelStrokeWidth: 5 },
      },
      x: { grid: true, position: 'inner' },
    },
    annotations: [
      {
        type: 'area',
        xField: 'date',
        yField: ['minmin', 'maxmax'],
        style: { fill: 'lightsteelblue', fillOpacity: 0.2 },
      },
      {
        type: 'area',
        xField: 'date',
        yField: ['min', 'max'],
        style: { fill: 'steelblue', fillOpacity: 0.2 },
      },
    ],
  };
  return <Radar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoRadar />);
