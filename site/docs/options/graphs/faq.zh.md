---
title: FAQ
order: 2
---

### 1.如何在组件外获取图实例？

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  const graphRef = useRef();

  return <MindMap onReady={(ref) => (graphRef = ref.current)} />;
};
```

`graph` 实例上 API 请参考 [G6 - API 列表](https://g6.antv.antgroup.com/api/graph/method)。

### 2. Graphs 支持自定义吗？

所有 G6 支持的自定义扩展，Graphs 同样支持，并且写法与 G6 一致，教程可参考 [G6 - 自定义扩展](https://g6.antv.antgroup.com/manual/custom-extension/element)。

```jsx
import { MindMap, G6 } from '@ant-design/graphs';
import { CustomNode } from 'package-name/or/path-to-your-custom-node';

const { register, ExtensionCategory }= G6;

register(ExtensionCategory.NODE, 'custom-node', CustomNode);

export default () => {
  return <MindMap node={ type: 'custom-node' } {...options} />;
};
```

### 3. 如何禁用所有交互

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  return <MindMap behaviors={[]} {...options} />;
};
````
