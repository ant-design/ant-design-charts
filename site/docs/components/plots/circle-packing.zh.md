---
category: Components
type: Plot
title: CirclePacking 捆绑图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZMEHT7WqQmIAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-circle-packing
order: 10
---

## 简介

捆绑（circle-packing）又称圆形打包图，是一种将多层级数据以嵌套圆形形式可视化的图表，其核心特征包括：

- 空间填充逻辑：大圆内包含小圆，小圆又可嵌套更小的圆，通过圆的大小、位置和嵌套关系编码数据的层级与数值。
- 面积映射数值：圆的面积通常与数据值成正比（如销售额越大，圆面积越大），嵌套关系代表数据的所属层级（如公司→部门→团队）。
- 无重叠原则：所有圆彼此相切或分离，通过紧凑排列最大化空间利用率，类似自然界的气泡堆积。

## 代码演示

更多示例详见[捆绑](/examples#statistics-circle-packing)

### 基础用法

<Playground path="/statistics/circle-packing/demo/circlePacking.js" rid="circle-packing-basic"></playground>

### 数据标签

<Playground path="/statistics/circle-packing/demo/circlePackingLabel.js" rid="circle-packing-label"></playground>

### 自定义padding距离

<Playground path="/statistics/circle-packing/demo/circlePackingPadding.js" rid="circle-packing-padding"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](#data) | object | [] |
| valueField | 大小、大小映射字段 | string | - |
| colorField | 颜色通道字段，详见[color](/options/plots/color) | string（可选） | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`CirclePacking` 组件默认在其上绘制了一个捆绑，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### data

树结构。

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

