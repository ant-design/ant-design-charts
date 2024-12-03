---
title: 总览
order: 0
---

## 通用属性

| 属性          | 说明                                                                                               | 类型              | 默认值 |
| ------------- | -------------------------------------------------------------------------------------------------- | ----------------- | ------ |
| width         | 设置图表宽度                                                                                       | number            | 400    |
| height        | 设置图表高度                                                                                       | number            | 400    |
| depth         | 设置图表深度，仅在绘制 3D 图表时生效                                                               | number            | 400    |
| autoFit       | 图表是否自适应容器宽高。当 autoFit 设置为 true 时，width 和 height 的设置将失效                    | number            | true   |
| renderer      | 设置图表渲染方式，默认使用 Canvas 渲染器。切换渲染器的方式，可参考 [FAQ](#如何使用-svg-来绘制图表) | -                 | -      |
| margin        | 设置外边距，具体指组件（坐标轴、图例等）到画布边界的距离。优先级别比分别设置低                     | number            | -      |
| marginTop     | 语法糖，设置上外边距                                                                               | number            | -      |
| marginRight   | 语法糖，设置右外边距                                                                               | number            | -      |
| marginBottom  | 语法糖，设置下外边距                                                                               | number            | -      |
| marginLeft    | 语法糖，设置左外边距                                                                               | number            | -      |
| padding       | 设置内边距，该区域用于绘制组件。优先级别比分别设置低                                               | number            | -      |
| paddingLeft   | 语法糖，设置上呼吸区域                                                                             | number            | -      |
| paddingRight  | 语法糖，设置上呼吸区域                                                                             | number            | -      |
| paddingBottom | 语法糖，设置上呼吸区域                                                                             | number            | -      |
| paddingLeft   | 语法糖，设置上呼吸区域                                                                             | number            | -      |
| inset         | 设置呼吸区域四个方向的值，具体指组件（坐标轴、图例等）到标记的距离。优先级别比分别设置低           | number            | -      |
| insetLeft     | 语法糖，设置上呼吸区域                                                                             | number            | -      |
| insetRight    | 语法糖，设置右呼吸区域                                                                             | number            | -      |
| insetBottom   | 语法糖，设置下呼吸区域                                                                             | number            | -      |
| insetLeft     | 语法糖，设置左呼吸区域                                                                             | number            | -      |
| title         | 设置图表标题                                                                                       | [Title](#title)   | -      |
| data          | 设置图表数据源                                                                                     | [Data](#data)     | -      |
| clip          |                                                                                                    |                   |        |
| label         | 设置数据标签，将图形的一些数据信息，比如值，名称等映射到图形的文本上                               | [Labels](#labels) | -      |

### Title

定义图表的标题。

| 属性                        | 说明                                                                                                                               | 类型                                                         | 默认值 |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| size                        | 设置标题高度                                                                                                                       | number                                                       | 36     |
| title                       | 设置主标题文本内容                                                                                                                 | string                                                       | -      |
| subtitle                    | 设置副标题文本内容                                                                                                                 | string                                                       | -      |
| align                       | 设置标题对齐方式                                                                                                                   | `left` \| `center` \| `right`                                | `left` |
| titleAlign                  | 设置主标题的对齐方式，其优先级别高于 titleAlign                                                                                    | `left` \| `center` \| `right`                                | `left` |
| subtitleAlign               | 设置副标题的对齐方式，其优先级别高于 titleAlign                                                                                    | `left` \| `center` \| `right`                                | `left` |
| spacing                     | 设置主标题与副标题间的垂直间距                                                                                                     | number                                                       | 2      |
| `title${TextStyleProps}`    | 设置主标题文字样式，可参考 [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) 配置。例如 titleFontSize 代表主标题字号    | [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) | -      |
| `subtitle${TextStyleProps}` | 设置副标题文字样式，可参考 [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) 配置。例如 subtitleFontSize 代表副标题字号 | [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) | -      |
## FAQ

### 如何使用 svg 来绘制图表？

支持 [G - SVG 渲染器](https://g.antv.antgroup.com/api/renderer/svg) 绘制：

```js {2,5,7}
import { Line } from '@ant-design/plots';
import { Renderer } from '@antv/g-svg';

export default () => {
  const svgRenderer = new Renderer();

  return <Line renderer={svgRenderer} {...} />
}
```
