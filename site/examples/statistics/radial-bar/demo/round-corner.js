import { RadialBar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';


const data = [
  { name: 'X6', star: 297 },
  { name: 'G', star: 506 },
  { name: 'AVA', star: 805 },
  { name: 'G2Plot', star: 1478 },
  { name: 'L7', star: 2029 },
  { name: 'G6', star: 7100 },
  { name: 'F2', star: 7346 },
  { name: 'G2', star: 10178 },
];

const DemoRadialBar = () => {
  const config = {
    data,
    xField: 'name',
    yField: 'star',
    maxAngle: 90, 
    radius: 1,
    innerRadius: 0.2,
    style: {
      radius:26, // 圆角
    },
    meta: {
      y: { nice: true },
    },
  };
  return <RadialBar {...config} />;
};

ReactDOM.render(<DemoRadialBar />, document.getElementById('container'));
