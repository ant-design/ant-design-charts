import { G6, MindMap } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const { treeToGraphData } = G6;

const DemoMindMap = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((res) => setData(treeToGraphData(res)));
  }, []);

  const options = {
    mode: 'right',
    autoFit: 'view',
    data,
  };
  return <MindMap {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoMindMap />);
