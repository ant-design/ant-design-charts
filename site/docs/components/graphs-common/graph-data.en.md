### Data

Graph data. If the `expand-collapse` behavior is enabled, make sure the `children` field is included in the data.

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
