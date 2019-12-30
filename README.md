---
order: 1
---

# TechCharts

A react chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh), current version 0.2.1, refer to [config](https://g2plot.antv.vision/zh/docs/manual/introduction)

## Features

- Easy to use
- TypeScript

## Installation

### npm

```bash | pure
$ npm install @alipay/techui-charts
```

### umd

```html  | pure
<script src="xxx/xx.min.js"></script>
```

## Usage

```tsx  | pure
import React, { useRef } from 'react';
import { Line } from '@alipay/techui-charts';

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
  title: {
    visible: true,
    text: '我是标题',
  },
};

const ref = useRef(null);

<Line chartRef={ref} {...config} />;
```

## Document

### tutorial

- [quick start]()
- [chart type]()

### api

- [Line](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/line)
- [TinyLine](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-line)
- [MultipleLine](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/line?anchor=multiple-line)
- [Pie](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/pie)
- [Progress](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/progress)
- [Ring](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/ring)
- [RingProgress](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/ring-progress)
- [Bar](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/ba)
- [StackBar](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/stack-bar)
- [PercentageStackBar](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/percentage-stack-bar)
- [GroupedBar](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/group-bar)
- [Area](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/area)
- [TinyArea](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-area)
- [StackArea](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/stack-area)
- [PercentageStackArea](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/percentage-stack-area)
- [Column](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/column)
- [TinyColumn](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-column)
- [StackColumn](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/stack-column)
- [PercentageStackColumn](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/percentage-stack-column)
- [GroupColumn](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/group-column)
- [Histogram](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/hsistogram)
- [Scatter](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/scatter)
- [Bubble](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/bubble)
- [Radar](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/radar)
- [Liquid](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/liquid)
- [Gauge](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/gauge)
- [Progress](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/progress)
- [RingProgress](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/ring-progress)
- [TinyArea](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-area)
- [TinyColumn](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-column)
- [TinyLine](https://bigfish.antfin-inc.com/component/@alipay/techui-charts/tiny-line)

### [FAQ](http://gitlab.alipay-inc.com/tech-ui/tech-chart/issues)

### How to Contribute

We welcome all contributions. contact [Fu Jin](https://yuque.antfin-inc.com/liufu.lf).

### License

Charts is available under the License MIT.

## 开发

### 准备工作

- 安装 [nodejs](https://nodejs.org/en/)

### 启动

```bash  | pure
# 安装依赖
$ npm install

# 开发 library
$ npm run dev
```

## 贡献者

- [福晋](https://yuque.antfin-inc.com/liufu.lf)
- [辟起](https://yuque.antfin-inc.com/shengtao.xst)
- [期贤](https://yuque.antfin-inc.com/qixian.cs)
- [愚道](https://yuque.antfin-inc.com/tingzhao.ytz)
- [偏右](https://yuque.antfin-inc.com/xingmin.zhu)
