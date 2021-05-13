---
title: Ant Design Charts - 简单好用的 React 图表库
order: 10
hero:
  title: Ant Design Charts
  desc: 简单好用的 React 图表库
  actions:
    - text: 快速上手
      link: /zh-CN/guide/start
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: React 组件的方式使用图表，一个简单的配置就能呈现优雅、标准的图表
  - icon: https://gw.alipayobjects.com/zos/antfincdn/oyqsrPh0Kg/houyuan.png
    title: 后援强大
    desc: AntV 团队支持，基于 G2Plot 实现，简单方便、专业可靠、无限可能
  - icon: https://gw.alipayobjects.com/zos/antfincdn/aKCFl7vDAB/tubiao.png
    title: 图表完善
    desc: 支持全量的 G2Plot 图表，几乎做到同步升级更新
footer: Open-source MIT Licensed | Copyright © 2019-present
---

## 安装

```bash
$ npm install @ant-design/charts
```

## 使用

```tsx | pure
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value1: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return <Line {...config} />;
};
export default Page;
```

最终结果：

```tsx
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return <Line {...config} />;
};
export default Page;
```

## 反馈

请访问 [GitHub](https://github.com/ant-design/ant-design-charts)

## 联系我们

- 钉钉群组号码: 30233731

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*g8nmS4bI33EAAAAAAAAAAAAAARQnAQ" width="200" alt="DingTalk">
