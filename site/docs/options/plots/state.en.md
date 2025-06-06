---
title: State
order: 11
---

State in Ant Design Charts is mainly used to control the state style of mark. These states will be interactively triggered and the attributes are style attributes supported by @antv/g.

```js
({
  state: {
    active: { fill: 'red', stroke: 'blue', strokeWidth: 2 },
    inactive: { fill: '#aaa' },
  },
});
```

## Built-in States

There are currently 4 built-in states:

- active - the style when highlighted
- inactive - style when not highlighted
- selected - style when selected
- unselected - style when not selected

## Highlighted States

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "interaction": "elementHighlight",
    "axis": {
      "y": {
        "labelFormatter": ".0%"
      }
    },
    "yField": "frequency",
    "xField": "letter",
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Selected States

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "interaction": "elementSelect",
    "axis": {
      "y": {
        "labelFormatter": ".0%"
      }
    },
    "yField": "frequency",
    "xField": "letter",
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
