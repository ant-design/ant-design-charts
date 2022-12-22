---
title: 缩略轴 - Slider
order: 2
---

<style>
  span.ant-tag {
    margin: 0 4px;
    line-height: 18px;
  }
</style>


<style>
  .gatsby-highlight + p {
    margin-top: 18px;
  }
  
  table {
    margin-top: 12px !important;
  }

  h4 {
   margin-top: 30px !important;
    margin-bottom: 12px !important;
  }

  h5 {
    font-size: 18px !important;
    line-height: 22px;
    margin-top: 1.5em !important;
  }

  h4 + h5 {
    margin-top: 20px !important;
  }

  code.language-text {
    padding: .2em;
    margin: 0;
    font-size: .85em;
    background-color: #f7f7f7 !important;
  }

  ul li {
    line-height: 1.5;
  }
</style>


🎨  前往墨者学院 [AntV 设计 | 缩略轴 Axis Navigator](https://www.yuque.com/mo-college/vis-design/gs5ow9) 查看**设计指引**。

#### 构成元素

<img src="https://gw.alipayobjects.com/zos/antfincdn/A3UeXLPhhU/slider-intro.jpg" class="component-img" alt="slider" />

#### 配置属性 - *SliderCfg*

> 目前只适用于：折线图、面积图、双轴图。

| 配置项          | 类型           | 功能描述           |
| --------------- | -------------- | ------------------ |
| start           | *number*       | 默认起始位置       |
| end             | *number*       | 默认结束位置       |
| height          | *number*       | 缩略轴高度         |
| trendCfg        | *TrendCfg*     | 背景趋势的配置     |
| backgroundStyle | *object*       | 背景配置，参考[绘图属性](/zh/docs/api/graphic-style)           |
| foregroundStyle | *object*       | 前景配置，参考[绘图属性](/zh/docs/api/graphic-style)          |
| handlerStyle    | *HandlerStyle* | handler 配置       |
| textStyle       | *object*       | 文本配置，参考[绘图属性](/zh/docs/api/graphic-style)          |
| minLimit        | *number*       | 允许滑动位置下限   |
| maxLimit        | *number*       | 允许滑动位置上限   |
| formatter       | *Function*     | 滑块文本格式化函数 |

***TrendCfg*** 类型如下：

| 配置项          | 类型       | 功能描述       |
| --------------- | ---------- | -------------- |
| data            | *number\[]* | 统计文本的样式 |
| smooth          | *boolean*  | 是否平滑       |
| isArea          | *boolean*  | 是否面积图     |
| backgroundStyle | *object*   | 背景样式配置，参考[绘图属性](/zh/docs/api/graphic-style)   |
| lineStyle       | *object*   | line 样式配置，参考[绘图属性](/zh/docs/api/graphic-style)  |
| areaStyle       | *object*   | area 样式配置，参考[绘图属性](/zh/docs/api/graphic-style)  |

***HandlerStyle*** 类型如下：

| 配置项 | 类型     | 功能描述       |
| ------ | -------- | -------------- |
| width  | *number* | 缩略轴手柄宽度 |
| height | *number* | 缩略轴手柄高度 |
| fill          | *string* | 缩略轴手柄填充色                   |
| highLightFill | *string* | 缩略轴手柄填充高亮色（hover 状态） |
| stroke        | *string* | 缩略轴手柄描边色                   |
| opacity       | *number* | 缩略轴手柄填充透明度               |
| radius        | *number* | 缩略轴手柄背景圆角                 |
| cursor        | *string* | 缩略轴手柄鼠标样式 （hover 状态）  |
