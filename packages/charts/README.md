# @ant-design/charts

<div align="center">

A React chart library, based on [G2](https://github.com/antvis/G2), [G6](https://github.com/antvis/G6), [X6](https://github.com/antvis/X6), [L7](https://github.com/antvis/L7).

![build](https://github.com/ant-design/ant-design-charts/workflows/build/badge.svg)
![npm](https://img.shields.io/npm/v/@ant-design/charts)
![npm](https://img.shields.io/npm/dm/@ant-design/charts)
[![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers)
[![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
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
