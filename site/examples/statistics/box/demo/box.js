import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const data = [
    { x: 'Oceania', y: [ 1, 9, 16, 22, 24 ]},
    { x: 'East Europe', y: [ 1, 5, 8, 12, 16 ]},
    { x: 'Australia', y: [ 1, 8, 12, 19, 26 ]},
    { x: 'South America', y: [ 2, 8, 12, 21, 28 ]},
    { x: 'North Africa', y: [ 1, 8, 14, 18, 24 ]},
    { x: 'North America', y: [ 3, 10, 17, 28, 30 ]},
    { x: 'West Europe', y: [ 1, 7, 10, 17, 22 ]},
    { x: 'West Africa', y: [ 1, 6, 8, 13, 16 ]},
  ];

  const config = {
    data: {
      value: data,
    },
    xField: 'x',
    yField: 'y',
    colorField: 'x',
    // 默认 boxType 为 box, box 预处理, boxplot 非预处理
    boxType: 'box',
    legend: false,
    style: {
      stroke: 'black',
    },
    meta: {
      x: { paddingInner: 0.6, paddingOuter: 0.3 },
      y: { zero: true },
    },
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
