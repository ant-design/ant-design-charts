import { FlowDirectionGraph } from '@ant-design/graphs';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const DemoFlowDirectionGraph = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'center',
    data,
    transforms: (prev) => [
      ...prev,
      {
        type: 'map-edge-line-width',
        key: 'map-edge-line-width',
        value: (d) => Math.random(),
        minValue: 0,
        maxValue: 1,
        minLineWidth: 1,
        maxLineWidth: 24,
      },
    ],
    layout: {
      type: 'antv-dagre',
      nodesep: 10,
      ranksep: 60,
    },
  };

  return <FlowDirectionGraph {...options} />;
};

ReactDOM.render(<DemoFlowDirectionGraph />, document.getElementById('container'));
