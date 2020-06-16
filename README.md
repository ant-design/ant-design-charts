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
import React, { Component, createRef } from 'react';
import { Line } from '@ant-design/charts';

class Page extends Component {
  ref = createRef();

  // DownloadImage
  downloadImage = () => {
    this.ref.current?.downloadImage();
  };

  // Get data base64
  toDataURL = () => {
    console.log(this.ref.current?.toDataURL());
  };

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

    return (
      <div>
        <button type="button" onClick={this.downloadImage} style={{ marginRight: 24 }}>
          下载图片
        </button>
        <button type="button" onClick={this.toDataURL}>
          获取图片信息
        </button>
        <Line {...config} chartRef={this.ref} />
      </div>
    );
  }
}
export default Page;
```

### FunctionComponent

```tsx | pure
import React, { useRef } from 'react';
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

  const ref = useRef();

  // 下载图片
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  // 获取图表 base64 数据
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        下载图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图片信息
      </button>
      <Line {...config} chartRef={ref} />
    </div>
  );
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

| Property  | Description       | Type                                        | defaultValue |
| --------- | ----------------- | ------------------------------------------- | ------------ |
| chartRef  | chart ref         | (React.MutableRefObject&lt;Line&gt;)=> void | -            |
| className | container class   | string                                      | -            |
| style     | container style   | React.CSSProperties                         | -            |
| memoData  | controll rerender | string \| number \| any []                  | -            |

[More usage](/guide/case)

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
