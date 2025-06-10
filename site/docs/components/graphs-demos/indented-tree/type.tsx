import { IndentedTree, type IndentedTreeOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: IndentedTreeOptions = {
    autoFit: 'view',
    data,
    animation: false,
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <IndentedTree {...options} type="linear" />
      <IndentedTree {...options} type="boxed" />
    </div>
  );
};
