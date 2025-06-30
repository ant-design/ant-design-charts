---
category: Components
type: Plot
usage: distribution,relation,interval
title: Sunburst 旭日图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*GBxdT697NYQAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-sunburst
order: 10
---

## 简介

旭日图（Sunbrust）作为一种强大且直观的数据可视化手段，在多种领域中的应用及其优势与局限。通过环形布局，旭日图有效地展现了数据间的层次关系和比例分配，尤其适用于那些具有明确父子关系的数据集。尽管存在一些限制，但其独特的设计使其成为商业分析、地理学研究等领域不可或缺的工具之一。融合了饼图和树状图的优点，采用圆形分割的方式来展示多层嵌套的信息结构。这种图表不仅能够清晰地反映出不同组别之间的相对大小，还能保持良好的视觉效果。比起树图，具备节省空间、整体情况更加直观等优点。

## 代码演示

更多示例详见[旭日图](/examples#statistics-sunburst)

### 基础用法

<Playground path="/statistics/sunburst/demo/sunburst-default.js" rid="sunburst-basic"></playground>

### 带标签

<Playground path="/statistics/sunburst/demo/sunburst-label.js" rid="sunburst-label"></playground>

### 自定义样式

<Playground path="/statistics/sunburst/demo/sunburst-style.js" rid="sunburst-style"></playground>

### 交互配置

<Playground path="/statistics/sunburst/demo/sunburst-interaction.js" rid="sunburst-interaction"></playground>

## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](#data)，见示例 | object | - |
| valueField | 值映射字段 | string（可选） | - |
| colorField | 颜色映射字段，详见[color](/options/plots/color) | string（可选） | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`Sunburst` 组件默认在其上绘制了一个旭日图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### data

数据中需要包含 `name` 或 `label` 字段，缺失则无法绘制。默认使用 `value` 进行值的映射，当数据中缺乏 `value` 字段时，需要使用 `valueField` 指定值的映射关系。

```json
{
  "name": "咖啡产地",
  "children": [
    {
      "name": "非洲",
      "value": 4,
      "children": [
        {
          "name": "埃塞俄比亚",
          "value": 1
        },
      ]
    },
  ]
}
```

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
