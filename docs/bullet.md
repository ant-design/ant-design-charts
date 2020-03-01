---
title: 子弹图
---

# 子弹图

## 基础子弹图

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [83],
        targets: [90],
      },
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: '基础子弹图',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)，即可展示子弹图进度情况；若没有设置最大值(max)，则最大值等于目标值',
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 基础子弹图-带多颜色范围区间

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '基础子弹图-带多颜色范围区间',
    },
    description: {
      visible: true,
      text: '自定义图例，表示各颜色范围区间代表的含义（如差、良、优）',
    },
    data: [
      {
        title: '满意度',
        measures: [83],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          value: '实际进度', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '目标值', // 图例项的文本内容
          marker: {
            symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
            stroke: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '差', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFB1AC', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '良', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFDBA2', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '优', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#B4EBBF', // 该图例项 marker 的填充颜色
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 基础子弹图-超出目标

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '基础子弹图-超出目标',
    },
    description: {
      visible: true,
      text: '当进度超出子弹图最大值时，会突出显示',
    },
    data: [
      {
        title: '满意度',
        measures: [140],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          value: '实际进度', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '目标值', // 图例项的文本内容
          marker: {
            symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
            stroke: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '差', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFB1AC', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '良', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFDBA2', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '优', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#B4EBBF', // 该图例项 marker 的填充颜色
          },
        },
      ],
    },
    axis: {
      visible: true,
      formatter: text => text,
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 基础子弹图-多目标值

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [87],
        targets: [80, 95],
      },
    ],
    rangeMax: 100,
    markerColors: ['#5B8FF9', '#5AD8A6'],
    title: {
      visible: true,
      text: '基础子弹图-多目标值',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)，即可展示子弹图进度情况；若没有设置最大值(max)，则最大值等于目标值',
    },
    legend: {
      custom: true,
      items: [
        {
          value: '实际进度', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '目标值 1', // 图例项的文本内容
          marker: {
            symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
            stroke: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '目标值 2', // 图例项的文本内容
          marker: {
            symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
            stroke: '#5AD8A6', // 该图例项 marker 的填充颜色
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 堆叠子弹图

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [30, 40, 10, 20],
        targets: [90],
      },
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: '堆叠子弹图',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)，即可展示子弹图进度情况；若没有设置最大值(max)，则最大值等于目标值',
    },
    legend: {
      custom: false,
      formatter: text => {
        if (text === '0') {
          return '第一季度';
        } else if (text === '1') {
          return '第二季度';
        } else if (text === '2') {
          return '第三季度';
        } else if (text === '3') {
          return '第四季度';
        }
      },
    },
    label: {
      offset: -6,
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 分组子弹图

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    data: [
      {
        title: '广州',
        measures: [83],
        targets: [90],
      },
      {
        title: '深圳',
        measures: [13],
        targets: [90],
      },
      {
        title: '珠海',
        measures: [45],
        targets: [80],
      },
      {
        title: '汕头',
        measures: [83],
        targets: [70],
      },
    ],
    rangeMax: 100,

    title: {
      visible: true,
      text: '分组子弹图',
    },
    description: {
      visible: true,
      text: '当data数组由多个值时，可以展示多条子弹图进行进度对比',
    },
  };
  return <Bullet {...config} />;
};

export default App;
```

## 分组子弹图-带颜色范围区间

```tsx
import React from 'react';
import { Bullet } from '@alipay/techui-charts';

const App: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '分组子弹图-带颜色范围区间',
    },
    data: [
      {
        title: '广州',
        measures: [83],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
      {
        title: '深圳',
        measures: [73],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
      {
        title: '珠海',
        measures: [65],
        targets: [80],
        ranges: [0, 0.6, 0.75, 1],
      },
      {
        title: '汕头',
        measures: [83],
        targets: [70],
        ranges: [0, 0.6, 0.75, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          value: '实际进度', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '目标值', // 图例项的文本内容
          marker: {
            symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
            stroke: '#5B8FF9', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '差', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFB1AC', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '良', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#FFDBA2', // 该图例项 marker 的填充颜色
          },
        },
        {
          value: '优', // 图例项的文本内容
          marker: {
            symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
            fill: '#B4EBBF', // 该图例项 marker 的填充颜色
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default App;
```
