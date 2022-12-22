---
title: 图例 - Legend
order: 0
contributors:
  [
    {
      author: '新茗',
      github: 'visiky',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',
    },
  ]
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


🏷️ 图例（legend）是图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选。

🎨 前往墨者学院 [AntV 设计 | 图例 Legend](https://www.yuque.com/mo-college/vis-design/hcs9p2) 查看**设计指引**。

#### 构成元素

![legend](https://gw.alipayobjects.com/zos/antfincdn/COyXvtsGrl/f5bb4c22-f16a-422e-bfee-a9b3d0a5b1b9.png)

#### 使用方式

<b>配置图例有两种方式：</b>

第一种，传入 `false` 设置关闭图例。

```ts
legend: false; // 关闭图例
```

第二种，传入 *LegendCfg* 对图例进行整体配置。

```ts
legend: {
  layout: 'horizontal',
  position: 'right'
}
```

#### 配置属性 - *LegendCfg*

| 属性 | 类型 | 描述 | 适用于 |
| --- | --- |--- | --- |
| layout | *string* |  图例的布局方式，可选项：*horizontal | vertical* |  |
| title | *object* | 图例标题配置，默认不展示。详见 [title 配置](#title) |  |
| position | *string* | 图例的位置。详见 [position 配置](#position) |  |
| offsetX | *number* | 图例 x 方向的偏移。 |  |
| offsetY | *number* | 图例 y 方向的偏移。 |  |
| background | *object* | 背景框配置项。详见 [background 配置](#background) |  |
| flipPage | *boolean* | 当图例项过多时是否进行分页。 | <tag color="green" text="分类图例">分类图例</tag> |
| pageNavigator | *object* | 分页器的主题样式设置。 | <tag color="green" text="分类图例">分类图例</tag> |
| itemWidth | *number | null* | 图例项的宽度, 默认为 null（自动计算）。 | <tag color="green" text="分类图例">分类图例</tag> |
| itemHeight | *number | null* | 图例的高度, 默认为 null。 | <tag color="green" text="分类图例">分类图例</tag> |
| itemName | *object* | 图例项 name 文本的配置。详见 [itemName 配置](#itemname) | <tag color="green" text="分类图例">分类图例</tag> |
| itemValue | *object* | 图例项 value 附加值的配置项。详见 [itemValue 配置](#itemvalue)。 | <tag color="green" text="分类图例">分类图例</tag> |
| itemSpacing | *number* | 控制图例项水平方向的间距 | <tag color="green" text="分类图例">分类图例</tag> |
| marker | *object* | 图例项的 marker 图标的配置。 | <tag color="green" text="分类图例">分类图例</tag> |
| maxWidth | *number* | 图例项最大宽度设置。 | <tag color="green" text="分类图例">分类图例</tag> |
| maxHeight | *number* | 图例项最大高度设置。 | <tag color="green" text="分类图例">分类图例</tag> |
| reversed | *boolean* | 是否将图例项逆序展示。 | <tag color="green" text="分类图例">分类图例</tag> |
| custom | *boolean* | 是否为自定义图例，当该属性为 true 时，需要声明 items 属性。 |<tag color="green" text="分类图例">分类图例</tag> |
| items | *object\[]* | 用户自己配置图例项的内容。详见 [items 配置](#items) | <tag color="green" text="分类图例">分类图例</tag> |
| min | *number* | 范围的最小值。 | <tag color="cyan" text="连续图例">连续图例</tag> |
| max | *number* | 选择范围的最大值。 | <tag color="cyan" text="连续图例">连续图例</tag> |
| label | *object* | 文本的配置项。详见 [label 配置](#label) | <tag color="cyan" text="连续图例">连续图例</tag> |
| value | *number\[]* | 选择的值。 | <tag color="cyan" text="连续图例">连续图例</tag> |
| slidable | *boolean* | 滑块是否可以滑动。 | <tag color="cyan" text="连续图例">连续图例</tag> |
| rail | *object* | 图例滑轨（背景）的样式配置项。详见 [rail 配置](#rail) | <tag color="cyan" text="连续图例">连续图例</tag> |
| track | *object* | 选择范围的色块样式配置项。详见 [track 配置](#track) | <tag color="cyan" text="连续图例">连续图例</tag> |
| handler | *object* | 滑块的配置项。详见 [handler 配置](#handler) | <tag color="cyan" text="连续图例">连续图例</tag> |
| animate | *boolean* | 是否开启动画开关。 |  |
| animateOption | *object* | 动画参数配置，当且仅当 animate 属性为 true，即动画开启时生效，详见 [animateOption 配置](#animateOption) |  |

<a name="fDpx7"></a>

#### 详细介绍

##### layout

<description>**optional** *horizontal | vertical* </description>

图例布局方式。提供横向布局和纵向布局。

##### title

<description>**optional** *G2LegendTitleCfg* </description>

图例标题配置，默认不展示。*G2LegendTitleCfg* 配置如下：

| 参数名  | 类型     | 描述                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| title   | *string* | 文本显示内容                                                 |
| spacing | *number* | 标题同图例项的间距                                           |
| style   | *object* | 文本样式配置项，参考  [绘图属性](/zh/docs/api/graphic-style) |

##### position

<description>**optional** *string* </description>

图例位置，可选项：'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

尝试一下：

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** *number* </description>

图例 x 方向的偏移。

##### offsetY

<description>**optional** *number* </description>

图例 y 方向的偏移。

##### background

<description>**optional** *LegendBackgroundCfg* </description>

背景框配置项。*LegendBackgroundCfg* 配置如下：

| 参数名  | 类型                 | 描述                                                       |
| ------- | -------------------- | ---------------------------------------------------------- |
| padding | *number | number\[]* | 背景的留白                                                 |
| style   | *ShapeAttr*          | 背景样式配置项, 参考[绘图属性](/zh/docs/api/graphic-style) |

##### flipPage

<description>**optional** *boolean* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多时是否进行分页。(⚠️ 暂不支持多行展示分页)

##### maxRow

<description> *number* **optional** </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多分页时，可以设置最大行数（仅适用于 `layout: 'horizontal'`），默认为：1。

##### pageNavigator

<description>**optional** *object* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例分页导航器的主题样式设置。*LegendPageNavigatorCfg* 配置如下：

| 参数名       | 类型                       | 默认值 | 描述                    |
| ------------ | -------------------------- | ------ | ----------------------- |
| marker.style | *PageNavigatorMarkerStyle* | -      | 分页器指示箭头 样式配置 |
| text.style   | *PageNavigatorTextStyle*   | -      | 分页器页面信息 样式配置 |

***PageNavigatorMarkerStyle*** 配置如下：

| 参数名          | 类型     | 默认值 | 描述                                                             |
| --------------- | -------- | ------ | ---------------------------------------------------------------- |
| inactiveFill    | *string* | -      | Fill color of arrow marker when unclickable (inactive status).   |
| inactiveOpacity | *number* | -      | Fill opacity of arrow marker when unclickable (inactive status). |
| fill            | *string* | -      | Default fill color of arrow marker (active status).              |
| opacity         | *number* | -      | Default fill opacity of arrow marker (active status).            |
| size            | *number* | -      | Size of arrow marker.                                            |

***PageNavigatorTextStyle*** 配置如下：

| 参数名   | 类型     | 默认值 | 描述                               |
| -------- | -------- | ------ | ---------------------------------- |
| fill     | *string* | -      | Font color of page navigator info. |
| fontSize | *number* | -      | Font size of page navigator info.  |

示例：

```ts
pageNavigator: {
  marker: {
    style: {
      // 非激活，不可点击态时的填充色设置
      inactiveFill: '#000',
      inactiveOpacity: 0.45,
      // 默认填充色设置
      fill: '#000',
      opacity: 0.8,
      size: 12,
    },
  },
  text: {
    style: {
      fill: '#ccc',
      fontSize: 8,
    },
  },
},
```

<playground path="component/legend/demo/legend-flippage.ts" rid="page-navigator"></playground>

##### itemHeight

<description>**optional** *number* *default:* `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例的高度, 默认为 null。

##### itemWidth

<description>**optional** *number* *default:* `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的宽度, 默认为 null，自动计算。

##### itemName

<description>**optional** *LegendItemNameCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 name 文本的配置。*LegendItemNameCfg* 配置如下：

| 参数名    | 类型       | 默认值  | 描述                                                                |
| --------- | ---------- | ------- | ------------------------------------------------------------------- |
| style     | *((item: ListItem, index: number, items: ListItem\[]) => ShapeAttrs) | ShapeAttrs*             |          | -      | 文本样式配置项                   |
| spacing   | number                                                  |          | -      | 图例项 marker 同后面 name 的间距 |
| formatter | `(text: string, item: ListItem, index: number) => any;` |          |        | 格式化函数                       |

其中, `ShapeAttrs` 详细配置见：[文档](/zh/docs/api/shape/shape-attrs)；`ListItem` 配置如下：

```ts
type ListItem = {
  /**
   * 名称 {string}
   */
  name: string;
  /**
   * 值 {any}
   */
  value: any;
  /**
   * 图形标记 {object|string}
   */
  marker?: Marker | string;
}

type Marker = {
  symbol? string;
  style?: ShapeAttrs;
  spacing?: number;
};
```

##### itemValue

<description>**optional** *LegendItemValueCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 value 附加值的配置项。*LegendItemValueCfg* 配置如下：

| 参数名     | 类型       | 默认值  | 描述                                                                |
| ---------- | ---------- | ------- | ------------------------------------------------------------------- |
| alignRight | *boolean*  | `false` | 是否右对齐，默认为 false，仅当设置图例项宽度时生效                  |
| formatter  | *function* | -       | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |
| style     | *((item: ListItem, index: number, items: ListItem\[]) => ShapeAttrs) | ShapeAttrs*             |          | -      | 文本样式配置项                   |

其中, `ShapeAttrs` 详细配置见：[文档](/zh/docs/api/shape/shape-attrs)；`ListItem` 配置如下：

```ts
type ListItem = {
  /**
   * 名称 {string}
   */
  name: string;
  /**
   * 值 {any}
   */
  value: any;
  /**
   * 图形标记 {object|string}
   */
  marker?: Marker | string;
}

type Marker = {
  symbol? string;
  style?: ShapeAttrs;
  spacing?: number;
};
```

<playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

##### itemSpacing

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，控制图例项水平方向的间距。

##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，文本的配置项。*ContinueLegendLabelCfg* 配置如下：

| 参数名  | 类型     | 默认值 | 描述                                                                                                                                          |
| ------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| align   | *string* | -      | 文本同滑轨的对齐方式 <br/> - rail ： 同滑轨对齐，在滑轨的两端 <br/> - top, bottom: 图例水平布局时有效 <br/> - left, right: 图例垂直布局时有效 |
| style   | *object* | -      | 文本样式配置项，详见  [绘图属性](/zh/docs/api/graphic-style)                                                                                  |
| spacing | *number* | -      | 文本同滑轨的距离                                                                                                                              |
| formatter  | *(value: any) => string* | 文本的格式化方式 |

##### marker

<description>**optional** *MarkerCfg | MarkerCfgCallback* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的 marker 图标的配置。

<!-- #### *MarkerCfg*  配置 -->

| 参数名  | 类型                  | 默认值 | 描述                                                                     |
| ------- | --------------------- | ------ | ------------------------------------------------------------------------ |
| symbol  | *string | MarkerSymbolCallback*  | -      | 配置图例 marker 的 symbol 形状 |
| style   | *ShapeAttrs | ((style: ShapeAttrs) => ShapeAttrs)*  | -   | 图例项 marker 的配置项                                           |
| spacing | number                | -      | 图例项 marker 同后面 name 的间距                                         |

***MarkerSymbolCallback*** 类型定义如下：

除了内置一些 symbol 类型，可以指定具体的标记类型，也可以通过回调的方式返回 symbol 绘制的 path 命令

内置支持的标记类型有：`"circle" | "square" | "line" | "diamond" | "triangle" | "triangle-down" | "hexagon" | "bowtie" | "cross" | "tick" | "plus" | "hyphen"`

回调的方式为：`(x: number, y: number, r: number) => PathCommand`；

<!--这里可以插入一个代码示例-->


```sign
type LegendItem = { name: string; value: string; } & MarkerCfg;

type MarkerCfgCallback = (name: string, index: number, item: LegendItem) => MarkerCfg;
```

##### maxItemWidth

<description> *number* **optional** </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大宽度设置。

##### maxWidthRatio

<description> *number* **optional**. 取值范围：\[0, 1], 默认: 0.25</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大宽度比例（以 view 的 bbox 容器大小为参照）设置，如果不需要该配置，可以设置为 `null`。

##### maxHeightRatio

<description> *number* **optional**. 取值范围：\[0, 1], 默认: 0.25</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大高度比例（以 view 的 bbox 容器大小为参照）设置，如果不需要该配置，可以设置为 `null`。

##### maxWidth

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大宽度设置。当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。实际上，图例项容器最大宽度的计算如下：

```sign
const viewBBox = this.view.viewBBox;
const maxWidth = Math.min(maxWidth, maxWidthRatio * viewBBox.width);
```

##### maxHeight

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大高度设置。当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。实际上，图例项容器最大宽度的计算如下：

```sign
const viewBBox = this.view.viewBBox;
const maxHeight = Math.min(maxHeight, maxHeightRatio * viewBBox.height);
```

##### reversed

<description>**optional** *boolean* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，是否将图例项逆序展示。

##### custom

<description>**optional** *boolean* </description>

是否为自定义图例，当该属性为 true 时，需要声明 items 属性。

##### items

<description>**optional** *LegendItem\[]* </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，用户自己配置图例项的内容。*LegendItem* 配置如下：

| 参数名 | 类型        | 是否必选 | 描述                     |
| ------ | ----------- | -------- | ------------------------ |
| id     | *string*    |          | 唯一值，用于动画或者查找 |
| name   | *string*    | required | 名称                     |
| value  | any         | required | 值                       |
| marker | *MarkerCfg* |          | 图形标记                 |

<!-- #### *MarkerCfg*  配置 -->

| 参数名  | 类型                  | 默认值 | 描述                                                                     |
| ------- | --------------------- | ------ | ------------------------------------------------------------------------ |
| symbol  | *string | MarkerSymbolCallback*  | -      | 配置图例 marker 的 symbol 形状 |
| style   | *ShapeAttrs | ((style: ShapeAttrs) => ShapeAttrs)*  | -   | 图例项 marker 的配置项                                           |
| spacing | number                | -      | 图例项 marker 同后面 name 的间距                                         |

***MarkerSymbolCallback*** 类型定义如下：

除了内置一些 symbol 类型，可以指定具体的标记类型，也可以通过回调的方式返回 symbol 绘制的 path 命令

内置支持的标记类型有：`"circle" | "square" | "line" | "diamond" | "triangle" | "triangle-down" | "hexagon" | "bowtie" | "cross" | "tick" | "plus" | "hyphen"`

回调的方式为：`(x: number, y: number, r: number) => PathCommand`；

<!--这里可以插入一个代码示例-->


##### min

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最小值。

##### max

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最大值。

##### value

<description>**optional** *number\[]* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，当前选中的范围。

##### selected ✨ 🆕

<description> *object* **optional** </description>

图例高亮状态，false 表示默认置灰，默认不设置或为 true 表示高亮，会同步进行数据的筛选展示。

示例：

```ts
legend: {
  selected: {
    '分类一': true,
    '分类二': false,
    '分类三': false,
  }
}
```

<playground path='component/legend/demo/legend-focus.ts' rid='legend-selected'></playground>

##### slidable

<description>**optional** *boolean*  *default:* `true`</description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块是否可以滑动。

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，图例滑轨（背景）的样式配置项。*ContinueLegendRailCfg* 配置如下：

| 参数名        | 类型     | 描述                                                                             |
| ------------- | -------- | -------------------------------------------------------------------------------- |
| type          | *string* | rail 的类型，color, size，默认：'color'                                                       |
| size          | *number* | 滑轨的宽度                                                                       |
| defaultLength | *number* | 滑轨的默认长度，默认：100。当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度 |
| style         | *object* | 滑轨的样式，参考 [绘图属性](/zh/docs/api/graphic-style)                          |

|**rail.type='color'**| **rail.type='size** |
|---|---|
|![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png)|![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png)|

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的色块样式配置项。*ContinueLegendTrackCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| style  | *object* | -      | 选定范围的样式，参考 [绘图属性](/zh/docs/api/graphic-style) |

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块的配置项。(暂不支持自定义)

*ContinueLegendHandlerCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| size   | *number* | -      | 滑块的大小，默认：10                                                  |
| style  | *object* | -      | 滑块的样式设置，参考 [绘图属性](/zh/docs/api/graphic-style) |
