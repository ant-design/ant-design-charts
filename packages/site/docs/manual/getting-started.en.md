

## title: Quick Start&#xA;order: 1

## Installation

### Import by CDN in browser

You can import by CDN in browser or you can import local source.

```html
<!-- import CDN source -->
<script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
<script>
  const { Line } = G2Plot;
</script>
```

```html
<!-- import local source -->
<script src="./g2plot.min.js"></script>
<script>
  const { Line } = G2Plot;
</script>
```

### Import via NPM

We provide G2Plot npm package:

```bash
// Recommended usage
npm install @antv/g2plot --save
```

You can use `import` or `require` to start.

```ts
import { Line } from '@antv/g2plot';
```

## Quick Start

Now we're ready to create our first chart by using G2Plot. Let's begin with a basic line Chart.

**step1**: create chart container

```html
<div id="container"></div>
```

**step2**: load your data

The standard data format in G2Plot is JSON array with JSON object elements.

```ts
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
```

**step3**: create and render chart

```ts
import React, { useState, useEffect } from 'react';
import {  } from '@ant-design/charts';

const Demo: React.FC = () => {
  
  return < {...config} />;
};

export default Demo;


```

the result：

<img alt="example" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*VV2bQpd-aBIAAAAAAAAAAAAAARQnAQ" width="800">

## Stylize your chart

Till now, the visual style of our chart was defaultly applied by chart theme, not to mention the unformatted text content of labels. In this section, we'll stylize the chart through several steps. More information please reference API.

```ts
import React, { useState, useEffect } from 'react';
import {  } from '@ant-design/charts';

const Demo: React.FC = () => {
  
  return < {...config} />;
};

export default Demo;


```

the result：

<img alt="example" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Y-4xSprUCV0AAAAAAAAAAAAAARQnAQ" width="800">

G2Plot has many fun configuration and features to explore. More information please reference [Configuration Options](./plots/line)。
