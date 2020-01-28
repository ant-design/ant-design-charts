---
title: Funnel
---

# Funnel Component

## Normal

```tsx
import React from 'react';
import { Funnel } from '@alipay/techui-charts';

const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付', pv: 15000 },
  { action: '成交', pv: 8500 },
];

const config = {
  data,
  title: {
    visible: true,
    text: '漏斗图',
  },
  width: 650,
  height: 450,
  xField: 'action',
  yField: 'pv',
};
export default () => <Funnel {...config} />;
```

## Dynamic height

```tsx
import React from 'react';
import { Funnel } from '@alipay/techui-charts';

const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付', pv: 15000 },
  { action: '成交', pv: 8500 },
];

const config = {
  data,
  title: {
    visible: true,
    text: '漏斗图',
  },
  description: {
    visible: true,
    text: '漏斗图 - 动态高度',
  },
  width: 650,
  height: 500,
  xField: 'action',
  yField: 'pv',
  dynamicHeight: true,
};
export default () => <Funnel {...config} />;
```
