import { G6, IndentedTree } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const { treeToGraphData } = G6;

const DemoIndentedTree = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((res) => setData(treeToGraphData(res)));
  }, []);

  const options = {
    type: 'boxed',
    autoFit: 'view',
    data,
    transforms: (prev) => [
      ...prev.filter((transform) => transform.type !== 'collapse-expand-react-node'),
      {
        ...prev.find((transform) => transform.type === 'collapse-expand-react-node'),
        enable: true,
      },
    ],
  };
  return <IndentedTree {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoIndentedTree />);
