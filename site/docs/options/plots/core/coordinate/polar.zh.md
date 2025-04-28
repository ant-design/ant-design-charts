---
title: polar
order: 2
---

Polar 是极坐标系变换，将笛卡尔直角坐标系坐标变换为极坐标系下的坐标，常用于玫瑰图和柱状图之间的转换。

## 开始使用

<img alt="rose" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*SBAyToSuVWEAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```ts
{
  "coordinate": {
    "type": "polar"
  },
  "axis": {
    "y": {
      "labelFormatter": "~s",
      "tickCount": 5,
      "direction": "right"
    }
  },
  "scale": {
    "y": {
      "type": "sqrt"
    }
  }
}
```

## 选项

| 参数        | 说明                   | 类型     | 默认值               |
| ----------- | ---------------------- | -------- | -------------------- |
| startAngle  | 极坐标系起始弧度       | `number` | `-Math.PI / 2`       |
| endAngle    | 极坐标系结束弧度       | `number` | `(Math.PI \* 3) / 2` |
| innerRadius | 极坐标内半径，范围 0-1 | `number` | `0`                  |
| outerRadius | 极坐标半径，范围 0-1   | `number` | `1`                  |
