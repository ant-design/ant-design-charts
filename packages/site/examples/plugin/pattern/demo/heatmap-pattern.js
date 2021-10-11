import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Heatmap } from '@ant-design/charts';

const DemoHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const pattern = ({ value }) => {
    if (value >= 90) {
      return {
        type: 'line',
        cfg: {
          spacing: 2,
          lineWidth: 6,
          strokeOpacity: 0.9,
        },
      };
    } else if (70 <= value && value < 90) {
      return {
        type: 'line',
        cfg: {
          spacing: 8,
          lineWidth: 1,
          strokeOpacity: 0.9,
        },
      };
    }

    if (60 <= value && value < 70) {
      return {
        type: 'dot',
        cfg: {
          size: 2,
          padding: 5,
          fillOpacity: 0.9,
        },
      };
    }
  };

  const config = {
    data,
    xField: 'name',
    yField: 'country',
    color: '#8E0C24',
    colorField: 'value',
    pattern,
  };

  return <Heatmap {...config} />;
};

ReactDOM.render(<DemoHeatmap />, document.getElementById('container'));
