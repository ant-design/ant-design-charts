---
title: 组织架构图
---

### 基础用法

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    value: {
      text: '股东会',
    },
    children: [
      {
        id: 'joel',
        value: {
          text: 'Joel Alan',
        },
        children: [
          {
            id: 'c1',
            value: {
              text: 'c1',
            },
            children: [
              {
                id: 'c1-1',
                value: {
                  text: 'c1-1',
                },
              },
              {
                id: 'c1-2',
                value: {
                  text: 'c1-2',
                },
                children: [
                  {
                    id: 'c1-2-1',
                    value: {
                      text: 'c1-2-1',
                    },
                  },
                  {
                    id: 'c1-2-2',
                    value: {
                      text: 'c1-2-2',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'c2',
            value: {
              text: 'c2',
            },
          },
          {
            id: 'c3',
            value: {
              text: 'c3',
            },
            children: [
              {
                id: 'c3-1',
                value: {
                  text: 'c3-1',
                },
              },
              {
                id: 'c3-2',
                value: {
                  text: 'c3-2',
                },
                children: [
                  {
                    id: 'c3-2-1',
                    value: {
                      text: 'c3-2-1',
                    },
                  },
                  {
                    id: 'c3-2-2',
                    value: {
                      text: 'c3-2-2',
                    },
                  },
                  {
                    id: 'c3-2-3',
                    value: {
                      text: 'c3-2-3',
                    },
                  },
                ],
              },
              {
                id: 'c3-3',
                value: {
                  text: 'c3-3',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  return <OrganizationGraph data={data} behaviors={['drag-canvas', 'zoom-canvas', 'drag-node']} />;
};

export default DemoOrganizationGraph;
```

### 设置 Value

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    value: {
      text: '股东会',
    },
    children: [
      {
        id: 'joel',
        value: {
          text: 'Joel Alan',
          value: 'CEO',
          // 建议使用 bae64 数据
          icon: 'https://avatars.githubusercontent.com/u/31396322?v=4',
        },
        children: [
          {
            id: 'c1',
            value: {
              text: 'c1',
              value: 'CTO',
            },
            children: [
              {
                id: 'c1-1',
                value: {
                  text: 'c1-1',
                },
              },
              {
                id: 'c1-2',
                value: {
                  text: 'c1-2',
                },
                children: [
                  {
                    id: 'c1-2-1',
                    value: {
                      text: 'c1-2-1',
                    },
                  },
                  {
                    id: 'c1-2-2',
                    value: {
                      text: 'c1-2-2',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'c2',
            value: {
              text: 'c2',
              value: 'COO',
            },
          },
          {
            id: 'c3',
            value: {
              text: 'c3',
              value: 'CFO',
            },
            children: [
              {
                id: 'c3-1',
                value: {
                  text: 'c3-1',
                },
              },
              {
                id: 'c3-2',
                value: {
                  text: 'c3-2',
                },
                children: [
                  {
                    id: 'c3-2-1',
                    value: {
                      text: 'c3-2-1',
                    },
                  },
                  {
                    id: 'c3-2-2',
                    value: {
                      text: 'c3-2-2',
                    },
                  },
                  {
                    id: 'c3-2-3',
                    value: {
                      text: 'c3-2-3',
                    },
                  },
                ],
              },
              {
                id: 'c3-3',
                value: {
                  text: 'c3-3',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  return <OrganizationGraph data={data} autoFit={false} />;
};

export default DemoOrganizationGraph;
```

### 调整样式

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'joel',
    value: {
      text: 'Joel Alan',
      value: 'CEO',
      // 建议使用 bae64 数据
      icon: 'https://avatars.githubusercontent.com/u/31396322?v=4',
    },
    children: [
      {
        id: 'c1',
        value: {
          text: 'c1',
          value: 'CTO',
        },
        children: [
          {
            id: 'c1-1',
            value: {
              text: 'c1-1',
            },
          },
          {
            id: 'c1-2',
            value: {
              text: 'c1-2',
            },
            children: [
              {
                id: 'c1-2-1',
                value: {
                  text: 'c1-2-1',
                },
              },
              {
                id: 'c1-2-2',
                value: {
                  text: 'c1-2-2',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'c2',
        value: {
          text: 'c2',
          value: 'COO',
        },
      },
      {
        id: 'c3',
        value: {
          text: 'c3',
          value: 'CFO',
        },
        children: [
          {
            id: 'c3-1',
            value: {
              text: 'c3-1',
            },
          },
          {
            id: 'c3-2',
            value: {
              text: 'c3-2',
            },
            children: [
              {
                id: 'c3-2-1',
                value: {
                  text: 'c3-2-1',
                },
              },
              {
                id: 'c3-2-2',
                value: {
                  text: 'c3-2-2',
                },
              },
              {
                id: 'c3-2-3',
                value: {
                  text: 'c3-2-3',
                },
              },
            ],
          },
          {
            id: 'c3-3',
            value: {
              text: 'c3-3',
            },
          },
        ],
      },
    ],
  };

  return (
    <OrganizationGraph
      data={data}
      nodeCfg={{
        style: (node) => {
          return node.id === 'joel'
            ? {
                fill: '#91d5ff',
                stroke: '#91d5ff',
              }
            : {};
        },
        label: {
          style: (node, group, type) => {
            const styles = {
              icon: {
                width: 32,
                height: 32,
              },
              value: {
                fill: '#fff',
              },
              text: {
                fill: '#fff',
              },
            };
            return node.id === 'joel' ? styles[type] : {};
          },
        },
      }}
    />
  );
};

export default DemoOrganizationGraph;
```
