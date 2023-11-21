import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-dot.json',
    },
    width: 800,
    height: 1200,
    autoFit: false,
    coordinate: { transform: [{ type: 'transpose' }] },
    interaction: { tooltip: { shared: true } },
    xField: 'state',
    yField: 'population',
    colorField: 'age',
    shapeField: 'point',
    scale: { color: { palette: 'spectral' } },
    tooltip: { title: 'state', items: ['population'] },
    annotations: [
      {
        type: 'link',
        xField: 'state',
        yField: 'population',
        transform: [{ type: 'groupX', y: 'min', y1: 'max' }],
        scale: { y: { labelFormatter: '.0%' } },
        style: { stroke: '#000' },
        tooltip: false,
      },
    ],
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
