### Data

支持两种数据配置方式：

1. **推荐**：使用树图数据（TreeData 格式）。通过内置函数，可将其转换为标准图格式数据。

TreeData 类型定义：

```ts
type TreeData = {
  id: string;
  children?: TreeData[];
  [key: string]: unknown;
};
```

数据准备：

```ts
const data = {
  id: 'root',
  children: [
    {
      id: 'Child 1',
      value: 10,
      children: [
        { id: 'Sub 1-1', value: 5 },
        { id: 'Sub 1-2', value: 5 },
      ],
    },
    {
      id: 'Child 2',
      value: 20,
      children: [
        { id: 'Sub 2-1', value: 10 },
        { id: 'Sub 2-2', value: 10 },
      ],
    },
  ],
};
```

调用内置工具函数，将树图数据转换成标准的图数据。

```jsx
import React from 'react';
import { G6, Fishbone } from '@ant-design/graphs';

const { treeToGraphData } = G6;

export default () => {
  return <Fishbone data={treeToGraphData(data)} {...options} />;
};
```

2. 直接使用标准图数据。若需开启“展开-收起”交互，需确保数据中包含 `children` 字段。

```javascript
const graphData = {
  nodes: [
    { id: '1', label: 'Node 1', children: ['2', '3'] },
    { id: '2', label: 'Node 2', children: ['4'] },
    { id: '3', label: 'Node 3' },
    { id: '4', label: 'Node 4' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '4' },
  ],
};
```
