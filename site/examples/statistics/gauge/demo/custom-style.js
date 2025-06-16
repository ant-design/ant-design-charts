import { Gauge } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoGauge = () => {
  const config = {
    data: {
      target: 159,
      total: 400,
      name: 'score',
    },
    scale: {
      color: {
        range: ['l(0):0:#62CFF4 1:#2C67F2', 'l(0):0:#2C67F2 1:#00008B'],
      },
      y: {
        range: [1, -0.5],
      },
    },
    style: {
      // 配置仪表盘指示文本样式
      textContent: (target, total) => `占比：${(target / total) * 100}%`,
      textFill: '#000',
      textFontSize: 24,
      textfontWeight: 300,
      textX: '35%',
      textY: '75%',
      // 配置仪表盘指针样式
      pointerStroke: '#c5c5c5',
      pointershadowColor: '#333333',
      pointershadowBlur: 10,
      pointershadowOffsetX: 5,
      pointershadowOffsetY: 5,
      // 配置仪表盘指针轴心样式
      pinStroke: '#d5d5d5',
      pinFill: '#d5d5d5',
      pinlinewidth: 6,
      pinshadowColor: '#333333',
      pinshadowBlur: 30,
      pinshadowOffsetX: 5,
      pinshadowOffsetY: 5,
      // 配置仪表盘圆弧样式
      arcLineWidth: 2,
      arcStroke: '#fff',
      arcshadowColor: '#333333',
      arcshadowBlur: 30,
      arcshadowOffsetX: 5,
      arcshadowOffsetY: 5,
    },
  };
  return <Gauge {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoGauge />);
