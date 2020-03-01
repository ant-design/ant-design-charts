---
title: 迷你折线图
---

# 迷你折线图

## 基本用法

```tsx
import React from 'react';
import { TinyLine } from '@alipay/techui-charts';

const App: React.FC = () => {
  const randomData = (num, max, min) => {
    const data = [];
    for (let i = 0; i < num; i++) {
      data.push({ index: String(i), value: min + Math.random() * (max - min) });
    }
    return data;
  };
  const config = {
    width: 200,
    height: 50,
    data: randomData(20, 200, 400),
    xField: 'index',
    yField: 'value',
    guideLine: [
      {
        type: 'mean',
        text: {
          position: 'start',
          content: '平均值',
          style: {
            stroke: 'white',
            lineWidth: 2,
          },
        },
      },
    ],
  };
  return <TinyLine {...config} />;
};
export default App;
```
