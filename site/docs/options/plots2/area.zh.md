---
category: Components
type: Plot
usage: comparison,distribution,interval,trend,time
title: Area 面积图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZxtyTrhyN4sAAAAAAAAAAAAADmJ7AQ/original
order: 2
---

```js
import { Area } from '@ant-design/charts';
```

## 何时使用

## 代码演示

## API

通用配置参考：[统计图表通用属性](./overview#通用属性)

| 属性         | 说明     | 类型                          | 默认值 |
| ------------ | -------- | ----------------------------- | ------ |
| xField       |          |                               |        |
| yField       |          | string \| string[]            |        |
| colorField   |          |                               |        |
| shapeField   | 'hvh'    |                               |        |
| seriesField  |          |                               |        |
| stack        |          | [Stack](#stack)               | false  |
| diff         |          |                               |        |
| connectNulls | 连接空值 | [ConnectNulls](#connectnulls) | -      |
| style        |          |                               | -      |

### Stack

### ConnectNulls

| 属性                       | 说明                                                                                                                                                                                                     | 类型                                                         | 默认值 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| connect                    | 是否连接空值                                                                                                                                                                                             | true                                                         | -      |
| `connect${PathStyleProps}` | 设置连线样式，可参考 [PathStyleProps](https://g.antv.antgroup.com/api/basic/path) 配置 <br> 例如 `connectStroke: '#ccc'` 代表设置连线的描边色为 `#ccc`, `connectLineWidth: 1` 代表设置连线的描边宽度为 1 | [PathStyleProps](https://g.antv.antgroup.com/api/basic/path) |        |
