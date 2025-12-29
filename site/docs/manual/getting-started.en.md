---
title: Quick Start
order: 1
---

## Installation
### Method 1: Install via npm

We provide an npm package for Ant Design Charts. You can install it with the following command:

```bash
npm install @ant-design/charts --save
```

After successful installation, you can use `import` or `require` to reference it:

```ts
import { Line } from '@ant-design/charts';
```

Peer Dependencies
```ts
"peerDependencies": {
    "react": ">=16.8.4",
    "react-dom": ">=16.8.4"
  }
```

### Method 2: Browser Import

You can either download the script locally or directly import online resources.

```ts
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
```

Since @ant-design/charts has externalized `react` and `react-dom`, you need to include the CDN addresses of the corresponding packages before `charts.min.js` via CDN.

```ts
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
  'lodash': 'lodash',
}
// public/index.html
<script crossorigin src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/lodash@4.17.21/lodash.min.js"></script>

// Import on demand
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
```

Usage

```ts
// Line chart, other charts are similar
const { Line } = window.Charts;
```

## Quick Start

After introducing Ant Design Charts into the page, we are ready to create our first chart. Let's start with a basic line chart as an example. Most demos use the parent container's width and height, so please ensure the parent container has width and height or manually set the chart's dimensions.

```js | ob { autoMount: true }
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
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
    style: {
      lineWidth: 2
    }
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
