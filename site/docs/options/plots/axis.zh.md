---
title: 坐标轴（Axis）
order: 2
---

## 概述

Ant Design Charts 中 **Axis（坐标轴）** 就像是图表的 "尺子"，用于建立数据与视觉位置的映射关系，并通过刻度、标签、网格线等元素帮助用户直观理解数据的分布与比例。它能帮你快速看懂图形的位置和数值大小。

简单来说，坐标轴可以帮助我们把数据数字和图表上的位置对应起来，让图表更容易理解。

> 举个例子：在柱状图中，横轴通常表示时间，纵轴表示销售额，这样你就能一眼看出 "3 月卖了 200 万，4 月涨到 300 万"

![坐标轴使用方式示意图](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gv2RSJ6zZykAAAAAAAAAAAAAemJ7AQ/original)

### 构成元素

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*vMugQZrzeeYAAAAAAAAAAAAAemJ7AQ/original" width="1000px" />

### 使用方式

通过前面的概述内容，相信你对坐标轴已经有了一个清晰的认识。那么具体该如何使用呢？接下来，我将手把手教你如何配置坐标轴。

配置坐标轴其实就像搭积木，只需记住一个简单的核心口诀："用 axis 属性，按方向配置，哪里需要改哪里改。"

**第一步：启用坐标轴（默认已开启）**

Ant Design Charts 会根据你的数据类型 自动生成坐标轴，不需要任何配置就能看到基础坐标轴

![启用坐标轴（默认已开启）](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gv2RSJ6zZykAAAAAAAAAAAAAemJ7AQ/original)

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, 月份: '三月', 销售额: 200 },
      { id: 3, 月份: '四月', 销售额: 300 },
      { id: 4, 月份: '五月', 销售额: 400 },
      { id: 5, 月份: '六月', 销售额: 500 },
      { id: 6, 月份: '七月', 销售额: 600 },
      { id: 7, 月份: '八月', 销售额: 700 },
    ],
    xField: '月份',
    yField: '销售额',
    // 不需要 axis 配置也能自动生成坐标轴
    // axis: {},
    colorField: '月份'
}
```

**第二步：按方向单独配置**

> 配置 x（水平方向） 坐标轴

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, 月份: '三月', 销售额: 200 },
      { id: 3, 月份: '四月', 销售额: 300 },
      { id: 4, 月份: '五月', 销售额: 400 },
      { id: 5, 月份: '六月', 销售额: 500 },
      { id: 6, 月份: '七月', 销售额: 600 },
      { id: 7, 月份: '八月', 销售额: 700 },
    ],
    xField: '月份',
    yField: '销售额',
    colorField: '月份',
    // 配置 axis（坐标轴）
    axis: {
      // 配置水平方向的坐标轴属性
      x: {
        // 配置参数以及示例可以继续往下看..
      },
    }
}
```

> 配置 y（垂直方向） 坐标轴

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, 月份: '三月', 销售额: 200 },
      { id: 3, 月份: '四月', 销售额: 300 },
      { id: 4, 月份: '五月', 销售额: 400 },
      { id: 5, 月份: '六月', 销售额: 500 },
      { id: 6, 月份: '七月', 销售额: 600 },
      { id: 7, 月份: '八月', 销售额: 700 },
    ],
    xField: '月份',
    yField: '销售额',
    colorField: '月份',
    // 配置 axis（坐标轴）
    axis: {
      // 配置垂直方向的坐标轴属性
      y: {
        // 配置参数以及示例可以继续往下看..
      },
    }
}
```

### 配置层级

坐标轴可以在 Mark 层级配置。在 Ant Design Charts 中每个标记（Mark）都有自己的坐标轴。如果标记对应比例尺是同步的，那么坐标轴也会合并。

```js
({
  axis: {
    x: { labelFormatter: '%0' },
    y: { tickCount: 5 },
  },
});
```

### 隐藏坐标轴

隐藏每个通道的坐标轴：

![坐标轴隐藏演示](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Z2JsTKPQxUMAAAAAAAAAAAAAemJ7AQ/original)

> 隐藏 x 坐标轴：

```js
({
  axis: { x: false }, // 隐藏 x 水平方向坐标轴
});
```

> 隐藏 y 坐标轴：

```js
({
  axis: { y: false }, // 隐藏 y 垂直方向坐标轴
});
```

> 隐藏多个坐标轴

```js
({
  axis: false,
});
```

## 配置项

每个坐标轴由 标题（title）、轴线（line）、刻度（tick）、刻度值（label）以及网格线（grid）组成。

| 属性     | 描述                           | 类型                                               | 默认值                       | 必选 |
| -------- | ------------------------------ | -------------------------------------------------- | ---------------------------- | ---- |
| title    | 设置坐标轴的标题文本及其样式   | [title](#title)                                    | -                            |      |
| line     | 设置坐标轴线的显示及其样式     | [line](#line)                                      | -                            |      |
| tick     | 设置坐标轴刻度线的显示及其样式 | [tick](#tick)                                      | -                            |      |
| label    | 设置坐标轴刻度值的显示及其样式 | [label](#label)                                    | -                            |      |
| grid     | 设置坐标轴网格线的显示及其样式 | [grid](#grid)                                      | -                            |      |
| breaks     | 设置坐标轴断轴的显示及其样式 | [breaks](#breaks)   | -   |      |
| animate  | 设置坐标轴动画效果             | `boolean` &#124; [animate](#animate)               | -                            |
| position | 设置坐标轴的位置               | `left` &#124; `right` &#124; `top` &#124; `bottom` | `x: bottom` &#124; `y: left` |      |

:::warning{title=注意}
标题（title）、轴线（line）、刻度（tick）、刻度值（label）以及网格线（grid）的配置同级，不是以对象的形式来配置，而是以前缀加属性的方式来配置。
:::

例如配置刻度值的旋转，不是在 label 对象下配置，而是通过如下的方式：

```js
({
  axis: {
    x: {
      title: 'x 轴标题',
      labelFontSize: 12,
      labelFormatter: (d) => `2025-${d}`,
      transform: [
        // 旋转
        {
          type: 'rotate',
          optionalAngles: [0, 45, 90], // 尝试旋转 0 度、45 度、90 度
          recoverWhenFailed: true, // 如果旋转后无法解决问题，恢复到默认角度
        },
      ],
    },
  },
});
```

### title

| 属性               | 描述                                                           | 类型                                                                                                               | 默认值        | 必须 |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | ---- |
| title              | 关闭标题或设置标题内容                                         | `false`&#124;`string` &#124; `number` &#124; [DisplayObject](https://g.antv.antgroup.com/api/basic/display-object) | -             |      |
| titleSpacing       | 标题到坐标轴的距离                                             | `number` &#124; `(datum, index, data) => number`                                                                   | 10            |      |
| titlePosition      | 标题相对坐标轴的位置，支持首字母简写形式，如`'top'`简写为`'t'` | `'top'`&#124;`'bottom'`&#124;`'left'`&#124;`'right'`                                                               | `'lb'`        |      |
| titleFontSize      | 标题文字大小                                                   | `number` &#124; `(datum, index, data) => number`                                                                   | -             |      |
| titleFontWeight    | 标题文字字体粗细                                               | `number` &#124; `(datum, index, data) => number`                                                                   | -             |      |
| titleFontFamily    | 标题文字字体                                                   | `string` &#124; `(datum, index, data) => string`                                                                   | -             |      |
| titleLineHeight    | 标题文字行高                                                   | `number` &#124; `(datum, index, data) => number`                                                                   | 1             |      |
| titleTextAlign     | 标题文字水平对齐方式                                           | `'center'` &#124; `'end'` &#124; `'left'` &#124; `'right'` &#124; `'start'` &#124; `(datum, index, data) => string`          | `'start'`     |      |
| titleTextBaseline  | 标题文字垂直基线                                               | `'top'` &#124; `'middle'` &#124; `'bottom'` &#124; `'alphabetic'` &#124; `'hanging'` &#124; `(datum, index, data) => string` | `'middle'`    |      |
| titleFill          | 标题文字填充色                                                 | `string` &#124; `(datum, index, data) => string`                                                                   | -             |      |
| titleFillOpacity   | 标题填充透明度                                                 | `number` &#124; `(datum, index, data) => number`                                                                   | 1             |      |
| titleStroke        | 标题描边颜色                                                   | `string` &#124; `(datum, index, data) => string`                                                                   | `transparent` |      |
| titleStrokeOpacity | 标题描边透明度                                                 | `number` &#124; `(datum, index, data) => number`                                                                   | 1             |      |
| titleLineHeight    | 标题行高                                                       | `number` &#124; `(datum, index, data) => number`                                                                   | 1             |      |
| titleLineWidth     | 标题文字描边宽度                                               | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |
| titleLineDash      | 标题文字描边虚线配置                                           | `number[]` &#124; `(datum, index, data) => number[]`                                                               | []            |      |
| titleOpacity       | 标题文字整体透明度                                             | `number` &#124; `(datum, index, data) => number`                                                                   | 1             |      |
| titleShadowColor   | 标题文字阴影颜色                                               | `string` &#124; `(datum, index, data) => string`                                                                   | `transparent` |      |
| titleShadowBlur    | 标题文字阴影高斯模糊系数                                       | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |
| titleShadowOffsetX | 标题文字阴影水平偏移量                                         | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |
| titleShadowOffsetY | 标题文字阴影垂直偏移量                                         | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |
| titleCursor        | 标题文字鼠标样式                                               | `string` &#124; `(datum, index, data) => string`                                                                   | `default`     |      |
| titleDx            | 标题文字水平偏移量                                             | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |
| titleDy            | 标题文字垂直偏移量                                             | `number` &#124; `(datum, index, data) => number`                                                                   | 0             |      |

> 配置方式

```js
({
  // 配置坐标轴
  axis: {
    // 配置 y 轴
    y: {
      // 这部分是轴标题的配置
      title: 'Frequency', // 设置 y 轴标题
      titleSpacing: 30, // 设置 y 轴标题与轴线之间的间距
      titleFill: 'steelblue', // 设置 y 轴标题的颜色
    },
    // 配置 x 轴
    x: {
      // 这部分是轴标题的配置
      title: 'Letter', // 设置 x 轴标题
    },
  },
});
```

### line

| 属性              | 描述                                                                                                              | 类型                                                                  | 默认值 | 必须 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------ | ---- |
| line              | 是否显示轴线                                                                                                      | `boolean`                                                             | false  |      |
| arrow             | 是否显示箭头                                                                                                      | `boolean`                                                             | true   |      |
| lineExtension     | 轴线两侧的延长线                                                                                                  | `[number, number]`                                                    | -      |      |
| lineArrow         | 定义轴线箭头形状，默认为箭头形状                                                                                  | [DisplayObject](https://g.antv.antgroup.com/api/basic/display-object) | -      |      |
| lineArrowOffset   | 箭头偏移长度                                                                                                      | `number`                                                              | 15     |      |
| lineArrowSize     | 箭头尺寸                                                                                                          | `number`                                                              | -      |      |
| lineLineWidth     | 轴线描边宽度                                                                                                      | `number` &#124; `(datum, index, data) => number`                      | -      |      |
| lineLineDash      | 轴线描边虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` &#124; `(datum, index, data) => [number,number]`    | -      |      |
| lineOpacity       | 轴线整体透明度                                                                                                    | `number` &#124; `(datum, index, data) => number`                      | 1      |      |
| lineShadowColor   | 轴线阴影颜色                                                                                                      | `string` &#124; `(datum, index, data) => string`                      | -      |      |
| lineShadowBlur    | 轴线阴影高斯模糊系数                                                                                              | `number` &#124; `(datum, index, data) => number`                      | -      |      |
| lineShadowOffsetX | 轴线阴影水平偏移量                                                                                                | `number` &#124; `(datum, index, data) => number`                      | -      |      |
| lineShadowOffsetY | 轴线阴影垂直偏移量                                                                                                | `number` &#124; `(datum, index, data) => number`                      | -      |      |
| lineCursor        | 轴线鼠标样式                                                                                                      | `string` &#124; `(datum, index, data) => string`                      | `default` |      |

> 配置方式

```js
({
  axis: {
    x: {
      line: true, // 是否显示轴线
      arrow: true, // 是否显示箭头
      lineArrowOffset: 10, // 箭头偏移长度
      lineArrowSize: 30, // 箭头尺寸
      lineLineWidth: 10, // 轴线宽度
    },
    y: {
      line: true, // 是否显示轴线
      arrow: true, // 是否显示箭头
      lineArrowOffset: 10, // 箭头偏移长度
      lineArrowSize: 30, // 箭头尺寸
      lineLineWidth: 10, // 轴线宽度
    },
  },
});
```

### tick

| 属性              | 描述                                                                                                                | 类型                                                                                                                        | 默认值     | 必须 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ---- |
| tick              | 是否显示刻度                                                                                                        | `boolean`                                                                                                                   | true       |      |
| tickCount         | 设置推荐生成的刻度数量；tickCount 只是一个建议值                                                                  | `number`                                                                                                                    | -          |      |
| tickMethod        | 自定义刻度生成方法                                                                                                | `(start: number \| Date, end: number \| Date, tickCount: number) => number[]`                                               | -          |      |
| tickFilter        | 刻度线过滤                                                                                                          | `(datum, index, data)=>boolean`                                                                                             | -          |      |
| tickFormatter     | 刻度线格式化，可用于自定义刻度样式，回调函数中会额外返回该刻度的方向                                                | [DisplayObject](https://g.antv.antgroup.com/api/basic/display-object) &#124; `(datum, index, data, Vector)=> DisplayObject` | -          |      |
| tickDirection     | 刻度朝向，为 `positive` 时，位于侧轴方向（即主轴顺时针 90 度方向）, 为 `negative` 时，刻度位于侧轴负方向            | `'positive'` &#124; `'negative'`                                                                                            | `positive` |
| tickLength        | 刻度线长度                                                                                                          | `number`&#124;`(datum, index, data)=>number`                                                                                | 15         |      |
| tickStroke        | 刻度线描边颜色                                                                                                      | `string` &#124; `(datum, index, data, Vector)=>string`                                                                      | -          |      |
| tickStrokeOpacity | 刻度线描边透明度                                                                                                    | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickLineWidth     | 刻度线描边宽度                                                                                                      | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickLineDash      | 刻度线描边虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` &#124; `(datum, index, data, Vector)=>[number,number]`                                                    | -          |      |
| tickOpacity       | 刻度线整体透明度                                                                                                    | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickShadowColor   | 刻度线阴影颜色                                                                                                      | `string` &#124; `(datum, index, data, Vector)=>string`                                                                      | -          |      |
| tickShadowBlur    | 刻度线阴影高斯模糊系数                                                                                              | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickShadowOffsetX | 刻度线阴影水平偏移量                                                                                                | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickShadowOffsetY | 刻度线阴影垂直偏移量                                                                                                | `number` &#124; `(datum, index, data, Vector)=>number`                                                                      | -          |      |
| tickCursor        | 刻度线鼠标样式                                                                                                      | `string` &#124; `(datum, index, data, Vector)=>string`                                                                      | `default`  |      |

```js
({
  // 配置坐标轴
  axis: {
    y: {
      tickCount: 10, // 设置推荐生成的刻度数量
      tickLength: 20, // 设置 y 轴刻度线的长度
      tickFilter: (_, i) => i % 3 !== 0, // 过滤 y 轴刻度线，只显示每隔 3 个刻度线
      tick: true, // 是否显示刻度
      tickDirection: 'positive', // 刻度朝向
      tickStroke: '#333', // 刻度线描边颜色
      tickStrokeOpacity: 0.8, // 刻度线描边透明度
      tickLineWidth: 2, // 刻度线描边宽度
      tickLineDash: [2, 2], // 刻度线描边虚线配置
      tickOpacity: 1, // 刻度线整体透明度
      tickShadowColor: 'rgba(0,0,0,0.2)', // 刻度线阴影颜色
      tickShadowBlur: 2, // 刻度线阴影高斯模糊系数
      tickShadowOffsetX: 1, // 刻度线阴影水平偏移量
      tickShadowOffsetY: 1, // 刻度线阴影垂直偏移量
      tickCursor: 'crosshair', // 刻度线鼠标样式
    },
    x: {
      tick: true, // 是否显示刻度
      tickCount: 8, // 设置推荐生成的刻度数量
      tickMethod: (start, end, count) => {
        // 自定义刻度生成方法
        const step = (end - start) / (count - 1);
        return Array.from({ length: count }, (_, i) => start + i * step);
      },
      tickLength: 10, // 刻度线长度
      tickDirection: 'positive', // 刻度朝向
      tickStroke: '#3366ff', // 刻度线描边颜色
      tickLineWidth: 5, // 刻度线描边宽度
      tickOpacity: 0.9, // 刻度线整体透明度
      tickFilter: (_, i) => i % 2 === 0, // 过滤刻度线，只显示偶数索引的刻度
    },
  },
});
```

### label

| 属性               | 描述                                                                                                                                                                  | 类型                                                              | 默认值     | 必须 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------- | ---- |
| label              | 是否显示刻度值                                                                                                                                                        | `boolean`                                                         | -          |      |
| labelFontSize      | 刻度标签文字大小                                                                                                                                                      | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelFontFamily    | 刻度标签文字字体                                                                                                                                                      | `string` &#124; `(datum, index, data)=>string`                    | -          |      |
| labelFontWeight    | 刻度标签文字字体粗细                                                                                                                                                  | `number` &#124;`(datum, index, data)=>number`                     | -          |      |
| labelLineHeight    | 刻度标签文字行高                                                                                                                                                      | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelTextAlign     | 刻度标签文字水平对齐方式                                                                                                                                              | `'center'` &#124; `'end'` &#124; `'left'` &#124; `'right'` &#124; `'start'` &#124; `(datum, index, data)=>string`          | `'start'`  |      |
| labelTextBaseline  | 刻度标签文字垂直基线                                                                                                                                                  | `'top'` &#124; `'middle'` &#124; `'bottom'` &#124; `'alphabetic'` &#124; `'hanging'` &#124; `(datum, index, data)=>string` | `'bottom'` |      |
| labelAlign         | 刻度值对齐方式<br/>- 'horizontal' 始终保持水平<br/> - 'parallel' 平行于坐标轴<br/> - 'perpendicular' 垂直于坐标轴                                                     | `'horizontal'` &#124; `'parallel'` &#124; `'perpendicular'`       | `parallel` |      |
| labelFilter        | 刻度值过滤                                                                                                                                                            | `(datum, index, data)=> boolean`                                  | -          |      |
| labelFormatter     | 刻度值格式化，可以传入一个函数或者是 [d3-format](https://d3js.org/d3-format) 支持的字符串                                                                             | `string` \| `(datum, index, array) => string`                     | -          |      |
| labelRender     | 自定义 label 渲染，支持 HtmlString，用法同 `labelFormatter` | `string` \| `(datum, index, array) => string`   | -     |      |
| transform          | 刻度值转换，避免文本之间发生重叠。当前支持超长文本缩略、重叠刻度值隐藏、自动旋转                                                                                      | `Transform[]`                                                     | -          |      |
| labelTransform     | 刻度值转换，在局部坐标系下进行变换的快捷方式，包括缩放、平移、旋转、拉伸、矩阵变换，具体见[transform](https://g.antv.antgroup.com/api/basic/display-object#transform) | `string`                                                          | -          |      |
| labelAutoHide      | 自动隐藏重叠的刻度值，设置 size 值的时候生效                                                                                                                          | `boolean` &#124; `HideOverlapCfg`                                 | -          |      |
| labelAutoRotate    | 自动旋转刻度，设置 size 值的时候生效值                                                                                                                                | `boolean` &#124; `RotateOverlapCfg`                               | -          |      |
| labelAutoEllipsis  | 自动缩略刻度值，设置 size 值的时候生效                                                                                                                                | `boolean` &#124; `EllipsisOverlapCfg`                             | -          |      |
| labelAutoWrap      | 自动换行刻度值，设置 size 值的时候是生效                                                                                                                              | `boolean` &#124; `WrapOverlapCfg`                                 | -          |      |
| labelDirection     | 刻度值位于轴线的位置，参考`tickDirection`                                                                                                                             | `'positive'` &#124; `'negative'`                                  | `positive` |      |
| labelSpacing       | 刻度值到其对应刻度的间距                                                                                                                                              | `number`                                                          | 0          |      |
| labelFill          | 刻度标签文字填充色                                                                                                                                                    | `string` &#124; `(datum, index, data)=>string`                    | -          |      |
| labelFillOpacity   | 刻度标签文字填充透明度                                                                                                                                                | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelStroke        | 刻度标签文字描边颜色                                                                                                                                                  | `string` &#124; `(datum, index, data)=>string`                    | -          |      |
| labelStrokeOpacity | 刻度标签文字描边透明度                                                                                                                                                | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelLineWidth     | 刻度标签文字描边宽度                                                                                                                                                  | `number` &#124;`(datum, index, data)=>number`                     | -          |      |
| labelLineDash      | 刻度标签文字描边虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。                                               | `[number,number]` &#124; `(datum, index, data)=>[number, number]` | -          |      |
| labelOpacity       | 刻度标签文字整体透明度                                                                                                                                                | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelShadowColor   | 刻度标签文字阴影颜色                                                                                                                                                  | `string` &#124; `(datum, index, data)=>string`                    | -          |      |
| labelShadowBlur    | 刻度标签文字阴影高斯模糊系数                                                                                                                                          | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelShadowOffsetX | 刻度标签文字阴影水平偏移量                                                                                                                                            | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelShadowOffsetY | 刻度标签文字阴影垂直偏移量                                                                                                                                            | `number` &#124; `(datum, index, data)=>number`                    | -          |      |
| labelCursor        | 刻度标签文字鼠标样式                                                                                                                                                  | `string` &#124; `(datum, index, data)=>string`                    | `default`  |      |
| labelDx            | 刻度标签文字水平偏移量                                                                                                                                                | `number` &#124; `(datum, index, data)=>number`                    | 0          |      |
| labelDy            | 刻度标签文字垂直偏移量                                                                                                                                                | `number` &#124; `(datum, index, data)=>number`                    | 0          |      |

`labelFormatter` 视觉通道用于调整标签的格式。

##### 基本用法

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, 月份: '03', 销售额: 200 },
      { id: 3, 月份: '04', 销售额: 300 },
      { id: 4, 月份: '05', 销售额: 400 },
      { id: 5, 月份: '06', 销售额: 500 },
      { id: 6, 月份: '07', 销售额: 600 },
      { id: 7, 月份: '08', 销售额: 700 },
    ],
    xField: '月份',
    yField: '销售额',
    colorField: '月份',
    axis: {
      y: {
        title: '销售额',
      },
      x: {
        title: '月份',
        labelFontSize: 12,
        labelFormatter: (d) => `2025-${d}`, // 刻度值线格式化
      },
    }
}
```

##### D3 Format 格式化字符串

Ant Design Charts 支持使用 [d3-format](https://d3js.org/d3-format) 兼容的格式化字符串，这是一套强大且标准化的数值格式化规范。

##### 格式化语法

D3 format 的基本语法：`[[fill]align][sign][symbol][0][width][,][.precision][~][type]`

- **fill**: 填充字符，默认是空格
- **align**: 对齐方式（`<` 左对齐，`^` 居中，`>` 右对齐，`=` 数字右对齐）
- **sign**: 符号显示（`+` 总是显示符号，`-` 只显示负号，`(` 负数用括号）
- **symbol**: 前缀符号（`#` 进制前缀，`$` 货币符号）
- **0**: 零填充
- **width**: 最小宽度
- **,**: 千分位分隔符
- **precision**: 精度
- **~**: 去除尾随零
- **type**: 格式类型

##### 常用格式化类型

| 类型 | 描述       | 示例          |
| ---- | ---------- | ------------- |
| `d`  | 整数       | `42`          |
| `f`  | 固定小数位 | `42.00`       |
| `e`  | 科学计数法 | `4.2e+1`      |
| `s`  | SI 前缀    | `42k`, `1.5M` |
| `%`  | 百分比     | `42%`         |
| `$`  | 货币格式   | `$42.00`      |
| `r`  | 有效数字   | `42.0`        |
| `g`  | 通用格式   | `42`          |

##### D3-format 完整格式化参考

```js
// 常用数值格式
'.2f'; // 固定2位小数：23.45
'.0f'; // 整数：23
'.1%'; // 百分比：23.4%
',.0f'; // 千分位：1,234,567

// SI前缀格式（推荐用于大数值）
's'; // SI前缀：1.2M, 3.4k
'.1s'; // 1位小数SI：1.2M, 3.4k
'~s'; // 去尾随零SI：1.2M, 3k
'.0s'; // 整数SI：1M, 3k

// 货币格式
'$,.2f'; // 美元：$1,234.56
'$.2s'; // 美元SI：$1.23M

// 科学计数法
'.2e'; // 科学计数：1.23e+6
'.2g'; // 通用格式：1.2e+6 或 1234

// 进制格式
'd'; // 十进制整数：1234
'x'; // 十六进制：4d2
'o'; // 八进制：2322
'b'; // 二进制：10011010010
```

##### 自定义格式化函数

除了使用 d3-format 字符串，你也可以传入自定义函数：

```js
axis: {
  y: {
    labelFormatter: (value, index, data) => {
      // 自定义逻辑
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
      }
      return value.toString();
    },
  },
}
```

#### labelTransform

`labelTransform` 是 G 提供的在局部坐标系下进行变换的快捷方式，同时与 [CSS Transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 保持一致。

下面的例子展示了如何配置 `labelTransform` 来让 x 轴刻度值旋转 90 度。

```js
({
  axis: {
    x: {
      title: 'x 轴标题',
      labelFontSize: 12,
      labelFormatter: (d) => `2025-${d}`,
      labelTransform: 'rotate(90)',
    },
  },
});
```

#### transform

`transform` 为了避免刻度标签重叠或超出显示范围，系统提供了多种优化方式，包括缩略、旋转、隐藏和换行。
这些功能可通过两种方式配置：

1. `transform` 数组（多策略组合）
2. `labelAutoXXX` 系列属性（单策略快捷配置）`推荐`

两者的核心功能完全一致，区别在于使用场景和配置方式。

> 1. `transform` 数组（多策略组合）

```js
{
    width: 500,
    height: 500,
    data: [
      { id: 1, label: 'x 轴标签1', value: 200 },
      { id: 3, label: 'x 轴标签2', value: 300 },
      { id: 4, label: 'x 轴标签3', value: 400 },
      { id: 5, label: 'x 轴标签4', value: 500 },
      { id: 6, label: 'x 轴标签5', value: 600 },
      { id: 7, label: 'x 轴标签6', value: 700 },
      { id: 8, label: 'x 轴标签999', value: 800 },
    ],
    xField: 'label',
    yField: 'value',
    axis: {
      y: {
        title: 'y 轴标题',
      },
      x: {
        title: 'x 轴标题',
        labelFontSize: 12,
        labelFormatter: (d) => `2025-${d}`,
        transform: [
          // 缩略
          {
            type: 'ellipsis',
            suffix: '..', // 缩略符（默认...）
            minLength: 8, // 少于8字符不缩略
            maxLength: 12, // 超过12字符强制缩略
          },
          //  换行
          {
            type: 'wrap',
            wordWrapWidth: 80, // 单行最大宽度为 80px
            maxLines: 2, // 最多显示两行
            recoverWhenFailed: true, // 如果换行失败恢复到默认布局
          },
          // 旋转
          {
            type: 'rotate',
            optionalAngles: [0, 45, 90], // 尝试旋转 0 度、45 度、90 度
            recoverWhenFailed: true, // 如果旋转后无法解决问题，恢复到默认角度
          },
          // 隐藏
          {
            type: 'hide',
            keepHeader: true, // 保留第一个刻度值
            keepTail: true, // 保留最后一个刻度值
          },
        ],
      },
    }
}
```

`labelTransform` 是 G 提供的在局部坐标系下进行变换的快捷方式，同时与 [CSS Transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 保持一致。

下面的例子展示了如何配置 `labelTransform` 来让 x 轴刻度值旋转 90 度。

```js
({
  axis: {
    x: {
      title: 'x 轴标题',
      labelFontSize: 12,
      labelFormatter: (d) => `2025-${d}`,
      labelTransform: 'rotate(90)',
    },
  },
});
```

> 2. 使用 `labelAutoHide`、`labelAutoRotate`、`labelAutoEllipsis`、`labelAutoWrap`、 属性（需设置 `size`）

```js
{
    width: 500,
    height: 500,
    data: [
      { id: 1, label: 'x 轴标签1', value: 200 },
      { id: 3, label: 'x 轴标签2', value: 300 },
      { id: 4, label: 'x 轴标签3', value: 400 },
      { id: 5, label: 'x 轴标签4', value: 500 },
      { id: 6, label: 'x 轴标签5', value: 600 },
      { id: 7, label: 'x 轴标签6', value: 700 },
      { id: 8, label: 'x 轴标签999', value: 800 },
    ],
    xField: 'label',
    yField: 'value',
    axis: {
      y: {
        title: 'y 轴标题',
      },
      x: {
        title: 'x 轴标题',
        labelFontSize: 12,
        labelFormatter: (d) => `2025-${d}`,
        size: 100, // 必须设置 size
        labelAutoEllipsis: {
          suffix: '..',
          minLength: 8,
          maxLength: 12,
        },
        labelAutoWrap: {
          wordWrapWidth: 80,
          maxLines: 2,
          recoverWhenFailed: true,
        },
        labelAutoRotate: {
          optionalAngles: [0, 45, 90], // 尝试旋转 0 度、45 度、90 度
          recoverWhenFailed: true, // 如果旋转后无法解决问题，恢复到默认角度
        },
        labelAutoHide: {
          keepHeader: true, // 保留第一个刻度值
          keepTail: true, // 保留最后一个刻度值
        },
      },
    }
}
```

```js
export interface Transform {
  /** 避免刻度值重叠时的额外边距 */
  margin?: number[];
}

export interface EllipsisOverlapCfg extends Transform {
  type: 'ellipsis';
  /** 缩略替换字符，默认为 ... */
  suffix?: string;
  /** 文本短于该长度时不再缩略 */
  minLength: string | number;
  /** 文本短于该长度时一定会进行缩略 */
  maxLength?: string | number;
  /** 每次缩略执行步长 */
  step?: string | number;
}

export interface RotateOverlapCfg extends Transform {
  type: 'rotate';
  /** 可选的旋转角度值 */
  optionalAngles: number[];
  /** 当旋转无法避免重叠时，是否恢复为默认旋转角度 */
  recoverWhenFailed?: boolean;
}

export interface HideOverlapCfg extends Transform {
  type: 'hide';
  /** 保证第一个刻度值不被隐藏 */
  keepHeader?: boolean;
  /** 保证最后一个刻度值不被隐藏 */
  keepTail?: boolean;
}

export interface WrapOverlapCfg extends Transform {
  type: 'wrap';
  /** 单行最大宽度 */
  wordWrapWidth?: number;
  /** 最大行数 */
  maxLines?: number;
  recoverWhenFailed?: boolean;
}
```

### grid

在不同坐标系下网格线会具有不同的样式

| 场景标签            | 样式                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `直角坐标系`        | <img alt="linear-grid" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*i-2xTLMLU3EAAAAAAAAAAAAADmJ7AQ/original" width="200" />  |
| `极坐标系`          | <img alt="circle-grid" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gkAKQ4XTErQAAAAAAAAAAAAADmJ7AQ/original" width="100" />  |
| `极坐标系`          | <img alt="polar-grid" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4Tv3RIrDWvgAAAAAAAAAAAAADmJ7AQ/original" width="100" />   |
| `极坐标系` `雷达图` | <img alt="polygon-grid" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gZLeRpTXiRAAAAAAAAAAAAAADmJ7AQ/original" width="100" /> |

| 属性              | 描述                                                                                                              | 类型                                                              | 默认值    | 必须 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------- | ---- |
| grid              | 是否显示网格线                                                                                                    | `boolean`                                                         | false     |      |
| gridFilter        | 网格线过滤                                                                                                        | `(datum, index, data)=> boolean`                                  | -         |      |
| gridLength        | 网格线长度。一般情况下，不需要用户配置。                                                                          | `number` &#124; `(datum, index, data)=> number`                   | 0         |      |
| gridAreaFill      | 网格线区域填充色                                                                                                  | `string` &#124; `string[]`&#124; `(datum, index, data)=> string`  | -         |      |
| gridStroke        | 网格线描边颜色                                                                                                    | `string` &#124; `(datum, index, data)=> string`                   | -         |      |
| gridStrokeOpacity | 网格线描边透明度                                                                                                  | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridLineWidth     | 网格线描边宽度                                                                                                    | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridLineDash      | 网格线描边虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` &#124; `(datum, index, data)=> [number,number]` | -         |      |
| gridOpacity       | 网格线整体透明度                                                                                                  | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridShadowColor   | 网格线阴影颜色                                                                                                    | `string` &#124; `(datum, index, data)=> string`                   | -         |      |
| gridShadowBlur    | 网格线阴影高斯模糊系数                                                                                            | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridShadowOffsetX | 网格线阴影水平偏移量                                                                                              | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridShadowOffsetY | 网格线阴影垂直偏移量                                                                                              | `number` &#124; `(datum, index, data)=> number`                   | -         |      |
| gridCursor        | 网格线鼠标样式                                                                                                    | `string` &#124; `(datum, index, data)=> string`                   | `default` |      |

### breaks

```js
{
  breaks: [
    {
      start: 5000,
      end: 50000,
      gap: '3%',
    }
  ]
}
```

| 属性  | 描述 | 类型  | 默认值 | 必须 |
| ------- | ------- | ------- | ------- | ------- |
| start | 断轴开始值 | `number`  | -          |      |
| end | 断轴结束值 | `number`  | -          |      |
| gap | 断轴主轴方向区间占比，支持 0 ~ 1 和百分比两种类型 | `number` \| string  | -   |      |
| vertices | 断轴起伏顶点数 |  `number`  | 50          |      |
| verticeOffset | 断轴振幅 | `number`  | 3         |      |
| compress | 断轴压缩方式，`middle`: 居中压缩，`start`: 起始值附近压缩，`end`：结束值附近压缩 | `middle` \| `start` \| `end` |  middle |    |
| stroke | 断轴描边色 | `string`  | `#fff`      |      |
| fill | 断轴填充色 | `string`  |  `#aaa`       |      |
| lineDash | 断轴描边虚线样式 | `string`  | `2 2`      |      |

更多配置参考 canvas 基本绘图属性。

### animate

支持设置更新时的动画效果

| 属性    | 描述         | 类型                            | 默认值 | 必须 |
| ------- | ------------ | ------------------------------- | ------ | ---- |
| animate | 是否开启动画 | `boolean` &#124; `EffectTiming` | -      |      |

EffectTiming 支持配置的属性如下：

| 属性     | 描述                           | 类型     | 默认值 | 必须 |
| -------- | ------------------------------ | -------- | ------ | ---- |
| delay    | 延迟执行时间 (ms)              | `number` | -      |      |
| duration | 动画持续时间 (ms)              | `number` | -      |      |
| easing   | 动画的缓动函数                 | `Easing` | -      |      |
| endDelay | 延迟执行时间 (ms)              | `number` | -      |      |
| fill     | 动画处于非运行状态时的展示效果 | `Fill`   | -      |      |

## 事件

坐标轴(axis)组件本身没有专属的事件类型。

## 示例

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  const config = {
    // 设置图表类型为柱状图
    // 设置图表的上边距像素
    marginTop: 40,
    data: [
      { id: 1, label: 'x 轴标签1', value: 200 },
      { id: 3, label: 'x 轴标签2', value: 300 },
      { id: 4, label: 'x 轴标签3', value: 400 },
      { id: 5, label: 'x 轴标签4', value: 500 },
      { id: 6, label: 'x 轴标签5', value: 600 },
      { id: 7, label: 'x 轴标签6', value: 700 },
    ],
    xField: 'label',
    // 设置数据编码
    yField: 'value',
    axis: {
      // 配置 x 轴
      x: {
        position: 'bottom', // 设置坐标轴的位置
        // 这部分是轴标题的配置
        title: 'x 轴标题', // 轴标题内容
        titleFontWeight: 500, // 轴标题的字体粗细
        // 这部分是网格线的配置
        grid: true, // 是否显示网格线
        gridLineWidth: 2, // 网格线宽度
        // 这部分是轴线的配置
        line: true, // 是否显示轴线
        lineLineWidth: 5, // 轴线宽度
        lineStroke: '#f50', // 轴线描边色
        // 这部分是轴刻度的配置
        tick: true, // 是否显示刻度
        tickLineWidth: 5, // 刻度线宽度
        tickLength: 10, // 刻度线长度
        tickStroke: '#3366ff', // 刻度线颜色
        // 这部分是轴标签的配置
        label: true, // 是否显示刻度值
        labelFontSize: 12, // 刻度值文字大小
        labelFill: '#009900', // 刻度值字体颜色
        labelFontWeight: 500, // 刻度值字体粗细
      },
      // 配置 y 轴
      y: {
        position: 'left', // 设置坐标轴的位置
        // 这部分是轴标题的配置
        title: 'y 轴标题', // 轴标题内容
        titleFontWeight: 500, // 轴标题的字体粗细
        // 这部分是网格线的配置
        grid: true, // 是否显示网格线
        gridLineWidth: 2, // 网格线宽度
        // 这部分是轴线的配置
        line: true, // 是否显示轴线
        lineLineWidth: 5, // 轴线宽度
        lineStroke: '#f50', // 轴线描边色
        // 这部分是轴刻度的配置
        tick: true, // 是否显示刻度
        tickLineWidth: 5, // 刻度线宽度
        tickLength: 10, // 刻度线长度
        tickStroke: '#3366ff', // 刻度线颜色
        // 这部分是轴标签的配置
        label: true, // 是否显示刻度值
        labelFontSize: 12, // 刻度值文字大小
        labelFill: '#009900', // 刻度值字体颜色
        labelFontWeight: 500, // 刻度值字体粗细
      },
    }
};
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

更多的案例，可以查看 [图表示例 - 坐标轴](/examples/component/axis/#axis-x) 页面。

