import { Rose } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRose = () => {

  const colors = [
    '#98abc5',
    '#8a89a6',
    '#7b6888',
    '#6b486b',
    '#a05d56',
    '#d0743c',
    '#ff8c00',
  ];

  const config = {
    width: 800,
    height: 800,
    autoFit: false,
    innerRadius: 0.4,
    data: {
      type: "fetch",
      value:
      "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-stacked-rose.json",
      transform: [
        {
          type: "fold",
          fields: [
            "Under 5 Years",
            "5 to 13 Years",
            "14 to 17 Years",
            "18 to 24 Years",
            "25 to 44 Years",
            "45 to 64 Years",
            "65 Years and Over",
          ],
          key: "Age",
          value: "Population",
        },
      ],
    },
    xField: 'State',
    yField: 'Population',
    colorField: 'Age',
    stack: true,
    meta: {
      y: { type: "sqrt" },
      color: {
        range: colors,
      },
    },
    axis: {
      x: { position: "inner" },
      y: {
        labelFormatter: "~s",
        tickFilter: (_, i) => i !== 0,
        direction: "center",
      },
    },
    legend: { color: { position: "center", display: "grid", gridCol: 1 } },
  };
  return <Rose {...config} />;
};

ReactDOM.render(<DemoRose />, document.getElementById('container'));
