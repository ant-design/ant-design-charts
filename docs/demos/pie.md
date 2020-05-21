---
title: 饼图
order: 2
---

# 饼图

## Pie

### 多色饼图

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '多色饼图',
    },
    description: {
      visible: true,
      text:
        '指定颜色映射字段(colorField)\uFF0C饼图切片将根据该字段数据显示为不同的颜色\u3002指定颜色需要将color配置为一个数组\u3002\n当把饼图label的类型设置为inner时\uFF0C标签会显示在切片内部\u3002设置offset控制标签的偏移值\u3002',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'inner',
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 饼图-外部圆形图形标签(outer-center label)

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      type: `分类 ${i}`,
      value: (Math.random() * 10).toFixed(0) + 1,
    });
  }
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-外部圆形图形标签(outer-center label)',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为outer-center时\uFF0C标签在切片外部拉线显示\u3002outer-center布局的label发生遮挡会直接隐藏而不偏移躲避\uFF0C相对于outer label布局来说\uFF0C更美观',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer-center',
      formatter: (text, item) => `${item._origin.type}: ${item._origin.value}`,
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 饼图-外部图形标签(outer label)

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-外部图形标签(outer label)',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为outer时\uFF0C标签在切片外部拉线显示\u3002设置offset控制标签的偏移值\u3002',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer',
      offset: 20,
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 饼图-图形标签蜘蛛布局

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-图形标签蜘蛛布局',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为spider时\uFF0C标签分为两组\uFF0C在图表两侧拉线对齐显示\u3002一般来说\uFF0C蜘蛛布局的label更不容易相互遮挡\u3002',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'spider',
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

## Donut

###

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/donut/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Donut } from '@ant-design/charts';

const DemoDonut: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 15,
    },
    {
      type: '分类二',
      value: 14,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 27,
    },
  ];
  const config = {
    theme: { backgroundStyle: { fill: '#2d74f7' } },
    forceFit: true,
    radius: 0.8,
    padding: 'auto',
    data,
    color: ['#5a93fc', '#90b6fd', '#c8dbfe', '#ffffff'],
    angleField: 'value',
    colorField: 'type',
    statistic: {
      visible: true,
      content: {
        value: '32%',
        name: 'Texi & delivery',
      },
    },
    label: { visible: false },
    legend: {
      visible: true,
      position: 'bottom-center',
    },
    pieStyle: (v) => {
      if (v === '分类四') {
        return {
          shadowColor: '#4d4d4d',
          shadowBlur: 50,
          shadowOffsetX: -15,
        };
      }
      return {};
    },
  };
  return <Donut {...config} />;
};

export default DemoDonut;
```

### 环图

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/donut/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Donut } from '@ant-design/charts';

const DemoDonut: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图',
    },
    description: {
      visible: true,
      text: '环图的外半径决定环图的大小\uFF0C而内半径决定环图的厚度\u3002',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
  };
  return <Donut {...config} />;
};

export default DemoDonut;
```

### 环图-指标卡

<a href="https://antv-g2plot.gitee.io/zh/examples/pie/donut/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Donut } from '@ant-design/charts';

const DemoDonut: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图-指标卡',
    },
    description: {
      visible: true,
      text: '环图指标卡能够代替tooltip\uFF0C在环图中心挖空部分显示各分类的详细信息\u3002',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
    statistic: { visible: true },
  };
  return <Donut {...config} />;
};

export default DemoDonut;
```
