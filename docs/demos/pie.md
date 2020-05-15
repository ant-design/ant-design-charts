---
title: 饼图
---

# 饼图

## 基本用法

<a href="https://g2plot.antv.vision/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Pie } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const config = {
    data,
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-图形标签蜘蛛布局',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为spider时，标签分为两组，在图表两侧拉线对齐显示。一般来说，蜘蛛布局的label更不容易相互遮挡。',
    },
    radius: 0.8,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'spider',
    },
  };
  return <Pie {...config} />;
};

export default App;
```

## 外部标签

<a href="https://g2plot.antv.vision/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Pie } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [];
  for (let i = 1; i < 50; i++) {
    data.push({ type: `分类 ${i}`, value: (Math.random() * 10).toFixed(0) + 1 });
  }

  const config = {
    data,
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-外部圆形图形标签(outer-center label)',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为outer-center时，标签在切片外部拉线显示。outer-center布局的label发生遮挡会直接隐藏而不偏移躲避，相对于outer label布局来说，更美观',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer-center',
      formatter: (text, item) => `${item._origin.type}: ${item._origin.value}`,
    },
  };
  return <Pie {...config} />;
};

export default App;
```

## 环图

<a href="https://g2plot.antv.vision/zh/examples/pie/donut/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Donut } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图',
    },
    description: {
      visible: true,
      text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
  };
  return <Donut {...config} />;
};
export default App;
```
