import { Rose } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRose = () => {
  const config = {
    width: 720,
    height: 720,
    autoFit: false,
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose.json",
    },
    xField: 'year',
    yField: 'people',
    meta: { y: { type: "sqrt" } },
    transform: [{ type: "groupX", y: "sum" }],
    axis: {
      y: {
        title: 'sum of people',
        labelFormatter: "~s",
        tickCount: 5,
        tickFilter: (d, i) => i !== 0,
        direction: "right",
      },
    },
    tooltip: { items: [{ channel: "y", valueFormatter: "~s" }] },
  };
  return <Rose {...config} />;
};

ReactDOM.render(<DemoRose />, document.getElementById('container'));
