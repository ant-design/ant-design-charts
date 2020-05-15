---
title: 仪表盘
---

# 仪表盘

## 基本用法

<a href="https://g2plot.antv.vision/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Gauge } from '@ant-design/charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '仪表盘',
    },
    width: 400,
    height: 400,
    value: 64,
    min: 0,
    max: 100,
    range: [0, 25, 50, 75, 100],
    color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
    statistic: {
      visible: true,
      text: '优',
      color: '#30bf78',
    },
  };
  return <Gauge {...config} />;
};

export default App;
```

## 刻度仪表盘

<a href="https://g2plot.antv.vision/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { MeterGauge } from '@ant-design/charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '刻度仪表盘',
    },
    width: 400,
    height: 400,
    value: 40,
    min: 0,
    max: 100,
    range: [0, 25, 50, 75, 100],
    statistic: {
      visible: true,
      text: '良',
      color: '#faad14',
    },
    color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
  };
  return <MeterGauge {...config} />;
};

export default App;
```

## 扇形仪表盘

<a href="https://g2plot.antv.vision/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { FanGauge } from '@ant-design/charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '扇形仪表盘',
    },
    // style: 'fan',
    width: 400,
    height: 400,
    value: 34,
    min: 0,
    max: 100,
    range: [0, 70],
    format: (v) => {
      return v + '%';
    },
    color: ['l(0) 0:#b0d0ff 1:#5f92f9'],
  };
  return <FanGauge {...config} />;
};

export default App;
```
