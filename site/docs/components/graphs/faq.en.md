---
title: FAQ
order: 9
---

### 1. How to Access the Graph Instance Outside of the Component?

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  const graphRef = useRef();

  return <MindMap onReady={(ref) => (graphRef = ref.current)} />;
};
```

For details on the Graph API, refer to the [G6 - API Documentation](https://g6.antv.antgroup.com/en/api/graph/method).

---

### 2. Does Graphs Support Customization?

All custom extensions supported by G6 are also supported by Graphs, with the same implementation approach. For tutorials, refer to [G6 - Custom Extensions](https://g6.antv.antgroup.com/en/manual/custom-extension/element).

```jsx
import { MindMap, G6 } from '@ant-design/graphs';
import { CustomNode } from 'package-name/or/path-to-your-custom-node';

const { register, ExtensionCategory } = G6;

register(ExtensionCategory.NODE, 'custom-node', CustomNode);

export default () => {
  return <MindMap node={{ type: 'custom-node' }} {...options} />;
};
```

---

### 3. How to Disable All Behaviors?

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  return <MindMap behaviors={[]} {...options} />;
};
```
