---
title: 迷你图表
---

# 迷你折线图

<!--
## 基本用法

```tsx
import React from 'react';
import { TinyLine } from '@ant-design/charts';

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
``` -->

## 迷你进度条

```tsx
import React from 'react';
import { Progress } from '@ant-design/charts';

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

<!--
## 迷你柱状图

```tsx
import React from 'react';
import { TinyColumn } from '@ant-design/charts';

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
  return <TinyColumn {...config} />;
};
export default App;
```

## 迷你面积图

```tsx
import React from 'react';
import { TinyArea } from '@ant-design/charts';

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

## 迷你环形进度条

```tsx
import React from 'react';
import { RingProgress } from '@ant-design/charts';

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
``` -->
