import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const data = [
    {
      Species: 'I. setosa',
      type: 'SepalLength',
      value: 5.1,
      bin: [4.3, 4.8, 5, 5.2, 5.8],
    },
    {
      Species: 'I. setosa',
      type: 'SepalWidth',
      value: 3.5,
      bin: [2.3, 3.2, 3.4, 3.7, 4.4],
    },
    {
      Species: 'I. setosa',
      type: 'PetalLength',
      value: 1.4,
      bin: [1, 1.4, 1.5, 1.6, 1.9],
    },
    {
      Species: 'I. setosa',
      type: 'PetalWidth',
      value: 0.2,
      bin: [0.1, 0.2, 0.2, 0.3, 0.6],
    },
    {
      Species: 'I. versicolor',
      type: 'SepalLength',
      value: 7,
      bin: [4.9, 5.6, 5.9, 6.3, 7],
    },
    {
      Species: 'I. versicolor',
      type: 'SepalWidth',
      value: 3.2,
      bin: [2, 2.5, 2.8, 3, 3.4],
    },
    {
      Species: 'I. versicolor',
      type: 'PetalLength',
      value: 4.7,
      bin: [3, 4, 4.35, 4.6, 5.1],
    },
    {
      Species: 'I. versicolor',
      type: 'PetalWidth',
      value: 1.4,
      bin: [1, 1.2, 1.3, 1.5, 1.8],
    },
    {
      Species: 'I. virginica',
      type: 'SepalLength',
      value: 6.3,
      bin: [4.9, 6.2, 6.5, 6.9, 7.9],
    },
    {
      Species: 'I. virginica',
      type: 'SepalWidth',
      value: 3.3,
      bin: [2.2, 2.8, 3, 3.2, 3.8],
    },
    {
      Species: 'I. virginica',
      type: 'PetalLength',
      value: 6,
      bin: [4.5, 5.1, 5.55, 5.9, 6.9],
    },
    {
      Species: 'I. virginica',
      type: 'PetalWidth',
      value: 2.5,
      bin: [1.4, 1.8, 2, 2.3, 2.5],
    },
  ];

  const config = {
    data: {
      value: data,
    },
    xField: 'type',
    yField: 'bin',
    colorField: 'Species',
    seriesField: 'Species',
    style: {
      stroke: 'black',
    },
    scale: {
      x: { paddingInner: 0.2, paddingOuter: 0.1 },
      y: { zero: true },
      series: { paddingInner: 0.3, paddingOuter: 0.1 },
    },
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
