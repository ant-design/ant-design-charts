---
title: 仪表盘
order: 15
---

# 仪表盘

## Gauge

### 仪表盘

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    range: { color: ['l(0) 0:#bde8ff 1:#7eabff'] },
    indicator: {
      pin: false,
      pointer: false,
    },
    statistic: {
      content: {
        style: {
          fontSize: 48,
          textBaseline: 'bottom',
        },
        offsetY: -60,
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 自定义配置的仪表盘

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    range: {
      ticks: [0, 0.2, 0.4, 0.75, 1],
      color: ['#9EDCA6', '#BFE8C3', '#EFF3DE', '#FFE9B8', '#FFDE94'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return 'Rate: '.concat(percent * 100, '%');
        },
      },
      style: { fontSize: 60 },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```
