import { Radar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRadar = () => {
  const config = {
    autoFit: false,
    width: 954,
    height: 954,
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
    meta: { x: { utc: true } },
    style: { stroke: "steelblue", strokeWidth: 1.5 },
    tooltip: { items: [{ channel: "y", valueFormatter: ".1f" }] },
    innerRadius: 0.4,
    axis: {
      y: {
        zIndex: 1,
        direction: "center",
        title: null,
        labelFormatter: (d, i, array) =>
          i === array.length - 1 ? `${d}°F` : `${d}`,
        style: { labelStroke: "#fff", labelStrokeWidth: 5 },
      },
      x: { grid: true, position: "inner" },
    },
    annotations: [
      {
        type: "area",
        encode: { x: "date", y: ["minmin", "maxmax"] },
        style: { fill: "lightsteelblue", fillOpacity: 0.2 },
      },
      {
        type: "area",
        encode: { x: "date", y: ["min", "max"] },
        style: { fill: "steelblue", fillOpacity: 0.2 },
      },
    ],
  };
  return <Radar {...config} />;
};

ReactDOM.render(<DemoRadar />, document.getElementById('container'));
