import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json',
    },
    xField: 'product_type',
    yField: 'order_amt',
    seriesField: 'sex',
    stack: {
      groupBy: ['x', 'series'],
      series: false,
    },
    colorField: 'product_sub_type',
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
