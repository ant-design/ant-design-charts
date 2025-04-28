---
title: 概览
order: 1
---

在 Ant Design Charts 中，**标记转换（Mark Transform）** 提供了一种便捷的机制，用于修改数据和标记选项，主要用于支持数据分析。标记转换的本质是一个函数，该函数能够**筛选**、**修改**、**聚合**以及**生成**新的通道值，从而优化图形展示，提升数据的可解释性。

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1oZjT4cKSh8AAAAAAAAAAAAADmJ7AQ/original" width='25%'/>
<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DziRQb4LMbAAAAAAAAAAAAAADmJ7AQ/original" width='25%'/>
<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*l6NBRburGGcAAAAAAAAAAAAADmJ7AQ/original" width='25%'/>
<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TZmeQqK7CZwAAAAAAAAAAAAADmJ7AQ/original" width='25%'/>

## 配置层级

转换是一个数组，声明的转换会 **按照顺序执行**。转换可以配置在 Mark 层级：

```js
({
  transform: [{ type: 'stackY' }, { type: 'sortX' }],
});

```

标记转换会去修改每个通道绑定的数据，从而改变图表的展示形式。比如 StackY 转换堆叠了条形图 y 和 y1 通道绑定的列数据：

```js
{
  "autoFit": true,
  "transform": [
    {
      "type": "stackY"
    }
  ]
}
```

转换也可以配置在 View 层级：

```js
({
  transform: [{ type: 'stackY' }, { type: 'sortX' }],
});

```

在视图上声明的转换会传递给 `children` 声明的标记。如果该标记没有转换就设置，否则没有影响。比如下面这个带有转换的堆叠面积图：

```js
{
  "autoFit": true,
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "children": [
    {
      "type": "area",
      "style": {
        "fillOpacity": 0.5
      }
    },
    {
      "type": "line",
      "style": {
        "strokeWidth": 2
      },
      "tooltip": false
    }
  ]
}
```

## 使用场景

常见的转换的作用一般有三种：

- **防止重叠**

在将数据映射到图形时，必须通过视觉编码来实现。在所有视觉通道中，位置是最具区分度的通道（ x 通道、y 通道等）。然而，在某些情况下，图形中的位置可能会出现重叠，导致数据分析变得困难。为了应对这种情况，通常需要对原始图形进行一定的转换，比如 dodgeX、stackY，jitterX 等。

- **数据聚合**

还有一类标记转换主要是用来做数据聚合：比如 bin 和 group。和传统的数据聚合不同，标记聚合是发生在绘制之中，而不是在绘制之前。这使得我们不需要去操作抽象的原始数据，而是直接操作通道值即可。这大大提高了我们探索数据的效率。

- **绘制图形标注**

在 Ant Design Charts 中，并未单独提供专门的标注组件，而是通过灵活配置标记来实现标注功能。既然标注也是一种标记，那么它也可以执行标记转换。

## 防止重叠

转换的一个作用是防止重叠，对数据进行调整，使得图形在画布上不互相重叠。

💡 **数据调整的原则**

我们调整数据的目的是为了使得图形不互相遮挡，对数据的认识更加清晰，但是必须保证对数据的正确理解，所以需要遵循以下原则：

- 不能改变数据的含义，给用户带来误解；
- 数据调整的界限要清晰，不能混淆不同类别的数据；
- 定量（连续）数据只能进行数据的累加和对称，分类数据只能在当前分类的范围内调整数据。

比如如下的数据绘制的散点图中 x 通道相同的点完全重叠在一起，很难区分。

```js
{
  "autoFit": true,
  "scale": {
    "x": {
      "type": "point"
    },
    "color": {
      "type": "ordinal"
    }
  }
}
```

可以通过配置 [jitterX](/options/plots/core/transform/jitter-x) 转换实现在某个区域的 x 方向散开的效果。

```js
{
  "autoFit": true,
  "scale": {
    "x": {
      "type": "point"
    },
    "color": {
      "type": "ordinal"
    }
  },
  "transform": [
    {
      "type": "jitterX"
    }
  ]
}
```

这种情况在柱状图中也很常见，比如如下的数据绘制的柱状图中在 x 通道是分类的情况下，同一个分类下有多条记录是会出现重叠，很难区分。

```js
{
  "autoFit": true
}
```

这时候可以声明一个 [dodgeX](/options/plots/core/transform/dodge-x) 去绘制分组柱状图：

```js
{
  "autoFit": true,
  "transform": [
    {
      "type": "dodgeX"
    }
  ]
}
```

或者声明一个 [stackY](/options/plots/core/transform/stack-y) 去绘制堆叠柱状图：

```js
{
  "autoFit": true,
  "transform": [
    {
      "type": "stackY"
    }
  ]
}
```

以下是 Ant Design Charts 中内置的防止重叠的标记转换：

| 转换                                       | 详细描述                                                                      | 示例                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [diffY](/options/plots/core/transform/diff-y)     | 将 y 通道的值进行对比，并生成差值的类型，这通常用于对两个数值集进行变化衡量。 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*9jOYSrMpSe4AAAAAAAAAAAAADmJ7AQ/original"></img> |
| [dodgeX](/options/plots/core/transform/dodge-x)   | 在 x 通道方向上，对元素进行分组和错位排列，以避免重叠，便于区分数据点。       | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JUTiSIaaUgEAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [jitter](/options/plots/core/transform/jitter)    | 在 x 和 y 通道方向随机生成轻微的摆动，用于处理图形中数据点的重叠问题。        | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DziRQb4LMbAAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [jitterX](/options/plots/core/transform/jitter-x) | 在 x 通道方向随机生成轻微的摆动，用于减少数据点的重叠。                       | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*34m0QZPUjxMAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [jitterY](/options/plots/core/transform/jitter-y) | 在 y 通道方向随机生成轻微的摆动，用于减少数据点的重叠。                       | 和 jitterX只是方向上的差别                                                                                       |
| [pack](/options/plots/core/transform/pack)        | 将数据点进行紧密排列，以优化空间利用率，适用于密集型分布布局。                | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TZmeQqK7CZwAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [sample](/options/plots/core/transform/sample)    | 对数据进行采样，基于一定算法从原始数据集中选择子集，常用于大数据下处理。      | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*68ViRIex2JEAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [stackY](/options/plots/core/transform/stack-y)   | 在 y 通道方向对数据进行堆叠处理，通常用于展示数值累积的效果或分布情况。       | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*RqV4T4LZxaAAAAAAAAAAAAAADmJ7AQ/original"></img> |

## 数据聚合

还有一类标记转换主要是用来做数据聚合：比如 [bin](/options/plots/core/transform/bin) 和 [group](/manual/core/transform/group)。和传统的数据聚合不同，标记聚合是发生在绘制之中，而不是在绘制之前。这使得我们不需要去操作抽象的原始数据，而是直接操作通道值即可。这大大提高了我们探索数据的效率。

```js
table({
  url: 'https://assets.antv.antgroup.com/g2/penguins.json',
});

```

下面是一份企鹅集群的数据，接下来以此作为案例，介绍 Ant Design Charts 中一些常用的数据聚合的方式。

首先我们如下绘制一个散点图，展现了企鹅 `culmen_depth_mm` 和 `culmen_length_mm` 的相关性。

```js
{
  "autoFit": true
}
```

但是散点图无法直观地看出企鹅群体某个数据的分布情况，比如 `culmen_depth_mm` 的具体分布情况，这时候就可以使用 [binX](/options/plots/core/transform/bin-x) 对数据进行分箱，通过直方图进行进一步的数据分析。

```js
{
  "autoFit": true,
  "style": {
    "insetLeft": 1
  }
}
```

bin 主要是用来聚合数值类型的数据，group 主要针对离散数据。在上面的例子中，如果想要分析不同岛屿上不同企鹅种类的数量，可以使用 [groupX](/options/plots/core/transform/group-x)对 x 通道进行分组，并对 y 通道根据 count 方式进行聚合。

```js
{
  "autoFit": true,
  "transform": [
    {
      "y": "count"
    },
    {}
  ]
}
```

如果我们不关心具体的数量多少，而是想聚焦于不同种类的企鹅的占比，可以使用 [normalizeY](/options/plots/core/transform/normalize-y) 进行归一化处理。

```js
{
  "autoFit": true,
  "transform": [
    {
      "y": "count"
    },
    {},
    {}
  ]
}
```

以下是 Ant Design Charts 中内置的用于数据聚合的标记转换：

| 转换                                             | 详细描述                                                                 | 示例                                                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [bin](/options/plots/core/transform/bin)                | 将数据分组到固定的区间（或桶）中，通常用于直方图的构造。                 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*oyXhQKobcMMAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [binX](/options/plots/core/transform/bin-x)             | 在 x 通道方向对数据进行分组，生成一系列区间（或桶）。                    | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*WJFaSp1JLHQAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [binY](/options/plots/core/transform/bin-y)             | 在 y 通道方向对数据进行分组，生成一系列区间（或桶）。                    | 和 binX 只是方向上的差别                                                                                         |
| [flexX](/options/plots/core/transform/flex-x)           | 在 x 通道上灵活排列数据，用于处理自适应布局或特殊排列要求。              | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*i_DyRJlDdVsAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [group](/options/plots/core/transform/group)            | 对数据进行分组，基于某些条件或属性将数据划分为多个子集。                 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*QXuAQ7COJwcAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [groupColor](/options/plots/core/transform/group-color) | 基于数据属性对数据的颜色进行分组，常用于分类数据的可视化。               | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*dWoBQ7aVlcQAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [groupX](/options/plots/core/transform/group-x)         | 基于 x 通道的数据属性进行分组，常用于带有分类维度的数据可视化。          | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1oZjT4cKSh8AAAAAAAAAAAAADmJ7AQ/original"></img> |
| [groupY](/options/plots/core/transform/group-y)         | 基于 y 通道的数据属性进行分组，常用于将数据按类别排列在 y 通道上的情况。 | <img src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*rWBUQ6_kf8kAAAAAAAAAAAAADmJ7AQ"></img>      |
| [normalizeY](/options/plots/core/transform/normalize-y) | 在 y 通道上将数据归一化，通常是对数据进行比例调整便于比较和可视化展示。  | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Pp6-RJMKJFUAAAAAAAAAAAAADmJ7AQ/original"></img> |
| [select](/options/plots/core/transform/select)          | 对数据进行子集的筛选，基于指定的条件过滤出一部分数据。                   | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*oNCJTZ7LYVkAAAAAAAAAAAAAemJ7AQ/original"></img> |
| [selectX](/options/plots/core/transform/select-x)       | 基于 x 通道上的数据进行筛选，选出符合范围或条件的数据子集。              |                                                                                                                  |
| [selectY](/options/plots/core/transform/select-y)       | 基于 y 通道上的数据进行筛选，选出符合范围或条件的数据子集。              |                                                                                                                  |
| [sortColor](/options/plots/core/transform/sort-color)   | 基于颜色的优先级对数据进行排序，用于生成颜色的有序视觉结构。             |                                                                                                                  |
| [sortX](/options/plots/core/transform/sort-x)           | 按 x 通道上的数据进行排序，以生成具有顺序关系的视觉图形。                |                                                                                                                  |
| [sortY](/options/plots/core/transform/sort-y)           | 按 y 通道上的数据进行排序，以生成具有顺序关系的视觉图形。                |                                                                                                                  |
| [stackEnter](/options/plots/core/transform/stack-enter) | 对 enterDuration 和 enterDelay 通道进行堆叠，实现分组动画的效果。        | <img src="https://gw.alipayobjects.com/zos/raptor/1668659773138/stackenter.gif"></img>                           |
| [symmetryY](/options/plots/core/transform/symmetry-y)   | 在 y 通道方向生成对称分布，用于构造具有对称性的数据布局。                | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*LeTWR4RrSjoAAAAAAAAAAAAADmJ7AQ/original"></img> |

## 绘制图形标注

在标记部分的文档里已经阐述过，在 Ant Design Charts 中，并未单独提供专门的标注组件，而是通过灵活配置标记来实现标注功能。既然标注也是一种标记，那么它也可以执行标记转换。

标注的数据通常与图表的数据来源保持一致，基于此数据源通过标记转换来生成标注内容。在标注构造过程中，可以借助 **group** 将数据按特定分类或属性进行分组，或使用 **select** 筛选出满足特定条件的子集，从而实现对关键信息的聚焦与强化处理。这种灵活的标记转换不仅可以帮助有效地构建标注，还能确保标注内容准确地贴合数据的逻辑与视觉需求，同时提升图表的可读性与表达效果。

### group

groupX 是常用的一种标记转换，基于 **x 通道** 对数据进行分组，并对指定的通道进行聚合处理。具体来说，它将数据按照 **x 通道**的分组维度进行聚合计算，并结合 **y 通道**上的数据进行进一步处理。例如，可以对每组 **y 数据**进行计算并取其平均值（`mean`），作为聚合结果。最终，聚合后的数据会被用于绘制标记（如 lineY），从而生成一条具有统计学意义的平均线。这种方法简化了分组与聚合的流程，使得在图形绘制时就能直接操作聚合后的数据，提升了数据处理效率与可视化表达的精准性。

```js
{
  "autoFit": true,
  "children": [
    {
      "type": "interval",
      "encode": {
        "y": "precipitation"
      },
      "transform": [
        {
          "type": "groupX",
          "y": "mean"
        }
      ],
      "scale": {
        "y": {
          "tickCount": 5,
          "domainMax": 6
        }
      },
      "tooltip": {
        "items": [
          {
            "channel": "y",
            "valueFormatter": ".2f"
          }
        ]
      }
    },
    {
      "type": "lineY",
      "encode": {
        "y": "precipitation"
      },
      "transform": [
        {
          "type": "groupX",
          "y": "mean"
        }
      ],
      "style": {
        "stroke": "#F4664A",
        "strokeOpacity": 1,
        "lineWidth": 2,
        "lineDash": [
          3,
          3
        ]
      }
    }
  ]
}
```

同理我们可以用 groupY 转换来绘制直方图的中位线。

```js
{
  "autoFit": true,
  "children": [
    {
      "type": "rect",
      "encode": {
        "x": "IMDB Rating"
      },
      "transform": [
        {
          "type": "binX",
          "y": "count",
          "thresholds": 9
        }
      ],
      "scale": {
        "y": {
          "domainMax": 1000
        }
      },
      "style": {
        "inset": 1
      }
    },
    {
      "type": "lineX",
      "encode": {
        "x": "IMDB Rating"
      },
      "transform": [
        {
          "type": "groupY",
          "x": "median"
        }
      ],
      "style": {
        "stroke": "#F4664A",
        "strokeOpacity": 1,
        "lineWidth": 2,
        "lineDash": [
          4,
          4
        ]
      }
    }
  ]
}
```

### select

在可视化中，当需要突出显示某些特殊位置（如起点、终点或最大值）时，select 标记转换是一种非常灵活且高效的选择。通过 select 转换，可以基于条件筛选数据并实现对特定位置的标记。以下示例展示了如何使用 selectY 对 **折线图**的数据进行筛选，从而标注图中 **峰值位置**的具体实现：  

```js
{
  "autoFit": true,
  "scale": {
    "x": {
      "range": [
        0,
        1
      ]
    },
    "y": {
      "nice": true
    }
  },
  "axis": {
    "y": {}
  },
  "children": [
    {
      "type": "line",
      "encode": {
        "shape": "smooth"
      }
    },
    {
      "type": "text",
      "encode": {
        "x": "month",
        "y": "temperature"
      },
      "transform": [
        {
          "type": "selectY",
          "groupBy": "color",
          "selector": "max"
        }
      ],
      "style": {
        "fill": "orange",
        "fontSize": 16,
        "dy": -15
      },
      "tooltip": false
    },
    {
      "type": "point",
      "encode": {
        "x": "month",
        "y": "temperature"
      },
      "transform": [
        {
          "type": "selectY",
          "groupBy": "color",
          "selector": "max"
        }
      ],
      "tooltip": false
    }
  ]
}
```

## 示例

### 同时使用多个转换

我们也可以同时声明多个转换。比如在上面的企鹅的例子中，我们多考虑一个数据维度：企鹅的性别，就可以连续声明 binX 和 stackY 转换。需要注意的一点是，Ant Design Charts 里的转换是按顺序执行的，在下面的例子里交换 binX 和 stackY 的顺序会出错。

```js
{
  "autoFit": true,
  "transform": [],
  "style": {
    "insetLeft": 1
  }
}
```
