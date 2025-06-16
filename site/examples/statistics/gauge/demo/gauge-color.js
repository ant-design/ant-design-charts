import { Gauge } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoGauge = () => {
  const config = {
    autoFit: true,
    data: {
      target: 159,
      total: 400,
      name: 'score',
      thresholds: [100, 200, 400],
    },
    scale: {
      color: {
        range: ['#F4664A', '#FAAD14', 'green'],
      },
    },
    style: {
      textContent: (target, total) => `得分：${target}\n占比：${(target / total) * 100}%`,
    },
  };
  return <Gauge {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoGauge />);
