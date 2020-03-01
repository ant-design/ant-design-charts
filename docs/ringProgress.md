---
title: 迷你环形进度条
---

# 迷你环形进度条

## 基本用法

```tsx
import React from 'react';
import { RingProgress } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    width: 100,
    height: 100,
    percent: 0.8,
    color: ['#30BF78', '#E8EDF3'],
  };

  return <RingProgress {...config} />;
};

export default App;
```
