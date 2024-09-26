import { G6, MindMap } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const { treeToGraphData } = G6;

const DemoMindMap = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((res) => setData(treeToGraphData(res)));
  }, []);

  const options = {
    mode: 'left',
    autoFit: 'view',
    data,
  };
  return <MindMap {...options} />;
};

ReactDOM.render(<DemoMindMap />, document.getElementById('container'));
