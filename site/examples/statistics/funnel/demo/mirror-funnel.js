import React from 'react';
import ReactDOM from 'react-dom';
import { Funnel } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    { action: '访问', visitor: 500, site: '站点1' },
    { action: '浏览', visitor: 400, site: '站点1' },
    { action: '交互', visitor: 300, site: '站点1' },
    { action: '下单', visitor: 200, site: '站点1' },
    { action: '完成', visitor: 100, site: '站点1' },
    { action: '访问', visitor: 550, site: '站点2' },
    { action: '浏览', visitor: 420, site: '站点2' },
    { action: '交互', visitor: 280, site: '站点2' },
    { action: '下单', visitor: 150, site: '站点2' },
    { action: '完成', visitor: 80, site: '站点2' },
  ];

  const config = {
    data,
    xField: 'action',
    yField: 'visitor',
    compareField: 'site',
    style: {
      stroke: '#fff',
    },
    label: {
      text: 'visitor',
    },
    legend: false,
  };
  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
