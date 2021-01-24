---
title: 升级指南
order: 4
nav:
  title: 使用文档
  order: 1
---

## 概述

0.x 版本由于底层库架构不统一，BUG 修复成本较高，1.0 我们对底层架构进行了重构，功能和 [G2Plot 2.0](https://g2plot.antv.vision/zh) 保持同步。

## 图表变更

### 删除

| 图表名称 | 描述 | 示例 |
| --- | --- | --- |
| Bubble | 改用 Scatter 实现， 修改图表名称即可。 | [Scatter](/demos/scatter) |
| StackedColumn | 改用 Column 实现。<br/> 删除 stackField 配置，改为 seriesField，需要指定 `isStack: true` 。 | [Column](/demos/column) |
| GroupedColumn | 改用 Column 实现。<br/>删除 groupField 配置，改为 seriesField，需要指定 `isGroup: true` 。 | [Column](/demos/column) |
| PercentStackedColumn | 改用 Column 实现。<br/> 删除 stackField 配置，改为 seriesField，需要指定 `isStack: true`、`isPercent: true` 。 | [Column](/demos/column) |
| RangeColumn | 改用 Column 实现。 <br/> 删除 stackField 配置，改为 seriesField，需要指定 `isRange: true` 。 <br/> label 不再支持 topStyle、bottomStyle，详细配置请参考 [API](/demos/column?type=api) 文档。 | [Column](/demos/column) |
| StackedBar | 改用 Bar 实现。<br/>删除 groupField 配置，改为 seriesField，需要指定 `isStack: true` 。 | [Bar](/demos/bar) |
| PercentStackedBar | 改用 Bar 实现。<br/> 删除 stackField 配置，改为 seriesField，需要指定 `isStack: true`、`isPercent: true` 。 | [Bar](/demos/bar) |
| RangeBar | 改用 Bar 实现。 <br/>删除 stackField 配置，改为 seriesField，需要指定 `isRange: true` 。 <br/> label 不再支持 topStyle、bottomStyle，详细配置请参考 [API](/demos/bar?type=api) 文档 | [Bar](/demos/bar) |
| Donut | 改用 Pie 实现，修改图表名称即可 。 | [Pie](/demos/pie/donut) |
| DualLine | 改用 DualAxes 实现。 | [Demos](/demos/dual-axes/dual-line) |
| ColumnLine | 改用 DualAxes 实现。 | [Demos](/demos/dual-axes/column-line) |
| StackedColumnLine | 改用 DualAxes 实现。 | [Demos](/demos/dual-axes-column-line) |
| GroupedColumnLine | 改用 DualAxes 实现 。 | [Demos](/demos/dual-axes-column-line) |
| StackedArea | 改用 Area 实现。 <br/>去掉 stackField ，改用 seriesField 。 | [Area](/demos/area) |
| PercentStackedArea | 改用 Area 实现。去掉 stackField ，改用 seriesField ，需要指定 `isPercent: true` 。 | [Area](/demos/area) |
| StepLine | 改用 Line 实现，需要指定 stepType。<br/>1.0 版版本可以使用默认 step ，2.0 版本必须手动指定 stepType（hv, vh, hvh, vhv）， | [Line](/demos/line) |

### 配置变更

Ant Design Charts 1.0 兼容大部分的 0.x 版本图表功能和配置项，详情如下：

#### 通用配置

| 属性名 | 描述 | 示例 |
| --- | --- | --- |
| memoData | 删除，内部判断 | - |
| onlyChangeData | 删除，内部判断 | - |
| title | 不再支持 | - |
| description | 不再支持 | - |
| forceFit | 不再支持，改用 autoFit | - |
| responsive | 不再支持，内置 | - |
| guideLine | 不再支持，改用 [anniotations](/demos/general) 实现。 | - |
| label | label.type 会有兼容性问题，如果报错修改 type 配置或者去掉 | - |
| slider | 写法变更 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*IZmLQaZ8ANMAAAAAAAAAAAAAARQnAQ" alt="示例" /> |
| scrollbar | 写法变更 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Zq3NSpae7NEAAAAAAAAAAAAAARQnAQ" alt="示例" /> |
| events | 写法变更 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*NW8VTp2JPm0AAAAAAAAAAAAAARQnAQ" alt="示例" /> |
| visible | 写法变更 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*WRVJR6jRJ5AAAAAAAAAAAAAAARQnAQ" alt="示例" /> |
| animation | 写法变更 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*CE30TZLMIL4AAAAAAAAAAAAAARQnAQ" alt="示例" /> |

#### 私有配置

更多请参考各图表 API.

| 图表名称 | 描述 | 示例 |
| --- | --- | --- |
| Scatter | pointSize: 不再支持，改用 size 。<br /> shape: 去掉默认类型 circle，需要显性设置。 | - |
| Rose | categoryField: 不再支持，改用 xField 。<br /> radiusField: 不再支持，改用 yField 。<br /> colorField: 不再支持，改用 seriesField 。 | - |
| Bullet | 改动较大，详细参考 [Bullet](/demos/bullet) | - |
| WordCloud | maskImage: 不再支持， 改用 imageMask。<br /> wordStyle 选项中的 gridSize 改为 padding。 | - |
| TinyArea、TinyColumn、 TinyLine | 删除 xField 、yField。<br /> data 类型由 object[] 变为 number[]。 | - |
| Gauge | 删除 color 、 min 、 max。<br />删除 value , 改用 percent 。 <br />删除 pivot 改用 indicator。 <br /> 更新 range ，详细参考[Gauge](/demos/gauge) | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*icQqR71EdikAAAAAAAAAAAAAARQnAQ" alt="示例" /> |
| Radar | 删除 radiusAxis ，改用 yAxis 。<br /> 删除 angleField ， 改用 xField 。<br /> 删除 radiusField ， 改用 yField 。 | - |
| Liquid | 删除 min 、max。<br /> 删除 value ，改用 percent。<br /> 更新 statistic 。 | <img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*_CeWQbi4jlsAAAAAAAAAAAAAARQnAQ" alt="示例" /> |

## 常见问题

### ScaleCtor is not a constructor

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*IIMFTpkLENYAAAAAAAAAAAAAARQnAQ" style="max-height: 400px" alt="示例" />

类型不兼容，请检查是否有相关的 type 配置，去掉或者查看最新的实现方式。

## 遇到问题

我们尽可能收集了已知的所有不兼容变化和相关影响，但是有可能还是有一些场景我们没有考虑到。如果你在升级过程中遇到了问题，请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈。我们会尽快响应和相应改进这篇文档。
