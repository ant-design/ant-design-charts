---
title: academy
order: 2
---

学术风格的主题。

## 开始使用

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*bhxbTbGXhJwAAAAAAAAAAAAADmJ7AQ/original" width=640 alt="academy">

```js
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "theme": "academy",
    "axis": {
      "x": {
        "zIndex": 1
      },
      "y": {
        "labelFormatter": "~s"
      }
    },
    "colorField": "age",
    "yField": "population",
    "xField": "state",
    "transform": [
      {
        "type": "dodgeX"
      },
      {
        "type": "sortX",
        "by": "y",
        "reverse": true,
        "slice": 6
      }
    ],
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv",
      "format": "csv"
    },
    "interaction": {
      "elementHighlight": {
        "background": true
      },
      "tooltip": {
        "shared": true
      }
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
