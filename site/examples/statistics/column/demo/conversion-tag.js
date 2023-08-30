import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoColumn = () => {
  const config = {
    data: [
      { action: '浏览网站', pv: 50000 },
      { action: '放入购物车', pv: 35000 },
      { action: '生成订单', pv: 25000 },
      { action: '支付订单', pv: 15000 },
      { action: '完成交易', pv: 8500 },
    ],
    xField: 'action',
    yField: 'pv',
    label: {
      text: (d) => d.pv,
      textBaseline: 'bottom',
    },
    style: {
      maxWidth: 50,
    },
    conversionTag: {
      size: 40,
      spacing: 4,
      text: {
        formatter: (prev, next) => `${((next / prev) * 100).toFixed(1)}%`,
      },
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
