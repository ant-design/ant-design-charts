---
order: 9
---

# [techui-charts](https://bigfish.antfin-inc.com/component/@alipay/techui-charts)

A react chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh), current version 0.1.21, refer to [config](https://g2plot.antv.vision/zh/docs/manual/introduction)

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

### Line

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

### Bubble

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@alipay/techui-charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    title: {
      visible: true,
      text: '基础气泡图',
    },
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.8,
    },
    xAxis: {
      visble: true,
      max: 5,
      min: -25,
    },
  };
  return <Bubble {...config} />;
};

export default () => <DemoBubble />;
```

## Document

### api

- [Line](/component/@alipay/techui-charts/line)
- [TinyLine](/component/@alipay/techui-charts/tiny-line)
- [MultipleLine](/component/@alipay/techui-charts/line?anchor=multiple-line)
- [Pie](/component/@alipay/techui-charts/pie)
- [Progress](/component/@alipay/techui-charts/progress)
- [Ring](/component/@alipay/techui-charts/ring)
- [RingProgress](/component/@alipay/techui-charts/ring-progress)
- [Bar](/component/@alipay/techui-charts/bar)
- [StackBar](/component/@alipay/techui-charts/stack-bar)
- [PercentageStackBar](/component/@alipay/techui-charts/percentage-stack-bar)
- [GroupedBar](/component/@alipay/techui-charts/group-bar)
- [Area](/component/@alipay/techui-charts/area)
- [TinyArea](/component/@alipay/techui-charts/tiny-area)
- [StackArea](/component/@alipay/techui-charts/stack-area)
- [PercentageStackArea](/component/@alipay/techui-charts/percentage-stack-area)
- [Column](/component/@alipay/techui-charts/column)
- [TinyColumn](/component/@alipay/techui-charts/tiny-column)
- [StackColumn](/component/@alipay/techui-charts/stack-column)
- [PercentageStackColumn](/component/@alipay/techui-charts/percentage-stack-column)
- [GroupColumn](/component/@alipay/techui-charts/group-column)
- [Heatmap](/component/@alipay/techui-charts/heatmap)
- [Histogram](/component/@alipay/techui-charts/histogram)
- [Scatter](/component/@alipay/techui-charts/scatter)
- [Bubble](/component/@alipay/techui-charts/bubble)
- [Radar](/component/@alipay/techui-charts/radar)
- [Liquid](/component/@alipay/techui-charts/liquid)
- [Gauge](/component/@alipay/techui-charts/gauge)
- [Progress](/component/@alipay/techui-charts/progress)
- [RingProgress](/component/@alipay/techui-charts/ring-progress)
- [TinyArea](/component/@alipay/techui-charts/tiny-area)
- [TinyColumn](/component/@alipay/techui-charts/tiny-column)
- [TinyLine](/component/@alipay/techui-charts/tiny-line)

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
