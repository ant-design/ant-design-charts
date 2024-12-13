### Data

支持两种数据格式：

1. **（👍 推荐）** 树图数据

类型定义：

```ts
type TreeData = {
  id: string;
  children?: TreeData[];
  [key: string]: unknown;
};
```

例如：

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

2. 图数据。若开启“展开-收起”交互，需确保数据中包含 `children` 字段。

```js
const graphData = {
  nodes: [
    { id: '1', data: { label: 'Node 1' }, children: ['2', '3'] },
    { id: '2', data: { label: 'Node 2' }, children: ['4'] },
    { id: '3', data: { label: 'Node 3' } },
    { id: '4', data: { label: 'Node 4' } },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '4' },
  ],
};
```
