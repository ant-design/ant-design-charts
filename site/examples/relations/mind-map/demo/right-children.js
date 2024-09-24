import { G6, MindMap } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const { treeToGraphData } = G6;

const DemoMindMap = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((res) => {
        const graphData = treeToGraphData(res, {
          getNodeData: (datum, depth) => {
            datum.data ||= {};
            datum.data.depth = depth;
            if (!datum.children) return datum;
            const { children, ...restDatum } = datum;
            return { ...restDatum, children: children.map((child) => child.id) };
          },
        });
        setData(graphData);
      });
  }, []);

  const options = {
    mode: 'right',
    autoFit: 'view',
    data,
  };
  return <MindMap {...options} />;
};

ReactDOM.render(<DemoMindMap />, document.getElementById('container'));
