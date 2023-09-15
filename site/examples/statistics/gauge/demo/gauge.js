import { Gauge } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoGauge = () => {
  const config = {
    width: 720,
    height: 720,
    autoFit: true,
    data: {
        target: 120,
        total: 400,
        name: 'score',
    },
    legend: false
  };
  return <Gauge {...config} />;
};

ReactDOM.render(<DemoGauge />, document.getElementById('container'));
