## [2.6.2](https://github.com/ant-design/ant-design-charts/compare/2.6.0...2.6.2) (2025-07-27)


### Features

* add a scale processing ([#3021](https://github.com/ant-design/ant-design-charts/issues/3021)) ([fc46dd7](https://github.com/ant-design/ant-design-charts/commit/fc46dd7c1ac8dfc618605e5dc5e4326f93f8b912))



## [2.6.1](https://github.com/ant-design/ant-design-charts/compare/2.6.0...2.6.1) (2025-07-21)


### Bug Fixes

* 修复 ice 产物 react 匹配错误 ([#3017](https://github.com/ant-design/ant-design-charts/issues/3017)) ([eb2cb95](https://github.com/ant-design/ant-design-charts/commit/eb2cb95e06c07e32ad1e22a5f2bfdab29f3eafad))
* Fix the issue where lineY cannot be drawn when data is empty ([#3013](https://github.com/ant-design/ant-design-charts/issues/3013)) ([3819d71](https://github.com/ant-design/ant-design-charts/commit/3819d71967f23170117d4cbb20fa77d7e8756f65))
* memory overflow by event emitter ([#3018](https://github.com/ant-design/ant-design-charts/issues/3018)) ([02b92c5](https://github.com/ant-design/ant-design-charts/commit/02b92c5a053cd4cb91e4073044280f6b55f0189f))
* reset example is abnormal ([#3014](https://github.com/ant-design/ant-design-charts/issues/3014)) ([22b833e](https://github.com/ant-design/ant-design-charts/commit/22b833e6cdc65a61e1c85369359e6aee84a943b0))



# [2.6.0](https://github.com/ant-design/ant-design-charts/compare/2.3.0...2.6.0) (2025-07-02)


* BREAKING CHANGE: update the configuration of the Stock (#3003) ([e71c805](https://github.com/ant-design/ant-design-charts/commit/e71c805fc50c3eb57d9dbcf10ccee9b5f66d543d)), closes [#3003](https://github.com/ant-design/ant-design-charts/issues/3003)
* BREAKING CHANGE: update the implementation and configuration of the V… (#2984) ([64b1c2e](https://github.com/ant-design/ant-design-charts/commit/64b1c2e7a0557205a9ee4a11a3d95409d3f7437e)), closes [#2984](https://github.com/ant-design/ant-design-charts/issues/2984)


### Bug Fixes

* annotations loss caused by legend filter ([#3000](https://github.com/ant-design/ant-design-charts/issues/3000)) ([23a9123](https://github.com/ant-design/ant-design-charts/commit/23a9123790d65d758ed0a71a62efcef4baeca75e))
* build lib ([#2953](https://github.com/ant-design/ant-design-charts/issues/2953)) ([ede61d6](https://github.com/ant-design/ant-design-charts/commit/ede61d68bb8e41fa6f7159e294add0af03f8503a))
* demo url ([#2934](https://github.com/ant-design/ant-design-charts/issues/2934)) ([e6593b0](https://github.com/ant-design/ant-design-charts/commit/e6593b096cce425e66d3f849dc643a7b15dc393a))
* get discussion argument ([#2971](https://github.com/ant-design/ant-design-charts/issues/2971)) ([13f90f9](https://github.com/ant-design/ant-design-charts/commit/13f90f95a1d186e9c6cf262f915302f9c670826c))
* oscp path ([#2939](https://github.com/ant-design/ant-design-charts/issues/2939)) ([9ebab5d](https://github.com/ant-design/ant-design-charts/commit/9ebab5d7b9134e60a46d2824df1948dd587c3c95))
* ref unable to obtain chart instance ([#2918](https://github.com/ant-design/ant-design-charts/issues/2918)) ([769755e](https://github.com/ant-design/ant-design-charts/commit/769755e62417426b9700218cf344e89bbe97e1f9))
* remove the default label logic ([#3006](https://github.com/ant-design/ant-design-charts/issues/3006)) ([c33e81c](https://github.com/ant-design/ant-design-charts/commit/c33e81c98f865dbe8f760e6334081737ef20d184))
* the display of labels with all - zero data is abnormal ([#2990](https://github.com/ant-design/ant-design-charts/issues/2990)) ([2fdb1d0](https://github.com/ant-design/ant-design-charts/commit/2fdb1d01156fb129f654c5d7b32100641300e10b))
* The legend display of the Veen chart is abnormal ([#2910](https://github.com/ant-design/ant-design-charts/issues/2910)) ([1f7d155](https://github.com/ant-design/ant-design-charts/commit/1f7d155fbe86f5aee375e75c89bf0114ff0336fd))
* unknown component shape.point.smooth ([#3009](https://github.com/ant-design/ant-design-charts/issues/3009)) ([afae06e](https://github.com/ant-design/ant-design-charts/commit/afae06ebd5f4d545b514c7c36ee898be77f9cdff))


### Features

* **ConfigProvider:** support global configuration ([#2921](https://github.com/ant-design/ant-design-charts/issues/2921)) ([6a972a4](https://github.com/ant-design/ant-design-charts/commit/6a972a4eb4c25d37df4e18047ed6bef58b16349f))
* improve the syntactic for sunburst chart data ([#2987](https://github.com/ant-design/ant-design-charts/issues/2987)) ([cba20b4](https://github.com/ant-design/ant-design-charts/commit/cba20b43aaee63ef45701b470d43405108518627))
* loading template theme support ([#2920](https://github.com/ant-design/ant-design-charts/issues/2920)) ([34f1900](https://github.com/ant-design/ant-design-charts/commit/34f1900c08e24d4bb5777078a7383f57e1d094fd))
* support the coordinateType configuration ([#2988](https://github.com/ant-design/ant-design-charts/issues/2988)) ([d5a32a4](https://github.com/ant-design/ant-design-charts/commit/d5a32a4820ec6d67108ff0a848f9cf922f86a2e3))


### BREAKING CHANGES

* update the configuration of the Stock

* fix: example
* update the implementation and configuration of the Violin chart

* fix; type

* chore: rename boxplot to box



# [2.5.0](https://github.com/ant-design/ant-design-charts/compare/2.3.0...2.5.0) (2025-06-16)


### Bug Fixes

* ref unable to obtain chart instance ([#2918](https://github.com/ant-design/ant-design-charts/issues/2918)) ([769755e](https://github.com/ant-design/ant-design-charts/commit/769755e62417426b9700218cf344e89bbe97e1f9))
* The legend display of the Veen chart is abnormal ([#2910](https://github.com/ant-design/ant-design-charts/issues/2910)) ([1f7d155](https://github.com/ant-design/ant-design-charts/commit/1f7d155fbe86f5aee375e75c89bf0114ff0336fd))
* [Bug]: 在暗色模式的主题下，图标出在loading状态的时候，背景是白色的，非常刺眼 [#2914](https://github.com/ant-design/ant-design-charts/issues/2914)

### Features

* **ConfigProvider:** support global configuration ([#2921](https://github.com/ant-design/ant-design-charts/issues/2921)) ([6a972a4](https://github.com/ant-design/ant-design-charts/commit/6a972a4eb4c25d37df4e18047ed6bef58b16349f))
* loading template theme support ([#2920](https://github.com/ant-design/ant-design-charts/issues/2920)) ([34f1900](https://github.com/ant-design/ant-design-charts/commit/34f1900c08e24d4bb5777078a7383f57e1d094fd))



# [2.4.0](https://github.com/ant-design/ant-design-charts/compare/2.2.1...2.4.0) (2025-05-14)


### Bug Fixes

* bidirectional bar update failed ([#2824](https://github.com/ant-design/ant-design-charts/issues/2824)) ([7549a6c](https://github.com/ant-design/ant-design-charts/commit/7549a6cd9669df58c95c5605dbe691d21ab0be89))
* data update ([#2684](https://github.com/ant-design/ant-design-charts/issues/2684)) ([11379e6](https://github.com/ant-design/ant-design-charts/commit/11379e6f791318fefaa036a3640cc3f9feb089f9))
* Fix the double tooltips caused by markers ([#2905](https://github.com/ant-design/ant-design-charts/issues/2905)) ([13c4e01](https://github.com/ant-design/ant-design-charts/commit/13c4e0199be62c9deb2cb7bd34df4c97e2d1468d))
* tooltip callback ([#2686](https://github.com/ant-design/ant-design-charts/issues/2686)) ([19d714d](https://github.com/ant-design/ant-design-charts/commit/19d714d958ab8a539c1267b28b6ee2c5ff84f735))
* typo in tooltip.zh.md ([#2696](https://github.com/ant-design/ant-design-charts/issues/2696)) ([30aea23](https://github.com/ant-design/ant-design-charts/commit/30aea235dbf800bf5230c8716fa8ce122f76ab0d))
* 修复对称柱状图无法修改属性的问题 ([#2793](https://github.com/ant-design/ant-design-charts/issues/2793)) ([a6f550a](https://github.com/ant-design/ant-design-charts/commit/a6f550a3785c3f5fabb6a167ee1835ef761f380a))


### Features

* be compatible with version react19 ([#2901](https://github.com/ant-design/ant-design-charts/issues/2901)) ([00711a5](https://github.com/ant-design/ant-design-charts/commit/00711a59dd6eacc25e140dcffb8ec766a8a0ca7d))


## 2.3.3

`2025-01-02`

- 🐞 修复对称条形图在堆叠情况下缩放容器导致的 axis 更新错误


## [2.3.2](https://github.com/ant-design/ant-design-charts/compare/2.2.1...2.3.2) (2024-09-06)


### Bug Fixes

* data update ([#2684](https://github.com/ant-design/ant-design-charts/issues/2684)) ([11379e6](https://github.com/ant-design/ant-design-charts/commit/11379e6f791318fefaa036a3640cc3f9feb089f9))
* tooltip callback ([#2686](https://github.com/ant-design/ant-design-charts/issues/2686)) ([19d714d](https://github.com/ant-design/ant-design-charts/commit/19d714d958ab8a539c1267b28b6ee2c5ff84f735))


## 2.3.1

`2024-08-26`

- 🐞 [🧐[问题]ESM packages (lodash-es) need to be imported. ](https://github.com/ant-design/ant-design-charts/issues/2489)

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
