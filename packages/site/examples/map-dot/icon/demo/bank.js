import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap, registerImages } from '@ant-design/charts';

const DemoDotMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/h%26vOn55UIF/yinhangwangdian.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const images = [
    {
      id: '160104',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/tWx6gaMr9P/zhongguoyinhang.png',
    },
    {
      id: '160139',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/KDjael3M3h/youzhengyinhang.png',
    },
    {
      id: '160105',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/Cxwxb%265wn7/gongshangyinhang.png',
    },
    {
      id: '160106',
      image: 'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg',
    },
    {
      id: '160107',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/hITtoj%2672C/nongyeyinhang.png',
    },
    {
      id: '160108',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/KHWJyfcPJu/jiaotongyinhang.png',
    },
    {
      id: '160109',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/%247VfhYcrfu/zhaoshangyinhang.png',
    },
    {
      id: '160111',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/pgo8%261emOy/guangdayinhang.png',
    },
  ];
  registerImages(images);
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [116.473168, 39.993015],
      zoom: 15,
      pitch: 0,
    },
    source: {
      data: data.list,
      parser: {
        type: 'json',
        coordinates: 'location',
      },
    },
    color: '#fff',
    shape: {
      field: 'typecode',
      value: ({ typecode }) => typecode,
    },
    size: 10,
    tooltip: {
      items: ['name', 'address', 'tel'],
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
