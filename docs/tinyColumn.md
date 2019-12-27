---
title: TinyColumn
---

# TinyColumn Component

## Normal

```tsx
import React from 'react';
import { TinyColumn } from '@alipay/techui-charts';
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
      type: 'median',
      text: {
        position: 'start',
        content: '中位数',
        style: {
          stroke: 'white',
          lineWidth: 2,
        },
      },
    },
  ],
};

export default () => <TinyColumn {...config} />;
```
