import React from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/charts';

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
];

const config = {
  data,
  xField: 'sales',
  yField: 'type',
  barWidthRatio: 0.8,
  meta: {
    type: { alias: '类别' },
    sales: { alias: '销售额' },
  },
};

ReactDOM.render(<Bar {...config} />, document.getElementById('container'));
