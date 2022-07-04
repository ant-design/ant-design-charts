# @ant-design/charts

<div align="center">

A React chart library, based on [G2Plot](https://github.com/antvis/G2Plot), [G6](https://github.com/antvis/G6), [X6](https://github.com/antvis/X6), [L7Plot](https://github.com/antvis/L7Plot).

![build](https://github.com/ant-design/ant-design-charts/workflows/build/badge.svg)
![npm](https://img.shields.io/npm/v/@ant-design/charts)
![npm](https://img.shields.io/npm/dm/@ant-design/charts)
[![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers)
[![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/guide/start">Quick Start</a> •
  <a href="https://charts.ant.design/demos/global">Gallery</a> •
  <a href="https://charts.ant.design/guide/faq">FAQ</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a>
</p>

</div>

## Case

### Statistical charts
<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*sXqrRrEwFRQAAAAAAAAAAABkARQnAQ" width="800"/>

### Flowchart
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*ixVAQrEoCTcAAAAAAAAAAAAAARQnAQ />

### Maps
<img src="https://gw.alipayobjects.com/zos/antfincdn/xX10CNIu4b/8a064058-518e-4860-af54-58ca17cae985.png" />

### Relation Graphs
<img src="https://gw.alipayobjects.com/zos/antfincdn/4wquuBREI7/2f4acfc5-6e14-4972-abc1-ce9ee1ff5c07.png" />


## ✨ Features

- Easy to use
- TypeScript
- Pretty & Lightweight
- Responsive
- Storytelling


## 📦 Installation

```bash | pure
$ npm install @ant-design/charts
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

| Property | Description | Type | defaultValue |
| --- | --- | --- | --- |
| onReady | chart loaded callback | (chart)=> void | - |
| onEvent | chart events | (chart, event)=> void | - |
| loading | loading status | boolean | - |
| loadingTemplate | loading template | React.ReactElement | - |
| errorTemplate | custom error template | (e: Error) => React.ReactNode | - |
| className | container class | string | - |
| style | container style | React.CSSProperties | - |


## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/antvis/g2plot/issues) first.


## 📧 Contact us

DingTalk group number: `32183967`.

<img src="https://gw.alipayobjects.com/zos/antfincdn/8qEHi7GiaN/G2Plot-dingding.JPG" width="200" height="266" />


## License

MIT
