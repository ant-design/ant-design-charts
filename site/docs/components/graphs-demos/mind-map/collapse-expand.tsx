import { CollapseExpandIcon, MindMap, type MindMapOptions } from '@ant-design/graphs';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

const { PlusMinusIcon } = CollapseExpandIcon;

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: MindMapOptions = {
    type: 'linear',
    autoFit: 'view',
    data,
    defaultExpandLevel: 2
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
    <>
      <Divider orientation="left" plain>
        Click Icon to Expand/Collapse
      </Divider>
      <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true })} />
      <Divider orientation="left" plain>
        Click Node to Expand/Collapse
      </Divider>
      <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true, trigger: 'node' })} />
      <Divider orientation="left" plain>
        Custom Icon
      </Divider>
      <MindMap
        {...options}
        transforms={updateCollapseExpandBehavior({
          enable: true,
          iconRender: (isCollapsed) => <PlusMinusIcon isCollapsed={isCollapsed} />,
          iconOffsetX: 8,
        })}
      />
    </>
  );
};
