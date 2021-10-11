import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn = () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  const config = {
    height: 64,
    autoFit: false,
    data,
    tooltip: false,
    annotations: [
      // 平均值
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        text: {
          content: '平均值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: 'rgba(0, 0, 0, 0.25)',
        },
      },
    ],
  };
  return <TinyColumn {...config} />;
};

ReactDOM.render(<DemoTinyColumn />, document.getElementById('container'));
