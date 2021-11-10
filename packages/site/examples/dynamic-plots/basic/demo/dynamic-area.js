import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/charts';

const DemoArea = () => {
  const [, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  let cnt = 2;
  const config = {
    data: originalData.slice(0, cnt),
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  const interval = setInterval(() => {
    if (cnt === originalData.length) {
      clearInterval(interval);
    } else {
      cnt += 1;
      area.changeData(originalData.slice(0, cnt));
    }
  }, 400);

  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
