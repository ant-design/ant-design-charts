import { RadialBar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  { term: 'Zombieland', count: 9 },
  { term: 'Wieners', count: 8 },
  { term: 'Toy Story', count: 8 },
  { term: 'trashkannon', count: 7 },
  { term: 'the GROWLERS', count: 6 },
  { term: 'mudweiser', count: 6 },
  { term: 'ThunderCats', count: 4 },
  { term: 'The Taqwacores - Motion Picture', count: 4 },
  { term: 'The Shawshank Redemption', count: 2 },
  { term: 'The Olivia Experiment', count: 1 },
];

const DemoRadialBar = () => {
  const config = {
    data,
    xField: 'term',
    yField: 'count',
    startAngle: Math.PI * 0.5,
    maxAngle: 270, //最大旋转角度,
    radius: 1,
    innerRadius: 0.2,
    legend: false,
    axis: { y: false },
    tooltip: {
      items: ['count'],
    },
    sizeField: 10,
  };
  return <RadialBar {...config} />;
};

ReactDOM.render(<DemoRadialBar />, document.getElementById('container'));
