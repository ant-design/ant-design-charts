---
title: Ant Design Charts - Easy to use chart library
order: 10
hero:
  title: Ant Design Charts
  desc: Simple and easy to use React chart library
  actions:
    - text: Getting Started
      link: /guide/start
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Easy to use
    desc: The React component uses diagrams in a simple configuration that renders elegant, standard diagrams
  - icon: https://gw.alipayobjects.com/zos/antfincdn/oyqsrPh0Kg/houyuan.png
    title: AntV support
    desc: AntV team support, based on G2Plot implementation, simple, professional and reliable
  - icon: https://gw.alipayobjects.com/zos/antfincdn/aKCFl7vDAB/tubiao.png
    title: Rich Features
    desc: Support for a full range of G2Plot charts with nearly simultaneous updates
footer: Open-source MIT Licensed | Copyright © 2019-present
---

## Installation

```bash
$ npm install @ant-design/charts
```

## Usage

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

Result：

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

## ISSUES

Please visit the [GitHub](https://github.com/ant-design/ant-design-charts)

## Contact Us

- DingTalk Group Number: 30233731

<img src="https://gw.alipayobjects.com/zos/antfincdn/9sHnl5k%26u4/dingdingqun.png" width="200" height="266" />
