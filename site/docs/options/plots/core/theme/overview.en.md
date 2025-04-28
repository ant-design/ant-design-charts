---
title: overview
order: 1
---

In Ant Design Charts, **Theme** refers to the default styles of the graphics in a chart.

Themes can be configured at the view level:

```js
({
  theme: {},
});

```

```js
chart.theme({});

```

Themes can also be configured at the mark level:

```js
({
  theme: {},
});

```


## Switching Themes

Ant Design Charts provides built-in themes that can be switched using the `type` property.


```js
chart.theme({ type: 'classicDark' });

```

## Custom Themes

There are two ways to customize the theme, the first is to specify in theme that you want to override certain theme styles:

```js
{
  "call": {}
}
```

The following example overrides the default color of the light theme:

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

If you want to customize all theme styles, you can add a new theme, override the default theme, register it, and then use it.

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

The default themes included are:

- `Ant Design Charts.Light`
- `Ant Design Charts.Dark`
- `Ant Design Charts.Classic`
- `Ant Design Charts.ClassicDark`
- `Ant Design Charts.Academy`

For a complete theme configuration, you can refer to the [light](https://github.com/antvis/Ant Design Charts/blob/v5/src/theme/light.ts) theme.

