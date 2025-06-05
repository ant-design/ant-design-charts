---
title: transpose
order: 2
---

Transpose 是坐标系的转置变换，将 (x, y) 变换成 (y, x)，常用于条形图和柱状图之间的转换。

## 开始使用

<img alt="bar" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4ddPToEry_cAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```js
{
  "type": "interval",
  "labels": [
    {
      "text": "frequency",
      "formatter": ".1%",
      "style": {
        "textAnchor": "-FN-(d) => (+d.frequency > 0.008 ? 'right' : 'start')-FN-",
        "fill": "-FN-(d) => (+d.frequency > 0.008 ? '#fff' : '#000')-FN-",
        "dx": "-FN-(d) => (+d.frequency > 0.008 ? -5 : 5)-FN-"
      }
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "colorField": "steelblue",
  "yField": "frequency",
  "xField": "letter",
  "transform": [
    {
      "type": "sortX",
      "reverse": true
    }
  ],
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv",
    "format": "csv"
  }
}
```
