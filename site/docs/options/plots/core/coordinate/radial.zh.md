---
title: radial
order: 2
---

Radial 是一种特殊的极坐标系，常用于绘制玉钰图。

## 开始使用

<img alt="radial" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TVXmRq627aEAAAAAAAAAAAAADmJ7AQ/original" height="600" />

```js
{
  "coordinate": {
    "innerRadius": 0.1
  },
  "axis": {
    "y": {}
  },
  "legend": {
    "color": {
      "length": 400,
      "position": "bottom",
      "layout": {
        "justifyContent": "center"
      }
    }
  },
  "scale": {
    "color": {
      "range": "#BAE7FF-#1890FF-#0050B3"
    }
  },
  "style": {
    "stroke": "white"
  }
}
```

## 选项

| 参数        | 说明                   | 类型   | 默认值               |
| ----------- | ---------------------- | ------ | -------------------- |
| startAngle  | 极坐标系起始弧度       | number | `-Math.PI / 2`       |
| endAngle    | 极坐标系结束弧度       | number | `(Math.PI \* 3) / 2` |
| innerRadius | 极坐标内半径，范围 0-1 | number | `0`                  |
| outerRadius | 极坐标半径，范围 0-1   | number | `1`                  |
