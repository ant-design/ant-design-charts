import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';

const DemoWordCloud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24IWXp5slbE/2020-movie-from-douban.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    wordField: 'title',
    weightField: 'rate',
    colorField: 'tag',
    legend: {},
    imageMask: 'https://gw.alipayobjects.com/zos/antfincdn/Qw7Xbn76kM/53176454-747c-4f0a-a9e5-936aa66a0082.png',
    wordStyle: {
      fontFamily: 'Avenir',
      fontSize: [8, 16],
    },
    state: {
      active: {
        style: {
          lineWidth: 0,
          shadowBlur: 4,
          shadowColor: 'rgba(0,0,0,0.3)',
        },
      },
    },
  };

  return <WordCloud {...config} />;
};

ReactDOM.render(<DemoWordCloud />, document.getElementById('container'));
