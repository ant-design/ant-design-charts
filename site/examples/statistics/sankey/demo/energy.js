import { Sankey } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoSankey = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fa3414cc-75ed-47b4-8306-f2ffe8c40127.json',
    },
    scale: { color: { range: ['red', 'green', 'yellow'] } },
    layout: { nodeWidth: 0.01, nodePadding: 0.01 },
    linkColorField: (d) => d.source.key,
    style: { linkFillOpacity: 0.4 },
  };
  return <Sankey {...config} />;
};

ReactDOM.render(<DemoSankey />, document.getElementById('container'));
