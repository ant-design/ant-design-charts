import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json',
    },
    xField: 'letter',
    yField: 'frequency',
    transform: [{ type: 'sortX', by: 'y', reverse: true, slice: 5 }],
    state: { selected: { fill: '#f4bb51' }, unselected: { opacity: 0.6 } },
    axis: { y: { labelFormatter: '.0%' } },
    interaction: { elementSelect: true, elementHighlightByColor: false },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoInteraction />, document.getElementById('container'));
