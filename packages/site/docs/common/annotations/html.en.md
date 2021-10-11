#### 💠 Html Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'html',`。自定义任意 HTML 类型的图形标记，通过 option 中的 html 配置来在图表中使用 HTML DOM 元素来添加图形标记。option 配置如下：

##### container

<description> *string* | *HTMLElement* **optional** </description>

可选，自定义 HTML 图形标记的容器元素

##### html

<description> *string* | *HTMLElement* | *((container: HTMLElement, view: View) => void | string | HTMLElement)* </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数

##### alignX

<description> *'left'* | *'middle'* | *'right'* **optional** *default:* 'left' </description>

DOM 元素在 X 方向的对齐方式

##### alignY

<description> *'top'* | *'middle'* | *'bottom'* **optional** *default:* 'top'</description>

DOM 元素在 Y 方向的对齐方式

##### offsetX

<description> *number* **optional** </description>

X 方向的偏移

##### offsetY

<description> *number* **optional** </description>

Y 方向的偏移
