#### 💠 Shape Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'shape',`。自定义任意类型的图形标记，通过 option 中的 render 回调函数来在图表区域绘制自定义标记。option 配置如下：

##### render

<description> *(
container: IGroup,
view: View,
helpers: { parsePosition: (position: \[string | number, string | number] | Datum) => Point }
) => void* </description>

自定义标记的绘制 render 函数，其他 *container* 为标记绘制的父容器, *view* 为图形实例, *helpers* 为辅助函数，其他 *parserPosition* 可以用来计算数据点对应的坐标位置

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)
