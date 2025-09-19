import { Bar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];

const DemoBar = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    scale: {
      y: {
        range: [0, 1],
      },
    },
    style: {
      maxWidth: 30,
    },
    axis: {
      x: {
        position: 'right',
      },
    },
  };
  return <Bar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBar />);
