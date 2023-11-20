import { RadialBar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  {
    name: 'activity1',
    percent: 2370,
    color: '#1ad5de',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
  },
  {
    name: 'activity2',
    percent: 800,
    color: '#a0ff03',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
  },
  {
    name: 'activity3',
    percent: 650,
    color: '#e90b3a',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
  },
];

const DemoRadialBar = () => {
  const config = {
    data,
    xField: 'name',
    yField: 'percent',
    width: 400,
    height: 244,
    autoFit: false,
    appendPadding: [50, 0, 50, 0],
    // maxAngle: 90, //最大旋转角度,
    radius: 1,
    innerRadius: 0.2,
    style: {
      radius: 26, // 圆角
    },
    theme: 'dark',
    colorField: 'name',
    colorKey: 'color',
    legend: false,
    axis: { x: false, y: false },
    markBackground: {
      opacity: 0.25,
      color: 'color',
    },
    scale: {
      y: {
        domain: [0, 12000], // 设定范围用于背景图的渲染获取最大值
      },
    },
  };
  return <RadialBar {...config} />;
};

ReactDOM.render(<DemoRadialBar />, document.getElementById('container'));
