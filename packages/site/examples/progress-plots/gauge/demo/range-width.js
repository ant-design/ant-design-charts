import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/charts';

const DemoGauge = () => {
  const config = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: '#30BF78',
      width: 12,
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
      },
      style: {
        fontSize: 60,
      },
    },
    gaugeStyle: {
      lineCap: 'round',
    },
  };
  return <Gauge {...config} />;
};

ReactDOM.render(<DemoGauge />, document.getElementById('container'));
