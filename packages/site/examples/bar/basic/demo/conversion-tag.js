import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/charts';

const DemoBar = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config = {
    data,
    xField: 'pv',
    yField: 'action',
    conversionTag: {},
  };
  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));
