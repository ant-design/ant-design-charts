#### drilldown

<description>**optional** *DrillDownCfg*</description>

下钻交互配置。

*DrillDownCfg* 类型定义如下：

| 属性       | 类型            | 描述                     |
| ---------- | --------------- | ------------------------ |
| enabled | *boolean* | 是否开启下钻交互，默认为：'false' |
| breadCrumb | *BreadCrumbCfg* | 下钻交互的面包屑 UI 配置 |

*BreadCrumbCfg* 类型定义如下：

| 属性        | 类型         | 描述                                       |
| ----------- | ------------ | ------------------------------------------ |
| position    | *string*     | 位置。可选项：'top-left' | 'bottom-left' |
| rootText    | *string*     | 根节点的文案，默认：'Root'（中文：'初始'） |
| dividerText | *string*     | 分割线，默认：'/'                          |
| textStyle   | *ShapeAttrs* | 字体样式                                   |
| activeTextStyle | *ShapeAttrs* | 激活字体样式                               |
