# @ant-design/maps

<div align="center">

A React geographic visualization component library, based on [L7Plot](https://github.com/antvis/L7Plot).

![npm](https://img.shields.io/npm/v/@ant-design/maps)
![npm](https://img.shields.io/npm/dm/@ant-design/maps)
[![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers)
[![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a>
</p>

</div>

## Case

<img src="https://gw.alipayobjects.com/zos/antfincdn/xX10CNIu4b/8a064058-518e-4860-af54-58ca17cae985.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/wRiG4Cl1tB/9c40912e-13f2-42c6-a580-e86160b35962.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/tX2zfzui76/821b3d1d-421c-4f09-a44e-53422db302f6.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/qgKi3OxQVE/4553729d-c2ce-490b-aebb-ea948bef7f2e.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/fA50QqeP%24T/a5031ad0-7786-4183-bf23-e66dbdf52fe5.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/t5BQDH5Jp8/dbcddc7e-5ff9-4d3b-af9b-2d86f40b626a.png" width=375 />



## ✨ Features

- Easy to use
- TypeScript


## 📦 Installation

```bash | pure
$ npm install @ant-design/maps
```


## 🔨 Usage

```tsx | pure
import React, { useState, useEffect } from 'react';
import { AreaMap } from '@ant-design/maps';

const DemoAreaMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/d6da7ac1-8b4f-4a55-93ea-e81aa08f0cf3.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    autoFit: true,
    color: {
      field: 'adcode',
      value: ['rgb(239,243,255)', 'rgb(189,215,231)', 'rgb(107,174,214)', 'rgb(49,130,189)', 'rgb(8,81,156)'],
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: 'rgb(93,112,146)',
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    state: {
      active: true,
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    tooltip: {
      items: ['name', 'adcode'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <AreaMap {...config} />;
}

export default DemoAreaMap;
```


## 📜 Document & API

See chart API for [details](https://charts.ant.design/zh/docs/map-api/plot-api). Common props:

| Property | Description | Type | defaultValue |
| :--- | :--- | :--- | :--- |
| onReady | chart loaded callback | (chart)=> void | - |
| loading | loading status | boolean | - |
| loadingTemplate | loading template | React.ReactElement | - |
| errorTemplate | custom error template | (e: Error) => React.ReactNode | - |
| className | container class | string | - |
| containerStyle | container style | React.CSSProperties | - |


## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/ant-design/ant-design-charts/issues) first.


## 📧 Contact us

DingTalk group number: `44788198 `.

<img src="https://gw.alipayobjects.com/zos/antfincdn/bi1LxWeIEj/32f85bbf-a06e-4046-96e5-417126bffeaf.png" width="200" height="266" />


## License

MIT
