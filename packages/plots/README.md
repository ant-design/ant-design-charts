# @ant-design/plots

<div align="center">

A React chart library, based on [G2](https://github.com/antvis/G2).

![npm](https://img.shields.io/npm/v/@ant-design/plots) ![npm](https://img.shields.io/npm/dm/@ant-design/plots) [![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers) [![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
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
iimport React from 'react';
import { Line } from '@ant-design/plots';

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
    xField: 'year',
    yField: 'value',
  };

  return <Line {...config} />;
};
export default Page;
```

Preview

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*xTY6QIQsWcwAAAAAAAAAAAAAARQnAQ" width="600">

## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/ant-design/ant-design-charts/issues) first.

## 📧 Contact us

DingTalk group number: `44788198 `.

<img src="https://gw.alipayobjects.com/zos/antfincdn/bi1LxWeIEj/32f85bbf-a06e-4046-96e5-417126bffeaf.png" width="200" height="266" />

## License

MIT
