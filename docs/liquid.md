---
title: Liquid
---

# Liquid Component

## Normal

```tsx
import React from 'react';
import { Liquid } from '@alipay/techui-charts';

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
export default () => <Liquid {...config} />;
```
