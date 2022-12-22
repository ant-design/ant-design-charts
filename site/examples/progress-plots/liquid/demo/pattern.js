import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

const DemoLiquid = () => {
  const config = {
    percent: 0.65,
    shape: 'diamond',
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    pattern: {
      type: 'line',
    },
  };
  return <Liquid {...config} />;
};

ReactDOM.render(<DemoLiquid />, document.getElementById('container'));
