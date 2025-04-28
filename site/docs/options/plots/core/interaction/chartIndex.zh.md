---
title: chartIndex
order: 9
---

查看折线图相对于某个时间点的相对趋势。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1669041887727/chart-index.gif" width="640">

```ts
{
  "paddingLeft": 50,
  "labels": [
    {
      "text": "Symbol",
      "selector": "last",
      "style": {
        "fontSize": 10
      }
    }
  ],
  "scale": {
    "y": {
      "type": "log"
    }
  },
  "axis": {
    "y": {
      "title": "↑ Change in price (%)",
      "labelAutoRotate": false
    }
  },
  "interaction": {
    "chartIndex": {
      "ruleStroke": "#aaa",
      "labelDx": 5,
      "labelTextAlign": "center",
      "labelStroke": "#fff",
      "labelLineWidth": 5
    }
  }
}
```

## 选项

| 属性                 | 描述         | 类型                           | 默认值 |
| -------------------- | ------------ | ------------------------------ | ------ |
| labelFormatter       | 格式化日期   | `FormatterFunction`            | -      |
| `rule${StyleAttrs}`  | 指示线的样式 | `number             \| string` | -      |
| `label${StyleAttrs}` | 文本的样式   | `number             \| string` | -      |
