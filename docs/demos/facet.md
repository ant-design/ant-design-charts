---
title: Facet
order: 37
---

### 圆形分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/VnrXpYSuqW/circle-pie.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    type: 'circle',
    fields: ['clarity'],
    data: data,
    tooltip: { showMarkers: false },
    meta: { cut: { sync: true } },
    eachView: function eachView(view, f) {
      return {
        type: 'pie',
        options: {
          data: f.data,
          angleField: 'mean',
          colorField: 'cut',
          pieStyle: { stroke: null },
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

### Column 分面图

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    padding: [0, 10, 10],
    appendPadding: [0, 0, 30, 20],
    type: 'rect',
    fields: ['cut'],
    cols: 3,
    data: data,
    axes: {},
    meta: {
      carat: { sync: true },
      price: { sync: true },
      clarity: { sync: true },
    },
    eachView: function eachView(view, f) {
      return {
        type: 'scatter',
        options: {
          data: f.data,
          xField: 'carat',
          yField: 'price',
          colorField: 'clarity',
          shape: 'circle',
          pointStyle: {
            fillOpacity: 0.3,
            stroke: null,
          },
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

### 列表分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    padding: 30,
    type: 'list',
    fields: ['cut'],
    cols: 3,
    data: data,
    axes: {},
    meta: {
      carat: { sync: true },
      price: { sync: true },
      cut: { sync: true },
    },
    eachView: function eachView(view, f) {
      return {
        type: 'scatter',
        options: {
          data: f.data,
          xField: 'carat',
          yField: 'price',
          colorField: 'cut',
          shape: 'circle',
          pointStyle: {
            fillOpacity: 0.3,
            stroke: null,
          },
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

### 矩阵分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/iris.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: [0, 0, 16, 0],
    padding: 16,
    type: 'matrix',
    fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
    data: data,
    meta: {
      Species: { sync: true },
      SepalLength: {
        sync: true,
        nice: true,
      },
      SepalWidth: { nice: true },
      PetalLength: { nice: true },
      PetalWidth: { nice: true },
    },
    axes: {},
    eachView: function eachView(view, facet) {
      if (facet.rowIndex === facet.columnIndex) {
        return {
          type: 'histogram',
          options: {
            data: facet.data,
            binField: facet.columnField,
            binNumber: 30,
            stackField: 'Species',
            isStack: true,
            columnStyle: { stroke: null },
          },
        };
      }
      return {
        type: 'scatter',
        options: {
          data: facet.data,
          xField: facet.columnField,
          yField: facet.rowField,
          colorField: 'Species',
          shape: 'circle',
          pointStyle: {
            fillOpacity: 0.3,
            stroke: null,
          },
          size: 3,
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

### 镜像分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/2Qttbqxmtw/symmetry-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    type: 'mirror',
    data: data,
    fields: ['gender'],
    transpose: true,
    padding: [32, 16, 28, 16],
    meta: {
      age: {
        sync: true,
        tickCount: 11,
      },
      total_percentage: {
        sync: true,
        formatter: function formatter(v) {
          return v + '%';
        },
      },
      gender: { sync: true },
    },
    axes: {},
    eachView: function eachView(view, f) {
      return {
        padding: [0, 48, 0, 0],
        type: 'column',
        options: {
          data: f.data,
          xField: 'age',
          yField: 'total_percentage',
          seriesField: 'gender',
          color: ['#1890ff', '#f04864'],
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

### 二维行列(矩形)分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';

const DemoFacet: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    type: 'rect',
    fields: ['cut', 'clarity'],
    cols: 3,
    padding: [0, 10, 10],
    appendPadding: 30,
    data: data,
    axes: {},
    meta: {
      carat: { sync: true },
      price: { sync: true },
      cut: { sync: true },
    },
    eachView: function eachView(view, f) {
      return {
        type: 'scatter',
        options: {
          data: f.data,
          xField: 'carat',
          yField: 'price',
          colorField: 'cut',
          shape: 'circle',
          pointStyle: {
            fillOpacity: 0.3,
            stroke: null,
          },
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```

<!-- ### 多级树型分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoFacet: React.FC = () => {
  const dv = new DataSet.DataView();
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: [0, 18, -50, 32],
    data: data,
    type: 'tree',
    fields: ['clarity'],
    meta: {
      cut: {
        sync: true,
        values: ['Ideal', 'Good', 'Premium', 'Very-Good', 'Fair'],
      },
      mean: {
        sync: true,
        tickCount: 5,
        formatter: function formatter(v) {
          return ''.concat(Math.ceil(v));
        },
      },
    },
    line: {
      style: { stroke: '#dedede' },
      smooth: true,
    },
    axes: {},
    tooltip: { showMarkers: false },
    eachView: function eachView(view, facet) {
      var _ref = facet || {},
        rowIndex = _ref.rowIndex;
      var config;
      dv.source(facet.data).transform({
        type: 'aggregate',
        fields: ['price'],
        operations: ['mean'],
        as: ['mean'],
        groupBy: ['cut'],
      });
      if (rowIndex === 0) {
        return {
          type: 'pie',
          options: {
            data: dv.rows,
            meta: { mean: { sync: false } },
            angleField: 'mean',
            colorField: 'cut',
            radius: 1,
            pieStyle: { stroke: null },
            animation: {},
            interactions: [{ type: 'element-active' }],
          },
        };
      }
      return {
        type: 'column',
        options: {
          data: dv.rows,
          meta: { mean: { sync: rowIndex === 0 ? false : true } },
          xField: 'cut',
          yField: 'mean',
          seriesField: 'cut',
          columnStyle: { fillOpacity: 0.85 },
          animation: {},
          interactions: [{ type: 'element-active' }, { type: 'active-region' }],
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
``` -->

### 树型分面

```tsx
import React, { useState, useEffect } from 'react';
import { Facet } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoFacet: React.FC = () => {
  const dv = new DataSet.DataView();
  var data = [
    {
      gender: '男',
      count: 40,
      class: '一班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 30,
      class: '一班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 35,
      class: '二班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 45,
      class: '二班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 20,
      class: '三班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 35,
      class: '三班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 30,
      class: '一班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 40,
      class: '一班',
      grade: '二年级',
    },
    {
      gender: '男',
      count: 25,
      class: '二班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 32,
      class: '二班',
      grade: '二年级',
    },
    {
      gender: '男',
      count: 28,
      class: '三班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 36,
      class: '三班',
      grade: '二年级',
    },
  ];
  var config = {
    appendPadding: [0, 16, 16, 16],
    data: data,
    type: 'tree',
    fields: ['grade', 'class'],
    meta: {
      percent: {
        formatter: function formatter(val) {
          return (val * 100).toFixed(2) + '%';
        },
      },
    },
    line: {
      style: { stroke: '#dedede' },
      smooth: true,
    },
    tooltip: { showMarkers: false },
    eachView: function eachView(view, facet) {
      var config;
      dv.source(facet.data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'gender',
        as: 'percent',
      });
      return {
        type: 'pie',
        options: {
          data: dv.rows,
          angleField: 'percent',
          colorField: 'gender',
          pieStyle: { opacity: 0.85 },
          animation: {},
          interactions: [{ type: 'element-active' }],
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default DemoFacet;
```
