# @ant-design/charts

A React chart library, based on [G2Plot](https://antv-g2plot.gitee.io/zh)

<div align="center">
<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*sXqrRrEwFRQAAAAAAAAAAABkARQnAQ" width="800"/>
</div>

## Features

- Easy to use
- TypeScript
- Pretty & Lightweight
- Responsive
- Storytelling

## Installation

### npm

```bash | pure
$ npm install @ant-design/charts
```

## Usage

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

result：

<img src="https://gw.alipayobjects.com/zos/antfincdn/8hy4uv7YyD/60155b1e-41b0-4e02-8ce1-8c7044792ce8.png" width="600">

## Gallery

[gallery](https://charts.ant.design/demos/global)

## Document

### API

Direct [G2Plot](https://antv-g2plot.gitee.io/zh)

Extra props:

| Property  | Description     | Type                                        | defaultValue |
| --------- | --------------- | ------------------------------------------- | ------------ |
| chartRef  | chart ref       | (React.MutableRefObject&lt;Line&gt;)=> void | -            |
| className | container class | string                                      | -            |
| style     | container style | React.CSSProperties                         | -            |

### [FAQ](https://github.com/ant-design/ant-design-charts/issues)

### How to Contribute

We welcome all contributions.

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

Ordered by date of first contribution.

- 福晋
- 辟起 🍑
- 愚道
- 期贤 🙏
- 绯一

---
