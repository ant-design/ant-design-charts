---
category: Components
type: Graph
usage: relation
title: Fishbone 鱼骨图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*olIATZ-4qMEAAAAAAAAAAAAADmJ7AQ/original
---

鱼骨图，又名石川图，用于系统地分析问题根本原因的图表工具，通过将问题分解为多个因素，帮助识别和解决问题。

```js
import { Fishbone } from '@ant-design/graphs';
```

## 何时使用

鱼骨分析法又名因果分析法，由日本管理大师石川馨先生发展而来，是一种透过现象看本质的分析方法，可以帮助我们快速找出引发问题的根本原因。

鱼骨分析法的基本原理是针对一个问题（作为鱼头），列明产生问题的大要因（鱼骨主干），从大要因继续深入细分，挖掘小要因（鱼骨分支），如此一层层挖掘分析下去，直至找出可以解决问题的方法或者行动的步骤。

## 代码演示

<code id="default" src="./demos/fishbone/default.tsx" description="原因型鱼骨图（鱼头在右），用于分析问题。">原因型鱼骨图</code>

<code id="decision" src="./demos/fishbone/decision.tsx" description="决策型鱼骨图（鱼头在左），用于解决问题。">决策型鱼骨图</code>

<code id="layout" src="./demos/fishbone/layout.tsx" description="调整鱼骨分支位置。">调整布局参数</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 鱼骨图类型 | `'cause'` \| `'decision'` | `'cause'` |
| layout | 鱼骨布局配置 | [`FishboneLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/fishbone) | `{ type: 'fishbone' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
