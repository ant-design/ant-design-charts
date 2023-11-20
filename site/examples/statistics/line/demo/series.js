import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-series.json',
    },
    xField: 'date',
    yField: 'unemployment',
    colorField: 'steelblue',
    seriesField: 'division',
    // interaction: {
    //   tooltip: {
    //     filter: (d, i) => i < 10,
    //   }
    // }
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
