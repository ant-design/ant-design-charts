import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    paddingLeft: 60,
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-sequential.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    colorField: 'value',
    shapeField: 'point',
    style: {
      stroke: '#000',
      strokeOpacity: 0.2,
    },
    scale: {
      color: {
        palette: 'rdBu',
        offset: (t) => 1 - t,
      },
    },
    tooltip: [{ channel: 'x', name: 'year', valueFormatter: (d) => d.getFullYear() }, { channel: 'y' }],
    annotations: [{ type: 'lineY', data: [0], style: { stroke: '#000', strokeOpacity: 0.2 } }],
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
