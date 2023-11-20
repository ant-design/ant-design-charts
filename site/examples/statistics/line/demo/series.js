import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-series.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'unemployment',
    colorField: 'steelblue',
    seriesField: 'division',
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
