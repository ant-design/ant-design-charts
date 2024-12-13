import { CollapseExpandIcon, IndentedTree, type IndentedTreeOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const { PlusMinusIcon } = CollapseExpandIcon;

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
    defaultExpandLevel: 2,
    animation: false,
  };

  const updateCollapseExpandBehavior = (options) => {
    return (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'collapse-expand-react-node'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'collapse-expand-react-node') || ({} as any)),
        ...options,
      },
    ];
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <IndentedTree {...options} transforms={updateCollapseExpandBehavior({ enable: true })} />
      <IndentedTree {...options} transforms={updateCollapseExpandBehavior({ enable: true, trigger: 'node' })} />
      <IndentedTree
        {...options}
        transforms={updateCollapseExpandBehavior({
          enable: true,
          iconRender: (isCollapsed) => <PlusMinusIcon isCollapsed={isCollapsed} />,
          iconOffsetY: 8,
        })}
      />
    </div>
  );
};
