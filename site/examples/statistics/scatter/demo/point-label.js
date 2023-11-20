import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-label.json",
    },
    xField: 'mpg',
    yField: 'hp',
    colorField: 'steelblue',
    meta: {
      x: { nice: true, domainMax: 38 },
      y: { nice: true },
    },
    label: { 
      text: 'name',
      style: {
        stroke: '#fff',
        textAnchor: 'start',
        textBaseline: 'middle',
        dx: 10,
        position: 'left',
        fontSize: 10,
        lineWidth: 2,
      },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
