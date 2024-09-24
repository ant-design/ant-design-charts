import { Flowchart, RCNode } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const { TextNode } = RCNode;

const DemoFlowchart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://site-data-pre.alipay.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'center',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          return <TextNode text={d.id} isActive={isActive} type="outlined" />;
        },
      },
    },
    behaviors: (prev) => [...prev, 'hover-activate-chain'],
  };

  return <Flowchart {...options} />;
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
