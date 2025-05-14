import { Dendrogram } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom';

const DemoDendrogram = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'view',
    data,
    direction: 'radial',
  };

  return <Dendrogram {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoDendrogram />);
