import { Dendrogram, G6 } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

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

createRoot(document.getElementById('container')).render(<DemoDendrogram />);
