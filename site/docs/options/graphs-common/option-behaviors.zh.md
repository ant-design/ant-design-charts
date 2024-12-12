### Behaviors

交互（Behaviors）指的是用户与画布及元素间的一系列操作，如拖拽、缩放、平移和选择等。这些交互方式增强了用户从图表中获取信息的直观性。

**类型定义**：`BehaviorOptions[] | ((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])`

默认情况下，`zoom-canvas`（缩放画布）和 `drag-canvas`（拖拽画布）交互是开启的。若需其他交互方式，则需进行额外配置。

支持 G6 的所有内置交互。以下是部分交互的简介，详情可参考 [G6 - 核心概念 - 交互](https://g6.antv.antgroup.com/manual/core-concept/behavior)：

- [Brush Select](https://g6.antv.antgroup.com/api/behaviors/brush-select)：框选
- [Click Element](https://g6.antv.antgroup.com/api/behaviors/click-select)：单击选中
- [Collapse Expand](https://g6.antv.antgroup.com/api/behaviors/collapse-expand)：展开收起
- [Create Edge](https://g6.antv.antgroup.com/api/behaviors/create-edge)：创建边
- [Drag Canvas](https://g6.antv.antgroup.com/api/behaviors/drag-canvas)：拖拽画布
- [Drag Element](https://g6.antv.antgroup.com/api/behaviors/drag-element)：拖拽元素
- [Focus Element](https://g6.antv.antgroup.com/api/behaviors/focus-element)：聚焦元素
- [Hover Element](https://g6.antv.antgroup.com/api/behaviors/hover-activate)：悬停元素
- [Lasso Select](https://g6.antv.antgroup.com/api/behaviors/lasso-select)：套索选择
- [Zoom Canvas](https://g6.antv.antgroup.com/api/behaviors/zoom-canvas)：缩放画布

若内置交互无法满足特定需求，还可根据 [G6 - 自定义交互](https://g6.antv.antgroup.com/manual/custom-extension/behavior) 教程来自定义交互。
