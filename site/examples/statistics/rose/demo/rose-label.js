import { Rose } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRose = () => {
  const config = {
    width: 720,
    height: 720,
    autoFit: false,
    radius: 0.85,
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv",
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year',
    transform: [{ type: "groupX", y: "sum" }],
    meta: { y: { type: "sqrt" }, x: { padding: 0 } },
    axis: false,
    legend: { color: { length: 400, layout: { justifyContent: "center" } } },
    labels: [
      {
        text: "people",
        position: "outside",
        formatter: "~s",
        transform: [{ type: "overlapDodgeY" }],
      },
    ],
    tooltip: { items: [{ channel: "y", valueFormatter: "~s" }] },
  };
  return <Rose {...config} />;
};

ReactDOM.render(<DemoRose />, document.getElementById('container'));
