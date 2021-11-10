import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sankey } from '@ant-design/charts';

const DemoSankey = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/fa3414cc-75ed-47b4-8306-f2ffe8c40127.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    color: ['red', 'green', 'yellow'],
    edgeStyle: {
      fill: '#ccc',
      fillOpacity: 0.4,
    },
  };

  return <Sankey {...config} />;
};

ReactDOM.render(<DemoSankey />, document.getElementById('container'));
