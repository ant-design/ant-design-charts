---
title: 折线图
order: 2
---

# 折线图

## Line

### 配置折线数据点样式

<a href="https://antv-g2plot.gitee.io/zh/examples/line/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '配置折线数据点样式',
    },
    description: {
      visible: true,
      text: '自定义配置趋势线上数据点的样式',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    label: {
      visible: true,
      type: 'point',
    },
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 为折线添加缩略轴交互

<a href="https://antv-g2plot.gitee.io/zh/examples/line/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '为折线添加缩略轴交互',
    },
    description: {
      visible: true,
      text:
        '缩略轴 (slider) 交互适用于折线数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: '城市',
    xAxis: {
      visible: true,
      label: { autoHide: true },
    },
    yField: '销售额',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.1,
          end: 0.2,
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 曲线折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '曲线折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线\u3002',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 带数据点的折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    description: {
      visible: true,
      text: '将折线图上的每一个数据点显示出来\uFF0C作为辅助阅读\u3002',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    point: { visible: true },
    label: {
      visible: true,
      type: 'point',
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 单折线图的基础用法

<a href="https://antv-g2plot.gitee.io/zh/examples/line/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '单折线图的基础用法',
    },
    description: {
      visible: true,
      text: '最基础简单的折线图使用方式\uFF0C显示一个指标的趋势',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

## Line

### 标注最大值（带动画）

<a href="https://antv-g2plot.gitee.io/zh/examples/line/marker/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2019-01-01',
      value: 3,
    },
    {
      date: '2019-02-01',
      value: 4,
    },
    {
      date: '2019-03-01',
      value: 3.5,
    },
    {
      date: '2019-04-01',
      value: 5,
    },
    {
      date: '2019-05-01',
      value: 4.9,
    },
    {
      date: '2019-06-01',
      value: 6,
    },
    {
      date: '2019-07-01',
      value: 7,
    },
    {
      date: '2019-08-01',
      value: 9,
    },
    {
      date: '2019-09-01',
      value: 3,
    },
    {
      date: '2019-10-01',
      value: 16,
    },
    {
      date: '2019-11-01',
      value: 6,
    },
    {
      date: '2019-12-01',
      value: 8,
    },
  ];
  const maxValue = Math.max.apply(
    [],
    data.map((d) => d.value),
  );
  const config = {
    title: {
      visible: true,
      text: '标注最大值\uFF08带动画\uFF09',
    },
    description: {
      visible: true,
      text: '可通过 animation 配置标注点的动画',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { nice: true },
    label: { visible: false },
    markerPoints: [
      {
        visible: true,
        data: [{ value: maxValue }],
        label: {
          visible: true,
          formatter: () => '最大值',
        },
        style: { normal: { fill: 'rgba(255, 0, 0, 0.65)' } },
        animation: {
          endState: {
            size: 4,
            opacity: 0.3,
          },
          animateCfg: {
            duration: 1500,
            easing: 'easeLinear',
            repeat: true,
            delay: 1200,
          },
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 带标注点的折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/marker/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2019-01-01',
      value: 3,
    },
    {
      date: '2019-02-01',
      value: 4,
    },
    {
      date: '2019-03-01',
      value: 3.5,
    },
    {
      date: '2019-04-01',
      value: 5,
    },
    {
      date: '2019-05-01',
      value: 4.9,
      festival: '劳动节',
    },
    {
      date: '2019-06-01',
      value: 6,
    },
    {
      date: '2019-07-01',
      value: 7,
    },
    {
      date: '2019-08-01',
      value: 9,
    },
    {
      date: '2019-09-01',
      value: 3,
    },
    {
      date: '2019-10-01',
      value: 13,
      festival: '国庆节',
    },
    {
      date: '2019-11-01',
      value: 6,
    },
    {
      date: '2019-12-01',
      value: 23,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '带标注点的折线图',
    },
    description: {
      visible: true,
      text: '在折线图上标注重点的数据\uFF0C如节假日等',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { nice: true },
    label: { visible: false },
    markerPoints: [
      {
        visible: true,
        data: [
          {
            date: '2019-05-01',
            value: 4.9,
          },
          { date: '2019-10-01' },
        ],
        label: {
          visible: true,
          field: 'festival',
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 使用 image 定义标注点

<a href="https://antv-g2plot.gitee.io/zh/examples/line/marker/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2019-01-01',
      value: 3,
    },
    {
      date: '2019-02-01',
      value: 4,
    },
    {
      date: '2019-03-01',
      value: 3.5,
    },
    {
      date: '2019-04-01',
      value: 5,
    },
    {
      date: '2019-05-01',
      value: 4.9,
    },
    {
      date: '2019-06-01',
      value: 6,
    },
    {
      date: '2019-07-01',
      value: 7,
    },
    {
      date: '2019-08-01',
      value: 9,
    },
    {
      date: '2019-09-01',
      value: 7,
    },
    {
      date: '2019-10-01',
      value: 13,
    },
    {
      date: '2019-11-01',
      value: 13,
    },
    {
      date: '2019-12-01',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '使用 image 定义标注点',
    },
    description: {
      visible: true,
      text: '除了内置 symbol\uFF0C还可以通过 "image://url" 设置为图片\uFF0C其中 url 为图片的链接',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { nice: true },
    label: { visible: false },
    markerPoints: [
      {
        visible: true,
        data: [{ date: '2019-09-01' }],
        size: 20,
        symbol:
          'image://https://gw.alipayobjects.com/mdn/rms_a30de3/afts/img/A*66RtR4cXNWoAAAAAAAAAAABkARQnAQ',
        label: {
          visible: true,
          position: 'bottom',
          offsetY: 8,
        },
        style: {
          normal: {
            lineWidth: 0,
            fill: 'transparent',
          },
          active: {
            lineWidth: 0,
            fill: 'transparent',
          },
          selected: {
            lineWidth: 0,
            fill: 'transparent',
          },
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 自定义标注点 symbol

<a href="https://antv-g2plot.gitee.io/zh/examples/line/marker/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2019-01-01',
      value: 3,
    },
    {
      date: '2019-02-01',
      value: 4,
    },
    {
      date: '2019-03-01',
      value: 3.5,
    },
    {
      date: '2019-04-01',
      value: 5,
    },
    {
      date: '2019-05-01',
      value: 4.9,
    },
    {
      date: '2019-06-01',
      value: 6,
    },
    {
      date: '2019-07-01',
      value: 7,
    },
    {
      date: '2019-08-01',
      value: 9,
    },
    {
      date: '2019-09-01',
      value: 3,
    },
    {
      date: '2019-10-01',
      value: 23,
    },
    {
      date: '2019-11-01',
      value: 6,
    },
    {
      date: '2019-12-01',
      value: 8,
    },
  ];
  const generateStarPoints = (x, y, r) => {
    const points = [];
    for (let i = 0; i < 5; i++) {
      const x1 = r * Math.cos(((54 + i * 72) / 180) * Math.PI) + x;
      const y1 = r * Math.sin(((54 + i * 72) / 180) * Math.PI) + y;
      const x2 = r * Math.cos(((18 + i * 72) / 180) * Math.PI) * 0.5 + x;
      const y2 = r * Math.sin(((18 + i * 72) / 180) * Math.PI) * 0.5 + y;
      points.push([x2, y2]);
      points.push([x1, y1]);
    }
    return points;
  };
  const config = {
    title: {
      visible: true,
      text: '自定义标注点 symbol',
    },
    description: {
      visible: true,
      text: '内置 symbol 类型有\uFF1Across, hexagon, bowtie, tick, plus, hyphen, line',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { nice: true },
    label: { visible: false },
    markerPoints: [
      {
        visible: true,
        data: [{ value: 23 }],
        label: {
          visible: true,
          formatter: () => '最大值',
        },
        size: 12,
        style: {
          normal: {
            fill: 'rgba(255, 255, 0, 0.85)',
            stroke: 'rgba(0,0,0,0.65)',
            lineWidth: 1,
          },
        },
        symbol: (x, y, r) => {
          const points = generateStarPoints(x, y, r);
          const path = [];
          points.forEach((point, idx) => {
            path.push([idx === 0 ? 'M' : 'L', point[0], point[1]]);
          });
          path.push(['Z']);
          return path;
        },
        animation: {
          endState: {
            size: 4,
            opacity: 0.3,
          },
          animateCfg: {
            duration: 1500,
            easing: 'easeLinear',
            repeat: true,
            delay: 1200,
          },
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多种类型标注点

<a href="https://antv-g2plot.gitee.io/zh/examples/line/marker/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2019-01-01',
      value: 3,
    },
    {
      date: '2019-02-01',
      value: 4,
    },
    {
      date: '2019-03-01',
      value: 3.5,
    },
    {
      date: '2019-04-01',
      value: 5,
    },
    {
      date: '2019-05-01',
      value: 4.9,
      festival: '劳动节',
    },
    {
      date: '2019-06-01',
      value: 6,
    },
    {
      date: '2019-07-01',
      value: 7,
    },
    {
      date: '2019-08-01',
      value: 9,
    },
    {
      date: '2019-09-01',
      value: -7,
      error: '异常',
    },
    {
      date: '2019-10-01',
      value: 13,
      festival: '国庆节',
    },
    {
      date: '2019-11-01',
      value: 13,
    },
    {
      date: '2019-12-01',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多种类型标注点',
    },
    description: {
      visible: true,
      text: '在折线图上标注重点的数据\uFF0C如节假日\u3001异常点等',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { nice: true },
    label: { visible: false },
    markerPoints: [
      {
        visible: true,
        data: [
          {
            date: '2019-05-01',
            value: 4.9,
          },
          { date: '2019-10-01' },
        ],
        label: {
          visible: true,
          field: 'festival',
        },
      },
      {
        visible: true,
        data: [{ date: '2019-09-01' }],
        symbol: 'cross',
        label: {
          visible: true,
          field: 'error',
          position: 'bottom',
          offsetY: 8,
        },
        style: {
          normal: {
            stroke: 'rgba(255, 0, 0, 0.65)',
            lineWidth: 2,
          },
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

## Line

### 多折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623,
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208,
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182,
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145,
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016,
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257,
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508,
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916,
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289,
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311,
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188,
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548,
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116,
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491,
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456,
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419,
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852,
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689,
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643,
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788,
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280,
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445,
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319,
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多折线图',
    },
    description: {
      visible: true,
      text: '通过回调函数指定折线颜色',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    color: (d) => {
      return d === 'register' ? '#93D072' : '#2D71E7';
    },
    responsive: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623,
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208,
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182,
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145,
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016,
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257,
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508,
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916,
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289,
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311,
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188,
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548,
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116,
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491,
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456,
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419,
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852,
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689,
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643,
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788,
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280,
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445,
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319,
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多折线图',
    },
    description: {
      visible: true,
      text: '指定折线颜色',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
    responsive: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 2000 ~ 2018 年各国家 GDP 趋势对比

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24KjfUOgRYa/GDP.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '2000 ~ 2018 年各国家 GDP 趋势对比',
    },
    description: {
      visible: true,
      text:
        '图形标签 (label) 位于折线尾部\uFF0C用于标注整根折线\uFF0C并有带有排名的含义在其中\u3002',
    },
    padding: [20, 100, 30, 80],
    forceFit: true,
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      type: 'dateTime',
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
    legend: { visible: false },
    label: {
      visible: true,
      type: 'line',
    },
    animation: { appear: { animation: 'clipingWithData' } },
    smooth: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### The causes of CO2 emissions

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/oSZa1qh9tB/emissions.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: 'The causes of CO2 emissions',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: { type: 'time' },
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    responsive: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623,
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208,
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182,
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145,
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016,
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257,
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508,
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916,
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289,
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311,
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188,
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548,
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116,
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491,
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456,
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419,
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852,
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689,
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643,
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788,
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280,
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445,
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319,
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多折线图',
    },
    description: {
      visible: true,
      text: '将数据按照某一字段进行分组\uFF0C用于比对不同类型数据的趋势\u3002',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    responsive: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623,
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208,
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182,
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145,
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016,
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257,
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508,
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916,
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289,
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311,
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188,
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548,
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116,
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491,
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456,
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419,
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852,
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689,
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643,
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788,
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280,
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445,
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319,
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多折线图',
    },
    description: {
      visible: true,
      text: '指定折线颜色',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
    lineStyle: (d) => {
      if (d === 'register') {
        return {
          lineDash: [2, 2],
          opacity: 1,
        };
      }
      return { opacity: 0.2 };
    },
    responsive: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```
