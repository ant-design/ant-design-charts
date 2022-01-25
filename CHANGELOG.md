## 1.3.5

`2022-01-25`

- 🐞 修复 umd 命名错误问题 [1120](https://github.com/ant-design/ant-design-charts/issues/1120)
- 🐞 修复流程图无法异步加载数据 [1117](https://github.com/ant-design/ant-design-charts/issues/1117)
- 🐞 修复关系图 tooltipCfg.container 配置报错

## 1.3.4

`2022-01-07`

- 🆕 官网示例更新
- 🐞 修复 interaction tooltip 导致页面崩溃
- 🐞 修复 OrganizationGraph 接口和实现不一致
## 1.3.3

`2021-12-24`

- 🆕 新增 Venn 图
- 🆕 主包导出 flowchart 样式文件
- 🆕 新增 PR 巡检
- 🐞 修复官网示例

## 1.3.2

`2021-12-07`

- 🐞 修复 peerDependencies

## 1.3.1

`2021-11-26`

- 🆕 CDN 引入变量重命名
 - window.charts -> window.Charts
 - window.plots -> window.Plots
 - window.maps -> window.Maps
 - window.graphs -> window.Graphs

## 1.3.0

`2021-11-25`

- 🆕 新增流程图 [Flowchart](https://charts.ant.design/zh/examples/flowchart/basic#basic)

流程图除 `react`、`react-dom` 外，还依赖 `antd`、`@ant-design/icons`、`lodash`，使用时确保已经安装，同时记得引入样式文件 `import "@ant-design/flowchart/dist/index.css";`

```ts
"peerDependencies": {
    "@ant-design/icons": "^4.6.0",
    "antd": "^4.6.3",
    "lodash": "^4.17.20",
    "react": ">=16.8.4",
    "react-dom": ">=16.8.4"
  }
```

```tsx
import { Flowchart } from '@ant-design/charts';
import "@ant-design/flowchart/dist/index.css";
```

- 🆕 新增地理可视化 [Maps](https://charts.ant.design/zh/examples/map-area/division#chinese-provinces)
- 🆕 新增 CirclePacking
- 🆕 Ant Design Charts 完成拆包，推荐使用子包
  - 统计图表：@ant-design/plots
  - 流程图：@ant-design/flowchart
  - 地理可视化：@ant-design/maps
  - 关系图：@ant-design/graphs


## 1.2.4

`2021-07-27`

- 🆕 DagreGraph 新增 card 类型。
- 🐞 修复 FlowAnalysisGraph 类型错误。
- 🐞 修复 autoFit 布局偏移。

## 1.2.3

`2021-07-20`

### New Features

- 新增资金流向图(FundFlowGraph): 支持节自定义；展开收起；边、节点格式化配置等。

- FlowAnalysisGraph 、DecompositionTreeGraph 新增 badge 配置

- 关系图支持默认节点类型

- `indicator-card` 新增 `LR` 布局

### Bug fixes

- 修复 FlowAnalysisGraph 、DecompositionTreeGraph 空数据报错

## 1.2.2

`2021-07-20`

- 🐞 旧 Graph 节点注册
- 🐞 修复 FlowAnalysisGraph 空数据异常

## 1.2.1

`2021-07-20`

- 🆕 FlowAnalysisGraph layout 新增 `follow`
- 🆕 Graphs ArrowCfg 新增 size
- 🆕 Graphs 默认值&文档优化

## 1.2.0

> 图组件全新 API ，新增&优化多个图组件，新增交互、节点自定义等。调整目录结构，类型引入定义更简单。

### 新功能

> 新增节点、边交互状态，来源去向图、组织架构图、指标拆解树支持自定义节点，节点、边个性化设置，更灵活。

#### 来源去向图

> FlowAnalysisGraph

| ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626337308273-1869606d-da26-470b-99ac-7dce4a324eb6.png#clientId=uc4615b79-7491-4&from=paste&height=396&id=ufe21e8a7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=754&originalType=binary&ratio=1&size=103139&status=done&style=none&taskId=u8c9cb519-5085-4006-a5cc-7a15448f60a&width=754) | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626335599778-010ac67d-982c-4fca-b240-d53ef55ef35a.png#clientId=ua9a3d129-b5b7-4&from=paste&height=448&id=u2b24628b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=448&originWidth=931&originalType=binary&ratio=1&size=89087&status=done&style=none&taskId=uc41711ad-8b1a-45d9-bacc-acab2f49541&width=931) |
| --- | --- |

#### 组织架构图

> OrganizationGraph

| ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336025336-fe4de176-5cf4-490a-b222-dac7039bf628.png#clientId=ua9a3d129-b5b7-4&from=paste&height=506&id=u3f49c5ea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=506&originWidth=923&originalType=binary&ratio=1&size=125664&status=done&style=none&taskId=uee2b4d05-5a34-41ab-824a-bd0b2af281f&width=923) | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336047983-fe2acb21-072f-486f-b0d8-3bb1498d52f1.png#clientId=ua9a3d129-b5b7-4&from=paste&height=372&id=u2cda8a8f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=372&originWidth=866&originalType=binary&ratio=1&size=92687&status=done&style=none&taskId=u6ab558b7-7d5a-43c3-b025-819b815da49&width=866) |
| --- | --- |

​<br />

#### 指标拆解树

> DecompositionTreeGraph

| ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336487396-701f2b89-4d96-4b43-aa2c-0a98e4ead468.png#clientId=ua9a3d129-b5b7-4&from=paste&height=340&id=ue6de2099&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=721&originalType=binary&ratio=1&size=95783&status=done&style=none&taskId=u0babaee1-4b72-4114-8a53-5643b8d543c&width=721) | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336513538-be5d3195-b73f-4ed8-87d1-4e68834d7e71.png#clientId=ua9a3d129-b5b7-4&from=paste&height=361&id=u651a2cae&margin=%5Bobject%20Object%5D&name=image.png&originHeight=361&originWidth=692&originalType=binary&ratio=1&size=74657&status=done&style=none&taskId=ua5a066c3-d3d8-4f01-bf7c-a2bc4c30f0a&width=692) |
| --- | --- |

#### 辐射树图

> RadialTreeGraph

| ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336586223-5d573bc5-01da-43d8-b9cc-250e56cbe79f.png#clientId=ua9a3d129-b5b7-4&from=paste&height=213&id=ub106f57d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=525&originWidth=620&originalType=binary&ratio=1&size=157766&status=done&style=none&taskId=ufcc3ccab-ea60-42b4-98ba-10b0ca74d6c&width=252) | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/278352/1626336604503-8982ef00-7d01-4a60-8132-4c78f2ffdb0a.png#clientId=ua9a3d129-b5b7-4&from=paste&height=225&id=u4541d37d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=513&originWidth=547&originalType=binary&ratio=1&size=133385&status=done&style=none&taskId=u468c94a6-439f-4b6b-b83d-78287c4251a&width=240) |
| --- | --- |

​<br />

### 不兼容改动

> 调整目录结构带来不兼容

#### 类型引入

旧：

```typescript
import { Line } from '@ant-design/charts';
import { LineConfig } from '@ant-design/charts/es/line';
```

新：

```typescript
import { Line, LineConfig } from '@ant-design/charts';
```

#### 按需引入

旧：

```typescript
import Line from '@ant-design/charts/es/line';
```

新：

```typescript
import Line from '@ant-design/charts/es/plots/line';
```

#### 官网示例少了

由于目前 API 做了升级，还没来得及升级的图表暂时不在官网透出，但任然可以正常使用，也可以在官网访问。<br />只需手动输入网址即可。

```typescript
// 组件名为中划线格式
https://charts.ant.design/zh-CN/demos/ + 组件名
// OrganizationalGraph
https://charts.ant.design/zh-CN/demos/organizational-graph
```

## 1.1.20

`2021-06-29`

- 🐞 修复 useGraph props 丢失，导致更新失败。

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
