import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/88c601cd-c1ff-4c9b-90d5-740d0b710b7e.json",
    },
    height: 360,
    autoFit: false,
    stack: {
      y1: 'y'
    },
    xField: (d) => 2021 - d.birth,
    yField: (d) => (d.gender === 'M' ? 1 : -1),
    colorField: 'gender',
    shapeField: 'point',
    meta: {
      x: { nice: true },
    },
    axis: {
      y: {
        title: "← Women · Men →",
        labelFormatter: (d) => `${Math.abs(+d)}`,
      },
      x: { title: "Age →" },
    },
    legend: { color: { title: "Gender" } },
    tooltip: { items: [{ channel: "x", name: "age" }] },
    annotations: [{ type: "lineY", data: [0], style: { stroke: "black" } }],
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
