---
title: 概览
order: 1
---

Ant Design Charts 中**主题（Theme）** 是图表中图形的一些默认样式。

可以在视图层级配置主题：

```js
({
  theme: {},
});

```

```js
chart.theme({});

```

也可以在标记层级配置主题：

```js
({
  theme: {},
});

```


## 切换主题

Ant Design Charts 内置了一些主题，可以通过 `type` 进行切换。

```js
chart.theme({ type: 'classicDark' });

```

## 自定义主题

有两种自定义主题的方式，第一种是在 theme 指定希望覆盖某些主题样式：

```js
{
  "call": {}
}
```

下面的例子覆盖了 light 主题的默认颜色：

```js
{
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "theme": {
    "color": "red"
  }
}
```

如果希望自定义所有的主题样式，可以新增一个主题、覆盖默认主题、注册，然后使用。

```js
{
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "theme": {
    "type": "custom"
  }
}
```

包含的默认主题有：

- `Ant Design Charts.Light`
- `Ant Design Charts.Dark`
- `Ant Design Charts.Classic`
- `Ant Design Charts.ClassicDark`
- `Ant Design Charts.Academy`

完整的主题配置可以参考 [light](https://github.com/antvis/Ant Design Charts/blob/v5/src/theme/light.ts) 主题。
