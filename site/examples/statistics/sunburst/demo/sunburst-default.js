import { Sunburst } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoSunburst = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/ryp44nvUYZ/coffee.json',
    },
    animate: {
      enter: { type: 'waveIn' }
    },
    innerRadius: 0,
  };
  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
