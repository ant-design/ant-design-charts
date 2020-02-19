---
title: 水波图
---

# 水波图

## Normal

```tsx
import React from 'react';
import { Liquid } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '水波图',
    },
    statistic: 'normal',
    width: 400,
    height: 400,
    min: 0,
    max: 10000,
    value: 4500,
    showValue: true,
  };
  return <Liquid {...config} />;
};
export default App;
```
