---
category: Components
type: Plot
usage: distribution
title: WordCloud 词云图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*hC4uR6yuBa4AAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-wordCloud
order: 5
---

## 简介

词云图（WordCloud）是一种专门用于生成词云图的工具。词云图是一种直观展示文本数据中关键词频次的可视化形式，通过不同大小、颜色和位置的文字来反映词语的重要性或权重。

## 代码演示

更多示例详见[词云图](/examples#statistics-wordCloud)

### 基础用法

<Playground path="/statistics/wordCloud/demo/wordCloud.js" rid="word-cloud-basic"></playground>

### 根据背景图进行布局

可以使用图表路径或图片 base64 数据。

<Playground path="/statistics/wordCloud/demo/wordCloud-image.js" rid="word-cloud-image"></playground>


## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| colorField | 颜色映射通道，详见[color](/options/plots/color) | string（可选） | - |
| textField | 设置单词的文本访问器函数，用来根据单词数据返回单词文本  | string \| (word: any) => string | - |
| layout  | 配置 `wordCloud` 布局，包括 `padding`、`rotate` 等  | [Layout](#layout)  | -      |
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
| annotations | 视图好比一个画板，`WordCloud` 组件默认在其上绘制了一个词云图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### layout

| 属性         | 描述                                                                                               | 类型                                                                                                               | 默认值                                   |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| font         | 设置字体样式，可以是字符串或函数，函数根据单词返回字体，修改 d3 词云配置                           | string \| (word: any) => string                                                                                    | 'Impact'                                 |
| fontSize     | 设置字体大小，可以是具体值、范围 [min, max] 或函数，修改 d3 词云配置                               | number \| [number, number] \| (word: any) => number                                                                | -                                        |
| imageMask    | 设置图像作为单词布局的遮罩，可以是 HTML 图像元素或图像路径字符串                                   | 'HTMLImageElement \| string                                                                                        | -                                        |
| on           | 配置事件监听器函数，可以监听布局完成 (end) 或单词更新 (word)                                       | ((type: 'end', details?: { cloud; words; bounds }) => void) \| ((type: 'word', details?: { cloud; word }) => void) | -                                        |
| padding      | 设置单词之间的间距，单位为像素，可以是具体值或动态函数                                             | number \| (word: any) => number                                                                                    | `2`                                      |
| rotate       | 设置单词的旋转角度，可以是具体值或动态函数                                                         | number \| word => number                                                                                           | `() => (~~(Math.random() * 6) - 3) * 30` |
| random       | 设置随机数生成器，可以是具体数值或函数                                                             | number \| (word => number)                                                                                         | -                                        |
| size         | 设置布局的矩形宽度和高度，格式为 [width, height]                                                   | [number, number]                                                                                                   | `[20, 60]`                               |
| spiral       | 设置单词的排布模式，可以选择 "archimedean" 或 "rectangular" 内置螺旋类型，也可以通过函数实现自定义 | 'archimedean' \| 'rectangular'                                                                                     | -                                        |
| timeInterval | 设置布局算法的时间间隔，控制运行时间                                                               | number                                                                                                             | -                                        |

### padding

配置 `wordCloud` 容器的边，可以通过`padding{Position}`配置不同方向的边距

```
type Position = 'Top' | 'Bottom' | 'left' | 'right';
```

与 layout 中的 `padding` 配置项对比

| 属性                  | 描述                                                   | 类型                            | 示例                                                                                                             |
| --------------------- | ------------------------------------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| option.padding        | 配置 `wordCloud` 容器的边距                            | number                          | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qunnQK7EIGUAAAAAAAAAAAAAemJ7AQ/original"></img> |
| option.layout.padding | 设置单词之间的间距，单位为像素，可以是具体值或动态函数 | number \| (word: any) => number | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-tAsSJGr0ngAAAAAAAAAAAAAemJ7AQ/original"></img> |

**spiral**

`spiral` 是一个控制词云布局算法的参数，它决定了词语在画布上的排列方式和路径模式。通过调整 spiral，可以优化词云的视觉效果、布局密度和性能。

| 参数值      | 说明                                                                 | 适用场景                     |
| ----------- | -------------------------------------------------------------------- | ---------------------------- |
| archimedean | 阿基米德螺旋线（默认值），词语从中心向外按螺旋路径排列，布局较紧凑。 | 通用场景，追求自然紧凑的布局 |
| rectangular | 矩形螺旋，词语按矩形路径排列，计算速度更快，但布局相对松散。         | 数据量大时优化性能           |

**imageMask**

`imageMask` 是一个用于控制词云形状的关键配置项，它的作用是通过指定一张图片的遮罩（Mask），将词云的布局限制在该图片的轮廓范围内，从而生成与图片形状匹配的词云效果。

`imageMask` 接收一个遮罩图片，WordCloud 布局算法会解析 imageMask 图片的像素信息，将图片的非透明区域视为允许放置词语的区域，而透明区域则禁止放置词语。词语会根据权重（如词频）在非透明区域内动态调整大小和位置。

注意事项：

- 图片质量：遮罩图片通常应是单色（黑白）图像。一般来说，词云会基于非白色区域定义形状。
- 图像加载：在使用图片遮罩时，确保图像资源已经完全加载，否则可能会出现渲染问题。
- 性能影响：复杂形状（例如高分辨率图片）可能会影响词云的构造速度。


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

