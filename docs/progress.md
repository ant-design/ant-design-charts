---
title: Progress
---

# Progress Component

## Normal

```tsx
import React from 'react';
import { Progress } from '@alipay/techui-charts';

const config = {
  width: 200,
  height: 50,
  percent: 0.3,
  color: ['#F4664A', '#E8EDF3'],
};

export default () => <Progress {...config} />;
```
