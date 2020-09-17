---
title: 水波图
order: 23
---

# 水波图

## Liquid

### 水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  const config = { percent: 0.75 };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 样式自定义的水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  const config = {
    width: 600,
    height: 300,
    autoFit: false,
    percent: 0.75,
    statistic: {
      content: {
        formatter: ({ percent }) => {
          return `占比${percent * 100}%`;
        },
      },
    },
    liquidStyle: ({ percent }) => {
      return { fill: percent > 0.75 ? 'red' : '#acc9ff' };
    },
    color: () => '#acc9ff',
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```
