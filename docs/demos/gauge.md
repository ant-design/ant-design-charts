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
  const config = {
    percent: 0.65,
    range: { color: ['l(0) 0:#5d7cef 1:#e35767'] },
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
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 0.2, 0.4, 0.75, 1],
      color: ['red', 'yellow', 'green'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: 'pink',
        },
      },
      pin: {
        style: {
          stroke: 'blue',
        },
      },
    },
    axis: {
      label: {
        formatter(v: string) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `分数：${percent * 100}`,
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```
