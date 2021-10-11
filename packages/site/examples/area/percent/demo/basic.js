import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/charts';

const DemoArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    color: ['#82d1de', '#cb302d', '#e3ca8c'],
    areaStyle: {
      fillOpacity: 0.7,
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (value) => {
          return value * 100;
        },
      },
    },
  };

  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
