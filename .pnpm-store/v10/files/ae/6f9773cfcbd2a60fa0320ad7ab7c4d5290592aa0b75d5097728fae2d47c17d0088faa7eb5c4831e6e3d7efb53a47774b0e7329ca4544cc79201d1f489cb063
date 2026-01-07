<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [简体中文](./README.md)

<p align="center">
  <a href="https://github.com/antvis/graphin">
    <img width="150" src="https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg">
  </a>
</p>
<h1 align="center">Graphin</h1>

<div align="center">

A lightweight React toolkit for graph analysis based on [G6](https://github.com/antvis/G6).

[![Version](https://img.shields.io/npm/v/@antv/graphin)](https://www.npmjs.com/@antv/graphin)
[![NPM downloads](http://img.shields.io/npm/dm/@antv/graphin.svg)](http://npmjs.com/@antv/graphin)
![Latest commit](https://badgen.net/github/last-commit/antvis/graphin)

</div>

## ✨ Features

- 🎨 **Lightweight**: Avoid excessive encapsulation, strive to keep in sync with G6 capabilities, minimize the introduction of new concepts, with the core code <200 lines.
- 🎗️ **React Style**: Comfortable development experience, aligns with the mindset of React users, making it easier to extend components based on React.
- 🚀 **Rich Components**: Offers a rich set of components, derived from business experiences, making it faster and easier for users to customize their graph applications.

![component](https://gw.alipayobjects.com/mdn/rms_402c1a/afts/img/A*cGzHQK4MGToAAAAAAAAAAAAAARQnAQ)

## 🔨 Installing

You can use `graphin` as a normal React component, installing it through package managers like NPM or Yarn.

```bash
$ npm install @antv/graphin
```

```bash
$ yarn add @antv/graphin
```

After successful installation, you can import the `Graphin` component.

```jsx
import React from 'react';
import { Graphin } from '@antv/graphin';

export function Demo() {
  return (
    <Graphin
      id="my-graphin-demo"
      className="my-graphin-container"
      style={{ width: '100%', height: '100%' }}
      options={{
        data,
        node: {
          style: {
            labelText: (d) => d.id,
          },
          palette: {
            type: 'group',
            field: 'cluster',
          },
        },
        layout: {
          type: 'd3force',
          collide: {
            strength: 0.5,
          },
        },
        behaviors: ['zoom-canvas', 'drag-canvas'],
        animation: true,
      }}
    >
    </Graphin>
  );
}
```

## 📖 API Reference

| Property  | Description                                                                                         | Type                       | Default |
| --------- | --------------------------------------------------------------------------------------------------- | -------------------------- | ------- |
| id        | the id of container div.                                                                            | `string`                   | -       |
| className | the class name of container div.                                                                    | `string`                   | -       |
| style     | the style of the container                                                                          | `CSSProperties`            | -       |
| options   | the [options](https://g6.antv.antgroup.com/) for the visualization, say `graph.setOptions(options)` | `GraphOptions` \| `null`   | -       |
| onInit    | Callback for when the graph is initialized, after new Graph().                                      | `(graph: G6Graph) => void` | -       |
| onReady   | Callback for when the graph is ready, after graph.render().                                         | `(graph: G6Graph) => void` | -       |
| onDestroy | Callback for when the graph is destroyed, after graph.destroy().                                    | `() => {}`                 | -       |

## 🗂 Examples

- [Creating Graph](#creating-graph)
- [Fetching Data](#updating-data)
- [Handling Events](#handling-events)
- [Styling Container](#styling-container)
- [Using hooks](#using-hooks)

### Creating Graph

More examples of creating graph, please see [G6 Demo](https://g6-next.antv.antgroup.com/examples).

```jsx
import React from 'react';
import { Graphin } from '@antv/graphin';

export function Demo() {
  return (
    <Graphin
      options={{
        autoResize: true,
        data: {
          nodes: [
            { id: 'node-1', style: { x: 50, y: 100 } },
            { id: 'node-2', style: { x: 150, y: 100 } },
          ],
          edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],
      }}
    />
  );
}
```

### Fetching Data

Fetch remote data and re-render the graph upon data update.

```jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Graphin } from '@antv/graphin';

export function Demo() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/graph.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // The options will update when the data changes
  const options = useMemo(
    () => ({
      autoResize: true,
      data,
      layout: { type: 'd3-force' },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],
    }),
    [data],
  );

  if (!data) return <p>Loading...</p>;

  return <Graphin options={options} />;
}
```

### Handing Events

`<Graphin />` exposes a ref for the G6 [graph instance](https://g6-next.antv.antgroup.com/manual/core-concept/graph), which can be used to handle events or retrieving instance properties.

```jsx
import React, { useEffect, useRef } from 'react';
import { Graphin } from '@antv/graphin';
import { GraphEvent, NodeEvent } from '@antv/g6';

export function Demo() {
  const graphRef = useRef();

  const onInit = () => {
    const graph = graphRef.current;

    // Listen input events.
    graph.on(NodeEvent.CLICK, (event) => {});

    // Listen to lifecycle events.
    graph.on(GraphEvent.AFTER_RENDER, (event) => {
      // Simulate a click event on a node.
      graph.emit(NodeEvent.CLICK, { target: { id: 'node-1' }, targetType: 'node' });
    });
  };

  return <Graphin ref={graphRef} onInit={onInit} />;
}
```

### Styling Container

Define the css styles of the container:

```jsx
import React from 'react';
import { Graphin } from '@antv/graphin';

export function Demo() {
  // ...
  return (
    <Graphin
      className="my-graphin-container"
      style={{
        width: 600,
        height: 600,
        background: '#eee',
        padding: '1em',
        borderRadius: '0.5em',
      }}
    />
  );
}
```

### Using hooks

Using `useGraphin()` to access the graph instance and its state for more convenient use of graph components.

```jsx
import React from 'react';
import { Graphin, useGraphin } from '@antv/graphin';

const CustomComponent = () => {
  const { graph, isReady } = useGraphin();

  return <>{!isReady ? <p>Loading...</p> : <div className="graphin-component"></div>}</>;
};

export function Demo() {
  // ...
  return (
    <Graphin>
      <CustomComponent />
    </Graphin>
  );
}
```
