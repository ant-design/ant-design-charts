---
title: 迷你进度条
---

# 迷你进度条

## Normal

```tsx
import React from 'react';
import { Progress } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    width: 200,
    height: 50,
    percent: 0.3,
    color: ['#F4664A', '#E8EDF3'],
  };
  return <Progress {...config} />;
};
export default App;
```
