---
order: 1
---

# TechCharts

A react chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh), current version 0.1.0.

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
      text: '我是标题'
    },
    onInit: (chart)=>{
      console.log('canvas instance', chart);
    }
}

<Line {...config} />
```

## Document

### tutorial

- [quick start]()
- [chart type]()

### api

- [Line]()
- [TinyLine]()
- [MultipleLine]()
- [Pie]()
- [Progress]()
- [Ring]() = [RingProgress]()
- [Bar]()
- [StackBar]()
- [PercentageStackBar]()
- [GroupedBar]()
- [Area]()
- [TinyArea]()
- [StackedArea]()
- [PercentageStackBar]()
- [Column]()
- [TinyColumn]()
- [StackColumn]()
- [PercentageStackColumn]()
- [GroupColumn]()
- [Histogram]()
- [Scatter]()
- [Bubble]()
- [Radar]()
- [Liquid]()
- [Gauge]()
- [Progress]()
- [RingProgress]()
- [TinyArea]()
- [TinyColumn]()
- [TinyLine]()

- others
  - [onInit]()
  - [theme]()

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
