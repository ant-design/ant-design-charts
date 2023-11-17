---
title: 概览
order: 1
---

### 图表容器

#### width

<description>**optional** *number* *default:* `400`</description>

设置图表宽度。

#### height

<description>**optional** *number* *default:* `400`</description>

设置图表高度。

#### autoFit

<description>**optional** *boolean* *default:* `true`</description>

图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。


#### renderer

<description>**optional** *string* *default:* `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。


### 视图模型

G2 中的视图模型定义了一个视图的划分方式，划分得到的不同区域会绘制不同的东西，也通过不同的选项去设置。现在可以简单的把视图理解为一个图表。G2 的视图模型如下：

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kTJsRLGOYzEAAAAAAAAAAAAADmJ7AQ/original" />

- **视图区域（View Area）**：上图中蓝色 + 橙色 + 红色 + 青色部分，其中蓝色部分被称为**外边距区域**，主要用于固定组件（坐标轴、图例等）到边界的距离。
- **绘制区域（Plot Area）**：上图中橙色 + 红色 + 青色部分，橙色部分被称为**内边距区域**，该区域用于绘制组件。
- **主区域（Main Area）**：上图中红色 + 青色部分，其中红色部分被称为**呼吸区域**，用于制造组件和标记（图形元素）的间距，从而防止重叠，对于散点图尤其有用。
- **内容区域（Content Area）**：上图中青色部分，主要用于绘制标记（图形元素）。

可以通过如下的配置设置各个区域的大小：

- **margin** - 设置外边距四个方向的值，优先级别比分别设置低
- **marginLeft** - 设置左外边距
- **marginTop** - 设置上外边距
- **marginRight** - 设置右外边距值
- **marginBottom** - 设置下外边距值
- **padding** - 设置内边距四个方向的值，优先级别比分别设置低
- **paddingLeft** - 设置左内边距
- **paddingTop** - 设置上内边距
- **paddingRight** - 设置右内边距
- **paddingBottom** - 设置下内边距
- **inset** - 设置呼吸区域四个方向的值，优先级别比分别设置低
- **insetLeft** - 设置左呼吸区域
- **insetTop** - 设置上呼吸区域
- **insetRight** - 设置右呼吸区域
- **insetBottom** - 设置下呼吸区域

其中内容区域的大小由以下的公式得到：

```js
const contentWidth =
  width -
  paddingLeft -
  paddingRight -
  marginLeft -
  marginRight -
  insetLeft -
  insetRight;

const contentHeight =
  height -
  paddingTop -
  paddingBottom -
  marginTop -
  marginBottom -
  insetTop -
  insetBottom;
```

### 数据映射

#### data

<description>**required** *array object*</description>

设置图表数据源。数据源为对象集合，例如：`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

#### xField

<description>**required** *string*</description>

图形在 x 方向对应的数据字段名，一般是横向的坐标轴对应的字段。比如：要看不同班级的人数情况，那么班级字段就是对应的 xField。

#### yField

<description>**required** *string*</description>

图形在 y 方向对应的数据字段名，一般是纵向的坐标轴对应的字段。比如：要看不同班级的人数情况，那么人数字段就是对应的 yField。


#### seriesField

<description>**optional** *string*</description>

分组字段。比如：我们需要分析不同`省份`的交易额趋势，那么`省份字段`就是分组字段。


### 图形样式

#### shapeField

<description>**optional** *string* </description>

指定 line 是否平滑，点图形状等

#### colorField

<description>**optional** *string* </description>

指定颜色通道字段


#### sizeField

<description>**optional** *string* </description>

指定尺寸通道字段

#### stack

<description>**optional** *boolean | StackYTransform*</description>

是否堆积

```ts
type StackYTransform = {
  groupBy?: string | string[];
  reverse?: boolean;
  orderBy?: TransformOrder;
  y?: 'y' | 'y1';
  y1?: 'y' | 'y1';
  series?: boolean;
};
```

#### normalize

<description>**optional** *boolean | NormalizeYTransform*</description>

数值归一化

```ts
type NormalizeYTransform = {
  series?: boolean;
  groupBy?: string | string[];
  basis?: 'deviation' | 'first' | 'last' | 'max' | 'mean' | 'median' | 'min' | 'sum';
};
```

#### sort

<description>**optional** *boolean | SortByTransform*</description>

排序

```ts
type SortByTransform = {
  /** type: [field, order]; order: true => ascend, false => descend */
  fields?: (string | [string, boolean?])[];
};
```

#### group

<description>**optional** *boolean | DodgeXTransform*</description>

分组

```ts
type DodgeXTransform = {
  groupBy?: string | string[];
  reverse?: boolean;
  orderBy?: TransformOrder;
  padding?: number;
};
```

#### percent

<description>**optional** *boolean* *default:* `true`</description>

是否百分比面积图，百分比时默认开启 isStack。



#### line

<description>**optional** *Line*</description>

线条，一般用于面积图中添加线条

#### point

<description>**optional** *Point*</description>

点图形样式，一般用于 Line 中添加对应 Mark



### 状态

<description>**可选** *object*</description>

设置 Mark 对应状态的样式，常配合 Interaction 一起使用，有：`'default' | 'active' | 'inactive' | 'selected' | 'unselected'` 等状态。

示例：

```ts
{
  state: {
    inactive: { opacity: 0.5 },
    active: { fill: 'red', linkFillOpacity: 0.5 }
  },
  interaction: {
    elementHighlightByColor: {
      link: true
    }
  }
}
```
