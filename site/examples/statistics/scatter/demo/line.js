import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';
import { regressionQuad } from 'd3-regression';

const data = [
  { x: 1, y: 4.181 },
  { x: 2, y: 4.665 },
  { x: 3, y: 5.296 },
  { x: 4, y: 5.365 },
  { x: 5, y: 5.448 },
  { x: 6, y: 5.744 },
  { x: 7, y: 5.653 },
  { x: 8, y: 5.844 },
  { x: 9, y: 6.362 },
  { x: 10, y: 6.38 },
  { x: 11, y: 6.311 },
  { x: 12, y: 6.457 },
  { x: 13, y: 6.479 },
  { x: 14, y: 6.59 },
  { x: 15, y: 6.74 },
  { x: 16, y: 6.58 },
  { x: 17, y: 6.852 },
  { x: 18, y: 6.531 },
  { x: 19, y: 6.682 },
  { x: 20, y: 7.013 },
  { x: 21, y: 6.82 },
  { x: 22, y: 6.647 },
  { x: 23, y: 6.951 },
  { x: 24, y: 7.121 },
  { x: 25, y: 7.143 },
  { x: 26, y: 6.914 },
  { x: 27, y: 6.941 },
  { x: 28, y: 7.226 },
  { x: 29, y: 6.898 },
  { x: 30, y: 7.392 },
  { x: 31, y: 6.938 },
];

const lineData = regressionQuad()
  .x((d) => d.x)
  .y((d) => d.y)
  .domain([2, 31])(data)

const DemoScatter = () => {
  const config = {
    data,
    xField: 'x',
    yField: 'y',
    sizeField: 5,
    style: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9',
    },
    line: {
      data: lineData,
      xField: (d) => d[0],
      yField: (d) => d[1],
      style: { stroke: "#c7cbc7", lineWidth: 2 },
      tooltip: false,
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
