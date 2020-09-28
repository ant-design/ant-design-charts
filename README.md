# @ant-design/charts

A React chart library, based on [G2Plot](https://antv-g2plot.gitee.io/zh)

<div align="center">

![npm](https://img.shields.io/npm/dm/@ant-design/charts) ![npm](https://img.shields.io/npm/v/@ant-design/charts) [![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers) ![Test CI](https://github.com/ant-design/ant-design-charts/workflows/Test%20CI/badge.svg)

</div>

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

```tsx | pure
import React, { useRef } from 'react';
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

  const ref = useRef();

  // 导出图片
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
        导出图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图表信息
      </button>
      <Line {...config} chartRef={ref} />
    </div>
  );
};
export default Page;
```

result：

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*xTY6QIQsWcwAAAAAAAAAAAAAARQnAQ" width="600">

## Gallery

[gallery](https://charts.ant.design/demos/global)

## Document

### API

See chart API for details.

Common props:

| Property | Description | Type | defaultValue |
| --- | --- | --- | --- |
| chartRef | chart ref | (React.MutableRefObject&lt;Chart&gt;)=> void | - |
| loading | loading status | boolean | - |
| loadingTemplate | loading template | React.ReactElement | - |
| errorTemplate | custom error template | (e: Error) => React.ReactNode | - |
| className | container class | string | - |
| style | container style | React.CSSProperties | - |

[More usage](https://charts.ant.design/guide/case)

### [FAQ](https://github.com/ant-design/ant-design-charts/issues)

### How to Contribute

We welcome all contributions.

### License

Charts is available under the License MIT.

## develop

### depend

- install [nodejs](https://nodejs.org/en/)

### start

```bash | pure
# 安装依赖
$ npm install

# 开发 library
$ npm run dev
```
