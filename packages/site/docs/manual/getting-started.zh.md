

## title: 快速上手&#xA;order: 1

## 安装

### 浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源。

```html
<!-- 引入在线资源 -->
<script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
<script>
  const { Line } = G2Plot;
</script>
```

```html
<!-- 下载到本地 引入本地脚本 -->
<script src="./g2plot.min.js"></script>
<script>
  const { Line } = G2Plot;
</script>
```

### 通过 npm 安装

我们提供了 G2Plot 的 npm 包，通过下面的命令即可完成安装：

```bash
// 推荐用法
npm install @antv/g2plot --save
```

成功安装完成之后，即可使用 `import` 或 `require` 进行引用：

```ts
import { Line } from '@antv/g2plot';
```

## 快速使用

在 G2Plot 引入页面后，我们就已经做好了创建第一个图表的准备了。下面以一个基础折线图为例开始我们第一个图表的创建。

**step1**: 创建图表容器

```html
<div id="container"></div>
```

**step2**: 引入数据。G2Plot 的数据源格式是 JSON 数组，数组的每个元素是一个标准 JSON 对象，部分图表除外。

```ts
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
```

**step3**: 创建并渲染图表

```ts
import React, { useState, useEffect } from 'react';
import {  } from '@ant-design/charts';

const Demo: React.FC = () => {
  
  return < {...config} />;
};

export default Demo;


```

最终效果：

<img alt="示例" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*VV2bQpd-aBIAAAAAAAAAAAAAARQnAQ" width="800">

## 个性化设置

图表元素的视觉样式采用默认主题的样式，还没有经过特别定制，图表主体中的文本元素也没有进行格式化，我们可以根据需求对图表进行各种个性化设置，更多多配置请参考图表 API。

```ts
import React, { useState, useEffect } from 'react';
import {  } from '@ant-design/charts';

const Demo: React.FC = () => {
  
  return < {...config} />;
};

export default Demo;


```

最终效果：

<img alt="示例" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Y-4xSprUCV0AAAAAAAAAAAAAARQnAQ" width="800">

通过上面由浅入深的教程，你应该已经基本了解 G2Plot 的使用方法了，不过这远远不是终点，G2Plot 还有很多有趣的配置和特性等待你的尝试和探索。更多基础功能请参考[各图表配置项](../api/plots/line)。
