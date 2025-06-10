### Data

Two data formats are supported:

1. **(👍 Recommended)** Tree data

Type Definition:

```ts
type TreeData = {
  id: string;
  children?: TreeData[];
  [key: string]: unknown;
};
```

Example:

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

2. Graph data. If the `expand-collapse` behavior is enabled, make sure the `children` field is included in the data.

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
