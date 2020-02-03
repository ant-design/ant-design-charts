---
title: 瀑布图
---

# Waterfall Component

## Normal

```tsx
import React from 'react';
import { Waterfall } from '@alipay/techui-charts';

const App: React.FC = () => {
  const data = [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬红包', money: -2000 },
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: '每月收支情况（瀑布图）',
    },
    forceFit: true,
    padding: 'auto',
    xField: 'type',
    yField: 'money',
    meta: {
      type: {
        alias: '类别',
      },
      money: {
        alias: '金额',
      },
    },
  };
  return <Waterfall {...config} />;
};
export default App;
```
