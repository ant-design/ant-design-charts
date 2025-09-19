---
title: classicDark
order: 2
---

经典暗黑主题。

## 开始使用

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gZEUS6ttYeAAAAAAAAAAAAAADmJ7AQ/original" width=640 alt="classicDark">

```js
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "theme": "classicDark",
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
