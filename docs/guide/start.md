---
title: 快速开始
order: 2
nav:
  title: 使用文档
  order: 1
---

## 快速上手

## 安装

```bash
$ npm install @ant-design/charts
```

## 使用

### ClassComponent

```tsx | pure
import React, { Component } from 'react';
import { Line } from '@ant-design/charts';

class Page extends Component {
  render() {
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
      title: {
        visible: true,
        text: '带数据点的折线图',
      },
      xField: 'year',
      yField: 'value',
    };
    return <Line {...config} />;
  }
}
export default Page;
```

### FunctionComponent

```tsx | pure
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
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    xField: 'year',
    yField: 'value',
  };
  return <Line {...config} />;
};
export default Page;
```

最终结果：

<img src="https://gw.alipayobjects.com/zos/antfincdn/8hy4uv7YyD/60155b1e-41b0-4e02-8ce1-8c7044792ce8.png" width="600">

### 代码查看

在图表演示中点击代码图表可以查看代码 <img src="https://gw.alipayobjects.com/zos/antfincdn/HSJ5yd13zD/5be57c98-089d-4b67-adfa-e9a2914fdc81.png" width="600">
