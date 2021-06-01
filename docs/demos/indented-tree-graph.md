---
title: Indented Tree Graph
---

### Base

```tsx
import React, { useState, useEffect } from 'react';
import { IndentedTreeGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    title: '青年X高收入',
    body: '1,323,945,835',
    children: [
      {
        id: 'A1',
        title: '青年',
        body: '523,945,835',
        children: [
          { id: 'A11', title: '15~18', body: '89,133,24' },
          {
            id: 'A12',
            title: '18~21',
            body: '523,945,835',
          },
          { id: 'A13', title: '21~24', body: '89,133,24' },
        ],
      },
      {
        id: 'A2',
        title: '高收入',
        body: '623,945,835',
      },
    ],
  };

  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <IndentedTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Layout

```tsx
import React, { useState, useEffect } from 'react';
import { IndentedTreeGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    title: '青年X高收入',
    body: '1,323,945,835',
    children: [
      {
        id: 'A1',
        title: '青年',
        body: '523,945,835',
        children: [
          { id: 'A11', title: '15~18', body: '89,133,24' },
          {
            id: 'A12',
            title: '18~21',
            body: '523,945,835',
          },
          { id: 'A13', title: '21~24', body: '89,133,24' },
        ],
      },
      {
        id: 'A2',
        title: '高收入',
        body: '623,945,835',
      },
    ],
  };

  const config = {
    data,
    layout: {
      type: 'indented',
      direction: 'LR',
      dropCap: false,
      indent: 250,
      getHeight: () => {
        return 60;
      },
      getWidth: () => {
        return 100;
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <IndentedTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom node style

```tsx
import React, { useState, useEffect } from 'react';
import { IndentedTreeGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    title: '青年X高收入',
    body: '1,323,945,835',
    children: [
      {
        id: '青年',
        title: {
          content: '青年',
          style: {
            fill: 'yellow',
          },
        },
        body: {
          content: '89,133,24',
          style: {
            fill: 'red',
          },
        },
        footer: {
          content: '占比',
          value: '30%',
          style: {
            fill: '#aaa',
          },
          valueStyle: {
            fill: '#000',
          },
        },
        children: [
          { id: 'A11', title: '15~17', body: '89,133,24' },
          {
            id: 'A12',
            title: '17~19',
            footer: {
              content: '占比',
              value: '30%',
            },
          },
          { id: 'A13', title: '19~21', body: '89,133,24' },
          { id: 'A14', title: '21~24', body: '89,133,24' },
        ],
      },
      {
        id: 'A2',
        title: '高收入',
        body: '761,871,877',
      },
    ],
  };

  const nodeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };

  const config = {
    data,
    showArrow: false,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    bodyStyle: {
      fill: '#aaa',
    },
    nodeStyle: (node) => {
      return {
        stroke: '#40a9ff',
      };
    },
    nodeStateStyles,
    onReady: (graph) => {
      graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
        const item = evt.item as INode;
        graph.setItemState(item, 'hover', true);
      });
      graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
        const item = evt.item as INode;
        graph.setItemState(item, 'hover', false);
      });
    },
  };

  return <IndentedTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom edge style

```tsx
import React, { useState, useEffect } from 'react';
import { IndentedTreeGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    title: '青年X高收入',
    body: '1,323,945,835',
    children: [
      {
        id: '青年',
        title: {
          content: '青年',
          style: {
            fill: 'yellow',
          },
        },
        body: {
          content: '89,133,24',
          style: {
            fill: 'red',
          },
        },
        footer: {
          content: '占比',
          value: '30%',
          style: {
            fill: '#aaa',
          },
          valueStyle: {
            fill: '#000',
          },
        },
        children: [
          { id: 'A11', title: '15~17', body: '89,133,24' },
          {
            id: 'A12',
            title: '17~19',
            footer: {
              content: '占比',
              value: '30%',
            },
          },
          { id: 'A13', title: '19~21', body: '89,133,24' },
          { id: 'A14', title: '21~24', body: '89,133,24' },
        ],
      },
      {
        id: 'A2',
        title: '高收入',
        body: '761,871,877',
      },
    ],
  };
  const nodeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };
  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    bodyStyle: {
      fill: '#aaa',
    },
    nodeStateStyles,
    onReady: (graph) => {
      graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
        const item = evt.item as INode;
        graph.setItemState(item, 'hover', true);
      });
      graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
        const item = evt.item as INode;
        graph.setItemState(item, 'hover', false);
      });
    },
    edgeStyle: (item, graph) => {
      /**
       * graph.findById(item.target).getModel()
       * item.source: 获取 source 数据
       * item.target: 获取 target 数据
       */
      // console.log(graph.findById(item.target).getModel());
      return {
        stroke: '#40a9ff',
        lineWidth: Math.random() * 10,
        strokeOpacity: 0.5,
      };
    },
    nodeStyle: () => {
      return {
        stroke: '#40a9ff',
      };
    },
  };

  return <IndentedTreeGraph {...config} />;
};

export default DemoIndentedTree;
```
