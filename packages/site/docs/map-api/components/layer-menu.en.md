---
title: LayerMenu
order: 5
---

---
title: 图层列表 - LayerMenu
order: 5
---

## `layerMenu.`position

`string` optional default: `'topright'`

控件的位置，支持以下定位位置：

*   'topright'
*   'topleft'
*   'bottomright'
*   'bottomleft'

## `layerMenu.`collapsed

`boolean` optional default: `true`

默认状态下是否将控件折叠。

## `layerMenu.`autoZIndex

`boolean` optional default: `true`

显示隐藏时是否保持原图层顺序。

## `layerMenu.`hideSingleBase

`boolean` optional default: `false`

当只有一个图层时，控件是否隐藏。

## `layerMenu.`sortLayers

`boolean` optional default: `false`

是否对图层列表进行排序。

## `layerMenu.`sortFunction

`Function: (a.layer, b.layer, a.name, b.name) => number` optional

自定义图层列表[排序](https://developer.mozilla.org/docs/map-Web/JavaScript/Reference/Global_Objects/Array/sort)函数。
