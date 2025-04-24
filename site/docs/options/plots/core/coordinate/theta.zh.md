---
title: theta
order: 2
---

Theta 是一种特殊的极坐标系，半径长度固定，仅将数据映射到角度，常用于饼图和柱状图之间的转换。

## 开始使用

<img alt="pie" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uQh-RryfSfUAAAAAAAAAAAAADmJ7AQ/original" height="600" />

```js
{
  "coordinate": {
    "type": "theta"
  },
  "labels": [
    {
      "radius": 0.8,
      "style": {
        "fontSize": 9,
        "dy": 8
      }
    },
    {
      "text": "name",
      "radius": 0.8,
      "style": {
        "fontSize": 10,
        "fontWeight": "bold"
      }
    }
  ],
  "legend": false,
  "scale": {
    "color": {
      "palette": "spectral"
    }
  },
  "style": {
    "stroke": "white"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ]
}
```

## 选项

| 参数        | 说明                   | 类型     | 默认值               |
| ----------- | ---------------------- | -------- | -------------------- |
| startAngle  | 极坐标系起始弧度       | `number` | `-Math.PI / 2`       |
| endAngle    | 极坐标系结束弧度       | `number` | `(Math.PI \* 3) / 2` |
| innerRadius | 极坐标内半径，范围 0-1 | `number` | `0`                  |
| outerRadius | 极坐标半径，范围 0-1   | `number` | `1`                  |
