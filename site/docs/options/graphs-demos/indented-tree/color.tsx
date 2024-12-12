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
    type: 'linear',
    autoFit: 'view',
    data,
    transforms: (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'assign-color-by-branch'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'assign-color-by-branch') || ({} as any)),
        colors: ['rgb(78, 121, 167)', 'rgb(242, 142, 44)', 'rgb(225, 87, 89)'],
      },
    ],
    animation: false,
  };

  return <IndentedTree {...options} />;
};
