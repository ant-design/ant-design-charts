---
title: 迷你面积图
---

# TinyArea Component

## Normal

```tsx
import React from 'react';
import { TinyArea } from '@alipay/techui-charts';

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
    data: randomData(50, 10, 1000),
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
  return <TinyArea {...config} />;
};

export default App;
```
