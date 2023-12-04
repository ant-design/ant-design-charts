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
    label: {
      text: 'name',
      transform: [
        {
          type: 'overflowHide',
        },
      ],
    },
  };
  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
