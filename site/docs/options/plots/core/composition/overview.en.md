---
title: overview
order: 1
---

In Ant Design Charts, **View Composition** provides the ability to draw multiple charts in a single visualization. Ant Design Charts defines a **view graph** to describe a **multi-view plot**.

```js
({
  type: 'spaceLayer',
  children: [{ type: 'view' }, { type: 'view' }],
});
```

```js
const layer = chart.spaceLayer();
layer.view();
layer.view();
```

## Space

The most basic way of view composition is **Space Composition**, which is simply a division of space.

A more common way of composition is `composition.spaceLayer`: overlaying multiple charts together, using scenarios where these views have different coordinate systems, such as the bar and pie charts below.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const layer = chart.spaceLayer();

  const config ={
    "colorField": "genre",
    "yField": "sold",
    "data": [     { genre: 'Shooter', sold: 350 },     { genre: 'Sports', sold: 275 },     { genre: 'Other', sold: 150 },     { genre: 'Action', sold: 120 },     { genre: 'Strategy', sold: 115 },   ],
    "legend": {
      "color": false
    },
    "transform": [
      {
        "type": "stackY"
      }
    ],
    "coordinate": {
      "type": "theta"
    },
    "attr": {
      "paddingBottom": 250,
      "paddingLeft": 300
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

You can also use `composition.spaceFlex` to arrange views horizontally or vertically.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const flex = chart.spaceFlex();

  const config ={
    "colorField": "genre",
    "yField": "sold",
    "data": [     { genre: 'Shooter', sold: 350 },     { genre: 'Sports', sold: 275 },     { genre: 'Other', sold: 150 },     { genre: 'Action', sold: 120 },     { genre: 'Strategy', sold: 115 },   ],
    "legend": {
      "color": false
    },
    "transform": [
      {
        "type": "stackY"
      }
    ],
    "coordinate": {
      "type": "theta"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

Also, these composition methods can be nested, so it's easy to implement a report through a separate statement.

## Facet

**Facet Composition** differs from Space Composition in that it also partitions the data, with each view presenting a subset of the original data.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "style": {
      "stroke": "#000"
    },
    "yField": "y",
    "xField": "x",
    "attr": {
      "inset": 10,
      "padding": "auto"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Repeat

**Repeat Composition** differs from facet in that each view shows the full amount of data, but with repeated encoding to create multiple views.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "colorField": "species",
    "attr": {
      "padding": "auto"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Time

**Time Composition** manages views in space and is used for animation.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config =```js | ob { autoMount: true }
  import { Chart } from '@antv/g2';

  (async () => {
    const data = await fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
    ).then((res) => res.json());



  const chart = new Chart({
    container: 'container',
  });

    // Refer to css animation description
    const keyframe = chart
      .timingKeyframe() // Create container
      .attr('iterationCount', 2)
      .attr('direction', 'alternate')
      .attr('duration', 1000);

    keyframe
      .interval()
      .data(data)
      .encode('x', 'gender')
      .encode('y', 'weight')
      .encode('color', 'gender')
      .encode('key', 'gender'); // Specify key

    keyframe
      .point()
      .data(data)
      .encode('x', 'height')
      .encode('y', 'weight')
      .encode('color', 'gender')
      .encode('shape', 'point')
      .encode('groupKey', 'gender'); // Specify groupKey

    chart.render();
  ```;

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
