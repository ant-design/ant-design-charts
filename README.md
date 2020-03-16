---
order: 9
---

# [techui-charts](https://bigfish.antfin-inc.comhttps://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts)

A React chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh), current version 0.2.9, refer to [config](https://g2plot.antv.vision/zh/docs/manual/introduction)

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

```tsx
import React, { useRef } from 'react';
import { Line } from '@alipay/techui-charts';

const App: React.FC = () => {
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
  return <Line chartRef={ref} {...config} />;
};

export default App;
```

### Custom tooltip

```tsx
import React from 'react';
import { Line, utils } from '@alipay/techui-charts';

const App: React.FC = () => {
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

  const reactNode = (title: string, list = []) => {
    return (
      <>
        {list?.map((item: any) => (
          <div key={item.name}>
            <span>{item.title}: </span>
            <span>{item.value}</span>
          </div>
        ))}
      </>
    );
  };

  const config = {
    data,
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    description: {
      visible: true,
      text: '将折线图上的每一个数据点显示出来，作为辅助阅读。',
    },
    forceFit: true,
    padding: 'auto',
    xField: 'year',
    yField: 'value',
    point: {
      visible: true,
    },
    label: {
      visible: true,
      type: 'point',
    },
    tooltip: {
      visible: true,
      htmlContent: (title: string, item: never[]) => {
        return utils.createNode(reactNode(title, item));
      },
    },
  };
  return <Line {...config} />;
};

export default App;
```

### Bubble

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@alipay/techui-charts';

const App: React.FC = () => {
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

export default App;
```

## Gallery

[gallery](https://g2plot.antv.vision/zh/examples/gallery)

## Document

### API

Refer to [G2Plot](https://g2plot.antv.vision/zh/docs/manual/general-config)

Extra props:

| Property  | Description     | Type                                        | defaultValue |
| --------- | --------------- | ------------------------------------------- | ------------ |
| chartRef  | chart ref       | (React.MutableRefObject&lt;Line&gt;)=> void | -            |
| className | container class | string                                      | -            |
| style     | container style | React.CSSProperties                         | -            |

### Support Chart

- [Line](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/line)
- [TinyLine](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-line)
- [MultipleLine](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/line?anchor=multiple-line)
- [Pie](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/pie)
- [Progress](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/progress)
- [Ring](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/ring)
- [RingProgress](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/ring-progress)
- [Bar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/bar)
- [StackBar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/stack-bar)
- [PercentageStackBar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/percentage-stack-bar)
- [GroupBar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/group-bar)
- [Area](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/area)
- [TinyArea](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-area)
- [StackArea](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/stack-area)
- [PercentageStackArea](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/percentage-stack-area)
- [Column](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/column)
- [TinyColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-column)
- [StackColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/stack-column)
- [PercentageStackColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/percentage-stack-column)
- [GroupColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/group-column)
- [Heatmap](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/heatmap)
- [Histogram](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/histogram)
- [Scatter](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/scatter)
- [Bubble](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/bubble)
- [Radar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/radar)
- [RangeBar](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/range-bar)
- [RangeColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/range-column)
- [Liquid](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/liquid)
- [Matrix](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/matrix)
- [Gauge](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/gauge)
- [Progress](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/progress)
- [RingProgress](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/ring-progress)
- [TinyArea](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-area)
- [TinyColumn](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-column)
- [TinyLine](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/tiny-line)
- [StepLine](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/step-line)
- [Waterfall](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/water-fall)
- [Funnel](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/funnel)
- [WordCloud](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/word-cloud)
- [Bullet](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/bullet)
- [Treemap](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/treemap)
- [OverlappedComboPlot](https://bigfish.antfin-inc.com/component-doc/@alipay/techui-charts/overlapped-combo-plot)

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

## Contributors(5)

Ordered by date of first contribution, by [ali-contributors](https://gitlab.alibaba-inc.com/node/ali-contributors).

- <a target="_blank" href="https://work.alibaba-inc.com/work/u/206791"><img style="vertical-align: middle;" width="20" src="https://work.alibaba-inc.com/photo/206791.40x40.xz.jpg"> @福晋</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=x3qyp7i"><img style="vertical-align: middle;" width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"> 福晋</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/197256"><img style="vertical-align: middle;" width="20" src="https://work.alibaba-inc.com/photo/197256.40x40.xz.jpg"> @辟起</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=wuzoh5u"><img style="vertical-align: middle;" width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"> 辟起 🍑</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/138591"><img style="vertical-align: middle;" width="20" src="https://work.alibaba-inc.com/photo/138591.40x40.xz.jpg"> @愚道</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=yutingzhao1991"><img style="vertical-align: middle;" width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"> 愚道</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/159252"><img style="vertical-align: middle;" width="20" src="https://work.alibaba-inc.com/photo/159252.40x40.xz.jpg"> @期贤</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=zzo4dlq"><img style="vertical-align: middle;" width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"> 期贤 🙏</a>
- <a target="_blank" href="https://work.alibaba-inc.com/work/u/85225"><img style="vertical-align: middle;" width="20" src="https://work.alibaba-inc.com/photo/85225.40x40.xz.jpg"> @绯一</a> <a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=qpfulnc"><img style="vertical-align: middle;" width="20" src="https://img.alicdn.com/tfs/TB18HtyiyqAXuNjy1XdXXaYcVXa-24-24.svg"> 绯一</a>

---
