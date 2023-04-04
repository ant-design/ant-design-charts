适用于堆叠柱状图和堆叠条形图，联通区域组件通过绘制同一字段的联通区域提供视觉上的辅助识别，方便进行数据对比。（注意：不能和 **columnBackground** 同时使用）

<description>**optional** *object* | *false*</description>

| 配置项  | 类型             | 是否必选     | 默认值｜ 功能描述 |
| ------- | ---------------- | ------------ | ----------------- |
| trigger | *'hover'、'click'* | 否 ｜'hover' | 触发方式          |
| style | *ConnectedAreaStyleCfg* |  | 否 ｜ | 联通区域的样式配置          |

***ConnectedAreaStyleCfg*** 类型定义如下：

```sign
type ConnectedAreaStyleCfg = ShapeAttrs | ((oldStyle: ShapeAttrs, element: Element) => ShapeAttrs);
```

**图表示例：**

<Playground path="column/stacked/demo/connect-area.ts" rid="connectedArea"></playground>
