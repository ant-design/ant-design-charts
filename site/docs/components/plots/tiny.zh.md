---
category: Components
type: Plot
title: Tiny 迷你图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*e7gFTKK4RXwAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-tiny
order: 12
---

## 概述

迷你图是一种紧凑、无坐标轴的极简数据可视化形式，由统计学家爱德华・塔夫特（Edward Tufte）于 1983 年提出，旨在用 “文字般的大小” 传递数据趋势。其核心特征包括：

- 去冗余设计：省略标题、坐标轴、网格线等元素，仅保留数据曲线或柱形的轮廓。
- 趋势优先：聚焦数据的波动、峰值、谷值和整体走向，而非具体数值（需配合数字标注时才显示）。
- 嵌入式属性：常嵌入表格、文本段落或仪表盘单元格中，作为数据的 “微型注解”（如 Excel 单元格内的迷你图）。


## 示例

更多示例详见[迷你图](/examples#statistics-tiny)

## 迷你面积图（Tiny.Area）

### 示例

**基本用法**

<Playground path="/statistics/tiny/demo/basic-area.js" rid="tiny-area"></playground>

**带辅助线**

<Playground path="/statistics/tiny/demo/area-annotation.js" rid="tiny-area-annotation"></playground>

### 配置

迷你面积图和面积图配置一致，只是默认关闭了`axis`、`tooltip` 并调整了 `padding`、`margin` 值，参考 [Area](/components/plots/area#配置项)

## 迷你折线图（Tiny.Line）

### 示例

**基本用法**

<Playground path="/statistics/tiny/demo/basic-line.js" rid="tiny-line"></playground>

**带辅助线**

<Playground path="/statistics/tiny/demo/line-annotation.js" rid="tiny-line-annotation"></playground>

### 配置

迷你折线图和折线图配置一致，只是默认关闭了`axis`、`tooltip` 并调整了 `padding`、`margin` 值，参考 [Line](/components/plots/line#配置项)

## 迷你柱状态（Tiny.Column）

### 示例

**基本用法**

<Playground path="/statistics/tiny/demo/basic-column.js" rid="tiny-column"></playground>

**带辅助线**

<Playground path="/statistics/tiny/demo/column-annotation.js" rid="tiny-column-annotation"></playground>

### 配置

迷你柱状图和柱状图配置一致，只是默认关闭了`axis`、`tooltip` 并调整了 `padding`、`margin` 值，参考 [Column](/components/plots/column#配置项)
