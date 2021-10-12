---
title: 指标拆解树
---

### 基本用法

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
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

### 调整布局

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
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

### 异步展开

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 'A11-22' + Math.random(),
            value: {
              title: '深圳' + Math.random(),
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '50%',
                },
              ],
            },
          },
          {
            id: 'A11-23' + Math.random(),
            value: {
              title: '北京' + Math.random(),
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '50%',
                },
              ],
            },
          },
        ]);
      }, 1000);
    });
  };

  const getChildren = async (nodeCfg) => {
    const d = await fetchData();
    return d;
  };

  const config = {
    data,
    animate: false,
    nodeCfg: {
      getChildren,
    },
    autoFit: false,
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: true,
        collapsed: !children?.length,
      };
    },
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### 节点样式

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
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
              fill: '#52c41a',
            },
            text: {
              fill: '#aaa',
            },
            icon: {
              width: 10,
              height: 10,
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

### 边样式

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
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
              fill: '#52c41a',
            },
            text: {
              fill: '#aaa',
            },
            icon: {
              width: 10,
              height: 10,
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

### 无边框

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
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
              width: 10,
              height: 10,
            },
            value: {
              fill: '#52c41a',
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

### 异步请求

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          [1, 2].map(() => ({
            id: 'A2' + Math.random().toString(),
            value: {
              title: '异步节点' + Math.random().toString(),
              items: [
                {
                  text: '595万',
                },
                {
                  text: '占比',
                  value: '50%',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                },
              ],
            },
          })),
        );
      }, 1000);
    });
  };

  const getChildren = async () => {
    const asyncData = await fetchData();
    return asyncData;
  };

  const config = {
    data,
    autoFit: false,
    nodeCfg: {
      getChildren,
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: true,
        collapsed: !children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### 动态宽度

```tsx
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比-非常非常非常非常非常长',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };
  const config = {
    data,
    autoFit: false,
    nodeCfg: {
      autoWidth: true,
      items: {
        layout: 'follow',
      },
    },
    layout: {
      getWidth: () => {
        return 60;
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoIndentedTree;
```
