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
