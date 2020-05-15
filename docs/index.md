---
title: antd/charts - 基于 Umi、为组件开发场景而生的文档工具
order: 10
hero:
  title: antd/charts
  desc: AntV的上层可视化库、G2plot的React版
  actions:
    - text: 快速上手
      link: /guide/start
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: React组件的方式使用图表，一个简单的配置就能呈现优雅、标准的图表
  - icon: https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ
    title: 后援强大
    desc: AntV团队支持，基于G2plot实现，简单方便、专业可靠、无限可能。
  - icon: https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*icqYSbEiNxIAAAAAAAAAAABkARQnAQ
    title: 图表完善
    desc: 支持全量的G2plot图表，几乎做到同步升级更新。
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
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

<img src="https://gw.alipayobjects.com/zos/antfincdn/8hy4uv7YyD/60155b1e-41b0-4e02-8ce1-8c7044792ce8.png" >

## 反馈

请访问 [GitHub](https://github.com/ant-design/ant-design-charts)
