import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoAnnotationShape = () => {
  const data = [
    { x: 'Jan', tick: 9.3, value: 11.5 },
    { x: 'Feb', tick: 10.5, value: 12 },
    { x: 'Mar', tick: 11.2, value: 11.7 },
    { x: 'Apr', tick: 11.2, value: 12.4 },
    { x: 'May', tick: 12.7, value: 13.5 },
    { x: 'Jun', tick: 13.1, value: 11.9 },
    { x: 'Jul', tick: 12.2, value: 14.6 },
    { x: 'Aug', tick: 12.2, value: 17.2 },
    { x: 'Sep', tick: 10.1, value: 16.9 },
    { x: 'Oct', tick: 14.5, value: 15.4 },
    { x: 'Nov', tick: 14.5, value: 16.9 },
    { x: 'Dec', tick: 15.5, value: 17.2 },
  ];

  const config = {
    data,
    xField: 'x',
    yField: 'value',
    paddingRight: 30,
    sizeField: 20,
    coordinate: { transform: [{ type: 'transpose' }] },
    axis: { x: { title: false } },
    labels: [
      {
        text: 'value',
        position: 'right',
        formatter: (v) => `${v}min`,
        dx: 4,
        textAlign: 'start',
      },
    ],
    style: { fillOpacity: 0.65, lineWidth: 1 },
    annotations: [
      {
        type: 'point',
        xField: 'x',
        yField: 'tick',
        shapeField: 'line',
        sizeField: 15,
        style: { stroke: 'red' },
        tooltip: false,
      },
    ],
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoAnnotationShape />);
