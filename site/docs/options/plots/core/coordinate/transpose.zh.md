---
title: transpose
order: 2
---

Transpose 是坐标系的转置变换，将 (x, y) 变换成 (y, x)，常用于条形图和柱状图之间的转换。

## 开始使用

<img alt="bar" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4ddPToEry_cAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```js
{
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  },
  "labels": [
    {
      "text": "frequency",
      "formatter": ".1%",
      "style": {}
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "transform": [
    {
      "reverse": true
    }
  ]
}
```
