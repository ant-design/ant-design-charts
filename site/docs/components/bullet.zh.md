---
category: Components
type: Plot
usage: comparison
title: Bullet 子弹图
cover: https://mdn.alipayobjects.com/huamei_za7we3/afts/img/A*R4hCRJwwMhgAAAAAAAAAAAAADo2bAQ/original
link: /examples#statistics-bullet
order: 10
---

##  特有

### measureField 

<description>**required** _string_</description>

使用数据条的长度，实际数值的设置字段，表示实际数值。

### rangeField 

<description>**required** _string_</description>

使用背景色条的长度的设置字段，表示区间范围。

### targetField 

<description>**required** _string_</description>

使用测量标记的刻度轴位置的设置字段，表示目标值。

### layout

<description>**optional** _'horizontal' | 'vertical'_ _default:_ 'horizontal'</description>

表示子弹图方向。


### color 

<description>**optional** _object_</description>

设置子弹图各图形 color 属性。

| 细分配置 | 类型        | 功能描述     | 默认配置 |
| -------- | ----------- | ------------ | -------- |
| ranges    | _string\|string[]_ | 区间背景颜色 | 无       |
| measures  | _string\|string[]_ | 实际值颜色   | 无       |
| target   | _string\|string[]_ | 目标值颜色   | 无       |


### range 

<description>**required** _BulletOptions_</description>

range 配置

### measure 

<description>**required** _BulletOptions_</description>

measure 配置


### target 

<description>**required** _BulletOptions_</description>

target 配置
