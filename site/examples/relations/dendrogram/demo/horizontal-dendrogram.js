import { Dendrogram, G6 } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const { treeToGraphData } = G6;

const DemoDendrogram = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((data) => setData(treeToGraphData(data)));
  }, []);

  const options = {
    autoFit: 'view',
    data,
  };

  return <Dendrogram {...options} />;
};

ReactDOM.render(<DemoDendrogram />, document.getElementById('container'));
