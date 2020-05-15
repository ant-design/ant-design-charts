---
title: 水波图
---

# 水波图

## 基本用法

<a href="https://g2plot.antv.vision/zh/examples/liquid/basic/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Liquid } from '@ant-design/charts';

const App: React.FC = () => {
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
export default App;
```

## 百分比展示

<a href="https://g2plot.antv.vision/zh/examples/liquid/basic/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Liquid } from '@ant-design/charts';

const App: React.FC = () => {
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
    statistic: {
      formatter: (value) => ((100 * value) / 10000).toFixed(1) + '%',
    },
  };
  return <Liquid {...config} />;
};
export default App;
```
