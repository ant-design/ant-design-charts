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
    maxAngle: 350,
    radius: 1,
    innerRadius: 0.2,
    tooltip: {
      items: ['star'],
    },
    legend:false,
    axis: {
      y: false,
    },
    markBackground: {
      opacity: 0.25,
    },
    scale:{
      y: {
        domain: [0, 12000], // 设定范围用于背景图的渲染获取最大值
      },
    },
    style: {
      radius: 180,
      fill: ({ star }) => {
        if (star > 10000) {
          return '#6349ec';
        } else if (star > 1000) {
          return '#ff9300';
        }
        return '#ff93a7';
      },
    },
  };
  return <RadialBar {...config} />;
};

ReactDOM.render(<DemoRadialBar />, document.getElementById('container'));
