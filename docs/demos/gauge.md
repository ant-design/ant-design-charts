---
title: 仪表盘
order: 34
---

# 仪表盘

## Gauge

### 仪表盘个性化配置

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '仪表盘个性化配置',
    },
    width: 400,
    height: 400,
    value: 75,
    min: 0,
    max: 100,
    range: [0, 75],
    color: ['l(0) 0:#5d7cef 1:#e35767'],
    axis: {
      offset: -15,
      tickLine: {
        visible: true,
        length: 10,
      },
      label: { visible: false },
    },
    pivot: {
      visible: true,
      thickness: 10,
      pointer: {
        visible: true,
        style: { fill: '#e25869' },
      },
      pin: {
        visible: true,
        style: { fill: '#e8e6ea' },
      },
    },
    statistic: {
      visible: true,
      position: ['50%', '100%'],
      text: '26/48',
      color: '#2e3033',
      size: 40,
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 仪表盘

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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

export default DemoGauge;
```

### 扇形仪表盘

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '扇形仪表盘',
    },
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
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 刻度仪表盘

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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
  return <Gauge {...config} />;
};

export default DemoGauge;
```
