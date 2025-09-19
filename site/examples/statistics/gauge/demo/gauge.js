import { Gauge } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoGauge = () => {
  const config = {
    autoFit: true,
    data: {
      target: 120,
      total: 400,
      name: 'score',
    },
  };
  return <Gauge {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoGauge />);
