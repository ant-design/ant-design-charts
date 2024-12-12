import { MindMap, type MindMapOptions } from '@ant-design/graphs';
import { Divider, Radio } from 'antd';
import React, { useEffect, useState } from 'react';

export default () => {
  const [direction, setDirection] = useState<MindMapOptions['direction']>('right');
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: MindMapOptions = {
    data,
    autoFit: 'view',
    padding: 8,
    type: 'linear',
    direction,
    animation: false,
  };

  return (
    <>
      <Radio.Group value={direction} onChange={(e) => setDirection(e.target.value)}>
        <Radio.Button value="right">Right</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="alternate">Alternate</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <MindMap {...options} />
    </>
  );
};
