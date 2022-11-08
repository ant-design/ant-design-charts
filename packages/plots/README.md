# @ant-design/plots

<div align="center">

A React chart library, based on [G2Plot](https://github.com/antvis/G2Plot).

![npm](https://img.shields.io/npm/v/@ant-design/plots) ![npm](https://img.shields.io/npm/dm/@ant-design/plots) [![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers) [![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a>
</p>

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*sXqrRrEwFRQAAAAAAAAAAABkARQnAQ" width="800"/>

</div>

## ✨ Features

- Easy to use
- TypeScript
- Pretty & Lightweight
- Responsive
- Storytelling

## 📦 Installation

```bash | pure
$ npm install @ant-design/plots
```

## 🔨 Usage

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
    width: 800,
    height: 400,
    autoFit: false,
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

  let chart;

  // Export Image
  const downloadImage = () => {
    chart?.downloadImage();
  };

  // Get chart base64 string
  const toDataURL = () => {
    console.log(chart?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        Export Image
      </button>
      <button type="button" onClick={toDataURL}>
        Get base64
      </button>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </div>
  );
};
export default Page;
```

Preview

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*xTY6QIQsWcwAAAAAAAAAAAAAARQnAQ" width="600">

## 📜 Document & API

See chart API for details. Common props:

| Property        | Description           | Type                          | defaultValue |
| --------------- | --------------------- | ----------------------------- | ------------ |
| onReady         | chart loaded callback | (chart)=> void                | -            |
| onEvent         | chart events          | (chart, event)=> void         | -            |
| loading         | loading status        | boolean                       | -            |
| loadingTemplate | loading template      | React.ReactElement            | -            |
| errorTemplate   | custom error template | (e: Error) => React.ReactNode | -            |
| className       | container class       | string                        | -            |
| style           | container style       | React.CSSProperties           | -            |

## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/ant-design/ant-design-charts/issues) first.

## 📧 Contact us

DingTalk group number: `44788198 `.

<img src="https://gw.alipayobjects.com/zos/antfincdn/bi1LxWeIEj/32f85bbf-a06e-4046-96e5-417126bffeaf.png" width="200" height="266" />

## License

MIT
