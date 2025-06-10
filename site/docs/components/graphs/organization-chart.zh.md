---
category: Components
type: Graph
usage: relation
title: OrganizationChart 组织结构图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jgGCT7cMxg8AAAAAAAAAAAAADmJ7AQ/original
order: 4
---

直观展示组织内部的层级结构和部门关系。

```js
import { OrganizationChart } from '@ant-design/graphs';
```

## 何时使用

- 想要展示公司或团队的层级结构，明确各个职位和部门的上下级关系。
- 展示员工的职位和部门分布。
- 项目管理时，明确项目团队的成员和职责分工。
- 用于股权穿透、投资上下游公司等依赖分析。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/organization-chart/default.tsx">基本用法</code>
<code src="../graphs-demos/organization-chart/direction.tsx">节点排布</code>
<code src="../graphs-demos/organization-chart/custom-node.tsx">自定义节点</code>
<code src="../graphs-demos/organization-chart/collapse-expand.tsx">展开/收起子节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### OrganizationChart

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| direction | 语法糖，设置节点的排布方向。当设置 `layout.rankdir` 时会以后者为准 | `'vertical'` \| `'horizontal'` | `'vertical'` |
| layout | Dagre 布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.zh.md"></embed>

<embed src="../graphs-common/dagre-layout.zh.md"></embed>
