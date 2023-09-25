import { Liquid } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLiquid = () => {
  const config = {
    data: .3,
    style: {
      backgroundFill: 'pink',
    },
  };
  return <Liquid {...config} />;
};

ReactDOM.render(<DemoLiquid />, document.getElementById('container'));
