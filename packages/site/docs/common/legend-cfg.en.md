##### layout

<description>**optional** *horizontal | vertical* </description>

Layout of legend.

##### title

<description>**optional** *G2LegendTitleCfg* </description>

Legend title configuration is not displayed by default. *G2LegendTitleCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                         |
| ---------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| title   | *string* | Content of legend title                                            |
| spacing    | *number* | -       | The spacing between the title and the legend item                                   |
| style      | *object* | -       | Text style configuration item, refer to [Graphic Style](/zh/docs/api/graphic-style) |

##### position

<description>**optional** *string* </description>

The position of legend is optional:'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** *number* </description>

Legends offset in the x direction.

##### offsetY

<description>**optional** *number* </description>

Legends offset in the y direction.

##### background

<description>**optional** *LegendBackgroundCfg* </description>

Background box configuration item. *LegendBackgroundCFG* is configured as follows:

| Properties | Type               | Description                                             |
| ---------- | ------------------  | ------------------------------------------------------- |
| padding    | *number | number\[]* | White space in the background                           |
| style      | *ShapeAttr*     | Background style configuration, Reference [Graphic Style](/en/docs/api/graphic-style) |

##### flipPage

<description>**optional** *boolean* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>,whether to page when there are too many legend items. (⚠️ 暂不支持多行展示分页)

##### maxRow

<description> *number* **optional** </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>. You can set the maximum number of rows when legend items is flip-paged, (only applicable to 'layout:' horizontal '),default: 1.

##### pageNavigator

<description>**optional** *object* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the style of page navigator, it works when legend is in flipPage. Types of *LegendPageNavigatorCfg* are as follow:

| Properties | Type     | Description          |
| ------ | --------------------- | -------------- |
| marker.style | *PageNavigatorMarkerStyle* | 分页器指示箭头配置项    |
| text.style   | *PageNavigatorTextStyle*   | The text style of page info.    |

Types of ***PageNavigatorMarkerStyle*** are as follow:

| Properties | Type     | Default | Description          |
| ------ | --------------------- | ------ | -------------- |
| inactiveFill | *string* | -      | Fill color of arrow marker when unclickable (inactive status). |
| inactiveOpacity   | *number*   | -      | Fill opacity of arrow marker when unclickable (inactive status). |
| fill | *string* | -      | Default fill color of arrow marker (active status). |
| opacity   | *number*   | -      | Default fill opacity of arrow marker (active status). |
| size   | *number*   | -      | Size of arrow marker. |

Types of ***PageNavigatorTextStyle*** are as follow:

| Properties | Type     | Default | Description          |
| ------ | --------------------- | ------ | -------------- |
| fill | *string* | -      | Font color of page navigator info. |
| fontSize   | *number*   | -      |  Font size of page navigator info. |

Example：

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

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, lengend item height, default null。

##### itemWidth

<description>**optional** *number* *default:* `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, legend item width, default null, automatic calculation.

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

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, control the horizontal spacing of legend items.

##### marker

<description>**optional** *MarkerCfg* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the configuration of the Marker icon of the legend item.

| Properties | Type                         | Default | Description                                                   |
| ---------- | ---------------------------- | ------- | ------------------------------------------------------------- |
| symbol     | *Marker* | *MarkerCallback* | -       | The symbol shape of a legend marker is configured             |
| style      | ShapeAttrs                   | -       | The configuration item of legend item Marker                  |
| spacing    | number                       | -       | The spacing between legend item marker and the following name |

*Marker* The supported tag types are： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* is `(x: number, y: number, r: number) => PathCommand`；


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

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum width of the legend item. 当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。

##### maxHeight

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum height of the legend item. 当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。

##### reversed

<description>**optional** *boolean* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, whether to display legend items in reverse order.

##### custom

<description>**optional** *boolean* </description>

If it is a custom legend, the items property needs to be declared when this property is true.

##### items

<description>**optional** *LegendItem\[]* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the user configures the content of the legend item. *LegendItem* Configuration is as follows:

| Properties | Type        | Required | Description                          |
| ---------- | ----------- | -------- | ------------------------------------ |
| id         | *string*    |          | Unique value for animation or lookup |
| name       | *string*    | required | name                                 |
| value      | any         | required | value                                |
| marker     | *MarkerCfg* |          | marker                               |

| Properties | Type                         | Default | Description                                                   |
| ---------- | ---------------------------- | ------- | ------------------------------------------------------------- |
| symbol     | *Marker* | *MarkerCallback* | -       | The symbol shape of a legend marker is configured             |
| style      | ShapeAttrs                   | -       | The configuration item of legend item Marker                  |
| spacing    | number                       | -       | The spacing between legend item marker and the following name |

*Marker* The supported tag types are： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* is `(x: number, y: number, r: number) => PathCommand`；


##### min

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the minimum value of the range.

##### max

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the maximum value of the range.

##### value

<description>**optional** *number\[]* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, 当前选中的范围.

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

<description>**optional** *boolean* *default:* `true`</description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, whether the slider can slide.

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a style configuration item for the legend slider (background).*ContinueLegendRailCfg* Configuration is as follows:

| Properties    | Type     | Default | Description                                                                                                                                |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | *string* | -       | rail type: color and size, default: 'color'                                                                                                     |
| size          | *number* | -       | The width of the slide rail                                                                                                                |
| defaultLength | *number* | -       | The default length of the slider, default: 100. When maxWidth,maxHeight is limited, this property is not used and the length is automatically calculated |
| style         | *object* | -       | Slide rail style, refer to [Graphic Style](/zh/docs/api/graphic-style)                                                                     |

|**rail.type='color'**| **rail.type='size** |
|---|---|
|![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png)|![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png)|

##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, *ContinueLegendLabelCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                                                                                                                                                                                      |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| align      | *string* | -       | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style      | *object* | -       | Text style configuration item, reference [Graphic Style](/zh/docs/api/graphic-style)                                                                                                                                                             |
| spacing    | *number* | -       | The distance between the text and the slide                                                                                                                                                                                                      |
| formatter  | *(value: any) => string* | 文本的格式化方式 |

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. *ContinueLegendTrackCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                     |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------- |
| style      | *object* | -       | Selected range of styles, reference [Graphic Style](/zh/docs/api/graphic-style) |

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider. (暂不支持自定义)

*ContinueLegendHandlerCfg* is configured as follows:

| Properties | Type     | Default | Description                                                                 |
| ---------- | -------- | ------- | --------------------------------------------------------------------------- |
| size       | *number* | -       | Slider size, default: 10                                                             |
| style      | *object* | -       | Slider configuration, reference [Graphic Style](/zh/docs/api/graphic-style) |
