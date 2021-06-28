---
title: Organizational Graph
order: 1
---

### Base

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationalGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    labelStyle: {
      y: 30,
      fill: '#fff',
      fontSize: 20,
    },
    children: [
      {
        id: 'c1',
        label: 'c1',
        labelStyle: (group, cfg) => {
          return {
            fill: '#fff',
          };
        },
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1',
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2',
              },
            ],
          },
        ],
      },
      {
        id: 'c2',
        label: 'c2',
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1',
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1',
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2',
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3',
              },
            ],
          },
          {
            id: 'c3-3',
            label: 'c3-3',
          },
        ],
      },
    ],
  };

  return (
    <OrganizationalGraph data={data} behaviors={['drag-canvas', 'zoom-canvas', 'drag-node']} />
  );
};

export default DemoOrganizationGraph;
```

### Set Title

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationalGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    label: 'Joel Alan',
    labelStyle: {
      fill: '#fff',
    },
    title: 'CEO',
    titleStyle: {
      fill: '#fff',
    },
    leftIcon: {
      width: 32,
      height: 32,
      img: 'https://avatars.githubusercontent.com/u/31396322?v=4',
    },
    children: [
      {
        label: 'c1',
        title: 'CTO',
        titleStyle: {
          fill: '#fff',
        },
        children: [
          {
            label: 'c1-1',
          },
          {
            label: 'c1-2',
            children: [
              {
                label: 'c1-2-1',
              },
              {
                label: 'c1-2-2',
              },
            ],
          },
        ],
      },
      {
        label: 'c2',
        title: 'CPO',
        titleStyle: {
          fill: '#fff',
        },
      },
      {
        label: 'c3',
        title: 'COO',
        titleStyle: {
          fill: '#fff',
        },
        children: [
          {
            label: 'c3-1',
          },
          {
            label: 'c3-2',
            children: [
              {
                label: 'c3-2-1',
              },
              {
                label: 'c3-2-2',
              },
              {
                label: 'c3-2-3',
              },
            ],
          },
          {
            label: 'c3-3',
          },
        ],
      },
    ],
  };

  return <OrganizationalGraph data={data} autoFit={false} nodeType="icon-node" />;
};

export default DemoOrganizationGraph;
```

### Show Marker

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationalGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1',
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2',
              },
            ],
          },
        ],
      },
      {
        id: 'c2',
        label: 'c2',
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1',
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1',
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2',
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3',
              },
            ],
          },
          {
            id: 'c3-3',
            label: 'c3-3',
          },
        ],
      },
    ],
  };

  /**
   * 遍历树的方法，仅作为演示 demo 中使用，实际使用中根据具体需求而定
   */
  const traverseTree = <T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) => {
    if (typeof fn !== 'function') {
      return;
    }

    if (fn(data) === false) {
      return false;
    }

    if (data && data.children) {
      for (let i = data.children.length - 1; i >= 0; i--) {
        if (!traverseTree(data.children[i], fn)) return false;
      }
    }
    return true;
  };

  traverseTree(data as any, (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb',
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ',
    };
    return true;
  });

  return (
    <OrganizationalGraph
      data={data}
      nodeType="icon-node"
      showMarker={true}
      minimapCfg={{ show: true }}
      onReady={(graph) => {
        graph.on('node:click', (evt) => {
          const { item, target } = evt;
          const targetType = target.get('type');
          const name = target.get('name');

          // 增加元素
          if (targetType === 'marker') {
            const model = item.getModel();
            if (name === 'add-item') {
              if (!model.children) {
                model.children = [];
              }

              const tmpId = Math.random().toString(36).slice(-8);
              model.children.push({
                id: tmpId,
                label: tmpId,
              });
              graph.updateChild(model, model.id);
            } else if (name === 'remove-item') {
              graph.removeChild(model.id);
            }
          }
        });
      }}
    />
  );
};

export default DemoOrganizationGraph;
```
