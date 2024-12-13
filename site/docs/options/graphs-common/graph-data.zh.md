### Data

图数据。若开启“展开-收起”交互，需确保数据中包含 `children` 字段。

```js
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
