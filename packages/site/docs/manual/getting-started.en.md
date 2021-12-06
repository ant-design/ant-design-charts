---
title: Quick Start
order: 1
---

## Installation
### Import by CDN in browser

We provide `Ant Design Charts` npm package:

```bash
// Recommended usage
npm install @ant-design/charts --save
```

You can use `import` or `require` to start.

```ts
import { Line } from '@ant-design/charts';
```

Related subpackages
- Plots: `@ant-design/plots`
- Maps: `@ant-design/maps`
- Flowchart: `@ant-design/flowchart`
- Relation Graphs: `@ant-design/graphs`


In addition to 'react' and 'react-dom', the flowchart also relies on 'antd', '@ant-design/icons' and 'lodash'. Ensure that it has been installed when using it. At the same time, remember to import the style file `import "@ant - design/flowchart/dist/index.css"; `

```ts
"peerDependencies": {
    "@ant-design/icons": "^4.6.0",
    "antd": "^4.6.3",
    "lodash": "^4.17.20",
    "react": ">=16.8.4",
    "react-dom": ">=16.8.4"
  }
```

### Import by CDN in browser

You can download the script locally or import it directly from online resources.

```ts
// Plots 
<script type="text/javascript" src="https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js"></script>
// Flowchart 
<script type="text/javascript" src="https://unpkg.com/@ant-design/flowchart@latest/dist/flowchart.min.js"></script>
// Maps 
<script type="text/javascript" src="https://unpkg.com/@ant-design/maps@latest/dist/maps.min.js"></script>
// Graphs 
<script type="text/javascript" src="https://unpkg.com/@ant-design/graphs@latest/dist/graphs.min.js"></script>
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
// According to the need to introduce
<script type="text/javascript" src="https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js"></script>
```

Usage:

```ts
// Line chart, similar to other charts
const { Line } = window.charts;
```


```html
<!-- Download to local import local scripts -->
<script src="./plots.min.js"></script>
<script>
  const { Line } = window.charts;
</script>
```

## Quick to use

Once the Ant Design Charts page is introduced, we are ready to create our first chart, so let's start with a basic line chart example. Most demos use the parent container width, make sure the parent container width or manually set the chart width.

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

Result：

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