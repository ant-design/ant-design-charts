import { Sunburst } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoSunburst = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json',
    },
    valueField: 'sum',
    style: {
      fill: (v) => {
        if (v['path'] === '类别 3') return 'red';
        if (v['name'] === '类别 2.1.1') return 'red';
      },
    },
  };
  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
