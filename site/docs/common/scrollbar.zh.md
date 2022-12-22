***ShapeAttrs*** 类型的请参考[绘图属性](/zh/docs/api/graphic-style)

| 配置项           | 类型                             | 功能描述           |
| --------------- | ----------------                | ------------------ |
| type            | *'horizontal' | 'vertical'*    | 滚动条类型      |
| width           | *number*                        | 宽度，在 vertical 下生效       |
| height          | *number*                        | 高度，在 horizontal 下生效         |
| padding         | *number | number\[]*            | padding       |
| categorySize    | *number*                        | 对应水平滚动条，为 x 轴每个分类字段的宽度；对于垂直滚动条，为 x 轴每个分类字段的高度 |
| style         | *ScrollbarStyle*                       | 滚动条默认样式的设置       |
| animate         | *boolean*                       | 滚动的时候是否开启动画，默认跟随 view 中 animate 配置        |

***ScrollbarStyle*** 类型如下：

| 配置项           | 类型              | 功能描述            |
| --------------- | ---------------- | ------------------ |
| trackColor        | *string*    | 滚动条滑道填充色      |
| thumbColor        | *string*    | 滚动条滑块填充色      |
| thumbHighlightColor  | *string*    | 滚动条滑块高亮样式，对应主题的 hover.style.thumbColor     |
| lineCap           | *string*    | 决定滚动条末端绘制形状，同 Canvas lineCap 属性。     |
