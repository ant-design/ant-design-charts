# @ant-design/charts

A React chart library, based on [g2plot](https://antv-g2plot.gitee.io/zh)

<div align="center">
<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*sXqrRrEwFRQAAAAAAAAAAABkARQnAQ" width="800">
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

### Line

```tsx pure
import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

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

### Bubble

```tsx pure
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
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

Direct [G2Plot](https://g2plot.antv.vision/zh/docs/manual/general-config)

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
