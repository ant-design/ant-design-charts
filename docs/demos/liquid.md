---
title: 水波图
order: 27
---

# 水波图

## Liquid

### 水波图

<a href="https://antv-g2plot.gitee.io/zh/examples/liquid/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '水波图',
    },
    min: 0,
    max: 10000,
    value: 5639,
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 水波图

<a href="https://antv-g2plot.gitee.io/zh/examples/liquid/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '水波图',
    },
    description: {
      visible: true,
      text: '水波图 - 百分比显示',
    },
    min: 0,
    max: 10000,
    value: 5639,
    statistic: { formatter: (value) => ((100 * value) / 10000).toFixed(1) + '%' },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```
