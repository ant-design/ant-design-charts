## 1.1.10

`2021-06-07`

- 💄 CDN 使用方式 charts_g6 改名为 graphs

## 1.1.9

`2021-06-04`

- 🐞 修复引用类型，数据不更新。

## 1.1.8

`2021-06-04`

- 🐞 修复 IndentedTreeGraph ts 类型出错。

## 1.1.5

`2021-06-01`

- 🆕 新增 IndentedTreeGraph, 功能类似 IndentedTree ，IndentedTree 不再官网继续透出，功能保留。
- 🆕 关系图内置 `grahpId` , 默认支持一个页面使用多个关系图。
- 🆕 关系图新增 `loading`、`onReady`、`loadingTemplate` 等 props.

## 1.1.4

`2021-05-14`

- 🔥 已经废弃 MultiView ，更名为 Mix ，MultiView 继续保留，但不在文档透出。

## 1.1.3

`2021-04-28`

- 🔥 默认支持按需加载 [#475](https://github.com/ant-design/ant-design-charts/issues/475)

## 1.1.2

`2021-04-12`

- 🐞 修复更新逻辑，config immutable 避免底层修改 config 后出现重复更新。

## 1.1.1

- remname: history -> CHANGELOG
- fix: graph layout and changeData error

## 1.1.0

- 文档更新 [#545](https://github.com/ant-design/ant-design-charts/pull/545)
- feat: 新增弦图(Chord) [#545](https://github.com/ant-design/ant-design-charts/pull/545)
- fix: fund flow graph with large slope edges [#540](https://github.com/ant-design/ant-design-charts/pull/540)
- fix: 兼容 React17 [#542](https://github.com/ant-design/ant-design-charts/pull/542)
- 导出 G2Plot 相关 function [#545](https://github.com/ant-design/ant-design-charts/pull/545)
  - flow
  - measureTextWidth
  - adaptors

## 1.0.1

- 新增瀑布图

## 1.0.0

- 底层依赖架构全新升级
- 新增全量 API
- 持续迭代

## 0.9.6

- 新增 onlyChangeData props 用于控制 changeData 。

## 0.9.5

- tooltip 添加 ReactNode 支持。
- 提供额外 API ： downloadImage()、toDataURL() 。
- 新增 memoData props 用于控制 rerender 。

## 0.9.4

新增图表

- column-line
- dual-line
- groupedColumn-line
- stackedColumn-line

删除图表

- OverlappedComboPlot

## 0.9.2

修改 props 属性名，chartStyle => style。
