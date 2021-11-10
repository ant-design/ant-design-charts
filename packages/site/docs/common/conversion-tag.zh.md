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
