import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

const DemoLiquid = () => {
  const config = {
    padding: [0, 120],
    percent: 0.85,
    outline: {
      border: 4,
      distance: 5,
    },
    wave: {
      length: 128,
    },
    statistic: {
      content: {
        style: {
          fontSize: 32,
          fill: '#ffffff',
          opacity: 1,
          lineWidth: 2,
          shadowColor: '#000',
          shadowBlur: 10,
        },
        offsetY: 2,
      },
    },
    pattern: {
      type: 'dot',
      cfg: {
        size: 30,
      },
    },
  };
  return <Liquid {...config} />;
};

ReactDOM.render(<DemoLiquid />, document.getElementById('container'));
