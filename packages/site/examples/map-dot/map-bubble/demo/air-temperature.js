import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/maps';

const DemoDotMap = () => {
  const [data, setData] = useState({
    list: [],
  });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [102.447303, 37.753574],
      zoom: 5,
      pitch: 0,
    },
    source: {
      data: data.list,
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    },
    color: {
      field: 't',
      value: [
        '#03071e',
        '#370617',
        '#6a040f',
        '#9d0208',
        '#d00000',
        '#dc2f02',
        '#e85d04',
        '#f48c06',
        '#faa307',
        '#ffba08',
      ].reverse(),
      scale: {
        type: 'quantize',
      },
    },
    size: {
      field: 't',
      value: [2, 18],
    },
    style: {
      opacity: 0.5,
      strokeWidth: 0,
    },
    state: {
      active: {
        color: '#FFF684',
      },
    },
    autoFit: true,
    label: {
      visible: false,
      // 是否显示标签图层
      field: 't',
      style: {
        fill: '#fff',
        opacity: 0.6,
        fontSize: 12,
        textAnchor: 'top',
        // 文本相对锚点的位置 center|left|right|top|bottom|top-left
        textOffset: [0, 20],
        // 文本相对锚点的偏移量 [水平, 垂直]
        spacing: 1,
        // 字符间距
        padding: [5, 5],
        // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
        stroke: '#ffffff',
        // 描边颜色
        strokeWidth: 0.3,
        // 描边宽度
        strokeOpacity: 1.0,
      },
    },
    tooltip: {
      items: ['s', 't'],
    },
    zoom: {
      position: 'bottomright',
    },
    scale: {
      position: 'bottomright',
    },
    layerMenu: {
      position: 'topright',
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
