---
order: 9
---

# [techui-charts](https://bigfish.antfin-inc.com/component/@alipay/techui-charts)

A react chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh), current version 0.1.12, refer to [config](https://g2plot.antv.vision/zh/docs/manual/introduction)

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

### api

- [Line](line)
- [TinyLine](tiny-line)
- [MultipleLine](line?anchor=multiple-line)
- [Pie](pie)
- [Progress](progress)
- [Ring](ring)
- [RingProgress](ring-progress)
- [Bar](bar)
- [StackBar](stack-bar)
- [PercentageStackBar](percentage-stack-bar)
- [GroupedBar](group-bar)
- [Area](area)
- [TinyArea](tiny-area)
- [StackArea](stack-area)
- [PercentageStackArea](percentage-stack-area)
- [Column](column)
- [TinyColumn](tiny-column)
- [StackColumn](stack-column)
- [PercentageStackColumn](percentage-stack-column)
- [GroupColumn](group-column)
- [Histogram](histogram)
- [Scatter](scatter)
- [Bubble](bubble)
- [Radar](radar)
- [Liquid](liquid)
- [Gauge](gauge)
- [Progress](progress)
- [RingProgress](ring-progress)
- [TinyArea](tiny-area)
- [TinyColumn](tiny-column)
- [TinyLine](tiny-line)

### [FAQ](http://gitlab.alipay-inc.com/tech-ui/tech-charts/issues)

### How to Contribute

We welcome all contributions. contact [Fu Jin](https://yuque.antfin-inc.com/liufu.lf).

### License

Charts is available under the License MIT.

## develop

### depend

- install [nodejs](https://nodejs.org/en/)

### start

```bash  | pure
# 安装依赖
$ npm install

# 开发 library
$ npm run dev
```

## Contributors(4)

Ordered by date of first contribution, by [ali-contributors](https://gitlab.alibaba-inc.com/node/ali-contributors).

- <a target="_blank" href="https://work.alibaba-inc.com/work/u/206791"><img width="20" src="https://work.alibaba-inc.com/photo/206791.40x40.xz.jpg"> @福晋</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=x3qyp7i"><img width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"/> 福晋</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/197256"><img width="20" src="https://work.alibaba-inc.com/photo/197256.40x40.xz.jpg"> @辟起</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=wuzoh5u"><img width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"/> 辟起 🍑</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/138591"><img width="20" src="https://work.alibaba-inc.com/photo/138591.40x40.xz.jpg"> @愚道</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=yutingzhao1991"><img width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"/> 愚道</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/159252"><img width="20" src="https://work.alibaba-inc.com/photo/159252.40x40.xz.jpg"/> @期贤</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=zzo4dlq"><img width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"/> 期贤 🙏</a>
