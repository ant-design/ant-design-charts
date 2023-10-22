import { Liquid } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLiquid = () => {
  const config = {
    percent: 0.7,
    style: {
      shape: 'pin',
      textFill: '#fff',
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    },
  };
  return <Liquid {...config} />;
};

ReactDOM.render(<DemoLiquid />, document.getElementById('container'));
