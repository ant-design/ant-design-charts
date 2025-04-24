---
title: symmetryY
order: 2
---

## 概述

按照指定通道分组，给每组的 y 和 y1 通道添加偏移，实现对称效果。

## 使用场景

symmetry y（Y轴对称）通常用于强调或突出数据的对称性、对比或镜像关系。以下是常见的应用场景，结合图表类型和实际案例来说明：
`
| **场景**         | **图表类型**     | **说明**                                                        | **示例**               |
| ---------------- | ---------------- | --------------------------------------------------------------- | ---------------------- |
| **对比两组数据** | 柱状图、条形图   | 两组数据分别显示在Y轴两侧，直观展示对比差异（如A/B测试结果）。  | 男性 vs 女性收入分布   |
| **镜像关系分析** | 折线图、面积图   | 数据围绕Y轴对称分布，展示正负关联（如收益与亏损、进出口平衡）。 | 公司月度盈利与亏损对比 |
| **对称分布验证** | 箱线图、小提琴图 | 检查数据是否对称分布（如正态分布检验）。                        | 身高/体重的对称性分析  |
| **双向偏差展示** | 误差条形图       | 同时显示正向和负向偏差（如预测值与实际值的差异）。              | 天气预报误差范围       |

### 用途总结
1. **对比分析**：快速识别两组数据的差异或相似性。
2. **对称验证**：检验数据是否符合对称分布（如正态性）。
3. **双向表达**：同时展示正向和负向趋势（如盈亏、误差）。
4. **自然规律可视化**：揭示自然界或科学中的对称现象（如物理、生物）。

## 配置项

| 属性    | 描述                                                             | 类型                 | 默认值 |
| ------- | ---------------------------------------------------------------- | -------------------- | ------ |
| groupBy | 指定分组通道，可以是单个通道名称、也可以是多个通道（字符串数组） | `string \| string[]` | `x`    |

### groupBy

在 `symmetryY` 执行的时候，需要将数据进行分组，在每个分组中执行 `symmetryY` 的计算逻辑。比如对于面积图，需要把同一个 x 值下的 y 数据变成一个组，然后在组内做最大最小值的处理逻辑，所以 `groupBy` 设置为 `x` 通道。

理论上，`groupBy` 可以设置为所有的通道值，具体可以参考 [encode](/options/plots/core/encode) 文档。所有的枚举值如下：

```ts
export type ChannelTypes =
  | 'x'
  | 'y'
  | 'z'
  | 'x1'
  | 'y1'
  | 'series'
  | 'color'
  | 'opacity'
  | 'shape'
  | 'size'
  | 'key'
  | 'groupKey'
  | 'position'
  | 'series'
  | 'enterType'
  | 'enterEasing'
  | 'enterDuration'
  | 'enterDelay'
  | 'updateType'
  | 'updateEasing'
  | 'updateDuration'
  | 'updateDelay'
  | 'exitType'
  | 'exitEasing'
  | 'exitDuration'
  | 'exitDelay'
  | `position${number}`;


```

## 示例

以下是简单的示例代码，用请注意 `.transform({ type: 'symmetryY' })` 转换以及对比对应的输出：

```ts
{
  "transform": [
    {
      "type": "stackY"
    },
    {
      "type": "symmetryY"
    }
  ]
}
```

以上的代码就能得到渲染对应的图：

<img alt="symmetryY" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Vf-FQZH-5FMAAAAAAAAAAAAADmJ7AQ/original" width="600" />

同时，怎么绘制一个对称的条形图？同样的，使用这个 transform 即可，如下：

```ts
{
  "transform": [
    {
      "type": "stackY"
    },
    {
      "type": "symmetryY"
    }
  ],
  "scale": {
    "x": {
      "padding": 0.5
    }
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  },
  "legend": false
}
```

请注意最后 `.transform({ type: 'symmetryY' })` 的转换函数。

### 漏斗图

symmetryY 还有个比较重要的一个应用场景是[漏斗图](https://g2.antv.antgroup.com/examples/general/funnel/#funnel)（[对比漏斗图](https://g2.antv.antgroup.com/examples/general/funnel/#mirror-funnel)、[转化漏斗图](https://g2.antv.antgroup.com/examples/general/funnel/#funnel-annotation)）、[金字塔图](https://g2.antv.antgroup.com/examples/general/funnel/#pyramid)，用于展现数据的转化以及结果的呈现。例如，比较典型的漏斗图展现如下：

<img alt="symmetryY" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-mJbR6QvImkAAAAAAAAAAAAAemJ7AQ/fmt.webp" width="600" />

对应的示例代码为：

```ts
{
  "autoFit": true,
  "transform": [
    {
      "type": "symmetryY"
    }
  ],
  "scale": {
    "x": {
      "padding": 0
    }
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  },
  "animate": {
    "enter": {
      "type": "fadeIn"
    }
  },
  "axis": false,
  "labels": [
    {
      "position": "inside",
      "transform": [
        {
          "type": "contrastReverse"
        }
      ]
    }
  ]
}
```

具体更多的案例，可以参考以上提供的图表示例页面链接。
