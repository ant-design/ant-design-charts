import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoCustomColor = () => {
  const config = {
    data: [
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
        sales: 8,
      },
      {
        type: '家庭清洁',
        sales: 28,
      },
    ],
    xField: 'type',
    yField: 'sales',
    colorField: 'type',
    scale: {
      color: {
        range: ['#f4664a', '#faad14', '#a0d911', '#52c41a', '#13c2c2', '#1890ff', '#2f54eb', '#722ed1'],
      },
    },
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoCustomColor />);
