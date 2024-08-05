## 2.2.8
## 2.2.7
`2024-08-05`

- 🐞 [Webpack v4 (import * as issue) fix](https://github.com/ant-design/ant-design-charts/pull/2613)
- 🐞 [水波图Liquid组件当percent为0时，backgroundFill不生效](https://github.com/ant-design/ant-design-charts/issues/2628)

## 2.2.6

`2024-07-24`

- 🔥 Support SSR

## 2.2.5

`2024-07-03`

- 🐞 修复 flex 模式下，无法默认适应容器宽度问题

## 2.2.4

`2024-06-20`

- 🐞 fix dependencies

## 2.2.3

`2024-06-20`

- 💄 内置交互逻辑 `elementHighlightByColor` 更新为 `elementHighlight`

## 2.2.2

`2024-05-06`

- 🐞 修复低版本 webpack 不支持的 `export * as` 语法

## 2.2.1

`2024-04-25`

- 🐞 修复 Tiny 组件默认不能自适应容器大小

## 2.2.0

`2024-04-19`

- 🐞 修复低版本 webpack 不支持的 `export * as` 语法
- 🔥 暴露图表 ref 上层可通过 ref 直接获取图表实例，eg: `<Line ref={React.useRef()} />`

## 2.1.16

`2024-04-16`

- 💄 依赖更新

## 2.1.15

`2024-03-20`

- 🔥 新增 `fontSizeField`，支持 `WordCloud` 根据内容调整文本大小
- 🐞 修复 [transform percent\stack conflict](https://github.com/ant-design/ant-design-charts/issues/2456)
- 🐞 修复 [TS type error](https://github.com/ant-design/ant-design-charts/issues/2440)

## 2.1.14
## 2.1.14-beta.0

`2024-02-21`

- 🐞 修复 `@antv/g` 版本冲突


## 2.1.13

`2024-02-06`

- 🐞 修复 isValidElement 检测错误

## 2.1.12

`2024-01-16`

- 🐞 修复 isValidElement 检测不全
- 🐞 [ Sankey throws error when data is empty](https://github.com/ant-design/ant-design-charts/issues/2361)

## 2.1.11

`2024-01-12`

- 🐞 修复 tooltip 抖动

## 2.1.10
## 2.1.9

`2024-01-10`

- 🐞 修复 [axis.y.title 值如果是动态的并不会更新](https://github.com/ant-design/ant-design-charts/issues/2353)
- 🐞 修复 [面积图类型丢失](https://github.com/ant-design/ant-design-charts/issues/2354)
- 🐞 修复 isTooltip render 判断逻辑
- 🔥 `markBackground` 新增 originData 字段，保留原始数据

## 2.1.8
## 2.1.7

`2024-01-09`

- 🐞 修复 `markBackground` legend 失效
- 🐞 修复 `transform` 转换逻辑错误

## 2.1.6

`2024-01-08`

- 🐞 修复 [环图的半径不支持动态更新](https://github.com/ant-design/ant-design-charts/issues/2342)
- 🐞 修复 [2.x版本饼图value为0时图形是不渲染的](https://github.com/ant-design/ant-design-charts/issues/2324)

## 2.1.5

`2023-12-27`

- 🔥 新增 linkColorField 配置，用于指定 link 颜色跟随节点
- 🐞 修复 [Snakey data](https://github.com/ant-design/ant-design-charts/issues/2320) 类型错误

## 2.1.4

`2023-12-25`

- 🐞 修复 [measureTextWidth](https://github.com/ant-design/ant-design-charts/issues/2316) 丢失
- 🐞 修复 [connectNulls](https://github.com/ant-design/ant-design-charts/issues/2305) 类型错误


## 2.1.3

`2023-12-12`

- 💄 代码逻辑优化
- 🐞 修复 DualAxes Annotations 配置展示异常


## 2.1.2

`2023-12-12`

- 🔥 新增 segment chart 示例，优化 transform 逻辑
- 🐞 修复 autoFit 配置无效


## 2.1.1

`2023-12-08`

- 🔥 新增 2.5D Column and Bar，shapeField: 'column25D' | 'bar25D'
- 🐞 修复 clip 配置无效


## 2.1.0

`2023-12-06`

- 🐞 修复 tooltip 特殊情况下闪动

## 2.0.9

`2023-12-05`

- 🐞 修复 jsx 类型推断错误

## 2.0.0

`2023-11-22`

- 🔥 底层库升级到 [G2 5.0](https://github.com/antvis/g2)
