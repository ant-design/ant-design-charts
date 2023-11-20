---
title: title
order: 1
---

用于一句话概要说明图表要展示的数据，图表的标题是比较常用的组件，支持标题和副标题，以及他们的样式和位置设置。

## 开始使用

<img alt="title" src="https://mass-office.alipay.com/huamei_qa8qxu/afts/img/A*Nmu-Tp-OpvEAAAAAAAAAAAAADmJ7AQ/original" width="500" />

```ts
const config = {
  title: 'This is the title of chart.',
}
```

标题 title 的设置，最简单的设置方式，就是直接指定一个字符串作为标题，这个时候使用默认的样式和位置。当然也可以使用完整的配置项去做一些灵活的自定义。

## 选项

| 属性                          | 描述                         | 类型                          | 默认值 |
| ----------------------------- | ---------------------------- | ----------------------------- | ------ |
| size                          | 标题的高度                   | `number`                      | `36`   |
| title                         | 标题文本                     | `string`                      | -      |
| subtitle                      | 副标题文本                   | `string`                      | -      |
| `style.`align                 | 标题的对齐方式               | `left` \| `center` \| `right` | `left` |
| `style.`spacing               | 主标题、副标题之间的上下间距 | `number`                      | `2`    |
| `style.`titleFontSize         | 标题文字大小                 | `number`                      | -      |
| `style.`titleFontFamily       | 标题文字字体                 | `string`                      | -      |
| `style.`titleFontWeight       | 标题字体粗细                 | `number`                      | -      |
| `style.`titleFill             | 标题字体颜色                 | `string`                      |
| `style.`titleFillOpacity      | 标题字体颜色透明度           | `number`                      |
| `style.`titleStroke           | 标题字体描边颜色             | `string`                      | -      |
| `style.`titleStrokeOpacity    | 标题字体描边颜色透明度       | `number`                      | -      |
| `style.`subtitleFontSize      | 标题文字大小                 | `number`                      | -      |
| `style.`subtitleFontFamily    | 标题文字字体                 | `string`                      | -      |
| `style.`subtitleFontWeight    | 标题字体粗细                 | `number`                      | -      |
| `style.`subtitleFill          | 标题字体颜色                 | `string`                      |
| `style.`subtitleFillOpacity   | 标题字体颜色透明度           | `number`                      |
| `style.`subtitleStroke        | 标题字体描边颜色             | `string`                      | -      |
| `style.`subtitleStrokeOpacity | 标题字体描边颜色透明度       | `number`                      | -      |
