import { G6, MindMap, RCNode, getNodeSide, measureTextSize } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const { treeToGraphData, idOf } = G6;
const { TextNode } = RCNode;

const DemoMindMap = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then((res) => setData(treeToGraphData(res)));
  }, []);

  const options = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (data) => {
          return <TextNode type="outlined" text={data.id} style={{ border: '2px dashed #1783ff' }} />;
        },
        size: (data) => measureTextSize(idOf(data), [24, 16]),
        dx: function (data) {
          const side = getNodeSide(this, data);
          const size = measureTextSize(idOf(data), [24, 16]);
          return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
        },
      },
    },
  };
  return <MindMap {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoMindMap />);
