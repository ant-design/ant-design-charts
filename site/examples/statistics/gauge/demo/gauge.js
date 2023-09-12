import { Gauge } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoGauge = () => {
  const config = {
    width: 720,
    height: 720,
    autoFit: false,
    data: {
      value: {
        target: 120,
        total: 400,
        name: 'score',
      }
    }
  };
  return <Gauge {...config} />;
};

ReactDOM.render(<DemoGauge />, document.getElementById('container'));
