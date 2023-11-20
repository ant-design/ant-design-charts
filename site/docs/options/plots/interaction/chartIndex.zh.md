---
title: chartIndex
---

查看折线图相对于某个时间点的相对趋势。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1669041887727/chart-index.gif" width="640">

```ts
{
  interaction: {
    chartIndex: {
      ruleStroke: '#aaa',
      labelDx: 5,
      labelTextAlign: 'center',
      labelStroke: '#fff',
      labelLineWidth: 5,
      labelFormatter: (d) => `${d.toLocaleDateString()}`,
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
