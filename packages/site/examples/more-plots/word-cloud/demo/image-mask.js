import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/charts';

const DemoWordCloud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  };

  return <WordCloud {...config} />;
};

ReactDOM.render(<DemoWordCloud />, document.getElementById('container'));
