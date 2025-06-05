---
title: timingKeyframe
order: 2
---

在不同视图之间执行连续的过渡动画。通过 `mark.key` 和 `mark.groupKey` 去关联图形。

## 开始使用

<img src="https://gw.alipayobjects.com/zos/raptor/1669043493952/point-keyframe.gif" width=640 alt="keyframe"/>

```js
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "keyField": "gender",
    "colorField": "gender",
    "yField": "weight",
    "xField": "gender",
    "transform": [
      {
        "type": "groupX",
        "y": "mean"
      }
    ],
    "data": data
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 选项

| 属性           | 描述                                                          | 类型     | 默认值     |
| -------------- | ------------------------------------------------------------- | -------- | ---------- |
| duration       | 每一视图的动画过渡时间                                        | `number` | 1000       |
| iterationCount | `'infinite' \| number`                                        |          | 1          |
| direction      | `'normal' \| 'reverse' \| 'alternate' \| 'reverse-alternate'` | `number` | `'normal'` |
| children       | 执行动画的视图节点                                            | `Node[]` | `[]`       |
