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

```tsx
import React from 'react';
import { Map } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    {
      name: '云南省',
      code: 530000,
      value: 17881.12,
    },
    {
      name: '黑龙江省',
      code: 230000,
      value: 16361.62,
    },
    {
      name: '贵州省',
      code: 520000,
      value: 14806.45,
    },
    {
      name: '北京市',
      code: 110000,
      value: 30319.98,
    },
    {
      name: '河北省',
      code: 130000,
      value: 36010.27,
    },
    {
      name: '山西省',
      code: 140000,
      value: 16818.11,
    },
    {
      name: '吉林省',
      code: 220000,
      value: 15074,
    },
    {
      name: '宁夏回族自治区',
      code: 640000,
      value: 3705.18,
    },
    {
      name: '辽宁省',
      code: 210000,
      value: 25315.35,
    },
    {
      name: '海南省',
      code: 460000,
      value: 4832.05,
    },
    {
      name: '内蒙古自治区',
      code: 150000,
      value: 17289.22,
    },
    {
      name: '天津市',
      code: 120000,
      value: 18809.64,
    },
    {
      name: '新疆维吾尔自治区',
      code: 650000,
      value: 12199.08,
    },
    {
      name: '上海市',
      code: 310000,
      value: 32679.87,
    },
    {
      name: '陕西省',
      code: 610000,
      value: 24438.32,
    },
    {
      name: '甘肃省',
      code: 620000,
      value: 8246.07,
    },
    {
      name: '安徽省',
      code: 340000,
      value: 30006.82,
    },
    {
      name: '香港特别行政区',
      code: 810000,
      value: 0,
    },
    {
      name: '广东省',
      code: 440000,
      value: 97277.77,
    },
    {
      name: '河南省',
      code: 410000,
      value: 48055.86,
    },
    {
      name: '湖南省',
      code: 430000,
      value: 36425.78,
    },
    {
      name: '江西省',
      code: 360000,
      value: 21984.78,
    },
    {
      name: '四川省',
      code: 510000,
      value: 40678.13,
    },
    {
      name: '广西壮族自治区',
      code: 450000,
      value: 20353.51,
    },
    {
      name: '江苏省',
      code: 320000,
      value: 92595.4,
    },
    {
      name: '澳门特别行政区',
      code: 820000,
      value: null,
    },
    {
      name: '浙江省',
      code: 330000,
      value: 56197.15,
    },
    {
      name: '山东省',
      code: 370000,
      value: 76469.67,
    },
    {
      name: '青海省',
      code: 630000,
      value: 2865.23,
    },
    {
      name: '重庆市',
      code: 500000,
      value: 20363.19,
    },
    {
      name: '福建省',
      code: 350000,
      value: 35804.04,
    },
    {
      name: '湖北省',
      code: 420000,
      value: 39366.55,
    },
    {
      name: '西藏自治区',
      code: 540000,
      value: 1477.63,
    },
    {
      name: '台湾省',
      code: 710000,
      value: null,
    },
  ];

  const config = {
    data,
    type: 'province',
    mapConfig: {
      center: [116.2825, 39.9],
      pitch: 0,
      style: 'blank',
      zoom: 3,
      minZoom: 0,
      maxZoom: 10,
    },
    style: {
      height: 800,
    },
    option: {},
  };
  return (
    <div style={{ height: 800 }}>
      <Map {...config} />
    </div>
  );
};
export default Page;
```

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
