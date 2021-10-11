#### 💠 DataMarker Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'dataMarker',` 标识为：特殊数据点标注，多用于折线图和面积图。

##### position

<description>**required** *\[string, string] | Datum | ((xScale, yScales) => \[string, string])*</description>

DataMarker 标注位置，参考 Text Annotation 标注的 `position` 设置。

[Example](/zh/examples/component/annotation#text-annotation1)

##### point

<description>**optional** *null | DataMarkerPointCfg* </description>

point 设置。当设置为：`null` 时，不展示 point 点标识。

***DataMarkerPointCfg*** 类型定义如下：

```ts
// 当前只支持对 point 的样式进行设置。
type DataMarkerPointCfg = {
  style?: ShapeAttrs;
}
```

##### line

<description>**optional** *null | DataMarkerLineCfg* </description>

line 设置。当设置为：`null` 时，不展示 line 标识。

***DataMarkerLineCfg*** 类型定义如下：

```ts
// 当前只支持对 line 的样式以及长度进行设置。
type DataMarkerPointCfg = {
  style?: ShapeAttrs;
  length?: number;
}
```

##### text

<description>**optional** *null | AnnotationTextCfg* </description>

DataMareker 辅助标记上的文本设置。当设置为：`null` 时，不展示文本标识。

***AnnotationTextCfg*** 类型定义如下：

```ts
// 当前只支持对 line 的样式以及长度进行设置。
type AnnotationTextCfg = {
  /** 文本内容*/
  content?: string;
  /** 自动旋转，沿着线的方向，默认 true */
  autoRotate?: boolean;
  /** 文本的偏移 x */
  offsetX?: number;
  /** 文本的偏移 y */
  offsetY?: number;
  /** 字体样式，参考绘图属性 */
  style?: object;
};
```

##### autoAdjust

<description>**optional** *boolean* </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** *upward | downward* </description>

朝向。

```plain

`markdown:docs/common/annotations/base-annotation.zh.md`
```
