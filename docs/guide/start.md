---
title: Quick start
order: 2
nav:
  title: Docs
  order: 1
---

## Quick start

## Installation

### NPM mode (recommended)

```bash
$ npm install @ant-design/charts
```

### CDN mode

The NPM is recommended, <b>Due to the different underlying dependencies in CDN mode, in order to reduce the package volume, from version 1.0.5 on, the organization chart, flow chart, fund flow chart and indent tree chart were packaged into graphs.min.js, and other charts were packaged into Charts.min.js</b>, it can be imported as needed.

Graphs contain：

- OrganizationTreeGraph
- DagreGraph
- DagreFundFlowGraph
- IndentedTreeGraph

```ts
// Introducing Online Resources
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
// Graphs related charts
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/graphs.min.js"></script>
```

Because the @ant-design/ Charts page externals 'react' and 'react-dom', you need to do the same thing in your project when using this method. By using CDN, introduce 'react' and 'react-dom' before 'Charts.min.js'.

```ts
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
}
// public/index.html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
// According to the need to use
<script crossorigin src="https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js"></script>
<script crossorigin src="https://unpkg.com/@ant-design/charts@1.0.5/dist/graphs.min.js"></script>
```

Usage:

```ts
// Line chart, other charts are similar
const { Line } = window.charts;
// Organization Chart
const { OrganizationTreeGraph } = window.graphs;
```

## Usage

Most demos use the parent container width and height. Make sure the parent container width and height are either set manually.

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
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
```

Result:

```tsx
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
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
```
