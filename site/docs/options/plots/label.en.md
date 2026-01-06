---
title: Label
order: 7
---

## Overview

In Ant Design Charts, **Data Labels** are one of the means to add annotations to charts, providing content annotation for the current group of data. They include elements such as data points, connector lines, and text values, which are selected based on different chart types. Through concise text descriptions, they reduce misunderstandings, make charts easier to interpret, and emphasize key data or trends, guiding attention to important information.

### Elements

Includes connector lines and text value elements, which are selected based on different chart types.

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*r7UMTKWF6QIAAAAAAAAAAAAAemJ7AQ/original' />

Among them, pie charts, donut charts, rose charts, etc., can use connector line elements to connect label text elements and mark graphics.

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*EdDfQKwBJp0AAAAAAAAAAAAAemJ7AQ/original' width='40%' />

### Usage/Configuration

#### Adding to Mark

Multiple labels can be added to a mark:

```js
({
  labels: [
    {
      text: 'genre', // Specify the bound field
      style: { dy: -15 }, // Specify style
    },
    {
      text: 'sold', // Specify the bound field
      style: { fill: '#fff', dy: 5 }, // Specify style
    },
  ],
});
```

## Mark Labels

Each mark can have multiple labels. Here's a simple example:

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  const config = {
    height: 300,
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
    xField: 'genre',
    yField: 'sold',
    labels: [
      { text: 'genre', style: { dy: -15 } },
      { text: 'sold', style: { fill: '#fff', dy: 5 } },
    ],
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Configuration Options

| Property   | Description                                                                                                                                                      | Type                             | Default Value                 | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------- | -------- |
| dx         | Label text horizontal offset, can also be configured through style.dx                                                                                            | number                           | 0                             |          |
| dy         | Label text vertical offset, can also be configured through style.dy                                                                                              | number                           | 0                             |          |
| offset     | Label offset distance, can also be configured through style.offset                                                                                               | number                           | -                             |          |
| text       | Label data channel, similar to mark's `x` channel, corresponds to text element, can use callback to customize `string` text                                      | string \| Function               | -                             |          |
| innerHTML  | Similar to `text` configuration, when both are configured, `text` becomes ineffective, can use callback to customize `string` text or `HTMLElement` complex html | string \| Function               | -                             |          |
| formatter  | Label text formatting                                                                                                                                            | _string_ \| _Function\<string\>_ | -                             |          |
| render     | Same configuration type as `innerHTML`                                                                                                                           | string \| Function               | -                             |          |
| selector   | Label selector, can retain or hide labels                                                                                                                        | [selector](#selector)            | `{type: 'cartesian' }`        |          |
| transform  | Label transformation, used to optimize label display, solving label overlap and color visibility issues                                                          | [transform](#transform)          | -                             |          |
| position   | Label position relative to graphics, not label direction                                                                                                         | [position](#position)            | -                             |          |
| style      | Label style configuration                                                                                                                                        | [style](#style)                  | -                             |          |
| background | Whether to show background color                                                                                                                                 | _boolean_                        | See [background](#background) |          |
| connector  | Whether to show connector lines, used in non-Cartesian coordinate systems like pie and donut charts                                                              | _boolean_                        | See [connector](#connector)   |          |

### text & innerHTML

`label` text element content configuration

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  const config = {
    height: 340,
    insetTop: 20,
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
    xField: 'genre',
    yField: 'sold',
    labels: [
      { text: 'sold', style: { dy: -30 } }, // text maps to field sold
      { text: ({ genre }) => genre, style: { dy: -20 } }, // text custom return string type
      {
        // innerHTML maps to field genre
        // Note: background color might be black sometimes, need to configure fill background color
        // color is text color, HTMLElement itself can also configure styles
        innerHTML: 'genre',
        dx: 20,
        dy: 10,
        style: { fill: '#fff', color: '#333', fontSize: 10 },
      },
      {
        // innerHTML custom return HTMLElement type data
        innerHTML: ({ genre, sold }) =>
          `<div style="padding:0 4px;border-radius: 10px;background: #f5f5f5;border: 2px solid #5ea9e6;font-size: 11px;">${genre}:${sold}</div>`,
        dx: 10,
        dy: 50,
        style: { fill: 'rgba(0,0,0,0)', color: '#333' },
      },
    ],
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

You can also try configuring HTMLElement with `render`, the parameters differ from innerHTML, but the return is consistent.

```ts
type RenderFunc = (text: string, datum: object, index: number, {channel: Record<string, Channel>}) => String | HTMLElement;
```

More options about label, see the document of [label](/options/plots/label).
