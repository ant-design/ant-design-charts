<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> [English](./README.en-US.md) | 简体中文

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

## ✨ 功能特性

- 🎨 **轻量级**：不做过度封装，尽量保持 [G6](https://github.com/antvis/G6) 能力同步，尽量不新增概念，整体核心代码 <200 行。
- 🎗️ **React 风格**：舒心的开发体验，符合 React 用户心智，基于 React 扩展组件更容易。
- 🚀 **丰富组件**：丰富的组件，源于业务沉淀，让用户定制自己的图应用更快更容易。

![component](https://gw.alipayobjects.com/mdn/rms_402c1a/afts/img/A*cGzHQK4MGToAAAAAAAAAAAAAARQnAQ)

## 🔨 快速使用

把 `graphin` 当作一个普通的 React 组件来使用即可，通过 NPM 或 Yarn 等包管理器来安装。

```bash
$ npm install @antv/graphin
```

```bash
$ yarn add @antv/graphin
```

成功安装之后，可以通过 import 导入 `Graphin` 组件。

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

| Property  | Description                                                                                                   | Type                     | Default |
| --------- | ------------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| id        | 设置图画布容器的 id 属性。                                                                                    | `string`                 | -       |
| className | 设置图画布容器的 class 属性。                                                                                 | `string`                 | -       |
| style     | 设置图画布容器的 style 样式属性。                                                                             | `CSSProperties`          | -       |
| options   | 设置图画布的配置项，参考 [G6 配置](https://g6.antv.antgroup.com/) 文档，在 `graph.setOptions(options)` 中调用 | `GraphOptions` \| `null` | -       |
| onInit    | 当图实例初始化之后调用，在 `new Graph()` 之后。                                                               | `(graph: Graph) => void` | -       |
| onReady   | 当图实例渲染完成之后调用，在 `graph.render()` 之后。                                                          | `(graph: Graph) => void` | -       |
| onDestroy | 当图实例被销毁的时候调用，在 `graph.destroy()` 之后。                                                         | `() => {}`               | -       |

## 🗂 Examples

- [Creating Graph](#creating-graph)
- [Fetching Data](#fetching-data)
- [Handling Events](#handling-events)
- [Styling Container](#styling-container)
- [Using hooks](#using-hooks)

### Creating Graph

更多创建图表的示例，请参见 [G6 示例](https://g6-next.antv.antgroup.com/examples)。

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

获取远程数据并在数据更新时重新渲染图表。

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

### Handling Events

`<Graphin />` 暴露了 ref 用于获取[图实例](https://g6-next.antv.antgroup.com/manual/core-concept/graph)，以便处理事件或获取实例属性。

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

给图画布容器添加 css 样式：

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

使用 `useGraphin()` 来方便地访问图实例和其状态。

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
