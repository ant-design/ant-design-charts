---
title: 转化标签 - ConversionTag
order: 8
contributors:
  [
    {
      author: '新茗',
      github: 'visiky',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',
    },
  ]
---

适用于基础柱形图和基础条形图，转化率组件可以让用户关注到数据的变化比例。

#### 配置项

<description>**optional** *object* | *false*</description>

| 配置项   | 类型                | 默认值 | 功能描述                         |
| ------- | ------------------- | ------ | -------------------------------- |
| size    | *number*            | -      | 转化率组件尺寸                   |
| spacing | *number*            | -      | 组件和柱子间距                   |
| offset  | *number*            | -      | 组件和轴线间距                   |
| arrow   | *ArrowCfg | false* | -      | 箭头形状配置，false 时不显示箭头 |
| text    | *TextCfg | false*  | -      | 文本配置、false 时不显示文本     |

其中 ArrowCfg 配置如下

| 配置项   | 类型     | 默认值 | 功能描述 |
| -------- | -------- | ------ | -------- |
| headSize | *number* | -      | 箭头尺寸 |
| style    | *object* | -      | 箭头样式 |

TextCfg 配置如下

| 配置项    | 类型                                   | 默认值 | 功能描述         |
| --------- | -------------------------------------- | ------ | ---------------- |
| headSize  | *number*                               | -      | 箭头尺寸         |
| style     | *object*                               | -      | 箭头样式         |
| formatter | *(prev:number, next:number) => string* | -      | 自定义转化率计算 |

样式配置类型请参考 [绘图属性](/zh/docs/api/graphic-style)


#### 事件交互

转化标签的图形组成包含 `conversion-tag-arrow` 和 `conversion-tag-text`。同一个图表的转化标签组件都放置于一个 group 下，也就是 `conversion-tag-group`，我们可以通过监听 `conversion-tag-group` 事件来进行一些定制交互。

转化标签携带的原始数据信息包含：上一个图形元素（element）和下一个图形元素（nextElement），可通过下列方式获取：

```ts
plot.on('conversion-tag-group:mouseenter', (evt) => {
  const { element, nextElement } = evt.target?.get('origin');
  // 自定义业务逻辑，element 的详细 API，见：https://g2.antv.vision/zh/docs/api/general/element
});
```

示例：

<playground path='general/events/demo/conversion-tag-with-link.ts' rid='conversion-tag-events'></playground>
