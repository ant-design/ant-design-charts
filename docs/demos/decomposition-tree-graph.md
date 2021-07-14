---
title: DecompositionTreeGraph
---

### Base

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    value: {
      title: '青年X高收入',
      items: [
        {
          text: '1,323,945,835',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '青年',
          items: [
            {
              text: '523,945,835',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '15~18',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '18~21',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '21~24',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '高收入',
          items: [
            {
              text: '623,945,835',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    autoFit: false,
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Layout

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    value: {
      title: '青年X高收入',
      items: [
        {
          text: '1,323,945,835',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '青年',
          items: [
            {
              text: '523,945,835',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '15~18',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '18~21',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '21~24',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '高收入',
          items: [
            {
              text: '623,945,835',
            },
          ],
        },
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
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom node style

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    value: {
      title: '青年X高收入',
      items: [
        {
          text: '1,323,945,835',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '青年',
          items: [
            {
              text: '收入',
              value: '523,945',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '15~18',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '18~21',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '21~24',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '高收入',
          items: [
            {
              text: '623,945,835',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    nodeCfg: {
      title: {
        style: (cfg) => {
          return {
            fill: cfg?.value?.title === '青年' ? 'yellow' : '#fff',
          };
        },
      },
      items: {
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
            icon: {
              width: 12,
              height: 12,
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      style: {
        radius: [2, 2, 2, 2],
      },
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom edge style

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    value: {
      title: '青年X高收入',
      items: [
        {
          text: '1,323,945,835',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '青年',
          items: [
            {
              text: '收入',
              value: '523,945',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '15~18',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '18~21',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '21~24',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '高收入',
          items: [
            {
              text: '623,945,835',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    nodeCfg: {
      items: {
        style: (cfg, group, type) => {
          const styles = {
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
            icon: {
              width: 12,
              height: 12,
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      style: {
        stroke: '#40a9ff',
      },
    },
    edgeCfg: {
      endArrow: {
        fill: '#40a9ff',
      },
      style: (item, graph) => {
        /**
         * graph.findById(item.target).getModel()
         * item.source: 获取 source 数据
         * item.target: 获取 target 数据
         */
        // console.log(graph.findById(item.source).getModel());
        return {
          stroke: '#40a9ff',
          lineWidth: 1,
          strokeOpacity: 0.5,
        };
      },
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### No Stroke Style

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: '青年X高收入',
    value: {
      title: '青年X高收入',
      items: [
        {
          text: '1,323,945,835',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '青年',
          items: [
            {
              text: '收入',
              value: '523,945',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '15~18',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '18~21',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '21~24',
              items: [
                {
                  text: '523,945,835',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '高收入',
          items: [
            {
              text: '623,945,835',
            },
          ],
        },
      },
    ],
  };
  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    nodeCfg: {
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
        },
      },
      items: {
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      style: {
        stroke: 'transparent',
      },
      nodeStateStyles: false,
    },
    edgeCfg: {
      endArrow: {
        show: false,
      },
      style: (item, graph) => {
        /**
         * graph.findById(item.target).getModel()
         * item.source: 获取 source 数据
         * item.target: 获取 target 数据
         */
        // console.log(graph.findById(item.source).getModel());
        return {
          stroke: '#40a9ff',
          lineWidth: Math.random() * 10 + 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: false,
    },
  };
  // @ts-ignore
  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```
