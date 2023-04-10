---
title: 贴图图案
order: 8
---

### 介绍

pattern 是附着在图形上的贴图样式。

*   我们内置了默认的、区分度较高的三种贴图：点、线、方形。在颜色区分度不高的图表中，pattern 能够作为「直观的、视觉上的分类属性」来区分每个项目，对色盲人士友好。
*   扩充颜色分组：pattern 还可以作为颜色的「补充项」。遇到和谐的颜色「不够用」、颜色占比小「区分不明显」等情况，pattern 可以帮助颜色扩充分类。
*   结合颜色分组：我们可以用 pattern 作为「组」，然后用颜色在该组下进行细粒度的分类。
*   程度分组：圆形和方形的大小、线的粗细可以用来表示「程度」。
*   突出重点、丰富表现力：pattern 不仅有「好看」的皮囊，还可以作为讲故事的「点睛之笔」，高亮某个项目。

### 在 G2Plot 中使用 pattern

G2Plot 内置了 `'dot' ｜ 'line' | 'square'` 等若干贴图, 图案颜色默认从当前 element 继承。

<Playground path="plugin/pattern/demo/pie-pattern.ts" rid="pie-pattern"></playground>

一些场景使用：

*   [Demo1](/zh/examples/plugin/pattern#legend-marker-with-pattern): 图例(legend) marker 使用 pattern
*   [Demo2](/zh/examples/plugin/pattern#bar-pattern): 通过回调设置不同的 pattern

<!-- 补充 案例说明 和 案例 -->

### API 说明

设置图形的贴图样式。

*   配置项：由`type`和`cfg`组成，`type`目前包括三种类型：`dot`、`line`、`square`，`cfg`为可选项。
*   特点：`pattern`会覆盖当前图形设置的`style`样式(如 pieStyle、columnStyle 等)。
*   使用方式：可通过 配置项(PatternOption) 或传入 CanvasPattern 对象 的方式给图表的所有图形设置统一的贴图样式，还提供了 callback 的方式给对应的图形设置样式。此外，提供了 getCanvasPattern 方法传入 PatternOption 配置来创建 pattern，以修改 Legend 样式[Demo](/zh/examples/plugin/pattern#legend-marker-with-pattern)

pattern 的类型定义如下：

```plain
PatternAttr =
  | CanvasPattern
  | PatternOption
  | ((datum: Datum, color: string /** inherit color */) => PatternOption | CanvasPattern);
```

具体用法：

```ts
// 给图形设置统一贴图
{
   pattern: {
    type: 'dot',
    cfg: {
      size: 4,
      padding: 4,
      rotation: 0,
      fill: '#FFF',
      isStagger: true,
    },
  },
}
// 给图形分别设置贴图
{
  pattern: ({type}, color) =>{
    if(type ==='分类一') {
      return { 
        type: 'dot',
        cfg: {
          backgroundColor: color, // 继承主题颜色
        }
      }
    } else if(type ==='分类二') {
      return {
         type: 'square',
         cfg: {
           backgroundColor: 'pink', // 自定义颜色
         }
       }
    } else if(type ==='分类三') {
      return { 
        type: 'line' 
      }
    }
  },
}
```

<!--各个 pattern 的配置项-->

pattern 共有的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| backgroundColor   | *string*         | 贴图的背景色            |
| fill     | *string*         | 贴图元素的填充色      |
| fillOpacity   |   *number* | 贴图元素填充的透明度 |
| stroke   | *string*         | 贴图元素的描边色          |
| strokeOpacity       | *number*         | 贴图元素的描边透明度色    |
| lineWidth   | *number*         | 贴图元素的描边粗细        |
| opacity | *number*         | 贴图整体的透明度              |
| rotation    | *number*         | 贴图整体的旋转角度             |

dotPattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 圆点的大小，默认为`6`  |
| padding          | *number*         | 圆点之间的间隔，默认为`2` |
| isStagger        | *boolean*         | 圆点之间是否交错，默认为`true`    |

linePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| spacing          | *number*         | 两条线之间的距离，默认为`5`  |

squarePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 矩形的大小，默认为`6`  |
| padding          | *number*         | 矩形之间的间隔，默认为`1` |
| isStagger        | *boolean*         | 矩形之间是否交错，默认为`true`    |


### 注意事项

请注意 pattern 的使用，目前有一些限制：

1.  `svg` 的渲染方式下，暂不支持 pattern 图案填充
2.  pattern 默认继承元素（element）的填充色，但不支持 pattern 填充色为渐变色，即元素（element）为渐变色时，pattern 背景色无法继承，需要手动指定。参考：[Demo](/zh/examples/tiny/tiny-area#pattern)
3.  Tooltip, Legend 的 marker 使用的是依旧是纯颜色（plain color）. 对于 Legend marker 可以考虑使用回调的方式来设置，参考：[Demo](/zh/examples/plugin/pattern#pie-pattern-callback)
