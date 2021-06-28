## 1.1.19

`2021-06-28`

- 🆕 OrganizationalGraph 新增 [Title](https://charts.ant.design/demos/organizational-graph#set-title)。

## 1.1.18

`2021-06-24`

- 🐞 修复 onReady & onEvent 类型错误。
- ContainerOptions 统一为 ContainerConfig，并从 src/hooks/useChart 动到 src/interface 。

## 1.1.17

`2021-06-17`

- 🐞 修复 graph autoFit 不生效。
- 🆕 新增 Violin 文档。

## 1.1.16

`2021-06-15`

- 🆕 新增 [Facet](https://charts.ant.design/demos/facet)。
- 🆕 新增 Violin 组件，文档暂未透出。

## 1.1.15

`2021-06-14`

- 🐞 所有图表 ts 类型统一。
  - ContainerProps to ContainerConfig.
  - RelationGraph to CommonConfig.
  - IndentedTreeProps to IndentedTreeGraphConfig.
  - OrganizationTreeProps to OrganizationalGraphConfig.

## 1.1.14

`2021-06-14`

- 🆕 新增 [RadialGraph](https://charts.ant.design/demos/radial-graph#base)。
- 🆕 IndentedTreeGraph 新增 markerPosition 功能，配合布局使用。
- 🐞 修复 OrganizationalGraph 不支持线文本配置。

## 1.1.13

`2021-06-11`

- 🆕 新增 OrganizationalGraph。OrganizationTreeGraph 的升级版，OrganizationTreeGraph 后续不在官网透出。
- 🐞 修复 OrganizationTreeGraph changeData 布局出错。

## 1.1.12

`2021-06-10`

- 🐞 大小写问题

## 1.1.11

`2021-06-09`

- 🐞 合理化文件路径。
- 🆕 IndentedTreeGraph 新增 animate 配置。

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
