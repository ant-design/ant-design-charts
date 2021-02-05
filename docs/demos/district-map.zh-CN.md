---
title: 地图
order: 1
---

# DistrictMap

### 世界地图气泡图

```tsx
import React, { useState, useEffect } from 'react';
import { DistrictMap } from '@ant-design/charts';

const Page: React.FC = () => {
  const config = {
    type: 'WorldLayer',
    mapConfig: {
      center: [116.2825, 39.9],
      pitch: 0,
      style: 'blank',
      zoom: 2,
    },
    layerConfig: {
      data: [],
      bubble: {
        enable: true,
        color: {
          field: 'NAME_CHN',
          values: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#e6550d', '#a63603'],
        },
      },
      fill: {
        activeColor: 'yellow',
      },
      stroke: '#ccc',
      label: {
        enable: true,
        textAllowOverlap: false,
        field: 'NAME_CHN',
      },
      popup: {
        enable: false,
        Html: (props) => {
          return <span>{props.NAME_CHN}</span>;
        },
      },
    },
    style: {
      height: 400,
    },
  };
  return (
    <div style={{ height: 400 }}>
      <DistrictMap {...config} />
    </div>
  );
};
export default Page;
```

### 中国地图气泡图

```tsx
import React, { useState, useEffect } from 'react';
import { DistrictMap } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    {
      name: '云南省',
      code: 530000,
      value: 17881.12,
    },
    {
      name: '黑龙江省',
      code: 230000,
      value: 16361.62,
    },
    {
      name: '贵州省',
      code: 520000,
      value: 14806.45,
    },
    {
      name: '北京市',
      code: 110000,
      value: 30319.98,
    },
    {
      name: '河北省',
      code: 130000,
      value: 36010.27,
    },
    {
      name: '山西省',
      code: 140000,
      value: 16818.11,
    },
    {
      name: '吉林省',
      code: 220000,
      value: 15074,
    },
    {
      name: '宁夏回族自治区',
      code: 640000,
      value: 3705.18,
    },
    {
      name: '辽宁省',
      code: 210000,
      value: 25315.35,
    },
    {
      name: '海南省',
      code: 460000,
      value: 4832.05,
    },
    {
      name: '内蒙古自治区',
      code: 150000,
      value: 17289.22,
    },
    {
      name: '天津市',
      code: 120000,
      value: 18809.64,
    },
    {
      name: '新疆维吾尔自治区',
      code: 650000,
      value: 12199.08,
    },
    {
      name: '上海市',
      code: 310000,
      value: 32679.87,
    },
    {
      name: '陕西省',
      code: 610000,
      value: 24438.32,
    },
    {
      name: '甘肃省',
      code: 620000,
      value: 8246.07,
    },
    {
      name: '安徽省',
      code: 340000,
      value: 30006.82,
    },
    {
      name: '香港特别行政区',
      code: 810000,
      value: 0,
    },
    {
      name: '广东省',
      code: 440000,
      value: 97277.77,
    },
    {
      name: '河南省',
      code: 410000,
      value: 48055.86,
    },
    {
      name: '湖南省',
      code: 430000,
      value: 36425.78,
    },
    {
      name: '江西省',
      code: 360000,
      value: 21984.78,
    },
    {
      name: '四川省',
      code: 510000,
      value: 40678.13,
    },
    {
      name: '广西壮族自治区',
      code: 450000,
      value: 20353.51,
    },
    {
      name: '江苏省',
      code: 320000,
      value: 92595.4,
    },
    {
      name: '澳门特别行政区',
      code: 820000,
      value: null,
    },
    {
      name: '浙江省',
      code: 330000,
      value: 56197.15,
    },
    {
      name: '山东省',
      code: 370000,
      value: 76469.67,
    },
    {
      name: '青海省',
      code: 630000,
      value: 2865.23,
    },
    {
      name: '重庆市',
      code: 500000,
      value: 20363.19,
    },
    {
      name: '福建省',
      code: 350000,
      value: 35804.04,
    },
    {
      name: '湖北省',
      code: 420000,
      value: 39366.55,
    },
    {
      name: '西藏自治区',
      code: 540000,
      value: 1477.63,
    },
    {
      name: '台湾省',
      code: 710000,
      value: null,
    },
  ];
  const colors = ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'];
  const config = {
    type: 'CountryLayer',
    mapConfig: {
      center: [116.2825, 39.9],
      pitch: 0,
      style: 'blank',
      zoom: 3,
      minZoom: 0,
      maxZoom: 10,
    },
    layerConfig: {
      data,
      joinBy: ['NAME_CHN', 'name'],
      depth: 1,
      fill: {
        color: '#ccc',
        activeColor: 'yellow',
      },
      bubble: {
        enable: true,
        size: {
          field: 'value',
          values: [3, 20],
        },
      },
      popup: {
        enable: true,
        Html: (props) => {
          return (
            <>
              <span>{props.NAME_CHN}:</span>
              <span>{props.value}</span>
            </>
          );
        },
      },
    },
    style: {
      height: 400,
    },
  };
  return (
    <div style={{ height: 400 }}>
      <DistrictMap {...config} />
    </div>
  );
};
export default Page;
```

### 中国地图-填充图

```tsx
import React, { useState, useEffect } from 'react';
import { DistrictMap } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    {
      name: '云南省',
      code: 530000,
      value: 17881.12,
    },
    {
      name: '黑龙江省',
      code: 230000,
      value: 16361.62,
    },
    {
      name: '贵州省',
      code: 520000,
      value: 14806.45,
    },
    {
      name: '北京市',
      code: 110000,
      value: 30319.98,
    },
    {
      name: '河北省',
      code: 130000,
      value: 36010.27,
    },
    {
      name: '山西省',
      code: 140000,
      value: 16818.11,
    },
    {
      name: '吉林省',
      code: 220000,
      value: 15074,
    },
    {
      name: '宁夏回族自治区',
      code: 640000,
      value: 3705.18,
    },
    {
      name: '辽宁省',
      code: 210000,
      value: 25315.35,
    },
    {
      name: '海南省',
      code: 460000,
      value: 4832.05,
    },
    {
      name: '内蒙古自治区',
      code: 150000,
      value: 17289.22,
    },
    {
      name: '天津市',
      code: 120000,
      value: 18809.64,
    },
    {
      name: '新疆维吾尔自治区',
      code: 650000,
      value: 12199.08,
    },
    {
      name: '上海市',
      code: 310000,
      value: 32679.87,
    },
    {
      name: '陕西省',
      code: 610000,
      value: 24438.32,
    },
    {
      name: '甘肃省',
      code: 620000,
      value: 8246.07,
    },
    {
      name: '安徽省',
      code: 340000,
      value: 30006.82,
    },
    {
      name: '香港特别行政区',
      code: 810000,
      value: 0,
    },
    {
      name: '广东省',
      code: 440000,
      value: 97277.77,
    },
    {
      name: '河南省',
      code: 410000,
      value: 48055.86,
    },
    {
      name: '湖南省',
      code: 430000,
      value: 36425.78,
    },
    {
      name: '江西省',
      code: 360000,
      value: 21984.78,
    },
    {
      name: '四川省',
      code: 510000,
      value: 40678.13,
    },
    {
      name: '广西壮族自治区',
      code: 450000,
      value: 20353.51,
    },
    {
      name: '江苏省',
      code: 320000,
      value: 92595.4,
    },
    {
      name: '澳门特别行政区',
      code: 820000,
      value: null,
    },
    {
      name: '浙江省',
      code: 330000,
      value: 56197.15,
    },
    {
      name: '山东省',
      code: 370000,
      value: 76469.67,
    },
    {
      name: '青海省',
      code: 630000,
      value: 2865.23,
    },
    {
      name: '重庆市',
      code: 500000,
      value: 20363.19,
    },
    {
      name: '福建省',
      code: 350000,
      value: 35804.04,
    },
    {
      name: '湖北省',
      code: 420000,
      value: 39366.55,
    },
    {
      name: '西藏自治区',
      code: 540000,
      value: 1477.63,
    },
    {
      name: '台湾省',
      code: 710000,
      value: null,
    },
  ];
  const colors = ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'];
  const config = {
    type: 'CountryLayer',
    mapConfig: {
      center: [116.2825, 39.9],
      pitch: 0,
      style: 'blank',
      zoom: 3,
      minZoom: 0,
      maxZoom: 10,
    },
    layerConfig: {
      data,
      joinBy: ['NAME_CHN', 'name'],
      depth: 1,
      provinceStroke: '#fff',
      cityStroke: '#EBCCB4',
      cityStrokeWidth: 1,
      fill: {
        color: {
          field: 'NAME_CHN',
          values: colors,
        },
        activeColor: 'yellow',
      },
      popup: {
        enable: true,
        Html: (props) => {
          return <span>{props.NAME_CHN}</span>;
        },
      },
    },
    style: {
      height: 400,
    },
  };
  return (
    <div style={{ height: 400 }}>
      <DistrictMap {...config} />
    </div>
  );
};
export default Page;
```

### 中国省级地图气泡

```tsx
import React, { useState, useEffect } from 'react';
import { DistrictMap } from '@ant-design/charts';

const Page: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/149b599d-21ef-4c24-812c-20deaee90e20.json')
      .then((response) => response.json())
      .then((json) => {
        setData(
          Object.keys(json).map((key) => {
            return {
              code: key,
              name: provinceData[key][0],
              pop: provinceData[key][2] * 1,
            };
          }),
        );
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    type: 'ProvinceLayer',
    mapConfig: {
      center: [116.2825, 39.9],
      pitch: 0,
      style: 'blank',
      zoom: 3,
      minZoom: 3,
      maxZoom: 10,
    },
    layerConfig: {
      data,
      joinBy: ['adcode', 'code'],
      adcode: ['330000'],
      depth: 3,
      label: {
        field: 'NAME_CHN',
        textAllowOverlap: false,
      },
      bubble: {
        enable: true,
        color: {
          field: 'pop',
          values: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#e6550d', '#a63603'],
        },
      },
      popup: {
        enable: true,
        Html: (props) => {
          return (
            <>
              <span>{props.NAME_CHN}:</span>
              <span>{props.pop}</span>
            </>
          );
        },
      },
    },
    style: {
      height: 400,
    },
  };
  return (
    <div style={{ height: 400 }}>
      <DistrictMap {...config} />
    </div>
  );
};
export default Page;
```
