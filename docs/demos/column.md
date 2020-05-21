---
title: 柱状图
order: 2
---

# 柱状图

## Column

### 基础柱状图-转化率组件

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图-转化率组件',
    },
    description: {
      visible: true,
      text: '基础柱状图的图形之间添加转化率标签图形\uFF0C用户希望关注从左到右的数据变化比例',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'action',
    yField: 'pv',
    conversionTag: { visible: true },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图 label 颜色自动调整

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图label颜色自动调整',
    },
    description: {
      visible: true,
      text:
        '图形标签(label)的adjustColor配置项设置为true时\uFF0C位于柱形的内部的label颜色会根据柱形颜色自动调整\uFF0C保证可读性\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额(万)' },
    },
    colorField: 'type',
    color: ['#55A6F3', '#55A6F3', '#55A6F3', '#CED4DE', '#55A6F3', '#55A6F3', '#55A6F3', '#55A6F3'],
    label: {
      visible: true,
      position: 'middle',
      adjustColor: true,
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图-图形标签位置

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图-图形标签位置',
    },
    description: {
      visible: true,
      text:
        '基础柱状图的图形标签位置可以指定为top-柱形上部\uFF0Cmiddle-柱形中心\uFF0Cbottom-柱形底部\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额(万)' },
    },
    label: {
      visible: true,
      position: 'middle',
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图-图形标签

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图-图形标签',
    },
    description: {
      visible: true,
      text: '基础柱状图图形标签默认位置在柱形上部\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额(万)' },
    },
    label: {
      visible: true,
      style: {
        fill: '#0D0E68',
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.6,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图-滚动条

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '基础柱状图-滚动条',
    },
    description: {
      visible: true,
      text: '当数据过多时\uFF0C推荐使用滚动条一次只浏览一部分数据\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: '城市',
    xAxis: {
      visible: true,
      label: { autoHide: true },
    },
    yAxis: {
      visible: true,
      label: {
        visible: true,
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    yField: '销售额',
    interactions: [{ type: 'scrollbar' }],
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图-缩略轴

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '基础柱状图-缩略轴',
    },
    description: {
      visible: true,
      text: '缩略轴 (slider) 交互适用于数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: '城市',
    xAxis: {
      visible: true,
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yAxis: {
      visible: true,
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
    yField: '销售额',
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.4,
          end: 0.45,
        },
      },
    ],
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 基础柱状图

<a href="https://antv-g2plot.gitee.io/zh/examples/column/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额(万)' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

## RangeColumn

### 为区间柱状图配置 label 样式

<a href="https://antv-g2plot.gitee.io/zh/examples/column/range/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { RangeColumn } from '@ant-design/charts';

const DemoRangeColumn: React.FC = () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '为区间柱状图配置label样式',
    },
    description: {
      visible: true,
      text:
        '使用style配置项配置label整体样式\uFF0C同时支持通过topStyle和bottomStyle分别配置label样式\u3002',
    },
    data,
    xField: 'type',
    yField: 'values',
    color: 'l(90) 0:#3e5bdb 1:#b4d9e4',
    columnStyle: { fillOpacity: 0.8 },
    label: {
      visible: true,
      topStyle: { fill: '#3e5bdb' },
      bottomStyle: { fill: '#b4d9e4' },
    },
  };
  return <RangeColumn {...config} />;
};

export default DemoRangeColumn;
```

### 区间柱状图

<a href="https://antv-g2plot.gitee.io/zh/examples/column/range/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { RangeColumn } from '@ant-design/charts';

const DemoRangeColumn: React.FC = () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '区间柱状图',
    },
    data,
    xField: 'type',
    yField: 'values',
  };
  return <RangeColumn {...config} />;
};

export default DemoRangeColumn;
```

## GroupedColumn

### 分组柱状图-缩略轴

<a href="https://antv-g2plot.gitee.io/zh/examples/column/grouped/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { GroupedColumn } from '@ant-design/charts';

const DemoGroupedColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/NXH9bWd4MU/subsales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '分组柱状图-缩略轴',
    },
    description: {
      visible: true,
      text: '缩略轴 (slider) 交互适用于数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002',
    },
    forceFit: true,
    data,
    xField: '城市',
    yField: '销售额',
    groupField: '细分',
    color: ['#1ca9e6', '#f88c24'],
    xAxis: {
      visible: true,
      label: {
        visible: true,
        autoHide: true,
      },
    },
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.4,
          end: 0.42,
        },
      },
    ],
  };
  return <GroupedColumn {...config} />;
};

export default DemoGroupedColumn;
```

### 分组柱状图

<a href="https://antv-g2plot.gitee.io/zh/examples/column/grouped/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { GroupedColumn } from '@ant-design/charts';

const DemoGroupedColumn: React.FC = () => {
  const data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47,
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '分组柱状图',
    },
    forceFit: true,
    data,
    xField: '月份',
    yField: '月均降雨量',
    yAxis: { min: 0 },
    label: { visible: true },
    groupField: 'name',
    color: ['#1ca9e6', '#f88c24'],
  };
  return <GroupedColumn {...config} />;
};

export default DemoGroupedColumn;
```

## StackedColumn

### 联通区域组件交互

<a href="https://antv-g2plot.gitee.io/zh/examples/column/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedColumn } from '@ant-design/charts';

const DemoStackedColumn: React.FC = () => {
  const data = [
    {
      year: '2006',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2006',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2006',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2006',
      type: 'pears',
      value: 6,
    },
    {
      year: '2007',
      type: 'redDeliciou',
      value: 12,
    },
    {
      year: '2007',
      type: 'mcintosh',
      value: 18,
    },
    {
      year: '2007',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2007',
      type: 'pears',
      value: 4,
    },
    {
      year: '2008',
      type: 'redDeliciou',
      value: 5,
    },
    {
      year: '2008',
      type: 'mcintosh',
      value: 20,
    },
    {
      year: '2008',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2008',
      type: 'pears',
      value: 2,
    },
    {
      year: '2009',
      type: 'redDeliciou',
      value: 1,
    },
    {
      year: '2009',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2009',
      type: 'oranges',
      value: 5,
    },
    {
      year: '2009',
      type: 'pears',
      value: 4,
    },
    {
      year: '2010',
      type: 'redDeliciou',
      value: 2,
    },
    {
      year: '2010',
      type: 'mcintosh',
      value: 10,
    },
    {
      year: '2010',
      type: 'oranges',
      value: 4,
    },
    {
      year: '2010',
      type: 'pears',
      value: 2,
    },
    {
      year: '2011',
      type: 'redDeliciou',
      value: 3,
    },
    {
      year: '2011',
      type: 'mcintosh',
      value: 12,
    },
    {
      year: '2011',
      type: 'oranges',
      value: 6,
    },
    {
      year: '2011',
      type: 'pears',
      value: 3,
    },
    {
      year: '2012',
      type: 'redDeliciou',
      value: 4,
    },
    {
      year: '2012',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2012',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2012',
      type: 'pears',
      value: 1,
    },
    {
      year: '2013',
      type: 'redDeliciou',
      value: 6,
    },
    {
      year: '2013',
      type: 'mcintosh',
      value: 11,
    },
    {
      year: '2013',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2013',
      type: 'pears',
      value: 4,
    },
    {
      year: '2014',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2014',
      type: 'mcintosh',
      value: 13,
    },
    {
      year: '2014',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2014',
      type: 'pears',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '联通区域组件交互',
    },
    description: {
      visible: true,
      text:
        '联通区域组件可以经由交互触发\u3002通过triggerOn配置项设置联通区域组件的触发事件\u3002一次只显示一个堆叠字段的联通区域\u3002',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    yAxis: { min: 0 },
    label: { visible: false },
    stackField: 'type',
    color: ['#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
    connectedArea: {
      visible: true,
      triggerOn: 'mouseenter',
    },
  };
  return <StackedColumn {...config} />;
};

export default DemoStackedColumn;
```

### 配置联通区域组件样式

<a href="https://antv-g2plot.gitee.io/zh/examples/column/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedColumn } from '@ant-design/charts';

const DemoStackedColumn: React.FC = () => {
  const data = [
    {
      year: '2006',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2006',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2006',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2006',
      type: 'pears',
      value: 6,
    },
    {
      year: '2007',
      type: 'redDeliciou',
      value: 12,
    },
    {
      year: '2007',
      type: 'mcintosh',
      value: 18,
    },
    {
      year: '2007',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2007',
      type: 'pears',
      value: 4,
    },
    {
      year: '2008',
      type: 'redDeliciou',
      value: 5,
    },
    {
      year: '2008',
      type: 'mcintosh',
      value: 20,
    },
    {
      year: '2008',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2008',
      type: 'pears',
      value: 2,
    },
    {
      year: '2009',
      type: 'redDeliciou',
      value: 1,
    },
    {
      year: '2009',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2009',
      type: 'oranges',
      value: 5,
    },
    {
      year: '2009',
      type: 'pears',
      value: 4,
    },
    {
      year: '2010',
      type: 'redDeliciou',
      value: 2,
    },
    {
      year: '2010',
      type: 'mcintosh',
      value: 10,
    },
    {
      year: '2010',
      type: 'oranges',
      value: 4,
    },
    {
      year: '2010',
      type: 'pears',
      value: 2,
    },
    {
      year: '2011',
      type: 'redDeliciou',
      value: 3,
    },
    {
      year: '2011',
      type: 'mcintosh',
      value: 12,
    },
    {
      year: '2011',
      type: 'oranges',
      value: 6,
    },
    {
      year: '2011',
      type: 'pears',
      value: 3,
    },
    {
      year: '2012',
      type: 'redDeliciou',
      value: 4,
    },
    {
      year: '2012',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2012',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2012',
      type: 'pears',
      value: 1,
    },
    {
      year: '2013',
      type: 'redDeliciou',
      value: 6,
    },
    {
      year: '2013',
      type: 'mcintosh',
      value: 11,
    },
    {
      year: '2013',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2013',
      type: 'pears',
      value: 4,
    },
    {
      year: '2014',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2014',
      type: 'mcintosh',
      value: 13,
    },
    {
      year: '2014',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2014',
      type: 'pears',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '配置联通区域组件样式',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    stackField: 'type',
    color: ['#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
    yAxis: { min: 0 },
    label: { visible: false },
    connectedArea: {
      visible: true,
      triggerOn: false,
      lineStyle: {
        stroke: '#afb1b5',
        opacity: 0.8,
      },
      areaStyle: {
        fill: '#e8e8e8',
        opacity: 0.5,
      },
    },
  };
  return <StackedColumn {...config} />;
};

export default DemoStackedColumn;
```

### 区域联通组件

<a href="https://antv-g2plot.gitee.io/zh/examples/column/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedColumn } from '@ant-design/charts';

const DemoStackedColumn: React.FC = () => {
  const data = [
    {
      year: '2006',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2006',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2006',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2006',
      type: 'pears',
      value: 6,
    },
    {
      year: '2007',
      type: 'redDeliciou',
      value: 12,
    },
    {
      year: '2007',
      type: 'mcintosh',
      value: 18,
    },
    {
      year: '2007',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2007',
      type: 'pears',
      value: 4,
    },
    {
      year: '2008',
      type: 'redDeliciou',
      value: 5,
    },
    {
      year: '2008',
      type: 'mcintosh',
      value: 20,
    },
    {
      year: '2008',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2008',
      type: 'pears',
      value: 2,
    },
    {
      year: '2009',
      type: 'redDeliciou',
      value: 1,
    },
    {
      year: '2009',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2009',
      type: 'oranges',
      value: 5,
    },
    {
      year: '2009',
      type: 'pears',
      value: 4,
    },
    {
      year: '2010',
      type: 'redDeliciou',
      value: 2,
    },
    {
      year: '2010',
      type: 'mcintosh',
      value: 10,
    },
    {
      year: '2010',
      type: 'oranges',
      value: 4,
    },
    {
      year: '2010',
      type: 'pears',
      value: 2,
    },
    {
      year: '2011',
      type: 'redDeliciou',
      value: 3,
    },
    {
      year: '2011',
      type: 'mcintosh',
      value: 12,
    },
    {
      year: '2011',
      type: 'oranges',
      value: 6,
    },
    {
      year: '2011',
      type: 'pears',
      value: 3,
    },
    {
      year: '2012',
      type: 'redDeliciou',
      value: 4,
    },
    {
      year: '2012',
      type: 'mcintosh',
      value: 15,
    },
    {
      year: '2012',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2012',
      type: 'pears',
      value: 1,
    },
    {
      year: '2013',
      type: 'redDeliciou',
      value: 6,
    },
    {
      year: '2013',
      type: 'mcintosh',
      value: 11,
    },
    {
      year: '2013',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2013',
      type: 'pears',
      value: 4,
    },
    {
      year: '2014',
      type: 'redDeliciou',
      value: 10,
    },
    {
      year: '2014',
      type: 'mcintosh',
      value: 13,
    },
    {
      year: '2014',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2014',
      type: 'pears',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '区域联通组件',
    },
    description: {
      visible: true,
      text: '联通区域组件通过绘制同一字段的联通区域提供视觉上的辅助识别,方便进行数据对比\u3002',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    stackField: 'type',
    color: ['#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
    yAxis: { min: 0 },
    label: { visible: false },
    connectedArea: {
      visible: true,
      triggerOn: false,
    },
  };
  return <StackedColumn {...config} />;
};

export default DemoStackedColumn;
```

### 堆叠柱状图：label 自动隐藏

<a href="https://antv-g2plot.gitee.io/zh/examples/column/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedColumn } from '@ant-design/charts';

const DemoStackedColumn: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 0.5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 0.5,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 0.3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 0.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 0.5,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 1,
      type: 'Wiz',
    },
    {
      year: '1992',
      value: 2,
      type: 'Wiz',
    },
    {
      year: '1993',
      value: 5,
      type: 'Wiz',
    },
    {
      year: '1994',
      value: 4,
      type: 'Wiz',
    },
    {
      year: '1995',
      value: 6,
      type: 'Wiz',
    },
    {
      year: '1996',
      value: 2,
      type: 'Wiz',
    },
    {
      year: '1997',
      value: 10,
      type: 'Wiz',
    },
    {
      year: '1998',
      value: 12,
      type: 'Wiz',
    },
    {
      year: '1999',
      value: 3,
      type: 'Wiz',
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '堆叠柱状图\uFF1Alabel自动隐藏',
    },
    description: {
      visible: true,
      text:
        '在堆叠柱状图中\uFF0C如果label的位置被设定为middle\uFF0C即显示在柱形中间\u3002在对应柱形大小不够摆放label的情况下\uFF0Clabel会被自动隐藏\u3002',
    },
    data,
    xField: 'year',
    yField: 'value',
    yAxis: { min: 0 },
    stackField: 'type',
    color: ['#ae331b', '#dadada', '#609db7', '#1a6179'],
    label: {
      visible: true,
      position: 'middle',
    },
  };
  return <StackedColumn {...config} />;
};

export default DemoStackedColumn;
```

### 堆叠柱状图

<a href="https://antv-g2plot.gitee.io/zh/examples/column/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedColumn } from '@ant-design/charts';

const DemoStackedColumn: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '堆叠柱状图',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    yAxis: { min: 0 },
    color: ['#ae331b', '#1a6179'],
    stackField: 'type',
  };
  return <StackedColumn {...config} />;
};

export default DemoStackedColumn;
```

## Histogram

### 直方图

<a href="https://antv-g2plot.gitee.io/zh/examples/colunm/histogram/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram: React.FC = () => {
  const data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config = {
    title: {
      visible: true,
      text: '直方图',
    },
    description: {
      visible: true,
      text: '通过设置binNumber进行分箱\uFF0CbinNumber决定直方图分箱的区域\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    binField: 'value',
    binNumber: 10,
    color: '#1079a0',
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;
```

### 直方图

<a href="https://antv-g2plot.gitee.io/zh/examples/colunm/histogram/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram: React.FC = () => {
  const data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config = {
    title: {
      visible: true,
      text: '直方图',
    },
    description: {
      visible: true,
      text: '通过设置binWidth进行分箱\uFF0CbinWidth决定直方图分箱的数量\u3002',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    binField: 'value',
    binWidth: 2,
    color: '#1079a0',
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;
```

## Waterfall

### 每月收支情况（瀑布图）

<a href="https://antv-g2plot.gitee.io/zh/examples/waterfall/column/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Waterfall } from '@ant-design/charts';

const DemoWaterfall: React.FC = () => {
  const data = [
    {
      type: '日用品',
      money: 120,
    },
    {
      type: '伙食费',
      money: 900,
    },
    {
      type: '交通费',
      money: 200,
    },
    {
      type: '水电费',
      money: 300,
    },
    {
      type: '房租',
      money: 1200,
    },
    {
      type: '商场消费',
      money: 1000,
    },
    {
      type: '应酬红包',
      money: -2000,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '每月收支情况\uFF08瀑布图\uFF09',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    xField: 'type',
    yField: 'money',
    meta: {
      type: { alias: '类别' },
      money: { alias: '金额' },
    },
  };
  return <Waterfall {...config} />;
};

export default DemoWaterfall;
```

## PercentStackedColumn

### 百分比堆叠柱状图

<a href="https://antv-g2plot.gitee.io/zh/examples/column/percent-stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { PercentStackedColumn } from '@ant-design/charts';

const DemoPercentStackedColumn: React.FC = () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '百分比堆叠柱状图',
    },
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    stackField: 'country',
    color: ['#0f759c', '#26a2cb', '#65d1fc'],
  };
  return <PercentStackedColumn {...config} />;
};

export default DemoPercentStackedColumn;
```
