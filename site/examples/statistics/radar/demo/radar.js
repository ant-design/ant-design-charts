import { Radar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  { item: 'Design', type: 'a', score: 70 },
  { item: 'Design', type: 'b', score: 30 },
  { item: 'Development', type: 'a', score: 60 },
  { item: 'Development', type: 'b', score: 70 },
  { item: 'Marketing', type: 'a', score: 50 },
  { item: 'Marketing', type: 'b', score: 60 },
  { item: 'Users', type: 'a', score: 40 },
  { item: 'Users', type: 'b', score: 50 },
  { item: 'Test', type: 'a', score: 60 },
  { item: 'Test', type: 'b', score: 70 },
  { item: 'Language', type: 'a', score: 70 },
  { item: 'Language', type: 'b', score: 50 },
  { item: 'Technology', type: 'a', score: 50 },
  { item: 'Technology', type: 'b', score: 40 },
  { item: 'Support', type: 'a', score: 30 },
  { item: 'Support', type: 'b', score: 40 },
  { item: 'Sales', type: 'a', score: 60 },
  { item: 'Sales', type: 'b', score: 40 },
  { item: 'UX', type: 'a', score: 50 },
  { item: 'UX', type: 'b', score: 60 },
];

const DemoRadar = () => {
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    colorField: 'type',
    shapeField: 'smooth',
    area: {
      style: {
        fillOpacity: 0.5,
      },
    },
    scale: { x: { padding: 0.5, align: 0 }, y: { tickCount: 5, domainMax: 80 } },
    axis: { x: { grid: true }, y: { zIndex: 1, title: false } },
    interaction: { tooltip: { style: { crosshairsLineDash: [4, 4] } } },
    style: {
      lineWidth: 2,
    },
  };
  return <Radar {...config} />;
};

ReactDOM.render(<DemoRadar />, document.getElementById('container'));
